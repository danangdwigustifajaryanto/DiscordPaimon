require('dotenv').config();
const Discord = require("discord.js");
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});
client.on("ready", () => {
  console.log(` ---- ${client.user.tag} Sudah Login! ----`)
})

// Dialogue Indo
client.on("message", msg => {
  if (msg.content === "!credit"){
    msg.reply(" \u00A9 Nevada 2022");
  }
  else if (msg.content === "Terimakasih paimon"){
    msg.reply(" Sama sama Traveer ^^");
  }
  else if (msg.content === "Halo paimon"){
    msg.reply("Iya traveler ada apa ?");
  }
})

// Dialogue English
client.on("message", msg => {
  if (msg.content === "!credit"){
    msg.reply(" \u00A9 Nevada 2022");
  }
  else if (msg.content === "Thank you paimon"){
    msg.reply(" Urwellcome Traveler ^^");
  }
  else if (msg.content === "Hello paimon"){
    msg.reply("Paimon Here traveler :)");
  }
})


//Build charcter
client.on("message", msg => {
  if (msg.content === "!build albedo") { //albedo
    msg.reply("https://drive.google.com/uc?id=1KMSHvMqen-VFdXMU9FYFz8LjZrIiqbI3");
  }
  else if (msg.content === "!build aloy") { //aloy
    msg.reply("https://drive.google.com/uc?id=154StRKmWsW5YyZWSYL_oY8nIfUwV90rv");
  }
  else if (msg.content === "!build amber") { //amber
    msg.reply("https://drive.google.com/uc?id=1ZzXHwQYoXZih9O9Q4u9tsSZK6pLVXKuO");
  }
  else if (msg.content === "!build ayaka") { // AYAKA
    msg.reply("https://drive.google.com/uc?id=10sMjnlUwLjym9VG5ZQSzbojwA78QGxg0");
  }
  else if (msg.content === "!build ayato") { // AYATO
    msg.reply("https://drive.google.com/uc?id=1RTLLXDbN9jK6sqOoo6A34pIC_f1jBZ6P");
  }
  else if (msg.content === "!build barbara") { // BARBARA
    msg.reply("https://drive.google.com/uc?id=1NXWL4hDseCd84VSch4CFYqa3kyNWJaz5");
  }
  else if (msg.content === "!build beidou") { // BEIDOU
    msg.reply("https://drive.google.com/uc?id=1MZIqDKZW8Gzra7R-fOaRh6wLH9QBtQr0");
  }
  else if (msg.content === "!build bennett") { // BENNET
    msg.reply("https://drive.google.com/uc?id=1ysv6Mj34MMnRvjfON92ixJmh7fJFqXqo");
  }
  else if (msg.content === "!build childe") { // ChHILDE
    msg.reply("https://drive.google.com/uc?id=1eYcLUOkCRCfZ1vpAcdMxmYoVxTNuLqcx");
  }
  else if (msg.content === "!build chongyun") { // CHONGYUN
    msg.reply("https://drive.google.com/uc?id=1HA2TkFCdKQLIAfxAi7IQIb9MZY4SQVv5");
  }
  else if (msg.content === "!build diona") { // DIONA
    msg.reply("https://drive.google.com/uc?id=18CDNh9qB49XikoTFjUCRsPPR7uFtAkiV");
  }
  else if (msg.content === "!build eula") { // EULA
    msg.reply("https://drive.google.com/uc?id=1Cnul4kQVrGZG-i3BcCyNM4ofF-Ba_5FX");
  }
  else if (msg.content === "!build fischl") { // FISCHL
    msg.reply("https://drive.google.com/uc?id=1qDE-r33aIuVVQ_Am0PFbocs2dhYU2IXI");
  }
  else if (msg.content === "!build ganyu") { // GANYU
    msg.reply("https://drive.google.com/uc?id=1B34o8n5EHdjQao3CusT5GUg2rtVV4vgg");
  }
  else if (msg.content === "!build gorou") { // GOROU
    msg.reply("https://drive.google.com/uc?id=13FPcfsQv2FViMVumNBFicO5cL5NPvq5t");
  }
  else if (msg.content === "!build hutao") { // HUTAO
    msg.reply("https://drive.google.com/uc?id=122I8wg-piMxuUwhBJ_jrM_LuTvAwIhh-");
  }
  else if (msg.content === "!build itto") { // ITTO
    msg.reply("https://drive.google.com/uc?id=1MACcxXD9ta5iMUPNIE28ch1rN5Nej0mi");
  }
  else if (msg.content === "!build jean") { // JEAN
    msg.reply("https://drive.google.com/uc?id=1qqs_xmTnjoFJHoJ9yZswhvGem5k5ByrS");
  }
  else if (msg.content === "!build kaeya") { // KAEYA
    msg.reply("https://drive.google.com/uc?id=16RHKggrKPK49exEV1qVvBx2zQiVZCozu");
  }
  else if (msg.content === "!build kazuha") { // KAZUHA
    msg.reply("https://drive.google.com/uc?id=13vmEJTjP1Vct9qVf7aUEg50aH9JDd3o_");
  }
  else if (msg.content === "!build keqing") { // KEQING
    msg.reply("https://drive.google.com/uc?id=1uuqaD5JPgJ6Jq3ATgLAz775LPcpgiEgR");
  }
  else if (msg.content === "!build klee") { // KLEE
    msg.reply("https://drive.google.com/uc?id=1C4xbsemiqctwxFQskn7HdTEIxLNT7dQw");
  }
  else if (msg.content === "!build kokomi") { // KOKOMI 
    msg.reply("https://drive.google.com/uc?id=1PgwQXo6EvcEBC5-ILjB0HAJKgPYdCh_W");
  }
  else if (msg.content === "!build kujou sara") { // KUJOU
    msg.reply("https://drive.google.com/uc?id=1BRlOBockwkk4szHwu7YsJgZokMNH6EhN");
  }
  else if (msg.content === "!build lisa") { // LISA
    msg.reply("https://drive.google.com/uc?id=1rMoJE4nW0ernU9wYR-x2n7_eQYfpSAED");
  }
  else if (msg.content === "!build mona") { // MONA
    msg.reply("https://drive.google.com/uc?id=18Gkt2cKCAA_hevjoW3rO1JaEnUbjl5sR");
  }
  else if (msg.content === "!build ningguang") { // NINGGUANG
    msg.reply("https://drive.google.com/uc?id=1bkOf-z18qC9WaoCxRjfeqDFG9efNfIaY");
  }
  else if (msg.content === "!build noelle") { // NOELLE
    msg.reply("https://drive.google.com/uc?id=1z2c-jI34tqv1k8lLJduVOsKyIRqFa9DD");
  }
  else if (msg.content === "!build paimon") { // PAIMON
    msg.reply("https://drive.google.com/uc?id=1X_Eo_nwLWBVHylFTE7oxQTr2IOUZSWe6");
  }
  else if (msg.content === "!build qiqi") { // QIQI
    msg.reply("https://drive.google.com/uc?id=1JZIMukYwAAuDyv_nT_BA6RYWMvFBrzvr");
  } 
  else if (msg.content === "!build razor") { // RAZOR
    msg.reply("https://drive.google.com/uc?id=1T9te3RorXZXVn4C95L0uy0oqvgZYbanU");
  }
  else if (msg.content === "!build rosaria") { // ROSARIA
    msg.reply("https://drive.google.com/uc?id=1h8v-VxOvCU7J4q6pM4RyBY0Tz7KRJIgz");
  }
  else if (msg.content === "!build sayu") { // SAYU
    msg.reply("https://drive.google.com/uc?id=17hurOitj-Aov_73zT7C3fFQ1N1HvSJzR");
  }
  else if (msg.content === "!build shenhe") { // SHENHE
    msg.reply("https://drive.google.com/uc?id=1QOTbw7MJd2rbxu67lliemLAscGIB8Hi2");
  }
  else if (msg.content === "!build raiden shogun") { // SHOGUN
    msg.reply("https://drive.google.com/uc?id=1g8Hy5c8on7RQ_VM9diUkVcdKRQGIWsSX");
  }
  else if (msg.content === "!build raiden") { // SHOGUN
    msg.reply("https://drive.google.com/uc?id=1g8Hy5c8on7RQ_VM9diUkVcdKRQGIWsSX");
  }
  else if (msg.content === "!build mami baal") { // SHOGUN
    msg.reply("https://drive.google.com/uc?id=1g8Hy5c8on7RQ_VM9diUkVcdKRQGIWsSX");
  }
  else if (msg.content === "!build baal") { // SHOGUN
    msg.reply("https://drive.google.com/uc?id=1g8Hy5c8on7RQ_VM9diUkVcdKRQGIWsSX");
  }
  else if (msg.content === "!build ei") { // SHOGUN
    msg.reply("https://drive.google.com/uc?id=1g8Hy5c8on7RQ_VM9diUkVcdKRQGIWsSX");
  }
  else if (msg.content === "!build raiden ei") { // SHOGUN
    msg.reply("https://drive.google.com/uc?id=1g8Hy5c8on7RQ_VM9diUkVcdKRQGIWsSX");
  }
  else if (msg.content === "!build sucrose") { // SUCROSE
    msg.reply("https://drive.google.com/uc?id=1AFXjZSDemvhrDOx3mXWmhfHPUhKkYqNq");
  }
  else if (msg.content === "!build thoma") { // THOMA
    msg.reply("https://drive.google.com/uc?id=1s_Wb2zYiPUHkfdpmCKD2Jlcztw1ULOt5");
  }
  else if (msg.content === "!build venti") { // VENTI
    msg.reply("https://drive.google.com/uc?id=1CS42wlVeuhXbyEjBaQeq72s2wjp0qASx");
  }
  else if (msg.content === "!build barbatos") { // VENTI
    msg.reply("https://drive.google.com/uc?id=1CS42wlVeuhXbyEjBaQeq72s2wjp0qASx");
  }
  else if (msg.content === "!build xiangling") { // XIANGLING
    msg.reply("https://drive.google.com/uc?id=1WbbXZoBXef95Ye2NGkX78ahagG6iZWuE");
  }
  else if (msg.content === "!build xiao") { // XIAO
    msg.reply("https://drive.google.com/uc?id=1m8iOVa7_CHnR51Jw2fv3k0OR0M1PcL55");
  }
  else if (msg.content === "!build xinqiu") { // XINQIU
    msg.reply("https://drive.google.com/uc?id=1kLTFhtVx4dLgnm2UvG--txAGgE2x8g3h");
  }
  else if (msg.content === "!build xinyan") { // XINYAN
    msg.reply("https://drive.google.com/uc?id=1ANmrXD6jJ0hehvwzPv-smO5-vEsutaSj");
  }
  else if (msg.content === "!build yae miko") { // YAE
    msg.reply("https://drive.google.com/uc?id=14wJkA-MWWkZ81ozwkCMx8tzz6-vw7Yag");
  }
  else if (msg.content === "!build yae") { // YAE
    msg.reply("https://drive.google.com/uc?id=14wJkA-MWWkZ81ozwkCMx8tzz6-vw7Yag");
  }
  else if (msg.content === "!build yaemiko") { // YAE
    msg.reply("https://drive.google.com/uc?id=14wJkA-MWWkZ81ozwkCMx8tzz6-vw7Yag");
  }
  else if (msg.content === "!build yanfei") { // YANFEI
    msg.reply("https://drive.google.com/uc?id=1yoB3GKw6PY4r2S0Ude84AUVOzQxvsqwG");
  }
  else if (msg.content === "!build yelan") { // YELAN
    msg.reply("https://drive.google.com/uc?id=1-svfaw3rEwGXgxLTMc7Ze8B0cKEKBG0j");
  }
  else if (msg.content === "!build yoimiya") { // YOIMIYA
    msg.reply("https://drive.google.com/uc?id=1Le9UJ9Eb8d5HKK9wGcWTjsFh6H-pnVif");
  }
  else if (msg.content === "!build yunjin") { // YUNJIN
    msg.reply("https://drive.google.com/uc?id=1BfudeuJbQld6H8LirlPWWTReSJn1L1FF");
  }
  else if (msg.content === "!build ") { // ZHONGLI
    msg.reply("https://drive.google.com/uc?id=11SAK6-VWgTHeZPHvutD6iNz4G1sp2u5n");
  }
  else if (msg.content === "!build kuki shinobu") { // SHINOBU
    msg.reply("Karakter belum rilis ya traveler mohon bersabar ^^");
  }

})

client.login("OTc4NjE1ODcwNzE4ODY5NTk0.G9lIoW.-4sg46mmtVK-8OU9nuhgtuATjptnlonZJBy2vk");
