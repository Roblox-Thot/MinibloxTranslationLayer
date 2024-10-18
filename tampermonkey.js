// ==UserScript==
// @name         MinibloxCommunication
// @namespace    http://7granddadpgn.github.io
// @version      2024-07-29
// @description  A browser script made to generate tokens on miniblox.io
// @author       7GrandDad
// @match        https://miniblox.io/*
// @icon         https://miniblox.io/favicon.png
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==

async function getRecaptchaToken(url) {
	return new Promise(resolve => {
		unsafeWindow.grecaptcha.ready(() => {
			unsafeWindow.grecaptcha.execute("6LcPzJ8pAAAAACKzt7v7wxbOPXFy4vSWytw6owvT", {
				action: url
			}).then(token => {
				resolve(token);
			});
		});
	});
}

async function getTurnstileToken() {
	return new Promise(resolve => {
		unsafeWindow.turnstile.ready(function() {
			let rendered;
			rendered = unsafeWindow.turnstile.render("#vectorisstupid", {
				sitekey: "0x4AAAAAAAxvV65faKkIjlzS",
				callback: function(token) {
					if (this.wrapper) this.wrapper.remove();
					resolve(token);
				}
			});
		});
	});
}

(function() {
	'use strict';
	const screen = document.createElement('div');
	console.log(screen);
	screen.id = 'vectorisstupid';
	screen.style = "position: absolute; width: 100%; height: 100%; z-index: 10";
	const status = document.createElement('h');
	status.textContent = 'Miniblox Communication Script Status: Not Connected';
	status.style = "font-size: 2.2em; color: #FFF";
	screen.appendChild(status);
	setTimeout(() => {
		const loadingScreen = document.getElementById('loading-screen');
		if (loadingScreen) {
			loadingScreen.remove();
			document.body.style = 'background-color: #000';
		}
		document.body.appendChild(screen);
	}, 300);

	// https://stackoverflow.com/questions/22141205/intercept-and-alter-a-sites-javascript-using-greasemonkey
	if(navigator.userAgent.indexOf("Firefox") != -1) {
		window.addEventListener("beforescriptexecute", function(e) {
			console.log(e.target.src);
			if(!(e.target.src.startsWith('https://www.google.com/recaptcha/') || e.target.src.startsWith('https://www.gstatic.com/recaptcha/') || e.target.src.startsWith('https://challenges.cloudflare.com/turnstile/'))) {
				e.preventDefault();
				e.stopPropagation();
			}
		}, false);
	} else {
		new MutationObserver(async (mutations, observer) => {
			let oldScript = mutations
				.flatMap(e => [...e.addedNodes])
				.filter(e => e.tagName == 'SCRIPT');

			for (const script of oldScript) {
				if (!(script.src.startsWith('https://www.google.com/recaptcha/') || script.src.startsWith('https://www.gstatic.com/recaptcha/') || script.src.startsWith('https://challenges.cloudflare.com/turnstile/'))) script.type = 'javascript/blocked';
			}
		}).observe(document, {
			childList: true,
			subtree: true,
		});
	}

	const web = new window.WebSocket('ws://localhost:6874');
	web.onmessage = async (event) => {
		if (event.data == 'request') {
			status.textContent = 'Miniblox Communication Script Status: Generating tokens...';
			const token = await getRecaptchaToken('/launch/queue_minigame');
			const token2 = await getTurnstileToken();
			web.send(token + " " + token2);
			status.textContent = 'Miniblox Communication Script Status: Sent!';
		}
	};

	web.onopen = async (event) => {
		status.textContent = 'Miniblox Communication Script Status: Connected!';
	};

	web.onclose = async (event) => {
		status.textContent = 'Miniblox Communication Script Status: Not Connected';
	};
})();