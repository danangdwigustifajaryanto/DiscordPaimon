const { MessageEmbed } = require('discord.js');
const { Routes } = require("discord-api-types/v9")
const { REST } = require("@discordjs/rest") 
const { Player } = require("discord-player")
const Userchm = require("./Command/informationf/profileSchema.js");
const mongoose = require("mongoose");
const Discord = require("discord.js");
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_VOICE_STATES", "GUILD_MESSAGES", ]});
 
const fs = require("fs");
//Prefix Folder About
const prefixabout = "!";
//Prefix Folder Gamef
const prefixarti = "!arti";
const prefixbuild = "!build";
//Prefix Folder Information
const prefixmyinfo = "!myinfo";
client.commands = new Discord.Collection();

client.on("ready", async ()=>{

    // Getting the channel from client.channels Collection.
    const Channel = client.channels.cache.get("987993929804812352");
    // Checking if the channel exists.
    if (!Channel) return console.error("Couldn't find the channel.");
    // Sending "!d bump" to the channel.
    Channel.send("Paimon Telah Login").catch(e => console.log(e));


  console.log(` ---- ${client.user.tag} Sudah Login! ----`);
      client.user.setActivity("Zhongli got Prank", {
      type: "WATCHING",
      url: "https://www.twitch.tv/monstercat"
  });
});
process.on('warning', e => console.warn(e.stack));
// ---- Folder About -----
const commandsabout = fs.readdirSync("./Command/aboutf").filter(file => file.endsWith(".js"))
for (file of commandsabout){
  const commandName = file.split(".")[0]
  const command = require(`./Command/aboutf/${commandName}`)
  client.commands.set(commandName, command)
}
client.on("messageCreate", msg => {
  if(msg.content.startsWith(prefixabout)) {
    if (msg.author.bot) return;
    const args = msg.content.slice(prefixabout.length).trim().split(/ +/g)
    const commandName = args.shift()
    const command = client.commands.get(commandName)
    if(!command) return
    command.run(client, msg, args)
  }
})

client.on('guildMemberAdd', member => {
    const exampleEmbed = new MessageEmbed()
    .setTitle('Wellcome to the server :hatching_chick: ')
    .setDescription(`Hello <@${member.id}> don't forget to register ^^`)
    .setThumbnail(member.displayAvatarURL())
    .setFooter({ text: "Please read pinned messages",
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
    member.guild.channels.cache.get('981582630317338656').send({ embeds: [exampleEmbed] });
});


// ---- Folder Gamef --------------------------
const commandsgamef = fs.readdirSync("./Command/gamef").filter(file => file.endsWith(".js"))
for (file of commandsgamef){
  const commandName = file.split(".")[0]
  const command = require(`./Command/gamef/${commandName}`)
  client.commands.set(commandName, command)
}
// Artifact Handler
client.on("messageCreate", msg => {
  if (msg.author.bot) return;
  if(msg.content.startsWith(prefixarti)) {
    const args = msg.content.slice(prefixarti.length).trim().split(/ +/g)
    const commandName = args.shift()
    const command = client.commands.get(commandName)
    if(!command) return;
    command.run(client, msg, args)
  }
})
// Build Handler
client.on("messageCreate", msg => {
  if (msg.author.bot) return;
  if(msg.content.startsWith(prefixbuild)) {
    const args = msg.content.slice(prefixbuild.length).trim().split(/ +/g)
    const commandName = args.shift()
    const command = client.commands.get(commandName)
    if(!command) return;
    command.run(client, msg, args)
  }
})

// ---- Folder Information --------------------------
const commandsinformationf = fs.readdirSync("./Command/informationf").filter(file => file.endsWith(".js"))
for (file of commandsinformationf){
  const commandName = file.split(".")[0]
  const command = require(`./Command/informationf/${commandName}`)
  client.commands.set(commandName, command)
}
// Myinfo Handler
client.on("messageCreate", msg => {
  if (msg.author.bot) return;
  if(msg.content.startsWith(prefixmyinfo)) {
    const args = msg.content.slice(prefixmyinfo.length).trim().split(/ +/g)
    const commandName = args.shift()
    const command = client.commands.get(commandName)
    if(!command) return;
    command.run(client, msg, args)
  }
})

//---- Fungsi Musik --------------------------
const LOAD_SLASH = process.argv[2] == "load" //Load Slash
const CLIENT_ID = "978615870718869594"
const GUILD_ID = "981210961014829167"

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
    const rest = new REST({ version: "9" }).setToken(TOKEN)
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

//---- Fungsi Registrasi --------------------------
const subnick = "!reg nickname:";
const subar = "!reg ar:";
const subserv = "!reg server:";
const subuid = "!reg uid:";

client.on("messageCreate", async msg => { //NICKNAME
  if (msg.content.includes(subnick)) {
    userData = await Userchm.findOne({userID : msg.author.id});
  if (userData) { //If data Exist
    const updatedUser = await Userchm.findOneAndUpdate(
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
    const user = new Userchm({
      _id: mongoose.Types.ObjectId(),
      userID: msg.author.id,
      nickname: msg.content.substring(msg.content.indexOf(":") + 1) // so basically anything after the : will be the username
    });
    user.save().then(result => console.log(result)).catch(err => console.log(err));
    msg.reply("Terimakasih, data telah paimon terima ^^") 
  } 
  }
}) //AR
client.on("messageCreate", async msg => {
  if (msg.content.includes(subar)) {
    userData = await Userchm.findOne({userID : msg.author.id});
  if (userData) { //If data Exist
    const updatedUser = await Userchm.findOneAndUpdate(
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
    const user = new Userchm({
      _id: mongoose.Types.ObjectId(),
      userID: msg.author.id,
      ar: msg.content.substring(msg.content.indexOf(":") + 1) // so basically anything after the : will be the username
    });
    user.save().then(result => console.log(result)).catch(err => console.log(err));
    msg.reply("Terimakasih, data telah paimon terima ^^") 
  }
  }
}) // SERVER
client.on("messageCreate", async msg => { 
  if (msg.content.includes(subserv)) {
    userData = await Userchm.findOne({userID : msg.author.id});
  if (userData) { //If data Exist
    const updatedUser = await Userchm.findOneAndUpdate(
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
    const user = new Userchm({
      _id: mongoose.Types.ObjectId(),
      userID: msg.author.id,
      server: msg.content.substring(msg.content.indexOf(":") + 1) // so basically anything after the : will be the username
    });
    user.save().then(result => console.log(result)).catch(err => console.log(err));
    msg.reply("Terimakasih, data telah paimon terima ^^") 
  }
  }
}) //UID
client.on("messageCreate", async msg => {
  if (msg.content.includes(subuid)) {
    userData = await Userchm.findOne({userID : msg.author.id});
  if (userData) { //If data Exist
    const updatedUser = await Userchm.findOneAndUpdate(
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
    const user = new Userchm({
      _id: mongoose.Types.ObjectId(),
      userID: msg.author.id,
      uid: msg.content.substring(msg.content.indexOf(":") + 1) // so basically anything after the : will be the username
    });
    user.save().then(result => console.log(result)).catch(err => console.log(err));
    msg.reply("Terimakasih, data telah paimon terima ^^") 
  }
  }
})
// ------ DIALOGUE INDO ------------------------------------------------------------------------------------
client.on("messageCreate", msg => {
  if (msg.content === "Thank you paimon"){
    msg.reply(" Urwellcome Traveler ^^");
  }
  else if (msg.content === "Hello paimon"){
    msg.reply("Paimon Here traveler :)");
  }
  else if (msg.content === "Paimon"){
    msg.reply("Passwordnya ?");
  }
  else if (msg.content === "paimon"){
    msg.reply("Passwordnya ?");
  }
  else if (msg.content === "dasar emergency food"){
    msg.reply("Paimon bukan emergency food >:(");
  }
  else if (msg.content === "ehe"){
    msg.reply("Ehetttenadayo >////:(");
  }
  else if (msg.content === "p"){
    msg.reply("Paimon disini ><");
  }
  else if (msg.content === "P"){
    msg.reply("Paimon disini ><");
  } else if (msg.content === "Terimakasih paimon"){
    msg.reply(" Sama sama Traveer ^^");
  } else if (msg.content === "terimakasih paimon"){
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

const paimonbodoh = "paimon bodoh";
const paimonbodoh2 = "Paimon bodoh";
const paimonlain = "bot lain";
const paimonlain2 = "Bot lain";
const paimon = "tavern bot";
const paimon2 = "bot tavern";
const paimon3 = "Bot tavern";
const paimon4 = "Tavern bot";
const paimon6 = "halo sayang";
const paimon7 = "Halo sayang";
const kickpaimon = "kick paimon";
const kickpaimon2 = "Kick paimon";
const candasayang = "canda sayang";
const candasayang2 = "Canda sayang";

client.on("messageCreate", async msg => { //PAIMON
  if (msg.content.includes(paimon)) {
    await msg.reply("Apa ini kok ngomong tavern >:( Cuma paimon yang boleh jadi bot disini !!!")
  }
})
client.on("messageCreate", async msg => { //PAIMON
  if (msg.content.includes(candasayang)) {
    await msg.reply("/////////")
  }
})
client.on("messageCreate", async msg => { //PAIMON
  if (msg.content.includes(candasayang2)) {
    await msg.reply("/////////")
  }
})
client.on("messageCreate", async msg => { //PAIMON
  if (msg.content.includes(paimonbodoh)) {
    await msg.reply("paimon yang baik hati tidak akan marah ^^")
  }
})
client.on("messageCreate", async msg => { //PAIMON
  if (msg.content.includes(paimonbodoh2)) {
    await msg.reply("paimon yang baik hati tidak akan marah ^^")
  }
})
client.on("messageCreate", async msg => { //PAIMON
  if (msg.content.includes(kickpaimon)) {
    await msg.reply("masih gw liatin")
  }
})
client.on("messageCreate", async msg => { //PAIMON
  if (msg.content.includes(paimonlain)) {
    await msg.reply("Gaboleh >( cuma paimon yang boleh jadi bot disini")
  }
})
client.on("messageCreate", async msg => { //PAIMON
  if (msg.content.includes(paimonlain2)) {
    await msg.reply("Gaboleh >:( cuma paimon yang boleh jadi bot disini")
  }
})
client.on("messageCreate", async msg => { //PAIMON
  if (msg.content.includes(kickpaimon2)) {
    await msg.reply("masih gw liatin")
  }
})
client.on("messageCreate", async msg => { //PAIMON
  if (msg.content.includes(paimon2)) {
    await msg.reply("Apa ini kok ngomong tavern >:( Cuma paimon yang boleh jadi bot disini !!!")
  }
})
client.on("messageCreate", async msg => { //PAIMON
  if (msg.content.includes(paimon3)) {
    await msg.reply("Apa ini kok ngomong tavern >:( Cuma paimon yang boleh jadi bot disini !!!")
  }
})
client.on("messageCreate", async msg => { //PAIMON
  if (msg.content.includes(paimon4)) {
    await msg.reply("Apa ini kok ngomong tavern >:( Cuma paimon yang boleh jadi bot disini !!!")
  }
})
client.on("messageCreate", async msg => { //PAIMON
  if (msg.content.includes(paimon7)) {
    await msg.reply("Iya sayang >////<")
  }
})
client.on("messageCreate", async msg => { //PAIMON
  if (msg.content.includes(paimon6)) {
    await msg.reply("Iya sayang >////<")
  }
})
client.on("messageCreate", msg => { //PAIMON
  if (msg.content === "dih paimon gaboleh marah") {
    msg.reply("Y")
  }
})
client.on("messageCreate", msg => { //PAIMON
  if (msg.content === "Paimon jangan nakal ya") {
    msg.reply("Paimon Tidak Nakal :(")
  }
})
client.on("messageCreate", msg => { //PAIMON
  if (msg.content === "pst") {
    msg.reply("!!!Suara dalam hati : iya ada apa ><")
  }
})
client.on("messageCreate", msg => { //PAIMON
  if (msg.content === "Bagus paimon") {
    msg.reply("Hihihi ><")
  }
})


// ------ UNIT TEST -----
// ------- END UNIT ROT TEST



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
client.login("OTc4NjE1ODcwNzE4ODY5NTk0.G9lIoW.-4sg46mmtVK-8OU9nuhgtuATjptnlonZJBy2vk");
// --------------------------------------------------------------------------------------------------------------
