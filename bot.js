require('dotenv').config();
const Discord = require("discord.js");
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});
client.on("ready", () => {
  console.log(` ---- ${client.user.tag} Sudah Login! ----`)
})


//Banlist
// const BannedWords = ["Anjing","Ajg","ajg","anjg","Babi","B4b1","Monyet","monyet","Kunyuk","kunyuk","bajingan","Bajingan","Asu","asu","Bangsat","bgst","Bgst","bgst","kontol","Kntl","kntl","kontlo","Memek","memek","mmk","Mmk","Ngentod","Ngentot","ngentot","ngentot","ngewe","Ngewe","Perek","Pecun","Bencong","bencong","banci","Banci","Jablay","jablay","Bego","Goblok","goblok","gblk","Tolol","tolol","Sarap","sarap","Budek","budek","Budeg", "budeg", "Bolot", "Setan", "Setan", "Keparat", "Ngehe", "Bejad", "Gembel", "Brengsek"," Tai","tai"]
// client.on("message", message => {
//     if (BannedWords.some(word => message.toString().toLowerCase().includes(word))) {message.delete().catch(e => console.error("Couldn't delete message.")); message.reply(`Please do not swear.`)};
// });
 
//Help
client.on("message", msg => {
  if (msg.content === "!bantu"){ // Help Indo
    msg.reply("__**Berikut adalah beberapa fitur paimon yang tersedia saat ini**__\n**Build Karakter** \n***contoh***: `!build amber` \n\n**Informasi Artefak**\n***contoh***: `!arti shimenawa`\n\n**Talent hari ini**\n***example***: `!talent hari ini`\n\n");
  }
  else if (msg.content === "!help"){ // Help English
    msg.reply("__**Here are some of Paimon's currently available features**__\n**Build Character** \n***example***: `!build amber` \n\n**Artifact Information**\n***example***: `!arti shimenawa`\n\n**Today talent**\n***example***: `!today talent`\n\n");
  }
})

// Day of farming
client.on("message", msg =>{
  if (msg.content === "!talent hari ini"){ ///Indo 
    const dayOfWeek = new Date().getDay();
    if (dayOfWeek === 1 || 4 ) { //Sening/Kamis
      msg.reply("**Farming talent untuk karakter hari ini**\n***Freedom***\n> Amber\n> Barbara\n> Klee\n> Sucrose\n> Traveler Geo/Anemo\n> Childe\n> Klee\n> Diona\n\n***Prosperity***\n> Keqing\n> Ningguang\n> Qiqi\n> Shenhe\n> Xiao\n\n***Transience***\n> Electro Traveler\n> Kokomi\n> Thoma\n> Yoimiya");
    }
    else if (dayOfWeek === 2 || 5 ) { //Selasa/Jumat
      msg.reply("**Farming talent untuk karakter hari ini**\n***Resistance***\n> Bennett\n> Diluc\n> Eula\n> Jean\n> Mona\n> Noelle\n> Razor\n\n***Diligence***\n> Chongyun\n> Ganyu\n> Hu-Tao\n> Kazuha\n> Xiangling\n> Yun-Jin\n\n***Elegance***\n> Ayaka\n> Ayato\n> Itto\n> Kujou-Sara");
    }
    else if (dayOfWeek === 3 || 6 ) { //Rabu/Sabtu
      msg.reply("**Farming talent untuk karakter hari ini**\n***Ballad***\n> Albedo\n> Fischl>\n> Kaeya>\n> Lisa\n> Rosaria\n> Venti\n\n***Gold***\n> Beidou\n> Xinqiu\n> Xinyan\n> Yanfei\n> Zhongli\n\n***Light***\n> Gorou\n> Raiden Shogun> \n> Sayu\n> Yae Miko`");
    } else if (dayOfWeek === 3 || 6 ){ //Minggu
      msg.reply("**Semua Karakter bisa Farming di hari Minggu Traveler :)***");
    }
  }
 });

// Day of farming English
client.on("message", msg =>{
  if (msg.content === "!today talent"){ ///Indo 
    const dayOfWeek = new Date().getDay();
    if (dayOfWeek === 1 || 4 ) { //Sening/Kamis
      msg.reply("**Characters that can farm today**\n***Freedom***\n`Amber` `Barbara` `Klee` `Sucrose` `Traveler Geo/Anemo` `Childe` `Klee` `Diona`\n\n***Prosperity***\n`Yelan`, `Keqing` `Ningguang` `Qiqi` `Shenhe` `Xiao`\n\n***Transience***\n`Electro Traveler` `Kokomi` `Thoma` `Yoimiya`");
    }
    else if (dayOfWeek === 2 || 5 ) { //Selasa/Jumat
      msg.reply("**Farming talent untuk karakter hari ini**\n***Resistance***\n`Bennett` `Diluc` `Eula` `Jean` `Mona` `Noelle` `Razor`\n\n***Diligence***\n`Chongyun` `Ganyu` `Hu-Tao` `Kazuha` `Xiangling` `Yun-Jin`\n\n***Elegance***\n`Ayaka` `Ayato` `Itto` `Kujou-Sara`");
    }
    else if (dayOfWeek === 3 || 6 ) { //Rabu/Sabtu
      msg.reply("**Farming talent untuk karakter hari ini**\n***Ballad***\n`Albedo` `Fischl` `Kaeya` `Lisa` `Rosaria` `Venti`\n\n***Gold***\n`Beidou` `Xinqiu` `Xinyan` `Yanfei` `Zhongli`\n\n***Light***\n`Gorou` `Raiden Shogun` `Sayu` `Yae Miko`");
    } else if (dayOfWeek === 3 || 6 ){ //Minggu
      msg.reply("**Semua Karakter bisa Farming di hari Minggu Traveler :)***");
    }
  }
 });

// Dialogue Indo
client.on("message", msg => {
  if (msg.content === "!credit"){
    msg.reply(" \u00A9 Nevada 2022");
  }
  else if (msg.content === "Terimakasih paimon"){
    msg.reply(" Sama sama Traveer ^^");
  }
   else if (msg.content === "P"){
    msg.reply("Paimon here >.<");
  }
  else if (msg.content === "Halo paimon"){
    msg.reply("Iya traveler ada apa ?");
  }
})

// Dialogue English
client.on("message", msg => {
  if (msg.content === "Thank you paimon"){
    msg.reply(" Urwellcome Traveler ^^");
  }
  else if (msg.content === "Hello paimon"){
    msg.reply("Paimon Here traveler :)");
  }
})

//Artifact
client.on("message", msg => {
  if (msg.content === "!arti adventurer") {
    msg.reply("https://drive.google.com/uc?id=1OH3frvEP42nvQtm9A1C5RIVEW9Zy3Krw");
  }
  else if (msg.content === "!arti archaic") {
    msg.reply("https://drive.google.com/uc?id=1vYyFoVj5ZOgnfDs9H0a-6IbzTxOOT2rX");
  }
  else if (msg.content === "!arti berseker") {
    msg.reply("https://drive.google.com/uc?id=1pOQf4cJ3n6DTTQDtMVqFdFxqr0VvdYIp");
  }
  else if (msg.content === "!arti blizzard") {
    msg.reply("https://drive.google.com/uc?id=1sBlHXPYBEohmVFzXHgTdrcDVu51RYs4-");
  }
  else if (msg.content === "!arti bloodstained") {
    msg.reply("https://drive.google.com/uc?id=13Ybn8kj0A1sYwUacLQ63dgLG4EB3Esen");
  }
  else if (msg.content === "!arti brave") {
    msg.reply("https://drive.google.com/uc?id=13-p4gdz3UP8NS6ysFKVl5kWEaiWakUzS");
  }
  else if (msg.content === "!arti brave heart") {
    msg.reply("https://drive.google.com/uc?id=13-p4gdz3UP8NS6ysFKVl5kWEaiWakUzS");
  }
  else if (msg.content === "!arti crimson") {
    msg.reply("https://drive.google.com/uc?id=1ffXrl64aIzoEykwMt7_xoLjpxoBwSj-j");
  }
  else if (msg.content === "!arti defender's") {
    msg.reply("https://drive.google.com/uc?id=1nP8k--BtcAL2mt4eJqlK97lx36umNbB0");
  }
  else if (msg.content === "!arti defender") {
    msg.reply("https://drive.google.com/uc?id=1nP8k--BtcAL2mt4eJqlK97lx36umNbB0");
  }
  else if (msg.content === "!arti prayers to destiny") {
    msg.reply("https://drive.google.com/uc?id=1MIqInO5YmXOSJLy9l6Pj4BTrw53taZQq");
  }
  else if (msg.content === "!arti destiny") {
    msg.reply("https://drive.google.com/uc?id=1MIqInO5YmXOSJLy9l6Pj4BTrw53taZQq");
  }
  else if (msg.content === "!arti echoes") {
    msg.reply("https://drive.google.com/uc?id=1y4GbCdSIAjbfBEV6ENNWbFxFzjcUAipV");
  }
  else if (msg.content === "!arti emblem") {
    msg.reply("https://drive.google.com/uc?id=1RmcAVGptJKcKBRsb5rI2J_hWfXbEyDeG");
  }
  else if (msg.content === "!arti the exile") {
    msg.reply("https://drive.google.com/uc?id=1Ba4Q5NwquPBh8CwxQ7vLwfcF5uZXVctC");
  }
  else if (msg.content === "!arti gambler") {
    msg.reply("https://drive.google.com/uc?id=1Wr7mw9I2VZcR5ghScs9MPEIWcgO8QehM");
  }
  else if (msg.content === "!arti gladiator's finale") {
    msg.reply("https://drive.google.com/uc?id=1pzFD-PxvqQnR8WatmRKDAFXPe5qRzZ6S");
  }
  else if (msg.content === "!arti gladi") {
    msg.reply("https://drive.google.com/uc?id=1pzFD-PxvqQnR8WatmRKDAFXPe5qRzZ6S");
  }
  else if (msg.content === "!arti hod") {
    msg.reply("https://drive.google.com/uc?id=1spXYCQmgYkmIDjWFECcSnhS61ar4T1Qg");
  }
  else if (msg.content === "!arti heart of depth") {
    msg.reply("https://drive.google.com/uc?id=1spXYCQmgYkmIDjWFECcSnhS61ar4T1Qg");
  }
  else if (msg.content === "!arti husk") {
    msg.reply("https://drive.google.com/uc?id=1FKpgcHfxuAWJLMrQ2y3kueyeWbTF_UmN");
  }
  else if (msg.content === "!arti husk of opulent dreams") {
    msg.reply("https://drive.google.com/uc?id=1FKpgcHfxuAWJLMrQ2y3kueyeWbTF_UmN");
  }
  else if (msg.content === "!arti prayers to illumination") {
    msg.reply("https://drive.google.com/uc?id=1PLd74r_iqH6i9XXWkY_dBxgHwyFooxvf");
  }
  else if (msg.content === "!arti illumination") {
    msg.reply("https://drive.google.com/uc?id=1PLd74r_iqH6i9XXWkY_dBxgHwyFooxvf");
  }
  else if (msg.content === "!arti instructor") {
    msg.reply("https://drive.google.com/uc?id=1vi6xZwMAaFC3ev5MmJcMSkFgD5OlA50P");
  }
  else if (msg.content === "!arti lavawalker") {
    msg.reply("https://drive.google.com/uc?id=1z-dohAQMyZgc6ROdLXjss2YkHbYJKogI");
  }
  else if (msg.content === "!arti lucky dog") {
    msg.reply("https://drive.google.com/uc?id=1qoQQ-E2E-9B3tssd1apaGDOptX2zHlpR");
  }
  else if (msg.content === "!arti lucky") {
    msg.reply("https://drive.google.com/uc?id=1qoQQ-E2E-9B3tssd1apaGDOptX2zHlpR");
  }
  else if (msg.content === "!arti dog") {
    msg.reply("https://drive.google.com/uc?id=1qoQQ-E2E-9B3tssd1apaGDOptX2zHlpR");
  }
  else if (msg.content === "!arti maiden beloved") {
    msg.reply("https://drive.google.com/uc?id=1DRecg3Pf4kdy7w_y69nZSW9dul5C5Dab");
  }
  else if (msg.content === "!arti maiden") {
    msg.reply("https://drive.google.com/uc?id=1DRecg3Pf4kdy7w_y69nZSW9dul5C5Dab");
  }
  else if (msg.content === "!arti nobless oblige") {
    msg.reply("https://drive.google.com/uc?id=1pWFC3lZP09TmZZqZY3km0sPIUuyOrJnr");
  }
  else if (msg.content === "!arti nobless") {
    msg.reply("https://drive.google.com/uc?id=1pWFC3lZP09TmZZqZY3km0sPIUuyOrJnr");
  }
  else if (msg.content === "!arti ocean") {
    msg.reply("https://drive.google.com/uc?id=13pF2-ZbU_78ZyK5wLtblPp2vRtB2PxbO");
  }
  else if (msg.content === "!arti ocean hued") {
    msg.reply("https://drive.google.com/uc?id=13pF2-ZbU_78ZyK5wLtblPp2vRtB2PxbO");
  }
  else if (msg.content === "!arti ocean-hued clam") {
    msg.reply("https://drive.google.com/uc?id=13pF2-ZbU_78ZyK5wLtblPp2vRtB2PxbO");
  }
  else if (msg.content === "!arti pale flame") {
    msg.reply("https://drive.google.com/uc?id=17K8e26VHojJHaIq30AheeQ4yozokWAHW");
  }
  else if (msg.content === "!arti resolution") {
    msg.reply("https://drive.google.com/uc?id=1Y0nWwHBO7WWwtfVH_EYRQVF90L46PZiQ");
  }
  else if (msg.content === "!arti resolution of sojuner") {
    msg.reply("https://drive.google.com/uc?id=1Y0nWwHBO7WWwtfVH_EYRQVF90L46PZiQ");
  }
  else if (msg.content === "!arti retracing bolide") {
    msg.reply("https://drive.google.com/uc?id=1NdvOJD0LpAawuOzRIP8qMSG3Ebnhds6q");
  }
  else if (msg.content === "!arti retracing") {
    msg.reply("https://drive.google.com/uc?id=1NdvOJD0LpAawuOzRIP8qMSG3Ebnhds6q");
  }
  else if (msg.content === "!arti scholar") {
    msg.reply("https://drive.google.com/uc?id=1oJ76BXqTRY8ZOM-Sdk1Y9-RtMmvSEe03");
  }
  else if (msg.content === "!arti shimenawa") {
    msg.reply("https://drive.google.com/uc?id=1A44LZUgxRi3ses7LD9M9kDgYSyvbYVwt");
  }
  else if (msg.content === "!arti shimenawa's") {
    msg.reply("https://drive.google.com/uc?id=1A44LZUgxRi3ses7LD9M9kDgYSyvbYVwt");
  }
  else if (msg.content === "!arti shimenawa's reminiscence") {
    msg.reply("https://drive.google.com/uc?id=1A44LZUgxRi3ses7LD9M9kDgYSyvbYVwt");
  }
  else if (msg.content === "!arti prayers to springtime") {
    msg.reply("https://drive.google.com/uc?id=1v6iyFUxW6DlA6aXfeIYAOV81-YvNNTP2");
  }
  else if (msg.content === "!arti springtime") {
    msg.reply("https://drive.google.com/uc?id=1v6iyFUxW6DlA6aXfeIYAOV81-YvNNTP2");
  }
  else if (msg.content === "!arti tenacity") {
    msg.reply("https://drive.google.com/uc?id=1yxedkUecsbUGxDN4qp40kOUFbdnrREvN");
  }
  else if (msg.content === "!arti tenacity of millelith") {
    msg.reply("https://drive.google.com/uc?id=1yxedkUecsbUGxDN4qp40kOUFbdnrREvN");
  }
  else if (msg.content === "!arti millelith") {
    msg.reply("https://drive.google.com/uc?id=1yxedkUecsbUGxDN4qp40kOUFbdnrREvN");
  }
  else if (msg.content === "!arti thundering") {
    msg.reply("https://drive.google.com/uc?id=1GPxLu2bY187pckM9CvSq-2o3JJ2mDxSM");
  }
  else if (msg.content === "!arti thundering fury") {
    msg.reply("https://drive.google.com/uc?id=1GPxLu2bY187pckM9CvSq-2o3JJ2mDxSM");
  }
  else if (msg.content === "!arti thundershooter") {
    msg.reply("https://drive.google.com/uc?id=1OjQrARzgo1z3jxQrLuV9Dwb7s3Y2tojN");
  }
  else if (msg.content === "!arti tiny miracle") {
    msg.reply("https://drive.google.com/uc?id=1PQqRzB4lf46PqYITqx1_zkcF9kleI9SH");
  }
  else if (msg.content === "!arti traveling doctor") {
    msg.reply("https://drive.google.com/uc?id=1uLGceJXoqhtmgso3U4rg9PS0wqYBWYe7");
  }
  else if (msg.content === "!arti vermillion") {
    msg.reply("https://drive.google.com/uc?id=17Zdsny5fB-jB7rlH3pkGg7LJN-6zoDt-");
  }
  else if (msg.content === "!arti vermillion hereafter") {
    msg.reply("https://drive.google.com/uc?id=17Zdsny5fB-jB7rlH3pkGg7LJN-6zoDt-");
  }
  else if (msg.content === "!arti viri") {
    msg.reply("https://drive.google.com/uc?id=1tMHQFGVugDPkx4A_LjKSoHuKMpYAwiB-");
  }
  else if (msg.content === "!arti viridescent venerer") {
    msg.reply("https://drive.google.com/uc?id=1tMHQFGVugDPkx4A_LjKSoHuKMpYAwiB-");
  }
  else if (msg.content === "!arti wanderer's troupe") {
    msg.reply("https://drive.google.com/uc?id=1GXRW3n9KQYL-9XJdue5f2fJ2W83Yb8d_");
  }
  else if (msg.content === "!arti wanderer") {
    msg.reply("https://drive.google.com/uc?id=1GXRW3n9KQYL-9XJdue5f2fJ2W83Yb8d_");
  }
  else if (msg.content === "!arti wanderer's") {
    msg.reply("https://drive.google.com/uc?id=1GXRW3n9KQYL-9XJdue5f2fJ2W83Yb8d_");
  }
  else if (msg.content === "!arti prayers to wisdom") {
    msg.reply("https://drive.google.com/uc?id=15RKtqYQBB5dUNyzH4bCrrrO2ZCDkGxqJ");
  }
  else if (msg.content === "!arti prayers to wisdom") {
    msg.reply("https://drive.google.com/uc?id=15RKtqYQBB5dUNyzH4bCrrrO2ZCDkGxqJ");
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
  else if (msg.content === "!build diona") { // DILUC
    msg.reply("https://drive.google.com/uc?id=18CDNh9qB49XikoTFjUCRsPPR7uFtAkiV");
  }
  else if (msg.content === "!build diluc") { // DIONA
    msg.reply("https://drive.google.com/uc?id=1RQICYq5P2jxOxuHyCoqmAtLHRSeP54el");
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
    msg.reply("https://drive.google.com/uc?id=1jEgbODYHgFDs-bqhKZXFwRv9nTBmQmM4");
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
    msg.reply("https://drive.google.com/uc?id=1WH5Kdyf4lOdzlH8sTvdiJHvykMdeI-RP");
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
