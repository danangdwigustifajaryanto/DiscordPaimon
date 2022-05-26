require('dotenv').config();
const Discord = require("discord.js");
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});
client.on("ready", () => {
  console.log(` ---- ${client.user.tag} Sudah Login! ----`)
})

// Dialogue
client.on("message", msg => {
  if (msg.content === "paimon?") {
    const image = new Discord.MessageAttachment("https://s.imgur.com/images/logo-1200-630.jpg?2","img.png");
    msg.reply({ files : [image] })
  }
})



client.on("message", msg => {
  if (msg.content === "Thank you paimon") {
    msg.reply("urwellcome traveler ^^");
  }
})

// Character Build
client.on("message", msg => {
  if (msg.content === "p build bennett") {
    msg.reply("https://mega.nz/file/qxUXlYrb#rz74kBL96pEZd670gAGxzBKNTN_6wEGP3U5tJvg2oOY");
  }
})

client.login("OTc4NjE1ODcwNzE4ODY5NTk0.G9lIoW.-4sg46mmtVK-8OU9nuhgtuATjptnlonZJBy2vk");
