const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');
const Userchm = require("./profileSchema");
exports.run = async (client, msg, args) => {
    userData = await Userchm.findOne({userID : msg.author.id});
    if (userData) {
    const exampleEmbed = new MessageEmbed()
   .setColor('#1F1F1F')
   .setTitle(':ticket: Data Member Genshination :ticket:')
   .setDescription(`**Nickname :** ${userData.nickname}\n**Adv-Rank :** ${userData.ar}\n**Server   :** ${userData.server}\n**User ID  :** ${userData.uid}`)
   .setThumbnail(msg.author.avatarURL())
    msg.reply({ embeds: [exampleEmbed] });
    } else{
     msg.reply("Registrasi dulu yuk ^_^")
    }

exports.name = "myinfo";
} 