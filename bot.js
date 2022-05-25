require('dotenv').config();
const Discord = require("discord.js");
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});
client.on("ready", () => {
  console.log(` ---- ${client.user.tag} Sudah Login! ----`)
})

// Dialogue
client.on("message", msg => {
  if (msg.content === "paimon?") {
    msg.reply("Aman boss!");
  }
})

client.on("message", msg => {
  if (msg.content === "Thank you paimon") {
    msg.reply("urwellcome traveler ^^");
  }
})

// Character Build
client.on("message", msg => {
  if (msg.content === "p build ayaka") {
    msg.reply("https://s.imgur.com/images/logo-1200-630.jpg?2");
  }
})

client.login(process.env.DISCORD_TOKEN);