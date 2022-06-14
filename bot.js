const { MessageEmbed } = require('discord.js');
const ytdl = require("ytdl-core");
const ytSearch = require('yt-search');
const { Routes } = require("discord-api-types/v9")
const Discord = require("discord.js");
const { REST } = require("@discordjs/rest")
const fs = require("fs")
const { Player } = require("discord-player")
const mongoose = require("mongoose");
const User = require("./profileSchema");
const {isUndefined} = require(`util`);
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_VOICE_STATES", "GUILD_MESSAGES", ]});
const prefix = "!";

client.on("ready", async ()=>{
    console.log(` ---- ${client.user.tag} Sudah Login! ----`);
        client.user.setActivity("Zhongli got Prank", {
        type: "WATCHING",
        url: "https://www.twitch.tv/monstercat"
    });
 });


// Music bot 2 slah comand ------
const LOAD_SLASH = process.argv[2] == "load"
const CLIENT_ID = "978615870718869594"
const GUILD_ID = "978619701322211378"

client.slashcommands = new Discord.Collection()
client.player = new Player(client, {
    ytdlOptions: {
        quality: "highestaudio",
        highWaterMark: 1 << 25
    }
})

let commands = []

const slashFiles = fs.readdirSync("./slash").filter(file => file.endsWith(".js"))
for (const file of slashFiles){
    const slashcmd = require(`./slash/${file}`)
    client.slashcommands.set(slashcmd.data.name, slashcmd)
    if (LOAD_SLASH) commands.push(slashcmd.data.toJSON())
}

if (LOAD_SLASH) {
    const rest = new REST({ version: "9" }).setToken("OTc4NjE1ODcwNzE4ODY5NTk0.G9lIoW.-4sg46mmtVK-8OU9nuhgtuATjptnlonZJBy2vk")
    console.log("Deploying slash commands")
    rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), {body: commands})
    .then(() => {
        console.log("Successfully loaded")
        process.exit(0)
    })
    .catch((err) => {
        if (err){
            console.log(err)
            process.exit(1)
        }
    })
}
else {
    client.on("ready", () => {
        console.log(`Logged in as ${client.user.tag}`)
    })
    client.on("interactionCreate", (interaction) => {
        async function handleCommand() {
            if (!interaction.isCommand()) return

            const slashcmd = client.slashcommands.get(interaction.commandName)
            if (!slashcmd) interaction.reply("Not a valid slash command")

            await interaction.deferReply()
            await slashcmd.run({ client, interaction })
        }
        handleCommand()
    })
}


// // ------ MUSIC BOT 1 ------
// const youtube = new Youtube("AIzaSyAGmpS9qDMwLgOU1qhSlfwTaJUPFP0NBfY")
// const queue = new Map()

// client.on("message", async => {
//   if (msg.author.client) return
//   if (!msg.content.startsWith(prefix)) return

//   const args = msg.content.substring(prefix.length).split(" ")
//   const searchString = args.slice(1).join(' ')
//   const url = args [1] ? args[1].replace(/<(.+)>/g, '$1') : ''
//   const serverQueue = queue.get(msg.guild.id)

//   if (msg.content.startsWith(`${prefix}play`)) {
//     const voiceChannel = msg.member.voice.channel
//     if (!voiceChannel) return msg.channel.send("Please join voice channel first traveler ^^")
//     const permission = voiceChannel.permission(msg.client.user)
//     if (!permission.has(`CONNECT`)) return msg.channel.send("Paimon gabisa gabung voicechat min T.T")
//     if (!permission.has(`SPEAK`)) return msg.channel.send("Paimon gapunya ijin buat nyalain mic min T.T")





//     try {
//       async function video()
//     {
//     var video = await youtube.getVideoByID(url)
//     // do your stuff with data
    
//     temp = video;

//     console.log(temp) // at this point you have something in.
//     return true
//     }
//     } catch {
//       try {
// async function videos()
// {
//     var videos = await youtube.searchVideos(searchString, 1)
//     // do your stuff with data
    
//     temp = videos;

//     console.log(temp) // at this point you have something in.
//     return true
// }
//   videos();
// async function video()
// {
//     var video = await youtube.getVideoByID(videos[0].id)
//     // do your stuff with data
    
//     temp = video;

//     console.log(temp) // at this point you have something in.
//     return true
// }
//       video();       
//       } catch {
//         return msg.channel.send("Maaf paimon tidak tau T.T")
//       }
//     }

//     const song = {
//       id: video.id,
//       title: video.title,
//       url: `https://www.youtube.com/watch?v=${video.id}`
//     }

//     if(!serverQueue) {
//       const queueConstruct = {
//         textchannel: msg.channel,
//         voiceChannel: voiceChannel,
//         Connection: null,
//         songs: [],
//         volume: 5,
//         playing: true
//       }
//       queue.set(msg.guild.id, queueConstruct)
//       queueConstruct.songs.push(song)
//       try {
//         async function cinnection()
// {
//     const data = await CSVtoJSON().fromFile('./input.csv')
//     // do your stuff with data
    
//     temp = data;

//     console.log(temp) // at this point you have something in.
//     return true
// }

// test();
//         connection();
//         queueConstruct.connection = connection
//         play(msg.guild, queueConstruct.song[0])
//       } catch (error){
//         console.log(`Error ngab gabisa join voice channel: ${error}`)
//         queue.delete(msg.guild.id)
//         return msg.channel.send(`Error ngab gabisa join voice channel: ${error}`)
//       }
//     } else {
//       serverQueue.song.push(song)
//       return msg.channel.send(`***${song.title} Telah ditambah ke dalam antrian`)
//     }
//     return undefined
//   }
//   else {
//     if (msg.content.startsWith(`${prefix}stop`)) {
//       if(!msg.member.voice.channel) return msg.channel.send("Gabung ke voicechannel yang sama untuk melakukan stop")
//       if(!serverQueue) return msg.channel.send("Tidak ada musik yang dimainkan")
//         serverQueue.songs = []
//         serverQueue.connection.dispatcher.end()
//         msg.channel.send("Musik telah berhenti")
//         return undefined
//     }
//     else if (msg.content.startsWith(`${prefix}skip`)){
//       if(!msg.member.voice.channel) return msg.channel.send("Gabung ke voicechannel yang sama untuk melakukan skip")
//       if(!serverQueue) return msg.channel.send("Tidak ada musik yang dimainkan")
//       serverQueue.connection.dispatcher.end()
//       msg.channel.send("Musik telah di skip ^^")
//       return undefined
//     } else if (msg.content.startsWith(`${prefix}volume`)){
//       if(!msg.member.voice.channel) return msg.channel.send("Gabung ke voicechannel yang sama untuk mengatur volume")
//       if(!serverQueue) return msg.channel.send("Tidak ada musik yang dimainkan")
//       if (args([1])) return msg.channel.send("Aturnya yang bener woi >:(")
//       serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1]/ 5)
//       msg.channel.send(`Volume telah diatur menjadi **${args[1]}**`)
//       return undefined
//     } else if (msg.content.startsWith(`${prefix}now playing`)){
//       if(!serverQueue) return msg.channel.send("Tidak ada musik yang dimainkan")
//       msg.channel.send(`Now playing ${serverQueue.songs[0].title}`)
//       return undefined
//     } else if (msg.content.startsWith(`${prefix}queue`)){
//       if(!serverQueue) return msg.channel.send("Tidak ada musik yang dimainkan")
//       msg.channel.send(`__Antrian__\n${serverQueue.songs.map(song => `**-** ${song.title}`).join(`\n`)} \n**Now Playing:**${serverQueue.songs[0].title}`, { split: true})
//       return undefined
//     } else if (msg.content.startsWith(`${prefix}pause`)){
//       if (msg.voice.channel) return msg.channel.send("Gabung ke voicechannel yang sama untuk melakukan pause")
//       if(!serverQueue) return msg.channel.send("Tidak ada musik yang dimainkan")
//       if(!serverQueue.playing) return msg.channel.send("Music sedang dalam keadaan pause")
//       serverQueue.playing = flase
//       serverQueue.connection.dispatcher.pause("Music sudah di pause")
//       return undefined
//     } else if (msg.content.startsWith(`${prefix}resume`)){
//       if (msg.voice.channel) return msg.channel.send("Gabung ke voicechannel yang sama untuk melakukan resume")
//       if(!serverQueue) return msg.channel.send("Tidak ada musik yang dimainkan")
//       if(!serverQueue.playing) return msg.channel.send("Music sedang dalam keadaan pause")
//       serverQueue.playing = true
//       serverQueue.connection.dispatcher.resume("Music sudah di pause")
//       return undefined
//     }
//   }
// })

// function play(guild, song) {
//   const serverQueue = queue.get(guild.id)

//   if (!song) {
//     serverQueue.voiceChannel.leave()
//     queue.delete(guild.id)
//     return
//   }
//   const dispatcher = serverQueue.connection.play(ytdl(song.url, {highWaterMark: 1 << 25})).on(`finish`, () => {
//     play(guild.serverQueue.songs[0])
//   }).on(`error`, error => {
//     console.log(error)
//   })
//   dispatcher.setVolumeLogarithmic(serverQueue.volume / $)
//   serverQueue.textchannel.send(`Start playing: **${song.title}`)
// }


// ------ music bot 2 ------
// Global queue for your bot. Every server will have a key and value pair in this map. { guild.id, queue_constructor{} }
//Global queue for your bot. Every server will have a key and value pair in this map. { guild.id, queue_constructor{} }


//Global queue for your bot. Every server will have a key and value pair in this map. { guild.id, queue_constructor{} }
// const queue = new Map();

// module.exports = {
//     name: 'play',
//     aliases: ['skip', 'stop'], //We are using aliases to run the skip and stop command follow this tutorial if lost: https://www.youtube.com/watch?v=QBUJ3cdofqc
//     cooldown: 0,
//     description: 'Advanced music bot',
//     async execute(client, message, cmd, args, Discord){


//         //Checking for the voicechannel and permissions (you can add more permissions if you like).
//         const voice_channel = msg.member.voice.channel;
//         if (!voice_channel) return msg.channel.send('You need to be in a channel to execute this command!');
//         const permissions = voice_channel.permissionsFor(msg.client.user);
//         if (!permissions.has('CONNECT')) return msg.channel.send('You dont have the correct permissins');
//         if (!permissions.has('SPEAK')) return msg.channel.send('You dont have the correct permissins');

//         //This is our server queue. We are getting this server queue from the global queue.
//         const server_queue = queue.get(msg.guild.id);

//         //If the user has used the play command
//         if (cmd === 'play'){
//             if (!args.length) return msg.channel.send('You need to send the second argument!');
//             let song = {};

//             //If the first argument is a link. Set the song object to have two keys. Title and URl.
//             if (ytdl.validateURL(args[0])) {
//                 const song_info = await ytdl.getInfo(args[0]);
//                 song = { title: song_info.videoDetails.title, url: song_info.videoDetails.video_url }
//             } else {
//                 //If there was no link, we use keywords to search for a video. Set the song object to have two keys. Title and URl.
//                 const video_finder = async (query) =>{
//                     const video_result = await ytSearch(query);
//                     return (video_result.videos.length > 1) ? video_result.videos[0] : null;
//                 }

//                 const video = await video_finder(args.join(' '));
//                 if (video){
//                     song = { title: video.title, url: video.url }
//                 } else {
//                      msg.channel.send('Error finding video.');
//                 }
//             }

//             //If the server queue does not exist (which doesn't for the first video queued) then create a constructor to be added to our global queue.
//             if (!server_queue){

//                 const queue_constructor = {
//                     voice_channel: voice_channel,
//                     text_channel: msg.channel,
//                     connection: null,
//                     songs: []
//                 }
                
//                 //Add our key and value pair into the global queue. We then use this to get our server queue.
//                 queue.set(msg.guild.id, queue_constructor);
//                 queue_constructor.songs.push(song);
    
//                 //Establish a connection and play the song with the vide_player function.
//                 try {
//                     const connection = await voice_channel.join();
//                     queue_constructor.connection = connection;
//                     video_player(msg.guild, queue_constructor.songs[0]);
//                 } catch (err) {
//                     queue.delete(msg.guild.id);
//                     msg.channel.send('There was an error connecting!');
//                     throw err;
//                 }
//             } else{
//                 server_queue.songs.push(song);
//                 return msg.channel.send(`👍 **${song.title}** added to queue!`);
//             }
//         }

//         else if(cmd === 'skip') skip_song(msg, server_queue);
//         else if(cmd === 'stop') stop_song(msg, server_queue);
//     }
    
// }

// const video_player = async (guild, song) => {
//     const song_queue = queue.get(guild.id);

//     //If no song is left in the server queue. Leave the voice channel and delete the key and value pair from the global queue.
//     if (!song) {
//         song_queue.voice_channel.leave();
//         queue.delete(guild.id);
//         return;
//     }
//     const stream = ytdl(song.url, { filter: 'audioonly' });
//     song_queue.connection.play(stream, { seek: 0, volume: 0.5 })
//     .on('finish', () => {
//         song_queue.songs.shift();
//         video_player(guild, song_queue.songs[0]);
//     });
//     await song_queue.text_channel.send(`🎶 Now playing **${song.title}**`)
// }

// const skip_song = (message, server_queue) => {
//     if (!msg.member.voice.channel) return msg.channel.send('You need to be in a channel to execute this command!');
//     if(!server_queue){
//         return msg.channel.send(`There are no songs in queue 😔`);
//     }
//     server_queue.connection.dispatcher.end();
// }

// const stop_song = (message, server_queue) => {
//     if (!msg.member.voice.channel) return msg.channel.send('You need to be in a channel to execute this command!');
//     server_queue.songs = [];
//     server_queue.connection.dispatcher.end();
// }














// ---- GREETINGS ----
client.on('guildMemberAdd', member => {
    const exampleEmbed = new MessageEmbed()
    .setTitle('Wellcome to the server :hatching_chick: ')
    .setDescription(`Hello <@${member.id}> don't forget to register ^^`)
    .setThumbnail(member.displayAvatarURL())
    .setFooter({ text: "Please read pinned messages",
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
    member.guild.channels.cache.get('981582630317338656').send({ embeds: [exampleEmbed] });
});
// ---- REGISTRASI ----

client.on("message", msg => {
    if(msg.content === "!reg") {
    const exampleEmbed = new MessageEmbed()
    .addField(":hatching_chick: Tutorial Registrasi :hatching_chick:", "Halo traveler, berikut adalah cara register^^ \nBagaimana ? mudah bukan ><", true)
    .setImage('https://drive.google.com/uc?id=18stgEscuuv0j2fZMHkQpadjJasMWhIF6')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
    msg.reply({ embeds: [exampleEmbed] });
    }
})

const subnick = "!reg nickname:";
const subar = "!reg ar:";
const subserv = "!reg server:";
const subuid = "!reg uid:";
client.on("message", async msg => { //NICKNAME
  if (msg.content.includes(subnick)) {
    userData = await User.findOne({userID : msg.author.id});
  if (userData) { //If data Exist
    const updatedUser = await User.findOneAndUpdate(
      { userID: msg.author.id },
      {
        nickname: msg.content.substring(msg.content.indexOf(':') + 1), // so basically anything after the : will be the username
      }, {
        new: true,
      }
    );
    console.log(updatedUser);
    msg.reply('Data kamu telah diperbarui traveler :)');
  } else if (!userData){ // If data didn't exist then create new one
    const user = new User({
      _id: mongoose.Types.ObjectId(),
      userID: msg.author.id,
      nickname: msg.content.substring(msg.content.indexOf(":") + 1) // so basically anything after the : will be the username
    });
    user.save().then(result => console.log(result)).catch(err => console.log(err));
    msg.reply("Terimakasih, data telah paimon terima ^^") 
  }
  }
}) //AR
client.on("message", async msg => {
  if (msg.content.includes(subar)) {
    userData = await User.findOne({userID : msg.author.id});
  if (userData) { //If data Exist
    const updatedUser = await User.findOneAndUpdate(
      { userID: msg.author.id },
      {
        ar: msg.content.substring(msg.content.indexOf(':') + 1), // so basically anything after the : will be the username
      }, {
        new: true,
      }
    );
    console.log(updatedUser);
    msg.reply('Data kamu telah diperbarui traveler :)');
  } else if (!userData){ // If data didn't exist then create new one
    const user = new User({
      _id: mongoose.Types.ObjectId(),
      userID: msg.author.id,
      ar: msg.content.substring(msg.content.indexOf(":") + 1) // so basically anything after the : will be the username
    });
    user.save().then(result => console.log(result)).catch(err => console.log(err));
    msg.reply("Terimakasih, data telah paimon terima ^^") 
  }
  }
}) // SERVER
client.on("message", async msg => { 
  if (msg.content.includes(subserv)) {
    userData = await User.findOne({userID : msg.author.id});
  if (userData) { //If data Exist
    const updatedUser = await User.findOneAndUpdate(
      { userID: msg.author.id },
      {
        server: msg.content.substring(msg.content.indexOf(':') + 1), // so basically anything after the : will be the username
      }, {
        new: true,
      }
    );
    console.log(updatedUser);
    msg.reply('Data kamu telah diperbarui traveler :)');
  } else if (!userData){ // If data didn't exist then create new one
    const user = new User({
      _id: mongoose.Types.ObjectId(),
      userID: msg.author.id,
      server: msg.content.substring(msg.content.indexOf(":") + 1) // so basically anything after the : will be the username
    });
    user.save().then(result => console.log(result)).catch(err => console.log(err));
    msg.reply("Terimakasih, data telah paimon terima ^^") 
  }
  }
}) //UID
client.on("message", async msg => {
  if (msg.content.includes(subuid)) {
    userData = await User.findOne({userID : msg.author.id});
  if (userData) { //If data Exist
    const updatedUser = await User.findOneAndUpdate(
      { userID: msg.author.id },
      {
        uid: msg.content.substring(msg.content.indexOf(':') + 1), // so basically anything after the : will be the username
      }, {
        new: true,
      }
    );
    console.log(updatedUser);
    msg.reply('Data kamu telah diperbarui traveler :)');
  } else if (!userData){ // If data didn't exist then create new one
    const user = new User({
      _id: mongoose.Types.ObjectId(),
      userID: msg.author.id,
      uid: msg.content.substring(msg.content.indexOf(":") + 1) // so basically anything after the : will be the username
    });
    user.save().then(result => console.log(result)).catch(err => console.log(err));
    msg.reply("Terimakasih, data telah paimon terima ^^") 
  }
  }
})

// ---- PENCARIAN UID ------
client.on("message", async msg => {
  if (msg.content === "!myinfo"){ 
    userData = await User.findOne({userID : msg.author.id});
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
  }
}
);

// ------ PENYEBUTAN UID ORANG -------
// const member = msg.mentions.users.first();
// if (msg.content === `!info ${member}`){ 
//     User.findOne({ userID: member.id }, (err, user) => {
//         if (err) return console.error(err);
//         if (!user) return msg.reply("User not found");
//         console.log(user);
//     });
// }
//-------- HELP -------------------------------------------------------------------------------------------------------------------------
client.on("message", msg => {
  if (msg.content === "!bantu"){ // Help Indo
    const exampleEmbed = new MessageEmbed()
    .setColor('#1F1F1F')
    .setTitle('✨ Daftar Fitur Paimon ✨')
    .setDescription("***Informasi Fitur***\n> **Registrasi** \n> ***contoh***: `!reg` \n> \n> **Cek data diri**\n> ***contoh***: `!myinfo`\n> \n> **Music**\n> ***contoh***: `!music`\n\n***Informasi Game***\n> **Build Karakter** \n> ***contoh***: `!build amber`\n> \n> **Informasi Artefak**\n> ***contoh***: `!arti shimenawa`\n> \n> **Talent hari ini**\n> ***contoh***: `!talent sekarang`\n> \n> **Weapon hari ini**\n> ***example***: `!talent today`\n\n***Tentang***\n> **Tentang Server**\n> ***contoh***: `!tentang server`\n> \n> **Credit Paimon**\n> ***contoh***: `!credit`\n> \n> **Support Paimon**\n> ***contoh***: `!support`\n\n")
    .setThumbnail(msg.author.avatarURL())
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
    msg.reply({ embeds: [exampleEmbed] });
  } else if (msg.content === "!help"){ // Help English
    const exampleEmbed = new MessageEmbed()
    .setColor('#1F1F1F')
    .setTitle("✨ Paimon's Feature ✨")
    .setDescription("***Feature Information***\n> **Registration** \n> ***example***: `!reg` \n> \n> **Your Information**\n> ***example***: `!myinfo`\n> \n> **Music**\n> ***example***: `!music`\n\n***Game Information***\n> **Build Character** \n> ***example***: `!build amber`\n> \n> **Artifact Information**\n> ***example***: `!arti shimenawa`\n> \n> **Talent Farm Today**\n> ***example***: `!talent today`\n> \n> **Weapon Farm Today**\n> ***example***: `!weapon today`\n\n***About***\n> **About Server**\n> ***example***: `!about server`\n> \n> **Credit Paimon**\n> ***example***: `!credit`\n> \n> **Support Paimon**\n> ***example***: `!support`\n\n")
    .setThumbnail(msg.author.avatarURL())
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
    msg.reply({ embeds: [exampleEmbed] });
  }
})
// ---- MUSIC ----
client.on("message", msg => {
  if (msg.content === "!music"){ // Help Indo
    const exampleEmbed = new MessageEmbed()
    .setColor('#1F1F1F')
    .setTitle(':musical_note: Paimon Music Bot :musical_note:')
    .setDescription("> **Info diputar** \n> ***example***: `/info` \n> \n> **Pause**\n> ***contoh***: `/pause`\n> \n> **Play menggunakan link**\n> ***contoh***: `/play song`\n> \n> **Play link playlist**\n> ***contoh***: `/play playlist`\n> \n> **Play menggunakan pencarian**\n> ***contoh***: `/play search`\n> \n> **Tampilkan antrian**\n> ***contoh***: `/queue`\n> \n> **Berhenti dan keluar**\n> ***contoh***: `/quit`\n> \n> **Resume**\n> ***contoh***: `/resume`\n> \n> **Acak antrian**\n> ***contoh***: `/shuffle`\n> \n> **Skip**\n> ***contoh***: `/skip`\n> \n> **Skip ke lagu lain**\n> ***contoh***: `/skip to`")
    .setThumbnail(msg.author.avatarURL())
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
    msg.reply({ embeds: [exampleEmbed] });
  }
})
//-------- JADE PARCEL ---------------------------------------------------------------------------------------------------------------------
client.on("message", msg => {
  if (msg.content === "!support"){ // Help Indo
    const exampleEmbed = new MessageEmbed()
    .addField(":stew: Support Paimon :stew:", "Sweet madame terlihat sangat lezat. Apakah traveler mau\nmentraktir paimon makan >< ?\n\n***Link :*** https://trakteer.id/paimonbot/tip", true)
    .setImage('https://drive.google.com/uc?id=15q6vXpaKKfo4MXcJUZswiRPjHrthOJCY')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
    msg.reply({ embeds: [exampleEmbed] });
  }

})
// ------- WEAPON INDO -----------------------------------------------------------------------------------------------------------------
client.on("message", msg =>{
  if (msg.content === "!weapon sekarang"){ ///Indo 
    const dayOfWeek = new Date().getDay();
    if (dayOfWeek === 1) { //Sening
      const exampleEmbed = new MessageEmbed()
      .setColor('#1F1F1F')
      .setTitle(':crossed_swords: Farming Accension Material Hari Ini :crossed_swords:')
      .setDescription("***Decarabian's***\n> Apprentices Notes \n> Aquila Favonia \n> Cinnabar Spindle \n> Cool Stell \n> Dull Blade \n> Favonious Codex \n> Favonious Sword \n> Ferrous Shadow\n> Magic Guide\n> Mitternachts Waltz\n> Pocket Grimoire\n> Raven Bow\n> Royal Grimoire\n> Royal Longsword\n> Silver Sword\n> Snow-Tombed Starsilver\n> Song of Broken Pines\n> The Alley Flash\n> The Bell\n> The Stringless\n> Viridescent Hunt\n\n***Luminous***\n> Aqua Simulacra\n> Blackliff Agate \n> Blackliff Longsword \n> Blackliff Warbow \n> Cresent Pike \n> Dark Iron Sword\n> Emerald Orb\n> Lion's Roar\n> Lithic Blade\n> Primordial Jade Winged Spear\n> Rust\n> Slingshot\n> Solar Pearl\n> Summit Shaper\n> White Tassel\n> Whiteblind\n\n***Branch of a Distant Sea***\n> Aukomaru \n> Amenoma Kageuchi \n> Everlasting Moonglow \n> Mistsplitter Reforged\n> Oathsworn Eye")
      .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
      msg.reply({ embeds: [exampleEmbed] });
    } else if (dayOfWeek === 2) { //Selasa
      const exampleEmbed = new MessageEmbed()
      .setColor('#1F1F1F')
      .setTitle(':crossed_swords: Farming Accension Material Hari Ini :crossed_swords:')
      .setDescription("***Boreal Wolf's***\n> Bloodtained Greatsword \n> Deathmatch \n> Dodoco Tales \n> Dragonspine Spear \n> Elegy for the End \n> Harbringer of Dawn \n> Hunter's Bow \n> Old Merc's Pal\n> Sacrificial Bow\n> Sacrificial Greatsword\n> Seasoned Hunter\n> Sharp Shooter\n> Skyward Atlas\n> Skyward Blade\n> Skyward Harp\n> Skyward Pride\n> Sword of Decension\n> The Black Sword\n> The Flute\n> Widsith\n> Thrilling Tales\n> Water Greatsword\n> Wine and Song\n\n***Mist Veiled***\n> Blackliff Pole\n> Blackliff Slasher \n> Clamity Queller \n> Debate Club \n> Dragon's Bane \n> Eye of perception\n> Fillet Blade\n> Halberd\n> Messenger\n> Primordial Jade Cutter\n> Prototype Amber\n> Prototype Cresent\n> The Unforged\n> Twin Nephriten\n\n***Narukami's***\n> Hamayumi \n> Haran Geppaku Futsu \n> Katsuragikiri Nagamasa \n> Mouun's Moon\n> Predator\n> Redhorn Stonethreser\n> Thundering Pulse")
      .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
      msg.reply({ embeds: [exampleEmbed] });
    } else if (dayOfWeek === 3) { //Rabu
      const exampleEmbed = new MessageEmbed()
      .setColor('#1F1F1F')
      .setTitle(':crossed_swords: Farming Accension Material Hari Ini :crossed_swords:')
      .setDescription("***Fetther's of The dandelion***\n> Alley Hunter \n> Amos Bow \n> Protector \n> Favonious Greatsword \n> Favonious Lance \n> Favonious Warbow \n> Festering Desire \n> Freedom Sworn\n> Frostbrearer\n> Iron Point\n> Otherwordly Story\n> Recurve Bow\n> Royal Bow\n> Royal Greatsword\n> Sacrificial Fragment\n> Sacrificial Sword\n> Skyward Spine\n> Traveler's Handy\n> White Iron Greatsword\n> Windblume Ode\n> Wolf's Gravestone\n\n***Aerosiderite***\n> Black Tassel\n> Compound Bow \n> Fadding Twilight \n> Iron Sting \n> Lithic Spear \n> Luxurious Sealord\n> Mappa Mare\n> Memorry of Dust\n> Prototype Archaic\n> Prototype Starglitter\n> Serpent Spine\n> Skyrider Greatsword\n> Skyrider Sword\n> Staff of Homa\n> Vortex Vanquisher\n\n***Mask***\n> The Catch \n> Engulfing Lightning\n> Kagura's Verity \n> Kitain Cross Spear\n> Polar Star\n> Wavebreaker's Fin")
      .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
      msg.reply({ embeds: [exampleEmbed] });
    } else if (dayOfWeek === 4) { //Kamis
      const exampleEmbed = new MessageEmbed()
      .setColor('#1F1F1F')
      .setTitle(':crossed_swords: Farming Accension Material Hari Ini :crossed_swords:')
      .setDescription("***Decarabian's***\n> Apprentices Notes \n> Aquila Favonia \n> Cinnabar Spindle \n> Cool Stell \n> Dull Blade \n> Favonious Codex \n> Favonious Sword \n> Ferrous Shadow\n> Magic Guide\n> Mitternachts Waltz\n> Pocket Grimoire\n> Raven Bow\n> Royal Grimoire\n> Royal Longsword\n> Silver Sword\n> Snow-Tombed Starsilver\n> Song of Broken Pines\n> The Alley Flash\n> The Bell\n> The Stringless\n> Viridescent Hunt\n\n***Luminous***\n> Aqua Simulacra\n> Blackliff Agate \n> Blackliff Longsword \n> Blackliff Warbow \n> Cresent Pike \n> Dark Iron Sword\n> Emerald Orb\n> Lion's Roar\n> Lithic Blade\n> Primordial Jade Winged Spear\n> Rust\n> Slingshot\n> Solar Pearl\n> Summit Shaper\n> White Tassel\n> Whiteblind\n\n***Branch of a Distant Sea***\n> Aukomaru \n> Amenoma Kageuchi \n> Everlasting Moonglow \n> Mistsplitter Reforged\n> Oathsworn Eye")
      .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
      msg.reply({ embeds: [exampleEmbed] });
    } else if (dayOfWeek === 5) { //Jumat
      const exampleEmbed = new MessageEmbed()
      .setColor('#1F1F1F')
      .setTitle(':crossed_swords: Farming Accension Material Hari Ini :crossed_swords:')
      .setDescription("***Boreal Wolf's***\n> Bloodtained Greatsword \n> Deathmatch \n> Dodoco Tales \n> Dragonspine Spear \n> Elegy for the End \n> Harbringer of Dawn \n> Hunter's Bow \n> Old Merc's Pal\n> Sacrificial Bow\n> Sacrificial Greatsword\n> Seasoned Hunter\n> Sharp Shooter\n> Skyward Atlas\n> Skyward Blade\n> Skyward Harp\n> Skyward Pride\n> Sword of Decension\n> The Black Sword\n> The Flute\n> Widsith\n> Thrilling Tales\n> Water Greatsword\n> Wine and Song\n\n***Mist Veiled***\n> Blackliff Pole\n> Blackliff Slasher \n> Clamity Queller \n> Debate Club \n> Dragon's Bane \n> Eye of perception\n> Fillet Blade\n> Halberd\n> Messenger\n> Primordial Jade Cutter\n> Prototype Amber\n> Prototype Cresent\n> The Unforged\n> Twin Nephriten\n\n***Narukami's***\n> Hamayumi \n> Haran Geppaku Futsu \n> Katsuragikiri Nagamasa \n> Mouun's Moon\n> Predator\n> Redhorn Stonethreser\n> Thundering Pulse")
      .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
      msg.reply({ embeds: [exampleEmbed] });
    } else if (dayOfWeek === 6) { //Sabtu
      const exampleEmbed = new MessageEmbed()
      .setColor('#1F1F1F')
      .setTitle(':crossed_swords: Farming Accension Material Hari Ini :crossed_swords:')
      .setDescription("***Fetther's of The dandelion***\n> Alley Hunter \n> Amos Bow \n> Protector \n> Favonious Greatsword \n> Favonious Lance \n> Favonious Warbow \n> Festering Desire \n> Freedom Sworn\n> Frostbrearer\n> Iron Point\n> Otherwordly Story\n> Recurve Bow\n> Royal Bow\n> Royal Greatsword\n> Sacrificial Fragment\n> Sacrificial Sword\n> Skyward Spine\n> Traveler's Handy\n> White Iron Greatsword\n> Windblume Ode\n> Wolf's Gravestone\n\n***Aerosiderite***\n> Black Tassel\n> Compound Bow \n> Fadding Twilight \n> Iron Sting \n> Lithic Spear \n> Luxurious Sealord\n> Mappa Mare\n> Memorry of Dust\n> Prototype Archaic\n> Prototype Starglitter\n> Serpent Spine\n> Skyrider Greatsword\n> Skyrider Sword\n> Staff of Homa\n> Vortex Vanquisher\n\n***Mask***\n> The Catch \n> Engulfing Lightning\n> Kagura's Verity \n> Kitain Cross Spear\n> Polar Star\n> Wavebreaker's Fin")
      .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
      msg.reply({ embeds: [exampleEmbed] });
    } else if (dayOfWeek === 0) { //Minggu
      const exampleEmbed = new MessageEmbed()
      .setColor('#1F1F1F')
      .setTitle(':crossed_swords: Farming Accension Material Hari Ini :crossed_swords:')
      .setDescription("Semua bisa farming di hari minggu traveler :)")
      .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
      msg.reply({ embeds: [exampleEmbed] });
    }
  }
 });
      // ------- WEAPON ENGLISH -----------------------------------------------------------------------------------------------------------------
client.on("message", msg =>{
  if (msg.content === "!weapon today"){ ///Indo 
    const dayOfWeek = new Date().getDay();
    if (dayOfWeek === 1) { //Sening
      const exampleEmbed = new MessageEmbed()
      .setColor('#1F1F1F')
      .setTitle(':crossed_swords: Today Farming Accension Material :crossed_swords:')
      .setDescription("***Decarabian's***\n> Apprentices Notes \n> Aquila Favonia \n> Cinnabar Spindle \n> Cool Stell \n> Dull Blade \n> Favonious Codex \n> Favonious Sword \n> Ferrous Shadow\n> Magic Guide\n> Mitternachts Waltz\n> Pocket Grimoire\n> Raven Bow\n> Royal Grimoire\n> Royal Longsword\n> Silver Sword\n> Snow-Tombed Starsilver\n> Song of Broken Pines\n> The Alley Flash\n> The Bell\n> The Stringless\n> Viridescent Hunt\n\n***Luminous***\n> Aqua Simulacra\n> Blackliff Agate \n> Blackliff Longsword \n> Blackliff Warbow \n> Cresent Pike \n> Dark Iron Sword\n> Emerald Orb\n> Lion's Roar\n> Lithic Blade\n> Primordial Jade Winged Spear\n> Rust\n> Slingshot\n> Solar Pearl\n> Summit Shaper\n> White Tassel\n> Whiteblind\n\n***Branch of a Distant Sea***\n> Aukomaru \n> Amenoma Kageuchi \n> Everlasting Moonglow \n> Mistsplitter Reforged\n> Oathsworn Eye")
      .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
      msg.reply({ embeds: [exampleEmbed] });
    } else if (dayOfWeek === 2) { //Selasa
      const exampleEmbed = new MessageEmbed()
      .setColor('#1F1F1F')
      .setTitle(':crossed_swords: Today Farming Accension Material :crossed_swords:')
      .setDescription("***Boreal Wolf's***\n> Bloodtained Greatsword \n> Deathmatch \n> Dodoco Tales \n> Dragonspine Spear \n> Elegy for the End \n> Harbringer of Dawn \n> Hunter's Bow \n> Old Merc's Pal\n> Sacrificial Bow\n> Sacrificial Greatsword\n> Seasoned Hunter\n> Sharp Shooter\n> Skyward Atlas\n> Skyward Blade\n> Skyward Harp\n> Skyward Pride\n> Sword of Decension\n> The Black Sword\n> The Flute\n> Widsith\n> Thrilling Tales\n> Water Greatsword\n> Wine and Song\n\n***Mist Veiled***\n> Blackliff Pole\n> Blackliff Slasher \n> Clamity Queller \n> Debate Club \n> Dragon's Bane \n> Eye of perception\n> Fillet Blade\n> Halberd\n> Messenger\n> Primordial Jade Cutter\n> Prototype Amber\n> Prototype Cresent\n> The Unforged\n> Twin Nephriten\n\n***Narukami's***\n> Hamayumi \n> Haran Geppaku Futsu \n> Katsuragikiri Nagamasa \n> Mouun's Moon\n> Predator\n> Redhorn Stonethreser\n> Thundering Pulse")
      .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
      msg.reply({ embeds: [exampleEmbed] });
    } else if (dayOfWeek === 3) { //Rabu
      const exampleEmbed = new MessageEmbed()
      .setColor('#1F1F1F')
      .setTitle(':crossed_swords: Today Farming Accension Material :crossed_swords:')
      .setDescription("***Fetther's of The dandelion***\n> Alley Hunter \n> Amos Bow \n> Protector \n> Favonious Greatsword \n> Favonious Lance \n> Favonious Warbow \n> Festering Desire \n> Freedom Sworn\n> Frostbrearer\n> Iron Point\n> Otherwordly Story\n> Recurve Bow\n> Royal Bow\n> Royal Greatsword\n> Sacrificial Fragment\n> Sacrificial Sword\n> Skyward Spine\n> Traveler's Handy\n> White Iron Greatsword\n> Windblume Ode\n> Wolf's Gravestone\n\n***Aerosiderite***\n> Black Tassel\n> Compound Bow \n> Fadding Twilight \n> Iron Sting \n> Lithic Spear \n> Luxurious Sealord\n> Mappa Mare\n> Memorry of Dust\n> Prototype Archaic\n> Prototype Starglitter\n> Serpent Spine\n> Skyrider Greatsword\n> Skyrider Sword\n> Staff of Homa\n> Vortex Vanquisher\n\n***Mask***\n> The Catch \n> Engulfing Lightning\n> Kagura's Verity \n> Kitain Cross Spear\n> Polar Star\n> Wavebreaker's Fin")
      .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
      msg.reply({ embeds: [exampleEmbed] });
    } else if (dayOfWeek === 4) { //Kamis
      const exampleEmbed = new MessageEmbed()
      .setColor('#1F1F1F')
      .setTitle(':crossed_swords: Today Farming Accension Material :crossed_swords:')
      .setDescription("***Decarabian's***\n> Apprentices Notes \n> Aquila Favonia \n> Cinnabar Spindle \n> Cool Stell \n> Dull Blade \n> Favonious Codex \n> Favonious Sword \n> Ferrous Shadow\n> Magic Guide\n> Mitternachts Waltz\n> Pocket Grimoire\n> Raven Bow\n> Royal Grimoire\n> Royal Longsword\n> Silver Sword\n> Snow-Tombed Starsilver\n> Song of Broken Pines\n> The Alley Flash\n> The Bell\n> The Stringless\n> Viridescent Hunt\n\n***Luminous***\n> Aqua Simulacra\n> Blackliff Agate \n> Blackliff Longsword \n> Blackliff Warbow \n> Cresent Pike \n> Dark Iron Sword\n> Emerald Orb\n> Lion's Roar\n> Lithic Blade\n> Primordial Jade Winged Spear\n> Rust\n> Slingshot\n> Solar Pearl\n> Summit Shaper\n> White Tassel\n> Whiteblind\n\n***Branch of a Distant Sea***\n> Aukomaru \n> Amenoma Kageuchi \n> Everlasting Moonglow \n> Mistsplitter Reforged\n> Oathsworn Eye")
      .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
      msg.reply({ embeds: [exampleEmbed] });
    } else if (dayOfWeek === 5) { //Jumat
      const exampleEmbed = new MessageEmbed()
      .setColor('#1F1F1F')
      .setTitle(':crossed_swords: Today Farming Accension Material :crossed_swords:')
      .setDescription("***Boreal Wolf's***\n> Bloodtained Greatsword \n> Deathmatch \n> Dodoco Tales \n> Dragonspine Spear \n> Elegy for the End \n> Harbringer of Dawn \n> Hunter's Bow \n> Old Merc's Pal\n> Sacrificial Bow\n> Sacrificial Greatsword\n> Seasoned Hunter\n> Sharp Shooter\n> Skyward Atlas\n> Skyward Blade\n> Skyward Harp\n> Skyward Pride\n> Sword of Decension\n> The Black Sword\n> The Flute\n> Widsith\n> Thrilling Tales\n> Water Greatsword\n> Wine and Song\n\n***Mist Veiled***\n> Blackliff Pole\n> Blackliff Slasher \n> Clamity Queller \n> Debate Club \n> Dragon's Bane \n> Eye of perception\n> Fillet Blade\n> Halberd\n> Messenger\n> Primordial Jade Cutter\n> Prototype Amber\n> Prototype Cresent\n> The Unforged\n> Twin Nephriten\n\n***Narukami's***\n> Hamayumi \n> Haran Geppaku Futsu \n> Katsuragikiri Nagamasa \n> Mouun's Moon\n> Predator\n> Redhorn Stonethreser\n> Thundering Pulse")
      .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
      msg.reply({ embeds: [exampleEmbed] });
    } else if (dayOfWeek === 6) { //Sabtu
      const exampleEmbed = new MessageEmbed()
      .setColor('#1F1F1F')
      .setTitle(':crossed_swords: Today Farming Accension Material :crossed_swords:')
      .setDescription("***Fetther's of The dandelion***\n> Alley Hunter \n> Amos Bow \n> Protector \n> Favonious Greatsword \n> Favonious Lance \n> Favonious Warbow \n> Festering Desire \n> Freedom Sworn\n> Frostbrearer\n> Iron Point\n> Otherwordly Story\n> Recurve Bow\n> Royal Bow\n> Royal Greatsword\n> Sacrificial Fragment\n> Sacrificial Sword\n> Skyward Spine\n> Traveler's Handy\n> White Iron Greatsword\n> Windblume Ode\n> Wolf's Gravestone\n\n***Aerosiderite***\n> Black Tassel\n> Compound Bow \n> Fadding Twilight \n> Iron Sting \n> Lithic Spear \n> Luxurious Sealord\n> Mappa Mare\n> Memorry of Dust\n> Prototype Archaic\n> Prototype Starglitter\n> Serpent Spine\n> Skyrider Greatsword\n> Skyrider Sword\n> Staff of Homa\n> Vortex Vanquisher\n\n***Mask***\n> The Catch \n> Engulfing Lightning\n> Kagura's Verity \n> Kitain Cross Spear\n> Polar Star\n> Wavebreaker's Fin")
      .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
      msg.reply({ embeds: [exampleEmbed] });
    } else if (dayOfWeek === 0) { //Minggu
      const exampleEmbed = new MessageEmbed()
      .setColor('#1F1F1F')
      .setTitle(':crossed_swords: Today Farming Accension Material :crossed_swords:')
      .setDescription("All Weapon can do farm today traveler :)")
      .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
      msg.reply({ embeds: [exampleEmbed] });
    }
  }
 });
// ------- TALENT INDO -----------------------------------------------------------------------------------------------------------------
client.on("message", msg =>{
  if (msg.content === "!talent sekarang"){ ///Indo 
    const dayOfWeek = new Date().getDay();
    if (dayOfWeek === 1) { //Sening/Kamis
      const exampleEmbed = new MessageEmbed()
      .setColor('#1F1F1F')
      .setTitle(':white_sun_cloud: Farming Talent Hari Ini :white_sun_cloud: ')
      .setDescription("***Freedom***\n> Amber \n> Barbara \n> Klee \n> Sucrose \n> Traveler Geo/Anemo \n > Childe \n> Klee \n> Diona\n\n***Prosperity***\n> Yelan \n> Keqing \n> Ningguang \n> Qiqi \n> Shenhe \n> Xiao\n\n***Transience***\n> Electro Traveler \n> Kokomi \n> Thoma \n> Yoimiya")
      .setThumbnail(msg.author.avatarURL())
      .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
      msg.reply({ embeds: [exampleEmbed] });
    } else if (dayOfWeek === 2) { //Sening/Kamis
      const exampleEmbed = new MessageEmbed()
      .setColor('#1F1F1F')
      .setTitle(':white_sun_cloud: Farming Talent Hari Ini :white_sun_cloud: ')
      .setDescription("***Resistance***\n> Bennett \n> Diluc \n> Eula \n> Jean \n> Mona \n> Noelle \n> Razor\n\n***Diligence***\n> Chongyun \n> Ganyu \n> Hu-Tao \n> Kazuha \n> Xiangling \n> Yun-Jin\n\n***Elegance***\n> Ayaka \n> Ayato \n> Itto \n> Kujou-Sara")
      .setThumbnail(msg.author.avatarURL())
      .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
      msg.reply({ embeds: [exampleEmbed] });
    } else if (dayOfWeek === 3) { //Sening/Kamis
      const exampleEmbed = new MessageEmbed()
      .setColor('#1F1F1F')
      .setTitle(':white_sun_cloud: Farming Talent Hari Ini :white_sun_cloud: ')
      .setDescription("***Ballad***\n> Albedo \n> Fischl \n> Kaeya \n> Lisa \n> Rosaria \n> Venti\n\n***Gold***\n> Beidou \n> Xingqiu \n> Xinyan \n> Yanfei \n> Zhongli\n\n***Light***\n> Gorou\n> Raiden Shogun\n> Sayu \n> Yae Miko")
      .setThumbnail(msg.author.avatarURL())
      .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
      msg.reply({ embeds: [exampleEmbed] });
    } else if (dayOfWeek === 4) { //Sening/Kamis
      const exampleEmbed = new MessageEmbed()
      .setColor('#1F1F1F')
      .setTitle(':white_sun_cloud: Farming Talent Hari Ini :white_sun_cloud: ')
      .setDescription("***Freedom***\n> Amber \n> Barbara \n> Klee \n> Sucrose \n> Traveler Geo/Anemo \n >Childe \n> Klee \n> Diona\n\n***Prosperity***\n> Yelan \n> Keqing \n> Ningguang \n> Qiqi \n> Shenhe \n> Xiao\n\n***Transience***\n> Electro Traveler \n> Kokomi \n> Thoma \n> Yoimiya")
      .setThumbnail(msg.author.avatarURL())
      .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
      msg.reply({ embeds: [exampleEmbed] });
    } else if (dayOfWeek === 5) { //Sening/Kamis
      const exampleEmbed = new MessageEmbed()
      .setColor('#1F1F1F')
      .setTitle(':white_sun_cloud: Farming Talent Hari Ini :white_sun_cloud: ')
      .setDescription("***Resistance***\n> Bennett \n> Diluc \n> Eula \n> Jean \n> Mona \n> Noelle \n> Razor\n\n***Diligence***\n> Chongyun \n> Ganyu \n> Hu-Tao \n> Kazuha \n> Xiangling \n> Yun-Jin\n\n***Elegance***\n> Ayaka \n> Ayato \n> Itto \n> Kujou-Sara")
      .setThumbnail(msg.author.avatarURL())
      .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
      msg.reply({ embeds: [exampleEmbed] });
    } else if (dayOfWeek === 6) { //Sening/Kamis
      const exampleEmbed = new MessageEmbed()
      .setColor('#1F1F1F')
      .setTitle(':white_sun_cloud: Farming Talent Hari Ini :white_sun_cloud: ')
      .setDescription("***Ballad***\n> Albedo \n> Fischl \n> Kaeya \n> Lisa \n> Rosaria \n> Venti\n\n***Gold***\n> Beidou \n> Xingqiu \n> Xinyan \n> Yanfei \n> Zhongli\n\n***Light***\n> Gorou\n> Raiden Shogun\n> Sayu \n> Yae Miko")
      .setThumbnail(msg.author.avatarURL())
      .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
      msg.reply({ embeds: [exampleEmbed] });
    } else if (dayOfWeek === 0) {
      const exampleEmbed = new MessageEmbed()
      .setColor('#1F1F1F')
      .setTitle(':white_sun_cloud: Farming Talent Hari Ini :white_sun_cloud: ')
      .setDescription("Semua bisa farming di hari minggu traveler :)")
      .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
      msg.reply({ embeds: [exampleEmbed] });
    }
  }
 });
// ------- TALENT ENGLISH -----------------------------------------------------------------------------------------------------------------
client.on("message", msg =>{
  if (msg.content === "!talent today"){ ///Indo 
    const dayOfWeek = new Date().getDay();
    if (dayOfWeek === 1) { //Sening/Kamis
      const exampleEmbed = new MessageEmbed()
      .setColor('#1F1F1F')
      .setTitle(':white_sun_cloud: Today Farming Talent :white_sun_cloud: ')
      .setDescription("***Freedom***\n> Amber \n> Barbara \n> Klee \n> Sucrose \n> Traveler Geo/Anemo \n >Childe \n> Klee \n> Diona\n\n***Prosperity***\n> Yelan \n> Keqing \n> Ningguang \n> Qiqi \n> Shenhe \n> Xiao\n\n***Transience***\n> Electro Traveler \n> Kokomi \n> Thoma \n> Yoimiya")
      .setThumbnail(msg.author.avatarURL())
      .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
      msg.reply({ embeds: [exampleEmbed] });
    } else if (dayOfWeek === 2) { //Sening/Kamis
      const exampleEmbed = new MessageEmbed()
      .setColor('#1F1F1F')
      .setTitle(':white_sun_cloud: Today Farming Talent :white_sun_cloud: ')
      .setDescription("***Resistance***\n> Bennett \n> Diluc \n> Eula \n> Jean \n> Mona \n> Noelle \n> Razor\n\n***Diligence***\n> Chongyun \n> Ganyu \n> Hu-Tao \n> Kazuha \n> Xiangling \n> Yun-Jin\n\n***Elegance***\n> Ayaka \n> Ayato \n> Itto \n> Kujou-Sara")
      .setThumbnail(msg.author.avatarURL())
      .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
      msg.reply({ embeds: [exampleEmbed] });
    } else if (dayOfWeek === 3) { //Sening/Kamis
      const exampleEmbed = new MessageEmbed()
      .setColor('#1F1F1F')
      .setTitle(':white_sun_cloud: Today Farming Talent :white_sun_cloud: ')
      .setDescription("***Ballad***\n> Albedo \n> Fischl \n> Kaeya \n> Lisa \n> Rosaria \n> Venti\n\n***Gold***\n> Beidou \n> Xingqiu \n> Xinyan \n> Yanfei \n> Zhongli\n\n***Light***\n> Gorou\n> Raiden Shogun\n> Sayu \n> Yae Miko")
      .setThumbnail(msg.author.avatarURL())
      .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
      msg.reply({ embeds: [exampleEmbed] });
    } else if (dayOfWeek === 4) { //Sening/Kamis
      const exampleEmbed = new MessageEmbed()
      .setColor('#1F1F1F')
      .setTitle(':white_sun_cloud: Today Farming Talent :white_sun_cloud: ')
      .setDescription("***Freedom***\n> Amber \n> Barbara \n> Klee \n> Sucrose \n> Traveler Geo/Anemo \n >Childe \n> Klee \n> Diona\n\n***Prosperity***\n> Yelan \n> Keqing \n> Ningguang \n> Qiqi \n> Shenhe \n> Xiao\n\n***Transience***\n> Electro Traveler \n> Kokomi \n> Thoma \n> Yoimiya")
      .setThumbnail(msg.author.avatarURL())
      .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
      msg.reply({ embeds: [exampleEmbed] });
    } else if (dayOfWeek === 5) { //Sening/Kamis
      const exampleEmbed = new MessageEmbed()
      .setColor('#1F1F1F')
      .setTitle(':white_sun_cloud: Today Farming Talent :white_sun_cloud: ')
      .setDescription("***Resistance***\n> Bennett \n> Diluc \n> Eula \n> Jean \n> Mona \n> Noelle \n> Razor\n\n***Diligence***\n> Chongyun \n> Ganyu \n> Hu-Tao \n> Kazuha \n> Xiangling \n> Yun-Jin\n\n***Elegance***\n> Ayaka \n> Ayato \n> Itto \n> Kujou-Sara")
      .setThumbnail(msg.author.avatarURL())
      .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
      msg.reply({ embeds: [exampleEmbed] });
    } else if (dayOfWeek === 6) { //Sening/Kamis
      const exampleEmbed = new MessageEmbed()
      .setColor('#1F1F1F')
      .setTitle(':white_sun_cloud: Today Farming Talent :white_sun_cloud: ')
      .setDescription("***Ballad***\n> Albedo \n> Fischl \n> Kaeya \n> Lisa \n> Rosaria \n> Venti\n\n***Gold***\n> Beidou \n> Xingqiu \n> Xinyan \n> Yanfei \n> Zhongli\n\n***Light***\n> Gorou\n> Raiden Shogun\n> Sayu \n> Yae Miko")
      .setThumbnail(msg.author.avatarURL())
      .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
      msg.reply({ embeds: [exampleEmbed] });
    } else if (dayOfWeek === 0) {
      const exampleEmbed = new MessageEmbed()
      .setColor('#1F1F1F')
      .setTitle(':white_sun_cloud: Today Farming Talent :white_sun_cloud: ')
      .setDescription("All characters can do farm today traveler :)")
      .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
      msg.reply({ embeds: [exampleEmbed] });
    }
  }
 });
// ------- DOMAIN INDO ---------------------------------------------------------------------------------------------------------------------
client.on("message", msg => {
  if (msg.content === "!credit"){
    const exampleEmbed = new MessageEmbed()
    .setColor('#1F1F1F')
    .setTitle(':compass: Paimon Credit :compass:')
    .setDescription("Paimon special only for Genshination server. All image content or information that Paimon provides in this server is the copyright work of ***Hoyoverse***. \n\n***Programmer :*** Nevada\n***Designer :*** Nevada")
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
    msg.reply({ embeds: [exampleEmbed] });
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
  else if (msg.content === "!tq"){
    msg.reply("Urwellcome, Sama sama traveler ^^");
  }
  else if (msg.content === "paimon tidak boleh marah"){
    msg.reply("Paimon tidak marah kok traveler ^^");
  }
})

// ------ DIALOGUE INDO ------------------------------------------------------------------------------------
client.on("message", msg => {
  if (msg.content === "Thank you paimon"){
    msg.reply(" Urwellcome Traveler ^^");
  }
  else if (msg.content === "Hello paimon"){
    msg.reply("Paimon Here traveler :)");
  }
  else if (msg.content === "dasar emergency food"){
    msg.reply("Paimon bukan emergency food >:(");
  }
  else if (msg.content === "ehe"){
    msg.reply("Ehetttenadayo >////:(");
  }
  else if (msg.content === "paimon di sin"){
    msg.reply("Ehetttenadayo >////:(");
  }
  else if (msg.content === "!tentang server"){
    const exampleEmbed = new MessageEmbed()
    .setTitle(':thought_balloon: Tentang server Genshination :thought_balloon: ')
    .setDescription("Genshination adalah server tempat berkumpulnya para traveler, disini para traveler dapat berbagi pengalaman bermain, belajar seputar dunia teyvat dan bermain bersama traveler lain, server ini juga dijaga oleh paimon loh, jagi jangan aneh-aneh ya, harus sopan antar sesama traveler atau nanti paimon bisa mengeluarkan kalian hehe, tapi paimon baik kok, paimon menyediakan berbagai fitur menarik bagi traveler hanya dengan menggunakan command `!bantu`. Semoga betah traveler jangan sungkan untuk bertanya ya ^^")
    .setFooter({ text: "Genshination",
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
    msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!about server"){
    const exampleEmbed = new MessageEmbed()
    .setTitle(':thought_balloon: About this server :thought_balloon: ')
    .setDescription("Genshination is a server where travelers can gather, share playing experiences, learn about the world of Teyvat and play with other travelers, this server is also monitored by Paimon, so you have to be polite between fellow travelers or Paimon will kick you hehe, but paimon provides a variety of interesting features for travelers just by using the command `!help`. Hopefully travelers feel comfortable, don't hesitate to ask ^^")
    .setFooter({ text: "Genshination",
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
    msg.reply({ embeds: [exampleEmbed] });
  }
})

//------- ARTIFACT ------------------------------------------------------------------------------------
client.on("message", msg => {
  if (msg.content === "!arti adventurer") {
    const exampleEmbed = new MessageEmbed()
    .addField("🏺 Artifact Information 🏺", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1OH3frvEP42nvQtm9A1C5RIVEW9Zy3Krw')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!arti archaic") {
    const exampleEmbed = new MessageEmbed()
    .addField("🏺 Artifact Information 🏺", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1vYyFoVj5ZOgnfDs9H0a-6IbzTxOOT2rX')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!arti berseker") {
    const exampleEmbed = new MessageEmbed()
    .addField("🏺 Artifact Information 🏺", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1pOQf4cJ3n6DTTQDtMVqFdFxqr0VvdYIp')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!arti blizzard") {
    const exampleEmbed = new MessageEmbed()
    .addField("🏺 Artifact Information 🏺", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1sBlHXPYBEohmVFzXHgTdrcDVu51RYs4-')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!arti bloodstained") {
    const exampleEmbed = new MessageEmbed()
    .addField("🏺 Artifact Information 🏺", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=13Ybn8kj0A1sYwUacLQ63dgLG4EB3Esen')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!arti brave") {
    const exampleEmbed = new MessageEmbed()
    .addField("🏺 Artifact Information 🏺", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=13-p4gdz3UP8NS6ysFKVl5kWEaiWakUzS')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!arti brave heart") {
    const exampleEmbed = new MessageEmbed()
    .addField("🏺 Artifact Information 🏺", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=13-p4gdz3UP8NS6ysFKVl5kWEaiWakUzS')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!arti crimson") {
    const exampleEmbed = new MessageEmbed()
    .addField("🏺 Artifact Information 🏺", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1ffXrl64aIzoEykwMt7_xoLjpxoBwSj-j')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!arti defender's") {
    const exampleEmbed = new MessageEmbed()
    .addField("🏺 Artifact Information 🏺", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1nP8k--BtcAL2mt4eJqlK97lx36umNbB0')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!arti defender") {
    const exampleEmbed = new MessageEmbed()
    .addField("🏺 Artifact Information 🏺", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1nP8k--BtcAL2mt4eJqlK97lx36umNbB0')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!arti prayers to destiny") {
    const exampleEmbed = new MessageEmbed()
    .addField("🏺 Artifact Information 🏺", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1MIqInO5YmXOSJLy9l6Pj4BTrw53taZQq')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!arti destiny") {
    const exampleEmbed = new MessageEmbed()
    .addField("🏺 Artifact Information 🏺", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1MIqInO5YmXOSJLy9l6Pj4BTrw53taZQq')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!arti echoes") {
    const exampleEmbed = new MessageEmbed()
    .addField("🏺 Artifact Information 🏺", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1y4GbCdSIAjbfBEV6ENNWbFxFzjcUAipV')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!arti emblem") {
    const exampleEmbed = new MessageEmbed()
    .addField("🏺 Artifact Information 🏺", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1RmcAVGptJKcKBRsb5rI2J_hWfXbEyDeG')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!arti the exile") {
    const exampleEmbed = new MessageEmbed()
    .addField("🏺 Artifact Information 🏺", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1Ba4Q5NwquPBh8CwxQ7vLwfcF5uZXVctC')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!arti gambler") {
    const exampleEmbed = new MessageEmbed()
    .addField("🏺 Artifact Information 🏺", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1Wr7mw9I2VZcR5ghScs9MPEIWcgO8QehM')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!arti gladiator's finale") {
    const exampleEmbed = new MessageEmbed()
    .addField("🏺 Artifact Information 🏺", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1pzFD-PxvqQnR8WatmRKDAFXPe5qRzZ6S')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!arti gladi") {
    const exampleEmbed = new MessageEmbed()
    .addField("🏺 Artifact Information 🏺", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1pzFD-PxvqQnR8WatmRKDAFXPe5qRzZ6S')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!arti hod") {
    const exampleEmbed = new MessageEmbed()
    .addField("🏺 Artifact Information 🏺", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1spXYCQmgYkmIDjWFECcSnhS61ar4T1Qg')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!arti heart of depth") {
    const exampleEmbed = new MessageEmbed()
    .addField("🏺 Artifact Information 🏺", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1spXYCQmgYkmIDjWFECcSnhS61ar4T1Qg')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!arti husk") {
    const exampleEmbed = new MessageEmbed()
    .addField("🏺 Artifact Information 🏺", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1FKpgcHfxuAWJLMrQ2y3kueyeWbTF_UmN')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!arti husk of opulent dreams") {
    const exampleEmbed = new MessageEmbed()
    .addField("🏺 Artifact Information 🏺", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1FKpgcHfxuAWJLMrQ2y3kueyeWbTF_UmN')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!arti prayers to illumination") {
    const exampleEmbed = new MessageEmbed()
    .addField("🏺 Artifact Information 🏺", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1PLd74r_iqH6i9XXWkY_dBxgHwyFooxvf')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!arti illumination") {
    const exampleEmbed = new MessageEmbed()
    .addField("🏺 Artifact Information 🏺", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1PLd74r_iqH6i9XXWkY_dBxgHwyFooxvf')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!arti instructor") {
    const exampleEmbed = new MessageEmbed()
    .addField("🏺 Artifact Information 🏺", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1vi6xZwMAaFC3ev5MmJcMSkFgD5OlA50P')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!arti lavawalker") {
    const exampleEmbed = new MessageEmbed()
    .addField("🏺 Artifact Information 🏺", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1z-dohAQMyZgc6ROdLXjss2YkHbYJKogI')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!arti lucky dog") {
    const exampleEmbed = new MessageEmbed()
    .addField("🏺 Artifact Information 🏺", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1qoQQ-E2E-9B3tssd1apaGDOptX2zHlpR')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!arti lucky") {
    const exampleEmbed = new MessageEmbed()
    .addField("🏺 Artifact Information 🏺", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1qoQQ-E2E-9B3tssd1apaGDOptX2zHlpR')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!arti dog") {
    const exampleEmbed = new MessageEmbed()
    .addField("🏺 Artifact Information 🏺", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1qoQQ-E2E-9B3tssd1apaGDOptX2zHlpR')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!arti maiden beloved") {
    const exampleEmbed = new MessageEmbed()
    .addField("🏺 Artifact Information 🏺", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1DRecg3Pf4kdy7w_y69nZSW9dul5C5Dab')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!arti maiden") {
    const exampleEmbed = new MessageEmbed()
    .addField("🏺 Artifact Information 🏺", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1DRecg3Pf4kdy7w_y69nZSW9dul5C5Dab')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!arti nobless oblige") {
    const exampleEmbed = new MessageEmbed()
    .addField("🏺 Artifact Information 🏺", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1pWFC3lZP09TmZZqZY3km0sPIUuyOrJnr')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!arti nobless") {
    const exampleEmbed = new MessageEmbed()
    .addField("🏺 Artifact Information 🏺", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1pWFC3lZP09TmZZqZY3km0sPIUuyOrJnr')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!arti ocean") {
    const exampleEmbed = new MessageEmbed()
    .addField("🏺 Artifact Information 🏺", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=13pF2-ZbU_78ZyK5wLtblPp2vRtB2PxbO')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!arti ocean-hued clam") {
    const exampleEmbed = new MessageEmbed()
    .addField("🏺 Artifact Information 🏺", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=13pF2-ZbU_78ZyK5wLtblPp2vRtB2PxbO')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!arti pale flame") {
    const exampleEmbed = new MessageEmbed()
    .addField("🏺 Artifact Information 🏺", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=17K8e26VHojJHaIq30AheeQ4yozokWAHW')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!arti resolution") {
    const exampleEmbed = new MessageEmbed()
    .addField("🏺 Artifact Information 🏺", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1Y0nWwHBO7WWwtfVH_EYRQVF90L46PZiQ')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!arti resolution of sojuner") {
    const exampleEmbed = new MessageEmbed()
    .addField("🏺 Artifact Information 🏺", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1Y0nWwHBO7WWwtfVH_EYRQVF90L46PZiQ')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!arti retracing bolide") {
    const exampleEmbed = new MessageEmbed()
    .addField("🏺 Artifact Information 🏺", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1NdvOJD0LpAawuOzRIP8qMSG3Ebnhds6q')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!arti retracing") {
    const exampleEmbed = new MessageEmbed()
    .addField("🏺 Artifact Information 🏺", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1NdvOJD0LpAawuOzRIP8qMSG3Ebnhds6q')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!arti scholar") {
    const exampleEmbed = new MessageEmbed()
    .addField("🏺 Artifact Information 🏺", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1oJ76BXqTRY8ZOM-Sdk1Y9-RtMmvSEe03')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!arti shimenawa") {
    const exampleEmbed = new MessageEmbed()
    .addField("🏺 Artifact Information 🏺", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1A44LZUgxRi3ses7LD9M9kDgYSyvbYVwt')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!arti shimenawa's") {
    const exampleEmbed = new MessageEmbed()
    .addField("🏺 Artifact Information 🏺", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1A44LZUgxRi3ses7LD9M9kDgYSyvbYVwt')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!arti shimenawa's reminiscence") {
    const exampleEmbed = new MessageEmbed()
    .addField("🏺 Artifact Information 🏺", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1A44LZUgxRi3ses7LD9M9kDgYSyvbYVwt')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!arti prayers to springtime") {
    const exampleEmbed = new MessageEmbed()
    .addField("🏺 Artifact Information 🏺", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1v6iyFUxW6DlA6aXfeIYAOV81-YvNNTP2')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!arti springtime") {
    const exampleEmbed = new MessageEmbed()
    .addField("🏺 Artifact Information 🏺", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1v6iyFUxW6DlA6aXfeIYAOV81-YvNNTP2')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!arti tenacity") {
    const exampleEmbed = new MessageEmbed()
    .addField("🏺 Artifact Information 🏺", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1yxedkUecsbUGxDN4qp40kOUFbdnrREvN')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!arti tenacity of millelith") {
    const exampleEmbed = new MessageEmbed()
    .addField("🏺 Artifact Information 🏺", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1yxedkUecsbUGxDN4qp40kOUFbdnrREvN')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
}
  else if (msg.content === "!arti millelith") {
    const exampleEmbed = new MessageEmbed()
    .addField("🏺 Artifact Information 🏺", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1yxedkUecsbUGxDN4qp40kOUFbdnrREvN')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!arti thundering") {
    const exampleEmbed = new MessageEmbed()
    .addField("🏺 Artifact Information 🏺", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1GPxLu2bY187pckM9CvSq-2o3JJ2mDxSM')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!arti thundering fury") {
    const exampleEmbed = new MessageEmbed()
    .addField("🏺 Artifact Information 🏺", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1GPxLu2bY187pckM9CvSq-2o3JJ2mDxSM')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!arti thundershooter") {
    const exampleEmbed = new MessageEmbed()
    .addField("🏺 Artifact Information 🏺", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1OjQrARzgo1z3jxQrLuV9Dwb7s3Y2tojN')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!arti tiny miracle") {
    const exampleEmbed = new MessageEmbed()
    .addField("🏺 Artifact Information 🏺", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1PQqRzB4lf46PqYITqx1_zkcF9kleI9SH')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!arti traveling doctor") {
    const exampleEmbed = new MessageEmbed()
    .addField("🏺 Artifact Information 🏺", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1uLGceJXoqhtmgso3U4rg9PS0wqYBWYe7')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!arti vermillion") {
    const exampleEmbed = new MessageEmbed()
    .addField("🏺 Artifact Information 🏺", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=17Zdsny5fB-jB7rlH3pkGg7LJN-6zoDt-')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!arti vermillion hereafter") {
    const exampleEmbed = new MessageEmbed()
    .addField("🏺 Artifact Information 🏺", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=17Zdsny5fB-jB7rlH3pkGg7LJN-6zoDt-')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!arti viri") {
    const exampleEmbed = new MessageEmbed()
    .addField("🏺 Artifact Information 🏺", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1tMHQFGVugDPkx4A_LjKSoHuKMpYAwiB-')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!arti viridescent venerer") {
    const exampleEmbed = new MessageEmbed()
    .addField("🏺 Artifact Information 🏺", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1tMHQFGVugDPkx4A_LjKSoHuKMpYAwiB-')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!arti wanderer's troupe") {
    const exampleEmbed = new MessageEmbed()
    .addField("🏺 Artifact Information 🏺", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1GXRW3n9KQYL-9XJdue5f2fJ2W83Yb8d_')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!arti wanderer") {
    const exampleEmbed = new MessageEmbed()
    .addField("🏺 Artifact Information 🏺", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1GXRW3n9KQYL-9XJdue5f2fJ2W83Yb8d_')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!arti wanderer's") {
    const exampleEmbed = new MessageEmbed()
    .addField("🏺 Artifact Information 🏺", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1GXRW3n9KQYL-9XJdue5f2fJ2W83Yb8d_')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!arti prayers to wisdom") {
    const exampleEmbed = new MessageEmbed()
    .addField("🏺 Artifact Information 🏺", "Paimon ready for `!help` >.<", true)
    .setImage("https://drive.google.com/uc?id=15RKtqYQBB5dUNyzH4bCrrrO2ZCDkGxqJ")
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!arti prayers to wisdom") {
    const exampleEmbed = new MessageEmbed()
    .addField("🏺 Artifact Information 🏺", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=15RKtqYQBB5dUNyzH4bCrrrO2ZCDkGxqJ')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
})

//Build charcter
client.on("message", msg => {
  if (msg.content === "!build albedo") { //albedo
    const exampleEmbed = new MessageEmbed()
    .addField("💫  Character Build 💫", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1KMSHvMqen-VFdXMU9FYFz8LjZrIiqbI3')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!build aloy") { //aloy
    const exampleEmbed = new MessageEmbed()
    .addField("💫  Character Build 💫", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=154StRKmWsW5YyZWSYL_oY8nIfUwV90rv')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!build amber") { //amber
    const exampleEmbed = new MessageEmbed()
    .addField("💫  Character Build 💫", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1ZzXHwQYoXZih9O9Q4u9tsSZK6pLVXKuO')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!build ayaka") { // AYAKA
    const exampleEmbed = new MessageEmbed()
    .addField("💫  Character Build 💫", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=10sMjnlUwLjym9VG5ZQSzbojwA78QGxg0')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!build ayato") { // AYATO
    const exampleEmbed = new MessageEmbed()
    .addField("💫  Character Build 💫", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1RTLLXDbN9jK6sqOoo6A34pIC_f1jBZ6P')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!build barbara") { // BARBARA
    const exampleEmbed = new MessageEmbed()
    .addField("💫  Character Build 💫", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1NXWL4hDseCd84VSch4CFYqa3kyNWJaz5')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!build beidou") { // BEIDOU
    const exampleEmbed = new MessageEmbed()
    .addField("💫  Character Build 💫", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1MZIqDKZW8Gzra7R-fOaRh6wLH9QBtQr0')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!build bennett") { // BENNET
    const exampleEmbed = new MessageEmbed()
    .addField("💫  Character Build 💫", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1ysv6Mj34MMnRvjfON92ixJmh7fJFqXqo')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!build childe") { // ChHILDE
    const exampleEmbed = new MessageEmbed()
    .addField("💫  Character Build 💫", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1eYcLUOkCRCfZ1vpAcdMxmYoVxTNuLqcx')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!build chongyun") { // CHONGYUN
    const exampleEmbed = new MessageEmbed()
    .addField("💫  Character Build 💫", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1HA2TkFCdKQLIAfxAi7IQIb9MZY4SQVv5')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!build diona") { // DILUC
    const exampleEmbed = new MessageEmbed()
    .addField("💫  Character Build 💫", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=18CDNh9qB49XikoTFjUCRsPPR7uFtAkiV')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!build diluc") { // DIONA
    const exampleEmbed = new MessageEmbed()
    .addField("💫  Character Build 💫", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1RQICYq5P2jxOxuHyCoqmAtLHRSeP54el')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!build eula") { // EULA
    const exampleEmbed = new MessageEmbed()
    .addField("💫  Character Build 💫", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1Cnul4kQVrGZG-i3BcCyNM4ofF-Ba_5FX')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!build fischl") { // FISCHL
    const exampleEmbed = new MessageEmbed()
    .addField("💫  Character Build 💫", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1qDE-r33aIuVVQ_Am0PFbocs2dhYU2IXI')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!build ganyu") { // GANYU
    const exampleEmbed = new MessageEmbed()
    .addField("💫  Character Build 💫", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1B34o8n5EHdjQao3CusT5GUg2rtVV4vgg')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!build gorou") { // GOROU
    const exampleEmbed = new MessageEmbed()
    .addField("💫  Character Build 💫", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=13FPcfsQv2FViMVumNBFicO5cL5NPvq5t')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!build hutao") { // HUTAO
    const exampleEmbed = new MessageEmbed()
    .addField("💫  Character Build 💫", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=122I8wg-piMxuUwhBJ_jrM_LuTvAwIhh-')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!build itto") { // ITTO
    const exampleEmbed = new MessageEmbed()
    .addField("💫  Character Build 💫", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1MACcxXD9ta5iMUPNIE28ch1rN5Nej0mi')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!build jean") { // JEAN
    const exampleEmbed = new MessageEmbed()
    .addField("💫  Character Build 💫", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1qqs_xmTnjoFJHoJ9yZswhvGem5k5ByrS')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!build kaeya") { // KAEYA
    const exampleEmbed = new MessageEmbed()
    .addField("💫  Character Build 💫", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=16RHKggrKPK49exEV1qVvBx2zQiVZCozu')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!build kazuha") { // KAZUHA
    const exampleEmbed = new MessageEmbed()
    .addField("💫  Character Build 💫", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=13vmEJTjP1Vct9qVf7aUEg50aH9JDd3o_')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!build keqing") { // KEQING
    const exampleEmbed = new MessageEmbed()
    .addField("💫  Character Build 💫", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1uuqaD5JPgJ6Jq3ATgLAz775LPcpgiEgR')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!build klee") { // KLEE
    const exampleEmbed = new MessageEmbed()
    .addField("💫  Character Build 💫", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1C4xbsemiqctwxFQskn7HdTEIxLNT7dQw')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!build kokomi") { // KOKOMI 
    const exampleEmbed = new MessageEmbed()
    .addField("💫  Character Build 💫", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1PgwQXo6EvcEBC5-ILjB0HAJKgPYdCh_W')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!build kujou sara") { // KUJOU
    const exampleEmbed = new MessageEmbed()
    .addField("💫  Character Build 💫", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1BRlOBockwkk4szHwu7YsJgZokMNH6EhN')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!build lisa") { // LISA
    const exampleEmbed = new MessageEmbed()
    .addField("💫  Character Build 💫", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1rMoJE4nW0ernU9wYR-x2n7_eQYfpSAED')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!build mona") { // MONA
    const exampleEmbed = new MessageEmbed()
    .addField("💫  Character Build 💫", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=18Gkt2cKCAA_hevjoW3rO1JaEnUbjl5sR')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!build ningguang") { // NINGGUANG
    const exampleEmbed = new MessageEmbed()
    .addField("💫  Character Build 💫", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1bkOf-z18qC9WaoCxRjfeqDFG9efNfIaY')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!build noelle") { // NOELLE
    const exampleEmbed = new MessageEmbed()
    .addField("💫  Character Build 💫", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1z2c-jI34tqv1k8lLJduVOsKyIRqFa9DD')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!build paimon") { // PAIMON
    const exampleEmbed = new MessageEmbed()
    .addField("💫  Character Build 💫", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1X_Eo_nwLWBVHylFTE7oxQTr2IOUZSWe6')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!build qiqi") { // QIQI
    const exampleEmbed = new MessageEmbed()
    .addField("💫  Character Build 💫", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1JZIMukYwAAuDyv_nT_BA6RYWMvFBrzvr')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  } 
  else if (msg.content === "!build razor") { // RAZOR
    const exampleEmbed = new MessageEmbed()
    .addField("💫  Character Build 💫", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1T9te3RorXZXVn4C95L0uy0oqvgZYbanU')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!build rosaria") { // ROSARIA
    const exampleEmbed = new MessageEmbed()
    .addField("💫  Character Build 💫", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1h8v-VxOvCU7J4q6pM4RyBY0Tz7KRJIgz')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!build sayu") { // SAYU
    const exampleEmbed = new MessageEmbed()
    .addField("💫  Character Build 💫", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=17hurOitj-Aov_73zT7C3fFQ1N1HvSJzR')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!build shenhe") { // SHENHE
    const exampleEmbed = new MessageEmbed()
    .addField("💫  Character Build 💫", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1QOTbw7MJd2rbxu67lliemLAscGIB8Hi2')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!build raiden shogun") { // SHOGUN
    const exampleEmbed = new MessageEmbed()
    .addField("💫  Character Build 💫", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1g8Hy5c8on7RQ_VM9diUkVcdKRQGIWsSX')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!build raiden") { // SHOGUN
    const exampleEmbed = new MessageEmbed()
    .addField("💫  Character Build 💫", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1g8Hy5c8on7RQ_VM9diUkVcdKRQGIWsSX')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!build mami baal") { // SHOGUN
    const exampleEmbed = new MessageEmbed()
    .addField("💫  Character Build 💫", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1g8Hy5c8on7RQ_VM9diUkVcdKRQGIWsSX')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!build baal") { // SHOGUN
    const exampleEmbed = new MessageEmbed()
    .addField("💫  Character Build 💫", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1g8Hy5c8on7RQ_VM9diUkVcdKRQGIWsSX')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!build ei") { // SHOGUN
    const exampleEmbed = new MessageEmbed()
    .addField("💫  Character Build 💫", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1g8Hy5c8on7RQ_VM9diUkVcdKRQGIWsSX')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!build raiden ei") { // SHOGUN
    const exampleEmbed = new MessageEmbed()
    .addField("💫  Character Build 💫", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1g8Hy5c8on7RQ_VM9diUkVcdKRQGIWsSX')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!build sucrose") { // SUCROSE
    const exampleEmbed = new MessageEmbed()
    .addField("💫  Character Build 💫", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1jEgbODYHgFDs-bqhKZXFwRv9nTBmQmM4')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!build thoma") { // THOMA
    const exampleEmbed = new MessageEmbed()
    .addField("💫  Character Build 💫", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1s_Wb2zYiPUHkfdpmCKD2Jlcztw1ULOt5')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!build venti") { // VENTI
    const exampleEmbed = new MessageEmbed()
    .addField("💫  Character Build 💫", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1CS42wlVeuhXbyEjBaQeq72s2wjp0qASx')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!build barbatos") { // VENTI
    const exampleEmbed = new MessageEmbed()
    .addField("💫  Character Build 💫", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1CS42wlVeuhXbyEjBaQeq72s2wjp0qASx')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!build xiangling") { // XIANGLING
    const exampleEmbed = new MessageEmbed()
    .addField("💫  Character Build 💫", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1WbbXZoBXef95Ye2NGkX78ahagG6iZWuE')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!build xiao") { // XIAO
    const exampleEmbed = new MessageEmbed()
    .addField("💫  Character Build 💫", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1m8iOVa7_CHnR51Jw2fv3k0OR0M1PcL55')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!build xingqiu") { // XINQIU
    const exampleEmbed = new MessageEmbed()
    .addField("💫  Character Build 💫", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1kLTFhtVx4dLgnm2UvG--txAGgE2x8g3h')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!build xinyan") { // XINYAN
    const exampleEmbed = new MessageEmbed()
    .addField("💫  Character Build 💫", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1ANmrXD6jJ0hehvwzPv-smO5-vEsutaSj')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!build yae miko") { // YAE
    const exampleEmbed = new MessageEmbed()
    .addField("💫  Character Build 💫", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=14wJkA-MWWkZ81ozwkCMx8tzz6-vw7Yag')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!build yae") { // YAE
    const exampleEmbed = new MessageEmbed()
    .addField("💫  Character Build 💫", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=14wJkA-MWWkZ81ozwkCMx8tzz6-vw7Yag')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!build yaemiko") { // YAE
    const exampleEmbed = new MessageEmbed()
    .addField("💫  Character Build 💫", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=14wJkA-MWWkZ81ozwkCMx8tzz6-vw7Yag')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!build yanfei") { // YANFEI
    const exampleEmbed = new MessageEmbed()
    .addField("💫  Character Build 💫", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1yoB3GKw6PY4r2S0Ude84AUVOzQxvsqwG')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!build yelan") { // YELAN
    const exampleEmbed = new MessageEmbed()
    .addField("💫  Character Build 💫", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1WH5Kdyf4lOdzlH8sTvdiJHvykMdeI-RP')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!build yoimiya") { // YOIMIYA
    const exampleEmbed = new MessageEmbed()
    .addField("💫  Character Build 💫", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1Le9UJ9Eb8d5HKK9wGcWTjsFh6H-pnVif')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!build yunjin") { // YUNJIN
    const exampleEmbed = new MessageEmbed()
    .addField("💫  Character Build 💫", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=1BfudeuJbQld6H8LirlPWWTReSJn1L1FF')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!build ") { // ZHONGLI
    const exampleEmbed = new MessageEmbed()
    .addField("💫  Character Build 💫", "Paimon ready for `!help` >.<", true)
    .setImage('https://drive.google.com/uc?id=11SAK6-VWgTHeZPHvutD6iNz4G1sp2u5n')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
  msg.reply({ embeds: [exampleEmbed] });
  }
  else if (msg.content === "!kuki shinobu") { // SHINOBU
    msg.reply("Paimon akan di update secepatnya untuk karakter ini traveler, sabar ya ^_^", {
})
//-------- TEST UNIT -------------------------------------------------------------------------------------------------------------------------
// client.on("message", msg => {
//   if (msg.content === "!submit"){
//       const user = new User({
//         _id: mongoose.Types.ObjectId(),
//         userID: msg.author.id,
//         Nickname: msg.author.username
//       });
//       user.save().then(result => console.log(result)).catch(err => console.log(err));
//       msg.reply("Data already submited")
//   }
// })
 
  }
});
// KONEKSI PENGHUBUNG -------------------------------------------------------------------------------------
const url = `mongodb+srv://paimonbot:%40Watashi1@paimonbot.plnbhmt.mongodb.net/paimondb?retryWrites=true&w=majority`;

const connectionParams={
  useNewUrlParser: true,
  useUnifiedTopology: true
}
mongoose.connect(url,connectionParams)
  .then( () => {
      console.log('Connected to the database ')
  })
  .catch( (err) => {
      console.error(`Error connecting to the database. n${err}`);
  })
  // --------------------------------------------------------------------------------------------------------------
client.login("OTc4NjE1ODcwNzE4ODY5NTk0.G9lIoW.-4sg46mmtVK-8OU9nuhgtuATjptnlonZJBy2vk");
