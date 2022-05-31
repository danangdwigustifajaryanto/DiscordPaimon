require('dotenv').config();
const Discord = require("discord.js");
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});
client.on("ready", () => {
  console.log(` ---- ${client.user.tag} Sudah Login! ----`)
})

// Dialogue
client.on("message", msg => {
  if (msg.content === "paimon?") {
    msg.reply("Paimon Ready Traveler :)");
  }
  else if (msg.content === "!credit"){
    msg.reply(" \u00A9 Nevada 2022");
  }
  else if (msg.content === "Terimakasih paimon"){
    msg.reply(" Sama sama Traveer ^^");
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
  else if (msg.content === "!build ") { // BARBARA
    msg.reply("https://drive.google.com/uc?id=");
  }
  else if (msg.content === "!build ") { // BEIDOU
    msg.reply("https://drive.google.com/uc?id=");
  }
  else if (msg.content === "!build ") { // BENNET
    msg.reply("https://drive.google.com/uc?id=");
  }
  else if (msg.content === "!build ") { // ChHILDE
    msg.reply("https://drive.google.com/uc?id=");
  }
  else if (msg.content === "!build ") { // CHONGYUN
    msg.reply("https://drive.google.com/uc?id=");
  }
  else if (msg.content === "!build ") { // DIONA
    msg.reply("https://drive.google.com/uc?id=");
  }
  else if (msg.content === "!build ") { // EULA
    msg.reply("https://drive.google.com/uc?id=");
  }
  else if (msg.content === "!build ") { // FISCHL
    msg.reply("https://drive.google.com/uc?id=");
  }
  else if (msg.content === "!build ") { // GANYU
    msg.reply("https://drive.google.com/uc?id=");
  }
  else if (msg.content === "!build ") { // GOROU
    msg.reply("https://drive.google.com/uc?id=");
  }
  else if (msg.content === "!build ") { // HUTAO
    msg.reply("https://drive.google.com/uc?id=");
  }
  else if (msg.content === "!build ") { // ITTO
    msg.reply("https://drive.google.com/uc?id=");
  }
  else if (msg.content === "!build ") { // JEAN
    msg.reply("https://drive.google.com/uc?id=");
  }
  else if (msg.content === "!build ") { // KAEYA
    msg.reply("https://drive.google.com/uc?id=");
  }
  else if (msg.content === "!build ") { // KAZUHA
    msg.reply("https://drive.google.com/uc?id=");
  }
  else if (msg.content === "!build ") { // KEQING
    msg.reply("https://drive.google.com/uc?id=");
  }
  else if (msg.content === "!build ") { // KLEE
    msg.reply("https://drive.google.com/uc?id=");
  }
  else if (msg.content === "!build ") { // KOKOMI 
    msg.reply("https://drive.google.com/uc?id=");
  }
  else if (msg.content === "!build ") { // KUJOU
    msg.reply("https://drive.google.com/uc?id=");
  }
  else if (msg.content === "!build ") { // LISA
    msg.reply("https://drive.google.com/uc?id=");
  }
  else if (msg.content === "!build ") { // MONA
    msg.reply("https://drive.google.com/uc?id=");
  }
  else if (msg.content === "!build ") { // NINGGUANG
    msg.reply("https://drive.google.com/uc?id=");
  }
  else if (msg.content === "!build ") { // NOELLE
    msg.reply("https://drive.google.com/uc?id=");
  }
  else if (msg.content === "!build ") { // PAIMON
    msg.reply("https://drive.google.com/uc?id=");
  }
  else if (msg.content === "!build ") { // QIQI
    msg.reply("https://drive.google.com/uc?id=");
  } 
  else if (msg.content === "!build ") { // RAZOR
    msg.reply("https://drive.google.com/uc?id=");
  }
  else if (msg.content === "!build ") { // ROSARIA
    msg.reply("https://drive.google.com/uc?id=");
  }
  else if (msg.content === "!build ") { // SAYU
    msg.reply("https://drive.google.com/uc?id=");
  }
  else if (msg.content === "!build ") { // SHENHE
    msg.reply("https://drive.google.com/uc?id=");
  }
  else if (msg.content === "!build ") { // SHOGUN
    msg.reply("https://drive.google.com/uc?id=");
  }
  else if (msg.content === "!build ") { // SUCROSE
    msg.reply("https://drive.google.com/uc?id=");
  }
  else if (msg.content === "!build ") { // THOMA
    msg.reply("https://drive.google.com/uc?id=");
  }
  else if (msg.content === "!build ") { // VENTI
    msg.reply("https://drive.google.com/uc?id=");
  }
  else if (msg.content === "!build ") { // XIANGLING
    msg.reply("https://drive.google.com/uc?id=");
  }
  else if (msg.content === "!build ") { // XIAO
    msg.reply("https://drive.google.com/uc?id=");
  }
  else if (msg.content === "!build ") { // XINQIU
    msg.reply("https://drive.google.com/uc?id=");
  }
  else if (msg.content === "!build ") { // XINYAN
    msg.reply("https://drive.google.com/uc?id=");
  }
  else if (msg.content === "!build ") { // YAE
    msg.reply("https://drive.google.com/uc?id=");
  }
  else if (msg.content === "!build ") { // YANFEI
    msg.reply("https://drive.google.com/uc?id=");
  }
  else if (msg.content === "!build ") { // YELAN
    msg.reply("https://drive.google.com/uc?id=");
  }
  else if (msg.content === "!build ") { // YOIMIYA
    msg.reply("https://drive.google.com/uc?id=");
  }
  else if (msg.content === "!build ") { // YUNJIN
    msg.reply("https://drive.google.com/uc?id=");
  }
  else if (msg.content === "!build ") { // ZHONGLI
    msg.reply("https://drive.google.com/uc?id=");
  }
  else if (msg.content === "!build ") { // SHINOBU
    msg.reply("https://drive.google.com/uc?id=");
  }

})

client.login("OTc4NjE1ODcwNzE4ODY5NTk0.G9lIoW.-4sg46mmtVK-8OU9nuhgtuATjptnlonZJBy2vk");
