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
})

client.on("message", msg => {
  if (msg.content === "!credit") {
    msg.reply(" \u00A9 Nevada 2022");
    
  }
})

//Build character
client.on("message", msg => {
  if (msg.content === "Terimakasih paimon") {
    msg.reply("Sama sama traveler ^_^");
  }
})

//Build character
client.on("message", msg => {
  if (msg.content === "build kaeya") {
    msg.reply("Sama sama traveler ^_^");
  }
})

//Build character
client.on("message", msg => {
  if (msg.content === "!ping") {
    msg.reply("On");
  }
})

// Character Build
client.on("message", msg => {
  if (msg.content === "!build miya") {
    msg.reply("https://i.ibb.co/hLqY1j5/Yoimiya.jpg");
  }
})

client.login("OTc4NjE1ODcwNzE4ODY5NTk0.G9lIoW.-4sg46mmtVK-8OU9nuhgtuATjptnlonZJBy2vk");
