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
  client.destroy()
})


//Build charcter
client.on("message", msg => {
  if (msg.content === "!build albedo") {
    msg.reply("https://drive.google.com/uc?id=1KMSHvMqen-VFdXMU9FYFz8LjZrIiqbI3");
  }
  else if (msg.content === "!build aloy") {
    msg.reply("https://drive.google.com/uc?id=154StRKmWsW5YyZWSYL_oY8nIfUwV90rv");
  }
  client.destroy()
})

client.login("OTc4NjE1ODcwNzE4ODY5NTk0.G9lIoW.-4sg46mmtVK-8OU9nuhgtuATjptnlonZJBy2vk");
