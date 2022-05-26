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
    msg.reply("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/db23f655-bcc8-406e-918f-37c2a9fc5d8b/df64ofy-03b30a72-f55a-445d-8ca5-43b581557810.jpg/v1/fill/w_1280,h_1796,q_75,strp/bennet_by_dayonyte_df64ofy-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTc5NiIsInBhdGgiOiJcL2ZcL2RiMjNmNjU1LWJjYzgtNDA2ZS05MThmLTM3YzJhOWZjNWQ4YlwvZGY2NG9meS0wM2IzMGE3Mi1mNTVhLTQ0NWQtOGNhNS00M2I1ODE1NTc4MTAuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.HMM2uQqWYOlA4qY03InCbx2Z9LAs4n3psrABu5HOBiU");
  }
})

client.login("OTc4NjE1ODcwNzE4ODY5NTk0.G9lIoW.-4sg46mmtVK-8OU9nuhgtuATjptnlonZJBy2vk");
