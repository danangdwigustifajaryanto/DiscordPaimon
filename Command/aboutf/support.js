const Discord = require("discord.js");
exports.run = (client, msg, args) => {
    const { MessageEmbed } = require('discord.js');
    const exampleEmbed = new MessageEmbed()
    .addField(":stew: Support Paimon :stew:", "sweet madame terlihat lezat! Apa traveler mau traktir paimon makan ><?\n\n***Link :*** https://trakteer.id/paimonbot/tip", true)
    .setImage('https://drive.google.com/uc?id=15q6vXpaKKfo4MXcJUZswiRPjHrthOJCY')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
    msg.reply({ embeds: [exampleEmbed] });
}
    exports.name = "support";