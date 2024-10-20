const mcData = require('minecraft-data')("1.8.9");
const startTime = performance.now();
let ITEMS = {};

for (let i = 0; i < 14; i++) ITEMS[1 + i] = [mcData.itemsByName.stone.id, i];
ITEMS[14] = mcData.itemsByName.grass.id;
for (let i = 0; i < 2; i++) ITEMS[15 + i] = mcData.itemsByName.dirt.id;
ITEMS[21] = mcData.itemsByName.cobblestone.id;
for (let i = 0; i < 8; i++) ITEMS[22 + i] = [mcData.itemsByName.planks.id, i % 6];
ITEMS[36] = mcData.itemsByName.bedrock.id;
for (let i = 0; i < 2; i++) ITEMS[37 + i] = [mcData.itemsByName.sand.id, i];
ITEMS[39] = mcData.itemsByName.gravel.id;
ITEMS[143] = mcData.itemsByName.glass.id;
ITEMS[150] = mcData.itemsByName.grass.id;
for (let i = 0; i < 16; i++) ITEMS[157 + i] = [mcData.itemsByName.wool.id, i];
ITEMS[235] = mcData.itemsByName.obsidian.id;
ITEMS[244] = mcData.itemsByName.oak_stairs.id;
ITEMS[245] = mcData.itemsByName.chest.id;
ITEMS[246] = mcData.itemsByName.crafting_table.id;
ITEMS[248] = mcData.itemsByName.furnace.id;
ITEMS[249] = mcData.itemsByName.ladder.id;
ITEMS[250] = mcData.itemsByName.cobblestone.id;
ITEMS[251] = mcData.itemsByName.snow.id;
ITEMS[252] = mcData.itemsByName.ice.id;
ITEMS[253] = mcData.itemsByName.snow.id;
ITEMS[254] = mcData.itemsByName.cactus.id;
ITEMS[265] = mcData.itemsByName.pumpkin.id;
ITEMS[297] = mcData.itemsByName.glass_pane.id;
ITEMS[298] = mcData.itemsByName.melon.id;
ITEMS[312] = mcData.itemsByName.end_stone.id;
ITEMS[314] = mcData.itemsByName.dragon_egg.id;
ITEMS[315] = mcData.itemsByName.sandstone_stairs.id;
ITEMS[316] = mcData.itemsByName.ender_chest.id;
ITEMS[317] = mcData.itemsByName.emerald_block.id;
ITEMS[318] = mcData.itemsByName.spruce_stairs.id;
ITEMS[319] = mcData.itemsByName.birch_stairs.id;
ITEMS[320] = mcData.itemsByName.jungle_stairs.id;
ITEMS[321] = mcData.itemsByName.birch_stairs.id;
ITEMS[322] = mcData.itemsByName.birch_stairs.id;
ITEMS[323] = mcData.itemsByName.command_block.id;
for (let i = 0; i < 16; i++) ITEMS[354 + i] = [mcData.itemsByName.stained_hardened_clay.id, i];
ITEMS[370] = mcData.itemsByName.barrier.id;
ITEMS[372] = mcData.itemsByName.hay_block.id;
for (let i = 0; i < 16; i++) ITEMS[373 + i] = [mcData.itemsByName.carpet.id, i];
ITEMS[390] = mcData.itemsByName.packed_ice.id;
for (let i = 0; i < 16; i++) ITEMS[400 + i] = [mcData.itemsByName.stained_glass.id, i];
ITEMS[606] = mcData.itemsByName.tnt.id;
ITEMS[680] = mcData.itemsByName.flint_and_steel.id;
ITEMS[681] = mcData.itemsByName.apple.id;
ITEMS[682] = mcData.itemsByName.bow.id;
ITEMS[683] = mcData.itemsByName.arrow.id;
ITEMS[684] = mcData.itemsByName.coal.id;
ITEMS[685] = mcData.itemsByName.coal.id;
ITEMS[686] = mcData.itemsByName.diamond.id;
ITEMS[687] = mcData.itemsByName.emerald.id;
ITEMS[692] = mcData.itemsByName.iron_ingot.id;
ITEMS[696] = mcData.itemsByName.gold_ingot.id;
ITEMS[699] = mcData.itemsByName.wooden_sword.id;
ITEMS[700] = mcData.itemsByName.wooden_shovel.id;
ITEMS[701] = mcData.itemsByName.wooden_pickaxe.id;
ITEMS[702] = mcData.itemsByName.wooden_axe.id;
ITEMS[703] = mcData.itemsByName.wooden_hoe.id;
ITEMS[704] = mcData.itemsByName.stone_sword.id;
ITEMS[705] = mcData.itemsByName.stone_shovel.id;
ITEMS[706] = mcData.itemsByName.stone_pickaxe.id;
ITEMS[707] = mcData.itemsByName.stone_axe.id;
ITEMS[708] = mcData.itemsByName.stone_hoe.id;
ITEMS[709] = mcData.itemsByName.golden_sword.id;
ITEMS[710] = mcData.itemsByName.golden_shovel.id;
ITEMS[711] = mcData.itemsByName.golden_pickaxe.id;
ITEMS[712] = mcData.itemsByName.golden_axe.id;
ITEMS[713] = mcData.itemsByName.golden_hoe.id;
ITEMS[714] = mcData.itemsByName.iron_sword.id;
ITEMS[715] = mcData.itemsByName.iron_shovel.id;
ITEMS[716] = mcData.itemsByName.iron_pickaxe.id;
ITEMS[717] = mcData.itemsByName.iron_axe.id;
ITEMS[718] = mcData.itemsByName.iron_hoe.id;
ITEMS[719] = mcData.itemsByName.diamond_sword.id;
ITEMS[720] = mcData.itemsByName.diamond_shovel.id;
ITEMS[721] = mcData.itemsByName.diamond_pickaxe.id;
ITEMS[722] = mcData.itemsByName.diamond_axe.id;
ITEMS[723] = mcData.itemsByName.diamond_hoe.id;
ITEMS[724] = mcData.itemsByName.diamond_sword.id;
ITEMS[725] = mcData.itemsByName.diamond_shovel.id;
ITEMS[726] = mcData.itemsByName.diamond_pickaxe.id;
ITEMS[727] = mcData.itemsByName.diamond_axe.id;
ITEMS[728] = mcData.itemsByName.diamond_hoe.id;
ITEMS[729] = mcData.itemsByName.stick.id;
ITEMS[730] = mcData.itemsByName.bowl.id;
ITEMS[731] = mcData.itemsByName.mushroom_stew.id;
ITEMS[732] = mcData.itemsByName.string.id;
ITEMS[733] = mcData.itemsByName.feather.id;
ITEMS[734] = mcData.itemsByName.gunpowder.id;
ITEMS[735] = mcData.itemsByName.wheat_seeds.id;
ITEMS[736] = mcData.itemsByName.wheat.id;
ITEMS[737] = mcData.itemsByName.bread.id;
ITEMS[738] = mcData.itemsByName.leather_helmet.id;
ITEMS[739] = mcData.itemsByName.leather_chestplate.id;
ITEMS[740] = mcData.itemsByName.leather_leggings.id;
ITEMS[741] = mcData.itemsByName.leather_boots.id;
ITEMS[742] = mcData.itemsByName.chainmail_helmet.id;
ITEMS[743] = mcData.itemsByName.chainmail_chestplate.id;
ITEMS[744] = mcData.itemsByName.chainmail_leggings.id;
ITEMS[745] = mcData.itemsByName.chainmail_boots.id;
ITEMS[746] = mcData.itemsByName.iron_helmet.id;
ITEMS[747] = mcData.itemsByName.iron_chestplate.id;
ITEMS[748] = mcData.itemsByName.iron_leggings.id;
ITEMS[749] = mcData.itemsByName.iron_boots.id;
ITEMS[750] = mcData.itemsByName.diamond_helmet.id;
ITEMS[751] = mcData.itemsByName.diamond_chestplate.id;
ITEMS[752] = mcData.itemsByName.diamond_leggings.id;
ITEMS[753] = mcData.itemsByName.diamond_boots.id;
ITEMS[754] = mcData.itemsByName.golden_helmet.id;
ITEMS[755] = mcData.itemsByName.golden_chestplate.id;
ITEMS[756] = mcData.itemsByName.golden_leggings.id;
ITEMS[757] = mcData.itemsByName.golden_boots.id;
ITEMS[758] = mcData.itemsByName.diamond_helmet.id;
ITEMS[759] = mcData.itemsByName.diamond_chestplate.id;
ITEMS[760] = mcData.itemsByName.diamond_leggings.id;
ITEMS[761] = mcData.itemsByName.diamond_boots.id;
ITEMS[762] = mcData.itemsByName.flint.id;
ITEMS[763] = mcData.itemsByName.porkchop.id;
ITEMS[764] = mcData.itemsByName.cooked_porkchop.id;
ITEMS[766] = mcData.itemsByName.golden_apple.id;
ITEMS[767] = [mcData.itemsByName.golden_apple.id, 1];
ITEMS[776] = mcData.itemsByName.bucket.id;
ITEMS[777] = mcData.itemsByName.water_bucket.id;
ITEMS[778] = mcData.itemsByName.lava_bucket.id;
ITEMS[779] = mcData.itemsByName.water_bucket.id;
ITEMS[780] = mcData.itemsByName.snowball.id;
ITEMS[781] = mcData.itemsByName.leather.id;
ITEMS[782] = mcData.itemsByName.milk_bucket.id;
ITEMS[792] = mcData.itemsByName.book.id;
ITEMS[793] = mcData.itemsByName.slime_ball.id;
ITEMS[794] = mcData.itemsByName.egg.id;
ITEMS[795] = mcData.itemsByName.compass.id;
ITEMS[797] = mcData.itemsByName.fishing_rod.id;
ITEMS[798] = mcData.itemsByName.clock.id;
ITEMS[848] = mcData.itemsByName.shears.id;
ITEMS[849] = mcData.itemsByName.melon.id;
ITEMS[851] = mcData.itemsByName.pumpkin_seeds.id;
ITEMS[852] = mcData.itemsByName.melon_seeds.id;
ITEMS[853] = mcData.itemsByName.beef.id;
ITEMS[854] = mcData.itemsByName.cooked_beef.id;
ITEMS[855] = mcData.itemsByName.chicken.id;
ITEMS[856] = mcData.itemsByName.cooked_chicken.id;
ITEMS[857] = mcData.itemsByName.rotten_flesh.id;
ITEMS[858] = mcData.itemsByName.ender_pearl.id;
ITEMS[859] = mcData.itemsByName.blaze_rod.id;
ITEMS[860] = mcData.itemsByName.ghast_tear.id;
ITEMS[861] = mcData.itemsByName.gold_nugget.id;
ITEMS[863] = mcData.itemsByName.potion.id;
ITEMS[864] = mcData.itemsByName.glass_bottle.id;
ITEMS[940] = mcData.itemsByName.experience_bottle.id;
ITEMS[941] = mcData.itemsByName.fire_charge.id;
ITEMS[942] = mcData.itemsByName.writable_book.id;
ITEMS[943] = mcData.itemsByName.written_book.id;
ITEMS[947] = mcData.itemsByName.carrot.id;
ITEMS[948] = mcData.itemsByName.potato.id;
ITEMS[949] = mcData.itemsByName.baked_potato.id;
ITEMS[950] = mcData.itemsByName.poisonous_potato.id;
ITEMS[951] = mcData.itemsByName.map.id;
ITEMS[952] = mcData.itemsByName.golden_carrot.id;
ITEMS[960] = mcData.itemsByName.pumpkin_pie.id;
ITEMS[967] = mcData.itemsByName.rabbit.id;
ITEMS[968] = mcData.itemsByName.cooked_rabbit.id;
ITEMS[969] = mcData.itemsByName.rabbit_stew.id;
ITEMS[980] = mcData.itemsByName.mutton.id;
ITEMS[981] = mcData.itemsByName.cooked_mutton.id;
ITEMS[1005] = [mcData.itemsByName.potion.id, 1];
ITEMS[1101] = mcData.itemsByName.diamond_sword.id;
ITEMS[1102] = mcData.itemsByName.diamond_pickaxe.id;
ITEMS[1103] = mcData.itemsByName.diamond_axe.id;
ITEMS[1104] = mcData.itemsByName.diamond_shovel.id;
ITEMS[1105] = mcData.itemsByName.diamond_hoe.id;
ITEMS[1106] = mcData.itemsByName.diamond_helmet.id;
ITEMS[1107] = mcData.itemsByName.diamond_chestplate.id;
ITEMS[1108] = mcData.itemsByName.diamond_leggings.id;
ITEMS[1109] = mcData.itemsByName.diamond_boots.id;

console.log('\x1b[32m[*] Loaded items in', (Math.floor((performance.now() - startTime) * 100) / 100) + 's\x1b[0m');

module.exports = ITEMS;