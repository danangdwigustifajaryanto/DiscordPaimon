require('dotenv').config();
const Discord = require("discord.js");
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
  if (msg.content === "Siapa yang cakep paimon ?") {
    msg.reply("Nevada dong Kyaaa ///// >.<");
  }
})

client.on("message", msg => {
  if (msg.content === "p paimon") {
    msg.reply("Apaan Papepape >:(");
  }
})

client.on("message", msg => {
  if (msg.content === "lha kok ngamok") {
    msg.reply("iya maaf, jangan kick paimon suhu :( ");
  }
})

client.on("message", msg => {
  if (msg.content === "build ayaka dong paimon") {
    msg.reply("4 Blizard atau 2 Blizard 2 Gladiator");
  }
})

client.on("message", msg => {
  if (msg.content === "build hutao dong paimon") {
    msg.reply("4 Crimson lah, hutao kok shimenawa, lemah");
  }
})


client.login(process.env.DISCORD_TOKEN);