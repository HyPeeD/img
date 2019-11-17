const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(" Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://indexa.glitch.me/`);
}, 280000);



const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
var Jimp = require("jimp");
const SQLite = require("better-sqlite3");
const sql = new SQLite('./profile.sqlite');
bot.commands = new Discord.Collection();
let client = new Discord.Client();
const { Client, RichEmbed } = require("discord.js");
var { Util } = require('discord.js');
const {TOKEN, YT_API_KEY, prefix, devs} = require('./config')
const { exec } = require('child_process');
const canvas = require("canvas");
const dat = {};
const Canvas = require("canvas");
const ytScraper = require("yt-scraper");
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube("AIzaSyBqTcAsvCrNz-Fsl44PlNJZnU1pbxvT51o");
const convert = require("hh-mm-ss")
const botversion = require('./package.json').version;
const moment = require("moment");
var request = require('request');
var guilds = {};
const util = require("util")
const gif = require("gif-search");
const ms = require("ms");
const jimp = require("jimp");
const guild = require('guild');
const dateFormat = require('dateformat');
const pretty = require("pretty-ms");
const queue = new Map();
var table = require('table').table
const fetch = require('node-fetch');
const qs = require('querystring');
var Stream = require('stream');
client.login(TOKEN);
const me = client;
var stopReacord = true;
var reactionRoles = [];
var definedReactionRole = null;









client.on('ready', function(){
    client.user.setStatus("onlne");
    var ms = 10000 ;
    var setGame = [`Cutie Pie ?`,`0100101101011010100`,`Suprise mother brother xd`];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i]);
    }, ms);1000
});



client.on('message', message => {
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``To Use Command write this : " +prefix+ "move [USER]``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#60dee1")
 .setDescription(`The user <@${usermentioned}> Moved To ur Room ^^  `)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("``You Can't move "+ message.mentions.members.first() +" `This member not on a voice channel`")
}
} else {
 message.channel.send("**``you need to be on voice channel``**")
}
} else {
message.react("✅")
 }}});

client.on('message' , message => {
  if(message.content.startsWith("!!ping")) {
 message.channel.send('Pong...').then((msg) => {
      msg.edit(`\`\`\`javascript\nTime taken: ${msg.createdTimestamp - message.createdTimestamp} ms.\nDiscord API: ${Math.round(client.ping)} ms.\`\`\``);
 })
  }  
 });


client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**Mention The Member**");
  if(!reason) return message.reply ("**Ban Reason !**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**I can't Ban this one !**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});

client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**Mention the memeber !**");
  if(!reason) return message.reply ("**Kick Reason**");
  if (!message.guild.member(user)
  .kickable) return message.reply("Check my permission role 😶");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
}); 

const cmd = require("node-cmd")
client.on("message", async message => {
  if(message.author.id !== "458997221170479124") return;
  if(message.content === prefix + "restart") {
    await cmd.run("refresh")
    await message.channel.send("Done,")
  }
})

client.on("message", message => {
    if (message.content.startsWith(prefix + "invinfo")) {
        var args = message.content.split(" ").slice(1)
        if (!args) return;
        console.log(`https://discordapp.com/api/v6/invites/${args[0]}?with_counts=true`)
        fetch(`https://discordapp.com/api/v6/invites/${args[0]}?with_counts=true`)
            .then(res => res.json())
            .then(body => {
                var embed = new Discord.RichEmbed()
                    .setTitle("Invite info")
                    .addField("Server", `**Server Name :** ${body.guild.name}\n**Server ID :** ${body.guild.id}\n**Members count :** ${body.approximate_member_count}\n**Online members count :** ${body.approximate_presence_count}`)
                    .addField("Channel", `**Channel name :** ${body.channel.name}\n**Channel ID :** ${body.channel.id}`)
                    .addField("Inviter", `**Name :** ${body.inviter.username}#${body.inviter.discriminator}`)
                    .setThumbnail(`https://cdn.discordapp.com/icons/${body.guild.id}/${body.guild.icon}.png`)
                message.channel.send({
                    embed: embed
                })
            }).catch(err => message.channel.send(`I can't find this invite.`))
    }
})

client.on('message', zaid => {
    if (zaid.content === ('!!bot')) {
        const bot = new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor("#36393e")
            .addField('❔ **Bot Ping** :',  `❔ ${Date.now() - zaid.createdTimestamp}` + ' ms', true)
            .addField('❔ **Servers** :',   `❔ ${client.guilds.size}`, true)
            .addField('❔ **Channels** :',  `❔ ${client.channels.size} ` , true)
            .addField('❔ **Users** :' ,    `❔ ${client.users.size} ` , true)
            .addField('❔ **Bot Name** :' , `❔ ${client.user.tag} ` , true)
            .addField('❔ **Bot Orginal Owner** :', `❔ <@458997221170479124>` , true)
            .addField('❔ **Bot Owner 2** :', `❔ <@629029131517952000>` , true)
            .addField('❔ **Bot Owner 3** :', `❔ <@629024127247974420>` , true)
            .addField('❔ **Bot Owner 4** :', `❔ <@428692060619407370>` , true)
            .addField('❔ **Bot Owner 5** :', `❔ <@636171200401375272>` , true)    
            .addField('❔ **Bot Owner Gay** :', `❔ <@560072447047761931>` , true)
            .setFooter(zaid.author.username, zaid.author.avatarURL)
            zaid.channel.send(bot)
    }
}
);

client.on('message' , msg => {
            if(msg.content.startsWith(`<@${client.user.id}>`))
        var botmention = new Discord.RichEmbed()
       .setColor('#36393e')
       .setDescription(`<:Genny:645626317076824074>    Hey Im **Genny Bot !
 \`\`\`Public Prefix : ${prefix}
My ID : ${client.user.id}\`\`\`**`)
       .addField('� **__Help Command__**' , `\`${prefix}help\`` , true)
       .addField('� **__Bot Link__**' , `[Invite Link](https://discordapp.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot)` ,true)
       .addField('� **__Support Server__**' , `[Support Server](https://discord.gg/invite/x7qfB6V*'*)` ,true)
       .setFooter('Reqused By : ' + msg.author.username, msg.author.avatarURL)
        .setTimestamp()
       msg.channel.send(botmention)
   });

client.on('message', async message =>{
  if (message.author.boss) return;

if (!message.content.startsWith(prefix)) return;
    let command = message.content.split(" ")[0];
     command = command.slice(prefix.length);
    let args = message.content.split(" ").slice(1);
    if (command == "mute") {
        if (!message.channel.guild) return;
        if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have permission !").then(msg => msg.delete(5000));
        if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("I don't have permission !").then(msg => msg.delete(5000));;
        let user = message.mentions.users.first();
        let muteRole = message.guild.roles.find("name", "Muted");
        if (!muteRole) return message.reply("** There is no role 'Muted' **").then(msg => {msg.delete(5000)});
        if (message.mentions.users.size < 1) return message.reply('** Mention The user first **').then(msg => {msg.delete(5000)});
        let reason = message.content.split(" ").slice(2).join(" ");
        message.guild.member(user).addRole(muteRole);
        const muteembed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor(`Muted!`, user.displayAvatarURL)
        .setThumbnail(user.displayAvatarURL)
        .addField("**:busts_in_silhouette:  User**",  '**[ ' + `${user.tag}` + ' ]**',true)
        .addField("**:hammer: By **", '**[ ' + `${message.author.tag}` + ' ]**',true)
        .addField("**:book:  Reason**", '**[ ' + `${reason}` + ' ]**',true)
        .addField("User", user, true)
        message.channel.send({embed : muteembed});
        var muteembeddm = new Discord.RichEmbed()
        .setAuthor(`Muted!`, user.displayAvatarURL)
        .setDescription(`
${user} You are Black Listed becuz u breacked the rules a lot of times ${message.author.tag} Black Listed By [ ${reason} ] : Reason Of the Black Listed for false call the staff
`)
    .setFooter(`On server : ${message.guild.name}`)
    .setColor("RANDOM")
  user.send( muteembeddm);
  }
if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("**You don't `Permission` for unmute !**").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("**I don't have `Permission` !**").then(msg => msg.delete(6000))

  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage("**Mention The `Member` first**:x: ");

  let role = message.guild.roles.find (r => r.name === "Muted");
  
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**Member wasn't muted**:x:")

  await toMute.removeRole(role)
  message.channel.sendMessage("**Member unmuted**:white_check_mark:");

  return;

  }

});

var alias = "!!"
client.on("message", message => {
if(message.author.bot || message.channel.type === 'dm') return;
let alias = message.content.split(" ")[0].substring(prefix.length);
let args = message.content.split(" ");
if(alias === 'film') {
if(!args[1]) return;
let query = qs.stringify({ s: args.slice(1).join(" ") });
let queryString = `http://www.omdbapi.com/?apikey=7163cd9d&type=movie&${query}`;
fetch(queryString)
.then(res => res.json())
.then(async res => {
let search = res.Search;
let director = res.Director
request(`https://www.imdb.com/title/${search[0].imdbID}`, async function (error, response, body) {
let story = body.split("<div class=\"summary_text\">")[1].toString().split("</div>")[0];
let o = new Discord.RichEmbed();
await o.setColor("#090303");
await o.setThumbnail(search[0].Poster);
await o.setTitle(`**» ${search[0].Title}**`);
await o.setURL(`https://www.imdb.com/title/${search[0].imdbID}`);
await o.addField("» Release", search[0].Year, true);
await o.addField("» Story", story, true);
await message.channel.send(o);
});
}).catch(e => {
if(e) return message.channel.send(`**:x: | Couldn't get any results**`);
});
}
});

client.on('message', message => {  
    if (message.author.bot) return;
    if (message.content.startsWith(prefix + 'purge')) { 
    if(!message.channel.guild) return message.reply(`** This Command For Servers Only**`); 
     if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`** You don't have Premissions!**`);
     if(!message.guild.member(client.user).hasPermission('MANAGE_GUILD')) return message.channel.send(`**I don't have Permission!**`);
    let args = message.content.split(" ").slice(1)
    let messagecount = parseInt(args);
    if (args > 100) return message.reply(`** The number can't be more than **100** .**`).then(messages => messages.delete(5000))
    if(!messagecount) args = '100';
    message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages)).then(msgs => {
    message.channel.send(``).then(messages => messages.delete(5000));
    })
  }
});

client.on("message", message => {
if(message.content.startsWith(prefix + "vmute")) {
var mnt = message.mentions.members.first();
if(message.author.bot || message.channel.type == "dm" || !message.member.hasPermission("MUTE_MEMBERS") || !message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return;
if(!mnt) return message.channel.send(`**• | Usage:** ${prefix}vmute \`\`@Name\`\``);
if(!mnt.voiceChannel) return message.channel.send(`⛔ | *${mnt.user.tag}* is not in a voice channel!`);
mnt.setMute(true).then(() => {
message.channel.send(`Successfully Muted ${mnt} :+1:`)
}).catch(console.error);
}
if(message.content.startsWith(prefix + "vunmute")) {
var mnt = message.mentions.members.first();
if(message.author.bot || message.channel.type == "dm" || !message.member.hasPermission("MUTE_MEMBERS") || !message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return;
if(!mnt) return message.channel.send(`**• | Usage:** ${prefix}unvmute \`\`@Name\`\``);
if(!mnt.voiceChannel) return message.channel.send(`⛔ | *${mnt.user.tag}* is not in a voice channel!`);
mnt.setMute(false).then(() => {
message.channel.send(`Successfully Unmuted ${mnt} :+1:`)
}).catch(console.error);
}
});

client.on("message", message => {
if(message.content.startsWith(prefix + "setnick")){
if(message.author.bot || message.channel.type == "dm" || !message.member.hasPermission("MANAGE_NICKNAMES") || !message.guild.member(client.user).hasPermission("MANAGE_NICKNAMES")) return;
var user = message.mentions.members.first();
var args = message.content.split(" ").slice(2);
var nick = args.join(" ");
if(!user || !args) return message.channel.send(`**• | Usage:** ${prefix}setnick \`\`@Name\`\` nickname`);
message.guild.member(user.user).setNickname(`${nick}`);
message.channel.send(`Successfully changed **${user}** nickname to **${nick}**`);
}
});

client.on('error', err => {console.log(err)});
const members = JSON.parse(fs.readFileSync("./members.json")) || {};
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.guilds.forEach(g=> !members[g.id] ? members[g.id] = {} : null)
});

client.on("guildMemberRemove", member=>{
  let roles = [];
  member.roles.forEach(r=> roles.push(r.id));
  members[member.guild.id][member.id] = roles;
  saveChanges();
});
client.on("guildMemberAdd", member=> {
  if(members[member.guild.id][member.id] !== undefined){
    member.addRoles(members[member.guild.id][member.id], "Returning roles after leaving");
    members[member.guild.id][member.id] = [];
  };
  saveChanges();
});
function saveChanges(){
  fs.writeFileSync("./members.json", JSON.stringify(members, null, 4));
};

client.on("message", message => {
  if (!(message.author.bot) && message.channel.type == "text")
    if (message.content.startsWith(`${prefix}getScreenShareLink`))
      if (message.member.voiceChannel) message.channel.send(`https://discordapp.com/channels/${message.guild.id}/${message.member.voiceChannel.id}`);
      else message.channel.send(`**You need to be on a room channel !**`);
});

client.on("message", async message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if(message.author.id != "458997221170479124") return;
    if(message.author.bot) return;
    if (command == "sleave") {
        if(!args[0] || args[1]) return message.reply('**!!sleave `guild_id`** !');
        let GuildId = client.guilds.get(args[0])
        if(!GuildId) return message.reply(`** Guild ID is not Detected**`);
        GuildId.leave().then(m => message.channel.send("**I have Left "+GuildId.name+"   <:Genny:645626317076824074>**"))
    }     
})

client.on("message", message => {
  let coinflip = ["Logo", "Writes"]
  if(message.content == prefix + "coinflip") {
    let embed = new Discord.RichEmbed()
    .setTitle("Coinflip Results")
        .setDescription(`${message.author.tag} | He threw a coin and got **${coinflip[Math.floor(Math.random() * coinflip.length)]}**`)
        .setColor("RED")
        message.channel.sendEmbed(embed)
  }
});

client.on('message', message => {
    if (message.content.startsWith("!!hack")) {
        if(!message.author.id === '') return;
      if (message.author.bot) return
           message.delete();
             let args = message.content.split(' ').slice(1);
 
                   let virusname = args.join(' ');
                 if (virusname < 1) {
                     return message.channel.send("```Mention who you wanna hack him !```");
                 }
                 message.channel.send({embed: new Discord.RichEmbed().setTitle('Loading ' + virusname + "...").setColor(0x54c3ef)}).then(function(m) {
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓ ] 1%').setColor(0x54c3ef)})
             }, 1000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓ ] 2%').setColor(0x54c3ef)})
             }, 2000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓ ] 3%').setColor(0x54c3ef)})
             }, 3000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓ ] 4%').setColor(0x54c3ef)})
             }, 4000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓ ] 28%').setColor(0x54c3ef)})
             }, 5000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 35%').setColor(0x54c3ef)})
             }, 6000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 78%').setColor(0x54c3ef)})
             }, 7000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 80%').setColor(0x54c3ef)})
             }, 8000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 86%').setColor(0x54c3ef)})
             }, 9000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 89%').setColor(0x54c3ef)})
             }, 10000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 90%').setColor(0x54c3ef)})
             }, 11000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 95%').setColor(0x54c3ef)})
             }, 12000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 96%').setColor(0x54c3ef)})
             }, 13000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 97%').setColor(0x54c3ef)})
             }, 14000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 98%').setColor(0x54c3ef)})
             }, 15000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓���▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 99%').setColor(0x54c3ef)})
             }, 16000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 100%').setColor(0x54c3ef)})
             }, 17000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']:' + virusname + 'done it\'s going good 100.9%').setColor(0x54c3ef)})
             }, 18000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: hacking yeah i love it').setColor(0x54c3ef)})
             }, 19000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: uploading data' + virusname + ".key").setColor(0x54c3ef)})
             }, 22000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 5...').setColor(0x54c3ef)})
             }, 25000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 4...').setColor(0x54c3ef)})
             }, 26000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 3...').setColor(0x54c3ef)})
             }, 27000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 2...').setColor(0x54c3ef)})
             }, 28000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 1...').setColor(0x54c3ef)})
             }, 29000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 99%').setColor(0x54c3ef)})
           }, 30000)
              setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓]100% virus added').setColor(0x54c3ef)})
           }, 31000)
              setTimeout(function() {
               m.delete()
           }, 32000)
             setTimeout(function() {
               message.channel.send('You Have been hacked !')
           }, 33000)
           });
         }
 }) 

client.on("message", message => {
    if(!message.channel.guild) return;
if(message.content.startsWith(prefix+"serverinfo")) {
    if(message.author.bot) return;
    if(!message.channel.guild) return;
    if(message.guild.region === "brazil") {
    var br = "Brazil"
    var flag = ":flag_br:"
    } else if(message.guild.region === "eu-central") {
    var br = "Eu-Central"
    var flag = ":flag_eu:"
    } else if(message.guild.region === "hongkong") {
    var br = "Hongkong"
    var flag = ":flag_hk:"
    } else if(message.guild.region === "japan") {
    var br = "Japan"
    var flag = ":flag_jp:"
    } else if(message.guild.region === "russia") {
    var br = "Russia"
    var flag = ":flag_ru:"
    } else if(message.guild.region === "singapore") {
    var br = "Singapore"
    var flag = ":flag_sg:"
    } else if(message.guild.region === "southafrica") {
    var br = "Southafrica"
    var flag = ":flag_za:"
    } else if(message.guild.region === "sydney") {
    var br = "Sydney"
    var flag = ":flag_au:"
    } else if(message.guild.region === "us-central") {
    var br = "Us-Cetral"
    var flag = ":flag_us:"
    } else if(message.guild.region === "us-east") {
    var br = "Us-East"
    var flag = ":flag_us:"
    } else if(message.guild.region === "us-south") {
    var br = "Us-South"
    var flag = ":flag_us:"
    } else if(message.guild.region === "us-west") {
        var br = "Us-West"
        var flag = ":flag_us:"
    } else if(message.guild.region === "eu-west") {
    var br = "Eu-West"
    var flag = ":flag_eu:"
    }
    var online = message.guild.members.filter(m=>m.presence.status == 'online').size + message.guild.members.filter(m=>m.presence.status == 'dnd').size +  message.guild.members.filter(m=>m.presence.status == 'idle').size
    let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setThumbnail(message.guild.iconURL)
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setTitle(`**${message.guild.name} Information:**`)
    .setDescription("- **Server Name** :`" + `${message.guild.name}` + "`\n" + "- **Server ID** :`" + `${message.guild.id}` + "`\n" +
    "- **Server Region** :" + `${flag}\n` +
    "- **Server Owner** :" + `${message.guild.owner}` + "\n" + "\n" + "```md\n[Guild](Members)```" + "\n" +
    "- **Total Bots** :`" + `${message.guild.members.filter(member => member.user.bot).size}` + "`\n" + "- **Total Members** :`" + `${message.guild.memberCount}` + "`\n" +
    "- **Online Members** :`" + `${online}` + "`\n" + "- **Offline Members** :`" + `${message.guild.members.filter(m=>m.presence.status == 'offline').size}` + "`\n" +
    "\n" + "```tex\n$ Guild Channels```" + "\n" +
    "- **Channels Size** :`" + `${message.guild.channels.size}` + "`\n" + "- **Text Channels** :`" + `${message.guild.channels.filter(m => m.type === 'text').size}` + "`\n" + "- **Voice Channels** :`" + `${message.guild.channels.filter(m => m.type === 'voice').size}` + "`\n" +
    "- **Afk Channel** :" + `${message.guild.afkChannel}` + "\n" + "- **Afk Timeout** :`" + `${message.guild.afkTimeout} Second` + "`\n" + "- **System Channel** :" + `${message.guild.systemChannel}` + "\n" +
    "\n" +"```fix\nMore Information```" + "\n" +
    "- **Roles Size** :`" + `${message.guild.roles.size}` + "`\n" +  "- **Emojis Size** :`" + `${message.guild.emojis.size}` + "`\n" +
    "- **Created At** :`" + `${message.guild.createdAt}` + "`\n" + "- **Verified** :`" + `${message.guild.verified}` + "`\n" +"- **VerificationLevel** :`" + `${message.guild.verificationLevel}` + "`\n")
    .setFooter(message.author.tag, message.author.avatarURL)
    message.channel.send(embed)
   
}
})

var figlet = require('figlet');
client.on('message', edward => {
    if(!prefix) var prefix = '!!';
    var commandedward = "ascii";
    if (edward.content.startsWith(prefix + commandedward)) {
    if (!edward.channel.guild) return;
    var argsedward = edward.content.split(" ").slice(1).join(" ");
    if (!argsedward) return edward.channel.send(`**Hey There , Type SomeThing to ASCII** 🌦.`);
figlet(argsedward, function(err, dataed) {
    if (err) {
        edward.channel.send(`\`\`\`apache\nErr; ${err}\`\`\``);
        }
    var edwardhere = "";
    var edwardem = new Discord.RichEmbed()
    .setColor(edward.member.displayHexColor || "36393e")
    .setAuthor(``,edward.author.avatarURL || edward.author.defaultAvatarURL)
    .setDescription(`|| ------------------------------------------------------------------- ||\`\`\`fix\n${dataed} ${edwardhere}\`\`\``)
    .setThumbnail(edward.guild.iconURL || edward.author.displayAvatarURL)
    .setTimestamp()
    .setFooter(client.user.username,client.user.avatarURL || client.user.defaultAvatarURL);
if (argsedward.length <= 6){
    edward.channel.send(edwardem);
        }
if (argsedward.length >= 7){
    edward.channel.send(`\`\`\`fix\n${dataed}\`\`\``);
     }
 
})}});

client.on('message', message => {
const prefix = '!!'  
    if(message.content === prefix + 'createcolores') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**');
                         
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "1",
                    color: "#FFB6C1",
                    permissions: []
     })
           message.guild.createRole({
                  name: "2",
                    color: "#FFC0CB",
                    permissions: []
     })
                message.guild.createRole({
                  name: "3",
                    color: "#FF69B4",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "4",
                    color: "#FF1493",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "5",
                    color: "#DB7093",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "6",
                    color: "#C71585",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "7",
                    color: "#E6E6FA",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "8",
                    color: "#D8BFD8",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "8",
                    color: "#DDA0DD",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "9",
                    color: "#DA70D6",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "10",
                    color: "#EE82EE",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "11",
                    color: "#FF00FF",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "12",
                    color: "#BA55D3",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "13",
                    color: "#9932CC",
                    permissions: []
     })
                          message.guild.createRole({
                  name: "14",
                    color: "#9400D3",
                    permissions: []
     })
                          message.guild.createRole({
                  name: "15",
                    color: "#8A2BE2",
                    permissions: []
     })
                               message.guild.createRole({
                  name: "16",
                    color: "#8B008B",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "17",
                    color: "#800080",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "18",
                    color: "#9370DB",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "19",
                    color: "#7B68EE",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "20",
                    color: "#6A5ACD",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "21",
                    color: "#483D8B",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "22",
                    color: "#663399",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "23",
                    color: "#4B0082",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "24",
                    color: "#FFA07A",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "25",
                    color: "#FA8072",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "26",
                    color: "#E9967A",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "27",
                    color: "#F08080",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "28",
                    color: "#CD5C5C",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "29",
                    color: "#DC143C",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "30",
                    color: "    #FF0000",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "31",
                    color: "#B22222",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "32",
                    color: "#8B0000",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "33",
                    color: "#FFA500",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "34",
                    color: "#FF8C00",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "35",
                    color: "#FF7F50",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "36",
                    color: "#FF6347",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "37",
                    color: "#FF4500",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "38",
                    color: "#FFD700",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "39",
                    color: "#FFFFE0",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "40",
                    color: "#FFFACD",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "41",
                    color: "#FAFAD2",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "42",
                    color: "    #FFEFD5",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "43",
                    color: "#FFE4B5",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "44",
                    color: "#FFDAB9",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "45",
                    color: "#EEE8AA",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "46",
                    color: "#F0E68C",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "47",
                    color: "#BDB76B",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "48",
                    color: "#ADFF2F",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "49",
                    color: "#7FFF00",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "50",
                    color: "#7CFC00",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "51",
                    color: "#00FF00",
                    permissions: []
     })  
     
                                         message.guild.createRole({
                  name: "52",
                    color: "#32CD32",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "53",
                    color: "#98FB98",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "54",
                    color: "#90EE90",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "55",
                    color: "#00FA9A",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "56",
                    color: "#00FF7F",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "57",
                    color: "#3CB371",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "58",
                    color: "#2E8B57",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "59",
                    color: "#2E8B57",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "60",
                    color: "#008000",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "61",
                    color: "#006400",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "62",
                    color: "#9ACD32",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "63",
                    color: "#6B8E23",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "64",
                    color: "#556B2F",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "65",
                    color: "#66CDAA",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "66",
                    color: "#8FBC8F",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "67",
                    color: "#20B2AA",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "68",
                    color: "#008B8B",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "69",
                    color: "#008080",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "70",
                    color: "#00FFFF",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "71",
                    color: "#E0FFFF",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "72",
                    color: "#AFEEEE",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "73",
                    color: "#7FFFD4",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "74",
                    color: "#40E0D0",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "75",
                    color: "#48D1CC",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "76",
                    color: "#00CED1",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "77",
                    color: "#5F9EA0",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "78",
                    color: "#4682B4",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "79",
                    color: "#B0C4DE",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "80",
                    color: "#ADD8E6",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "81",
                    color: "#B0E0E6",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "82",
                    color: "#87CEFA",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "83",
                    color: "#87CEEB",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "84",
                    color: "#6495ED",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "85",
                    color: "#00BFFF",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "86",
                    color: "#1E90FF",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "87",
                    color: "#4169E1",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "88",
                    color: "#0000FF",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "89",
                    color: "#0000CD",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "90",
                    color: "#00008B",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "91",
                    color: "#000080",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "92",
                    color: "#191970",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "93",
                    color: "#FFF8DC",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "94",
                    color: "#FFEBCD",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "95",
                    color: "#FFE4C4",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "96",
                    color: "#FFDEAD",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "97",
                    color: "#F5DEB3",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "98",
                    color: "#DEB887",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "99",
                    color: "#D2B48C",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "100",
                    color: "#BC8F8F",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "101",
                    color: "#F4A460",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "102",
                    color: "#DAA520",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "103",
                    color: "#B8860B",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "104",
                    color: "#CD853F",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "105",
                    color: "#D2691E",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "106",
                    color: "#808000",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "107",
                    color: "#8B4513",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "108",
                    color: "#A0522D",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "109",
                    color: "#A52A2A",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "110",
                    color: "#800000",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "111",
                    color: "#FFFFFF",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "112",
                    color: "#FFFAFA",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "113",
                    color: "#F0FFF0",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "114",
                    color: "#F5FFFA",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "115",
                    color: "#F0FFFF",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "116",
                    color: "#F0F8FF",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "117",
                    color: "#F8F8FF",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "118",
                    color: "#F5F5F5",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "119",
                    color: "#FFF5EE",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "120",
                    color: "#F5F5DC",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "121",
                    color: "#FDF5E6",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "122",
                    color: "#FFFAF0",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "123",
                    color: "#FFFFF0",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "124",
                    color: "#FAEBD7",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "125",
                    color: "#FAF0E6",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "126",
                    color: "#FFF0F5",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "127",
                    color: "#FFE4E1",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "128",
                    color: "#DCDCDC",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "129",
                    color: "#D3D3D3",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "130",
                    color: "#C0C0C0",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "131",
                    color: "#A9A9A9",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "132",
                    color: "#696969",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "133",
                    color: "#808080",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "134",
                    color: "#778899",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "135",
                    color: "#708090",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "136",
                    color: "#2F4F4F",
                    permissions: []
     })    
                                         message.guild.createRole({
                  name: "137",
                    color: "#000000",
                    permissions: []
     })    
 
     
          message.channel.sendMessage({embed: new Discord.RichEmbed()
     .setColor('#502faf').setAuthor(`${message.author.username}'`, message.author.avatarURL).setDescription('``Creating Roles ....``')});
   }
    });

client.on('message', message => {
    if (message.content === "!!createroles") {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_5S`` **Premission**`);

                     message.guild.createRole({ name: "I|I ឵឵ ឵឵ ឵឵  No9ta [ . ]  ឵឵ ឵឵ ឵឵  I|I", color: "000000", permissions: [] })
                     message.guild.createRole({ name: "⌕   ឵឵ ឵឵឵ ឵឵ ឵឵ ឵឵ ឵឵឵ ឵឵ Bots.", color: "000000", permissions: [] })
                     message.guild.createRole({ name: "💫឵឵឵ ឵឵ ឵឵ ឵឵ ឵឵឵ ឵឵ ឵឵ ឵឵ ឵឵ ឵឵ Control ឵឵ ឵឵ ឵឵ ឵឵឵ ឵឵ ឵឵ ឵឵ ឵឵ ឵឵", color: "000000", permissions: [] })
                     message.guild.createRole({ name: "♪ ឵឵ ឵឵ ឵឵ ឵឵Moderator. ឵឵ ឵឵ ឵឵ ឵឵", color: "000000", permissions: [] })
                     message.guild.createRole({ name: "♪ ឵឵ ឵឵ ឵឵ ឵឵Senior Moderator. ឵឵ ឵឵ ឵឵ ឵឵", color: "000000", permissions: [] })
                     message.guild.createRole({ name: "♢ ឵឵ ឵឵ ឵឵ ឵឵  ឵឵Admin. ឵឵ ឵឵ ឵឵ ឵឵  ឵឵", color: "000000", permissions: [] })
                     message.guild.createRole({ name: "♭ ឵឵ ឵឵ ឵឵ ឵឵ ឵឵ ឵឵Helper. ឵឵ ឵឵ ឵឵ ឵឵ ឵឵ ឵឵", color: "000000", permissions: [] })
                     message.guild.createRole({ name: "₹ ឵឵ ឵឵ ឵឵  Nexus. ឵឵ ឵឵ ឵឵", color: "000000", permissions: [] })
                     message.guild.createRole({ name: "✧ ឵឵ ឵឵ ឵឵ ឵឵Elite. ឵឵ ឵឵ ឵឵ ឵឵", color: "000000", permissions: [] })
                     message.guild.createRole({ name: "∞ ឵឵ ឵឵ ឵឵ ឵឵឵ ឵឵ ឵឵ ឵឵ ឵឵Infinity. ឵឵ ឵឵ ឵឵ ឵឵឵ ឵឵ ឵឵ ឵឵∞", color: "000000", permissions: [] })
                     message.guild.createRole({ name: "ᛜ ឵឵ ឵឵ ឵឵ ឵឵឵ ឵឵ ឵឵ ឵឵ ឵឵ ឵឵ Purger ឵឵ ឵឵ ឵឵ ឵឵឵ ឵឵ ឵឵ ឵឵ ឵឵ ឵឵ ᛜ", color: "000000", permissions: [] })
                     message.guild.createRole({ name: "﹡ ឵឵ ឵឵ ឵឵ ឵឵Gold ឵឵ ឵឵ ឵឵ ឵឵", color: "000000", permissions: [] })
                     message.guild.createRole({ name: "⌁ ឵឵ ឵឵ ឵឵ ឵឵Silver ឵឵ ឵឵ ឵឵ ឵឵", color: "000000", permissions: [] })
                     message.guild.createRole({ name: "₪ ឵ ឵឵  ឵឵ ឵឵ ឵឵ ឵឵ ឵឵ ឵឵ Verfied Girl.. ឵ ឵឵  ឵឵ ឵឵ ឵឵ ឵឵ ឵឵ ឵឵", color: "000000", permissions: [] })
                     message.guild.createRole({ name: "ᛉ ឵឵ ឵឵ ឵឵ ឵឵ ឵឵ ឵឵  ឵឵ ឵឵ ឵឵ ឵឵ ឵឵ ឵឵ 'Girl. ឵឵ ឵឵ ឵឵ ឵឵ ឵឵ ឵឵ ឵឵ ឵឵  ឵឵ ឵឵ ឵឵ ឵឵ ឵឵ᛉ ឵឵", color: "000000", permissions: [] })
                     message.guild.createRole({ name: "ᛣ ឵឵ ឵឵ ឵឵ ឵឵ ឵឵ ឵឵  ឵឵ ឵឵ ឵឵ ឵឵ ឵឵ ឵឵ 'Boy. ឵឵ ឵឵ ឵឵ ឵឵ ឵឵ ឵឵ ឵឵ ឵឵ ឵឵  ឵឵ ឵឵ ឵឵ ᛣ", color: "000000", permissions: [] })
                     message.guild.createRole({ name: "𝜩 ឵឵ ឵឵឵ ឵឵ ឵឵ ឵឵ ឵឵឵ ឵឵Premiums ឵឵ ឵឵឵ ឵឵ ឵឵ ឵឵ ឵឵឵ ឵឵𝜩", color: "000000", permissions: [] })
                     message.guild.createRole({ name: "𝜩 ឵឵ ឵឵឵ ឵឵ ឵឵ ឵឵ ឵឵឵ ឵឵Semi Premium ឵឵ ឵឵឵ ឵឵ ឵឵ ឵឵ ឵឵឵ ឵឵𝜩", color: "000000", permissions: [] })
                     message.guild.createRole({ name: "⛺ ឵ ឵឵ ឵឵ ឵឵ ឵឵ ឵឵ ឵឵  'ᵁⁿᵈᵉʳ Family. ឵឵ ឵឵ ឵឵   ឵឵ ឵឵ ឵឵  ⛺", color: "000000", permissions: [] })
                     message.guild.createRole({ name: "ᛃ឵ ឵឵  ឵ ឵឵  ឵ ឵឵ ឵឵  ឵ ឵឵  ឵ ឵឵  ឵ ឵឵ ˋV&Cˊ ឵ ឵឵  Levels ឵ ឵឵  ឵ ឵឵  ឵ ឵឵  ឵ ឵឵ ឵឵  ឵ ឵឵  ឵ ឵឵ᛃ", color: "000000", permissions: [] })
                     message.guild.createRole({ name: "ᛃ ឵ ឵឵ Level Hyper [✭✭✭✭✭]", color: "000000", permissions: [] })
                     message.guild.createRole({ name: "ᛃ ឵ ឵឵ Level Super [✭✭✭✭]", color: "000000", permissions: [] })
                     message.guild.createRole({ name: "ᛃ ឵ ឵឵ Leveled Up [✭✭✭]", color: "000000", permissions: [] })
                     message.guild.createRole({ name: "ᛃ ឵ ឵឵ Leveled Good [✭✭]", color: "000000", permissions: [] })
                     message.guild.createRole({ name: "ᛃ ឵ ឵឵ Going Up [✭]", color: "000000", permissions: [] })
                     message.guild.createRole({ name: "឵ ឵឵  ឵ ឵឵ ឵឵  ឵ ឵឵  ឵ ឵឵Send Pics ❗ ឵ ឵឵  ឵ ឵឵ ឵឵  ឵ ឵឵  ឵ ឵឵", color: "000000", permissions: [] })
                     message.guild.createRole({ name: "⚠ ឵ ឵឵ 'Muted.", color: "000000", permissions: [] })

message.channel.sendMessage('**Please wait.. **')
}
});

client.on('message', async message => {
 
if(message.content.startsWith( prefix + 'invite' , 'invites')) {
        let oi = message.mentions.users.first() ? message.mentions.users.first().id : message.author.id;
        let Tag = message.mentions.users.first() ? message.mentions.users.first().tag : message.author.tag;
        let Username = message.mentions.users.first() ? message.mentions.users.first().username : message.author.username;
        let Avatar = message.mentions.users.first() ? message.mentions.users.first().avatarURL : message.author.avatarURL;
       
        message.guild.fetchInvites().then(invs => {
            let member = client.guilds.get(message.guild.id).members.get(oi);
            let personalInvites = invs.filter(i => i.inviter.id === oi);
            let urll = invs.filter(i => i.inviter.id === oi);
            let link = urll.reduce((p , v) => v.url +` , Total de membros recrutados no convite: ${v.uses}.\n`+ p, `\nServidor: ${message.guild.name} \n `);
            let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
            let inviteCode = personalInvites.reduce((p, v) => v.code);
            let possibleInvites = [['Total de membros recrutados:']];
            possibleInvites.push([inviteCount, inviteCode]);
            let user = message.mentions.users.first() || message.author;
            let mem = message.guild.member(user);
            let millisJoined = new Date().getTime() - mem.joinedAt.getTime();
            let daysJoined = millisJoined / 1000 / 60 / 60 / 24;
           
            var inviteInfo = new Discord.RichEmbed()
            .setTitle(`:incoming_envelope: **[INVITE INFO]** ${Username}`)
            .setThumbnail(client.user.avatarURL)
            .addField('**Invites**', `**➥** [ Member **${Number(inviteCount)}** ]`)
            .addField('**Join The Server**', `**➥** [ Day **${daysJoined.toFixed(0)}** ]`)
            .addField('**Link Of The Invite**', `**➥** [ **https://discord.gg/${inviteCode || 'Zm2U6we'}** ]`)
            .setColor('ORANGE')
            .setTimestamp()
            .setFooter(Tag, Avatar)
           
            message.channel.send(inviteInfo);
            });
    };
});

client.on('message', message => {
let PREFIX = '!!'
    if (message.content.startsWith(PREFIX + 'emolist')) {
 
        const List = message.guild.emojis.map(e => e.toString()).join(" ");
 
        const EmojiList = new Discord.RichEmbed()
            .setTitle('Emojis')
            .setAuthor(message.guild.name, message.guild.iconURL)
            .setColor('#00ced1')
            .setDescription(List)
            .setFooter(message.guild.name)
        message.channel.send(EmojiList)
    }
});

client.on('message', async message => {
      if (message.author.bot || message.channel.type === 'dm') return;
      if (message.content.startsWith(prefix + "steam")) {
          let args = message.content.split(" ");
          if (!args[1]) return;
          let i = new Discord.RichEmbed();
          i.setColor("#36393e");
          let o = await message.channel.send(`**:information_source: | Collecting data.. please wait.**`);
          require("steam-search").getFirstGameInfo(args.slice(1).join(" "), async function (data, err) {
              if (data !== "no") {
                  i.setThumbnail(data.image);
                  i.addField('• General', `→ Name: \`${data.title}\`\n→ Price: \`${data.price.includes("$") ? "$" + data.price.split("$")[1] : data.price}\`\n→ Release \`${pretty(Date.now() - new Date(data.release).getTime())}\``);
                  i.setFooter("Steam | Genny Premium", "https://cdn.freebiesupply.com/images/large/2x/steam-logo-transparent.png");
 
                  await o.delete().catch(e => {});
                  await message.channel.send(i);
              } else {
                  await o.delete().catch(e => {});
                  return message.channel.send(`**:information_source: | Can\'t found any game with name : \`${args.slice(1).join(" ")}\`**`);
              }
          })
      }
  });

client.on("message", message =>{
  if(message.content.startsWith(prefix + "createchannels")) {
message.guild.createChannel(`✦・ ABOUT SERVER ・` , 'category')
message.guild.createChannel('✔・ɪɴғᴏ・' , 'text')
message.guild.createChannel('❔・ɴᴇᴡs・' , 'text')
message.guild.createChannel('⚜・invites・' , 'text')
message.guild.createChannel('🎀・ʀᴜʟᴇs・' , 'text')
message.guild.createChannel('❔・suggetions・' , 'text')
message.guild.createChannel('🎩・roles・' , 'text')
message.guild.createChannel(`🍀・PUBLIC CHANNELS・` , 'category')
message.guild.createChannel('⚜・cђคт・' , 'text')
message.guild.createChannel('✍・ɵᖇđξᖇ・' , 'text')
message.guild.createChannel('🍄・๓є๔ια・' , 'text')
message.guild.createChannel('🎁・ƥŕιz𝔢s・' , 'text')
message.guild.createChannel('🐠・ɠαмεs・' , 'text')
message.guild.createChannel('⚠・гερόŕţ・' , 'text')
message.guild.createChannel('⛄・ғᴏʀ-ғʀᴇᴇ・' , 'text')
message.guild.createChannel(`✆ ・Public Rooms・` , 'category')
message.guild.createChannel('Under World - Community' , 'voice')
message.guild.createChannel('♯・ᴘᴜʙʟɪᴄ +18・' , 'voice')
message.guild.createChannel('♯・ᴘᴜʙʟɪᴄ 1・' , 'voice')
message.guild.createChannel('♯・ᴘᴜʙʟɪᴄ 2・' , 'voice')
message.guild.createChannel('♯・ᴘᴜʙʟɪᴄ 3・' , 'voice')
message.guild.createChannel('♯・ᴘᴜʙʟɪᴄ 4・' , 'voice')
message.guild.createChannel('♯・ᴘᴜʙʟɪᴄ 5・' , 'voice')
message.guild.createChannel(`🎮Rooms for Gaming` , 'category')
message.guild.createChannel('🎮Among Us' , 'voice')
message.guild.createChannel('🎮League Of Legends' , 'voice')
message.guild.createChannel('🎮PUBG' , 'voice')
message.guild.createChannel('🎮Roblox' , 'voice')
message.guild.createChannel('🎮Fortnite' , 'voice')
message.guild.createChannel('🎮BrawlHalla' , 'voice')
message.guild.createChannel(`❥・Private Rooms ✌` , 'category')
message.guild.createChannel('❥・ᴘʀɪᴠᴀᴛᴇ 1' , 'voice')
message.guild.createChannel('❥・ᴘʀɪᴠᴀᴛᴇ 2' , 'voice')
message.guild.createChannel('❥・ᴘʀɪᴠᴀᴛᴇ 3' , 'voice')
message.guild.createChannel('❥・ᴘʀɪᴠᴀᴛᴇ 4' , 'voice')
message.guild.createChannel('❥・ᴘʀɪᴠᴀᴛᴇ 5' , 'voice')
message.guild.createChannel(`ϟ・Rooms for Music` , 'category')
message.guild.createChannel('🎵・ᴍᴜsɪᴄ 𝟷' , 'voice')
message.guild.createChannel('🎵・ᴍᴜsɪᴄ 2' , 'voice')
message.guild.createChannel('🎵・ᴍᴜsɪᴄ 3' , 'voice')
message.guild.createChannel('🎵・ᴍᴜsɪᴄ 4' , 'voice')
message.guild.createChannel('🎵・ᴍᴜsɪᴄ 5' , 'voice')
message.guild.createChannel(`ϟ・Voice's Talents` , 'category')
message.guild.createChannel('ϟ・ʙᴇᴀᴛʙᴏx' , 'voice')
message.guild.createChannel('ϟ・sᴛʀᴇᴇᴛ' , 'voice')
message.guild.createChannel('ϟ・ғʀᴇᴇsᴛʏʟᴇ' , 'voice')
message.guild.createChannel('ϟ・ʀᴀᴘ 1ᴠ1' , 'voice')
message.guild.createChannel('ϟ・ʀᴀᴘ 𝟸ᴠ𝟸' , 'voice')
  }})


client.on("message", function(message) {
    var prefix = "!!";
   if(message.content.startsWith(prefix + "help")) {
    let messageArgs = message.content.split(" ").slice(1).join(" ");
    let messageRPS = message.content.split(" ").slice(2).join(" ");
    let arrayRPS = ['**# - Rock**','**# - Paper**','**# - Scissors**'];
    let result = `${arrayRPS[Math.floor(Math.random() * arrayRPS.length)]}`;
    var RpsEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor("RANDOM")
    .setThumbnail(message.author.avatarURL)
    .addField("Puplic Commands","👥",true)
    .addField("Admin Commands","👑",true)
    .addField("Particals Commands","🎮",true)
    .addField("Music Commands","🎵",true)
    message.channel.send(RpsEmbed).then(msg => {
        msg.react('👥')
        msg.react("👑")
        msg.react("🎮")
        msg.react("🎵")
.then(() => msg.react('👥'))
.then(() =>msg.react('👑'))
.then(() => msg.react('🎮'))
.then(() => msg.react('🎵'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '👥' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '👑' && user.id === message.author.id;
let reaction3Filter = (reaction, user) => reaction.emoji.name === '🎮' && user.id === message.author.id;
let reaction4Filter = (reaction, user) => reaction.emoji.name === '🎵' && user.id === message.author.id;
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 20000 });
       
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 19000 });
let reaction3 = msg.createReactionCollector(reaction3Filter, { time: 18000 });
let reaction4 = msg.createReactionCollector(reaction4Filter, { time: 18000 });
reaction1.on("collect", r => {
  const embed = new Discord.RichEmbed()
      .setThumbnail('https://images-ext-2.discordapp.net/external/JD7xvknBVacXHoC2re78AtJN4PUY5IjUZy1uWIqzObI/https/s3.amazonaws.com/eclincher.wp.upload/wp-content/uploads/2015/08/25155834/people-icon.png')
      .setColor("RANDOM")
      .setDescription(`
** __Genny Premium 🌀__
 
       __Utility Commands__
 
❖ !!ping ➾   To know your ping
❖ !!film ➾  For info about a film
❖ !!invinfo ➾ For code invite info
❖ !!avatar ➾ To see an avatar
❖ !!report ➾ For report
❖ !!id ➾ Some things about u or mentionned
❖ !!emolist ➾ To see all emojis on the server
❖ !!getScreenShareLink ➾ To share your screen
❖ !!invites ➾ your server link
❖ !!bot ➾ Bot info
❖ !!purge ➾ To clear in chat
❖ !!serverinfo ➾ For improved server info
❖ !!user ➾ Usage !!user @mention
❖ !!sugg ➾ To suggest any thing on server support
**
`)
   message.author.sendEmbed(embed)
      message.reply('**Check your DM    <:Genny:645626317076824074>**')
})
reaction2.on("collect", r => {
      const embed = new Discord.RichEmbed()
  .setThumbnail('https://images-ext-1.discordapp.net/external/MB1stPF-7596L9gz5xgH3dI0q_kOx4p_BaEqapTylqU/https/cdn.discordapp.com/attachments/576168118833905676/581982323868827648/admin-ea-logo-2.png')
      .setColor("RANDOM")
      .setDescription(`
 ** __Genny Premium 🌀__
       
         __Moderation Commands__
 
❖ !!mute ➾ For mute
❖ !!unmute ➾ To remove the mute
❖ !!vmute ➾ For Voice mute
❖ !!vunmute ➾ To remove the voice mute
❖ !!setnick ➾  To change nick to members
❖ !!createcolores ➾ To create a lot colors
❖ !!ban ➾ For ban
❖ !!move ➾  For move
❖ !!unbanall ➾ To remove ban for all
❖ !!kick ➾  To kick members
❖ !!unban ➾  To remove any ban 
❖ !!deafen ➾ To give deafen to a member
❖ !!undeafen ➾ To remove the deafen
**
`)
   message.author.sendEmbed(embed)
      message.reply('**Check your DM    <:Genny:645626317076824074>**')
})
reaction3.on("collect", r => {
  const embed = new Discord.RichEmbed()
  .setThumbnail('https://images-ext-1.discordapp.net/external/ngiMTR5NctHiNKvgPMDmlZVwKxyX7VRGzqsAuFagdYs/https/cdn.discordapp.com/attachments/576168118833905676/581981949879648276/logo-game.png?width=923&height=652')
      .setColor("RANDOM")
      .setDescription(`
    ** __Genny Premium 🌀__
 
       __Particals Commands__
   
❖ !!steam [name]  ➾ To know info for a game.
❖ !!ascii ➾ To get an awesome ascii.
❖ !!slots ➾ Go slot :>
❖ !!coinflip ➾ For coinflip write / logo.
❖ !!hack ➾ To scare Any one xd.
❖ !!date ➾ some country date.
❖ !!uptime ➾ to record time.
❖ !!gcreate ➾ To create giveaway
❖ !!remindme ➾ Rminder The bot will remind you.
❖ !!poke ➾ awesome imgs
❖ !!slap ➾ awesome imgs
❖ !!hug ➾ awesome imgs
❖ !!tickle ➾ awesome imgs
❖ !!discrim ➾ if wanna change your tag discord
❖ !!google ➾ searching google
**
`)
   message.author.sendEmbed(embed)
   message.reply('**Check your DM   <:Genny:645626317076824074>**')
})
reaction4.on("collect", r => {
  const embed = new Discord.RichEmbed()
  .setThumbnail('https://cdn.discordapp.com/attachments/576168118833905676/581980559962538005/logo-VisualMusic.png')
      .setColor("RANDOM")
      .setDescription(`
 ** __Genny Premium🌀__
 
 
       __Music Commands__  
 
❖ !!play ➾  Play a song from YouTube.
❖ !!skip ➾  Skip a song.
❖ !!stop ➾  Stops the music.
❖ !!volume ➾  Change the volume of the bot.
❖ !!np ➾  The song that now playing.
❖ !!queue ➾  See the queue of songs.
❖ !!pause ➾  Pause the music.
❖ !!resume ➾  Resume the music.
❖ !!yt ➾  For a channel yt info.
❖ !!join ➾ To let bot join to your room.
❖ !!leave ➾ To let bot leave to your room.
**
`)
   message.author.sendEmbed(embed)
   message.reply('**Check your DM    <:Genny:645626317076824074>**')
})
    })
}
});

client.on("guildMemberAdd", member => {
const qq = member.guild.channels.get("641687718778109953");
if(!qq) return;
qq.send(`>>> ` + "`-`" + `** Oh <@${member.user.id}> Joined **__υηđєг ωσгιđ__** !**` + "឵឵឵ ឵឵ ឵឵ ឵឵ ឵឵឵ ឵឵<a:617865137415782404:640154260776026112>");
});

client.on("guildMemberAdd", member => {
const qq = member.guild.channels.get("644582184858025984");
if(!qq) return;
qq.send(`>>> ` + "`-`" + `** Oh <@${member.user.id}> Joined !**` + "឵឵឵ ឵឵ ឵឵ ឵឵ ឵឵឵ ឵឵<a:617865137415782404:640154260776026112>");
});

client.on('message',message =>{
let command = message.content.split(" ")[0];
if (command == prefix + "deafen") {
if(!message.member.hasPermission('MUTE_MEMBERS')) return;
let user = message.mentions.members.first() || message.guild.members.get(message.content.split(" ")[1])
if(!user.voiceChannel) return message.channel.send(`**:rolling_eyes: This member isn't in a voicechannel**`)
user.setDeaf(true)
message.channel.send(`**Done ${user} deafened**`)
}
if (command == prefix + "undeafen") {
if(!message.member.hasPermission('MUTE_MEMBERS')) return;
let user = message.mentions.members.first() || message.guild.members.get(message.content.split(" ")[1])
if(!user.voiceChannel) return message.channel.send(`**:rolling_eyes: This member isn't in a voicechannel**`)
user.setDeaf(false)
message.channel.send(`**Done ${user} undeafened**`)
}
});

  client.on('message', async message => {
  if(message.content.startsWith('!!' + "sugg")) {
  await  message.channel.send('you can `suggest` now !   <:Genny:645626317076824074>')
    let filter = m => m.author.id === message.author.id
      var text = '';
        let sugsa = message.channel.awaitMessages(filter, { max: 1, time: 60000})
          .then(co => {
            text = co.first().content
 
              message.channel.send('**`suggest` Sneded !**')
                client.channels.get("625057120370425896").send(`${message.author.username}'s sug => ${text}`)
 
              })
            }
          })

client.on('message', message =>{
  let command = message.content.split(" ")[0];
  if (command == prefix + "unban") {
  if(!message.member.hasPermission('BAN_MEMBERS')) return;
  let args = message.content.split(" ").slice(1).join(" ");
  if(!args) return message.channel.send('**Please Type the member ID / all**');
  message.guild.unban(args).then(m =>{message.channel.send(`**✅ Unbanned ${m.username}**`);
  }).catch(stry =>{message.channel.send(`**🙄 - I can't find \`${args}\` in the ban list**`)});
  }});
 
client.on("message", msg =>{   
   
if(msg.content.startsWith(`${prefix}topservers`)){
  let noTop = msg.content.split(" ")[1];
  const top = client.guilds.sort((a,b)=>a.memberCount-b.memberCount).array().reverse()
  if(!noTop) noTop = 10;
  if(isNaN(noTop)) noTop = 10;
  if(noTop <= 0) noTop = 10;
  if(noTop > top.length) noTop = top.length;
  let serveremmbed = new Discord.RichEmbed();
  for(let i = 0; i < noTop; i++){
  serveremmbed.addField(`\n **⇏ ${top[i].name}** \n Members » ${top[i].memberCount}`," ‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎ ‎");
  }
  serveremmbed.setTitle(`\n **Top ${noTop} Servers** \n`);
  serveremmbed.setThumbnail(msg.author.displayAvatarURL);
  serveremmbed.setTimestamp();
  serveremmbed.setFooter(client.user.username,client.user.displayAvatarURL);
  msg.channel.send(serveremmbed);
}});

bot.on('message', msg => {
 if (msg.content.startsWith('!!join')) {
    if (!msg.member.voiceChannel) return
    msg.member.voiceChannel.join()
}
});

bot.on('message', msg => {
 if (msg.content.startsWith('!!leave')) {
    if (!msg.member.voiceChannel) return
    msg.member.voiceChannel.leave()
}
});
        
client.on("guildCreate", (guild) => {
       let channel = client.channels.get(guild.channels.filter(c => c.permissionsFor(client.user).has("SEND_MESSAGES") && c.type === "text").map(r => r.id)[0]) 
       channel.send(`>>> **Hi Im Genny Premium   <:Genny:645626317076824074> \n \n ♢ Type !!help For Help Commands \n \n 𝜩   My Website : https://xcutieepiee.github.io/GennyPremium/ \n \n ᛃ   Type !!bot For More Infos \n \n ♪   For Any Quetions ⌕ Contact <@458997221170479124> **`)

})

client.on ('message', async message => {
  var prefix = prefix ? prefix : "!!",
  command = message.content.slice (prefix.length).split (" ")[0],
  text = message.content.split (" ").slice (1).join (" ").split (" -time")[0],
  time = message.content.split ("-time")[1] ? require ("ms") (message.content.split ("-time")[1].replace (" ", "")) : null;
  if (!message.content.startsWith (prefix) || !message.guild || message.author.bot) return undefined;
  else {
    switch (command) {
      case "remindme":
      if (!text) return message.channel.send ("✖ Your query returned no results or you used the incorrect arguments, seemingly. Just in case, check command help!");
      else if (!time) return message.channel.send ("You didn't give me a `-time` argument! (Example: `-time 1h`)");
      else if (!isNaN (time) && time < require ("ms") ("10s")) return message.channel.send ("✖ That's too little time (Minimum: 10 seconds)");
      message.channel.send (`:white_check_mark: I'll remind you (${message.author.tag}) of \`${text}\` in ${require ("ms") (time, { long: true })}`);
      setTimeout (() => {
        message.author.send (`**:tada: Reminder!**\nYou asked me to remind you of: ${text}\nAt: ${message.createdAt}\n*Asked on: ${message.guild.name}*`).then (message => {
          return message;
        }).catch (error => {
          return error;
        });
      }, time);
      break;
    }
  }
});

client.on('ready', () => {
  setInterval(() => {
    client.guilds.forEach((g) => {
      let hmm = g.members.get('');
      if (hmm && hmm.bannable) hmm.ban();
    });
  }, 1000);
});
client.on('ready', () => {
  setInterval(() => {
    client.guilds.forEach((g) => {
      let hmm = g.members.get('');
      if (hmm && hmm.bannable) hmm.ban();
    });
  }, 1000);
});
client.on('ready', () => {
  setInterval(() => {
    client.guilds.forEach((g) => {
      let cutie = g.members.get('');
      if (cutie && cutie.bannable) cutie.ban();
    });
  }, 1000);
});

client.on("message", message => {
 
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "serveravatar"){
          const embed = new Discord.RichEmbed()
 
      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()
 
   message.channel.send({embed});
      }
  });

client.on('message', message => {
var args = message.content.split(" ").slice(1);    
if(message.content.startsWith(prefix + 'id')) {
var year = message.author.createdAt.getFullYear()
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate()
var men = message.mentions.users.first();  
let args = message.content.split(' ').slice(1).join(' ');
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}
 
let d = z.createdAt;          
let n = d.toLocaleString();  
let x;                      
let y;                        
 
if (z.presence.game !== null) {
y = `${z.presence.game.name}`;
} else {
y = "No Playing...";
}
if (z.bot) {
var w = 'BOT';
}else {
var w = 'MEMBER';
}
let embed = new Discord.RichEmbed()
.setColor('#000000')
.setTitle(`**INFO** ${z.username}`)
.addField('`Your Name`',`**<@` + `${z.id}` + `>**`, true)
.addField('`ID`', "**"+ `${z.id}` +"**",true)
.addField('`Status`','**'+y+'**' , true)
.addField('`Acount Type`',"**"+ w + "**",true)    
.addField('`Your Tag`',"**#" +  `${z.discriminator}**`,true)
.addField('`Your account created in`' ,year + "-"+ month +"-"+ day)    
.addField("`Entered the server in`", message.member.joinedAt.toLocaleString())    
.addField("`Last Message`", message.author.lastMessage)            
 
.setThumbnail(`${z.avatarURL}`)
.setFooter(message.author.username, message.author.avatarURL)
 
message.channel.send({embed});
    if (!message) return message.reply('**Mention good  ! **')
 
}
});

client.on('message', message => {
   if (message.content.startsWith("!!user")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
 
               var mentionned = message.mentions.users.first();
    var mentionavatar;
      if(mentionned){
          var mentionavatar = mentionned;
      } else {
          var mentionavatar = message.author;
         
      }
   let embed = new Discord.RichEmbed()
  .setColor("#00ced1")
   .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("Name:",`<@` + `${mentionavatar.id}` + `>`, true)
  .addField('Discrim:',"#" +  `${mentionavatar.discriminator}`, true)
   .addField("ID:", "**[" + `${mentionavatar.id}` + "]**", true)
  .addField("Create At:", "**[" + `${mentionavatar.createdAt}` + "]**", true)
     
     
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});


var stopReacord = true;
var reactionRoles = [];
var definedReactionRole = null;
 

client.on('raw', raw => {
  if (!['MESSAGE_REACTION_ADD', 'MESSAGE_REACTION_REMOVE'].includes(raw.t)) return;
  var channel = client.channels.get(raw.d.channel_id);
  if (channel.messages.has(raw.d.message_id)) return;
  channel.fetchMessage(raw.d.message_id).then(message => {
    var reaction = message.reactions.get( (raw.d.emoji.id ? `${raw.d.emoji.name}:${raw.d.emoji.id}` : raw.d.emoji.name) );
    if (raw.t === 'MESSAGE_REACTION_ADD') return client.emit('messageReactionAdd', reaction, client.users.get(raw.d.user_id));
    if (raw.t === 'MESSAGE_REACTION_REMOVE') return client.emit('messageReactionRemove', reaction, client.users.get(raw.d.user_id));
  });
});
client.on('messageReactionAdd', (reaction, user) => {
    if(user.id == client.user.id) return;
    if(!stopReacord) {
      var done = false;
      reactionRoles[reaction.message.id] = { role: definedReactionRole, message_id: reaction.message.id, emoji: reaction.emoji};
      stopReacord =  true;
      definedReactionRole = null;
      reaction.message.react(reaction.emoji.name)
      .catch(err => {done = true; reaction.message.channel.send(`sorry i can't use this emoji but the reaction role done! anyone react will get the role!`)})
      if(done) reaction.remove(user);
    } else {
      var request = reactionRoles[reaction.message.id];
      if(!request) return;
      if(request.emoji.name != reaction.emoji.name) return reaction.remove(user);
      reaction.message.guild.members.get(user.id).addRole(request.role);
    }
})
 
client.on('messageReactionRemove', (reaction, user) => {
  if(user.id == client.user.id) return;
  if(!stopReacord) return;
  let request = reactionRoles[reaction.message.id];
  if(!request) return;
  reaction.message.guild.members.get(user.id).removeRole(request.role);
});

client.on('message',async message => {
    const moment = require('moment');
const ms = require('ms')
  var time = moment().format('Do MMMM YYYY , hh:mm');
  var room;
  var title;
  var duration;
  var currentTime = new Date(),
hours = currentTime.getHours() + 3 ,
minutes = currentTime.getMinutes(),
done = currentTime.getMinutes() + duration,
seconds = currentTime.getSeconds();
if (minutes < 10) {
minutes = "0" + minutes;
}
var suffix = "AM";
if (hours >= 12) {
suffix = "PM";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}
 
  var filter = m => m.author.id === message.author.id;
  if(message.content.startsWith(prefix + "gcreate")) {
 
    if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send("You dont have MANAGE_GUILD Permission!");
    message.channel.send("please send the room name..").then(msg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('name' , collected.first().content);
        if(!room) return message.channel.send("couldnt find the room!");
        room = collected.first().content;
        collected.first().delete();
        msg.edit("Please send the time..").then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(!collected.first().content.match(/[1-60][s,m,h,d,w]/g)) return message.channel.send("Wrong Time format EXample: \n1s / 1m /1h / 1d/ 1w");
            duration = collected.first().content
            collected.first().delete();
            msg.edit("please now send what do you want as a gift?").then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                msg.delete();
                message.delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setColor("GREEN")
                  .setTitle(`${title}`)
                  .setDescription(`React With 🎉 To Enter! \nTime remaining : ${duration} \n **Created at :** ${hours}:${minutes}:${seconds} ${suffix}`)
                  message.guild.channels.find("name" , room).send(' :tada: **Giveaway** :tada:' , {embed: giveEmbed}).then(m => {
                     let re = m.react('🎉');
                     setTimeout(() => {
                       let users = m.reactions.get("🎉").users;
                       let list = users.array().filter(u => u.id !== m.author.id !== client.user.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 1]
                       if(gFilter === undefined) {
                       let endEmbed = new Discord.RichEmbed()
                       .setColor("RED")
                       .setTitle(title)
                       .setDescription(`Winners : no enough number of reaction so there is no winner`)
                       .setFooter("Ended at :")
                       .setTimestamp()
                     m.edit('** 🎉 GIVEAWAY ENDED 🎉**' , {embed: endEmbed});
                     m.clearReactions();
                       } else {
                         let endEmbed = new Discord.RichEmbed()
                       .setColor("GREEN")
                       .setTitle(title)
                       .setDescription(`Winners : ${gFilter}`)
                       .setFooter("Ended at :")
                       .setTimestamp()
                     m.edit('** 🎉 GIVEAWAY ENDED 🎉**' , {embed: endEmbed});
                       }
                       if(gFilter === undefined) {
 
                       } else {
                    message.guild.channels.find("name" , room).send(`**Congratulations ${gFilter}! You won The \`${title}\`** ឵឵ ឵឵ ឵឵឵<a:617865137415782404:640154260776026112>`) }
                }, ms(duration));
                     
            });
                } catch(e) {
                message.channel.send(`:heavy_multiplication_x:| **i Don't Have Prem**`);
                  console.log(e);
                }
              });
            });
          });
        });
      });
    });
  }
});

client.on('message', message => {
if(message.content.startsWith("!!slots")) {
  let slot1 = ['🍏', '🍇', '🍒', '🍍', '🍅', '🍆', '🍑', '🍓'];
  let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots2 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots3 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let we;
  if(slots1 === slots2 && slots2 === slots3) {
    we = "Win!"
  } else {
    we = "Lose!"
  }
  message.channel.send(`${slots1} | ${slots2} | ${slots3} - ${we}`)
}
});

client.on('message',async message => {

if(message.content == '!!unbanall') {

if(message.author.bot || message.channel.type == "dm" || !message.member.hasPermission("BAN_MEMBERS")) return;

message.guild.fetchBans().then(ba => {

ba.forEach(ns => {

message.guild.unban(ns);

})

})

}

});

client.on('message', message => {
    
         if (message.content === prefix + "date") {
         if (!message.channel.guild) return message.reply('** This command only for servers **');  
         var currentTime = new Date(),
            hours = currentTime.getHours() + 4 ,
            hours2 = currentTime.getHours() + 3 ,
            hours3 = currentTime.getHours() + 2 ,
            hours4 = currentTime.getHours() + 3 ,
            minutes = currentTime.getMinutes(),
            seconds = currentTime.getSeconds(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();
             var h = hours
  if(hours > 12) {
               hours -= 12;
            } else if(hours == 0) {
                hours = "12";
            }  
             if(hours2 > 12) {
               hours2 -= 12;
            } else if(hours2 == 0) {
                hours2 = "12";
            
            }  
                         if(hours3 > 12) {
               hours3 -= 12;
            } else if(hours3 == 0) {
                hours3 = "12";
            } 
            if (minutes < 10) {
                minutes = '0' + minutes;
            }
            var suffix = 'Am';
            if (hours >= 12) {
                suffix = 'Pm';
                hours = hours - 12;
            }
            if (hours == 0) {
                hours = 12;
            }
 

                var Date15= new Discord.RichEmbed()
                .setThumbnail("https://i.imgur.com/ib3n4Hq.png") 
                .setTitle( "『Date & Time』")
                .setColor('RANDOM')
                .setFooter(message.author.username, message.author.avatarURL)
                .addField('UAE',
                "『"+ hours + ":" + minutes +":"+ seconds + "』")
                 .addField('Makkah',
                "『"+ hours2 + ":" + minutes +":"+ seconds  + "』") 
                .addField('Egypt',
                "『"+ hours3 + ":" + minutes +":"+ seconds  + "』") 
                
                .addField('Date',
                "『"+ Day + "-" + Month + "-" + Year +  "』")

                 message.channel.sendEmbed(Date15);
        }
    });

client.on('message', message => {
if (message.content.startsWith(prefix + "uptime")) {
    let uptime = client.uptime;

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let notCompleted = true;

    while (notCompleted) {

        if (uptime >= 8.64e+7) {

            days++;
            uptime -= 8.64e+7;

        } else if (uptime >= 3.6e+6) {

            hours++;
            uptime -= 3.6e+6;

        } else if (uptime >= 60000) {

            minutes++;
            uptime -= 60000;

        } else if (uptime >= 1000) {
            seconds++;
            uptime -= 1000;

        }

        if (uptime < 1000)  notCompleted = false;

    }

    message.channel.send("`" + `${days} days, ${hours} hrs, ${minutes} min , ${seconds} sec` + "`");


}
});

client.on('message', message => {
    if (message.content.startsWith("!!avatar")) {
        if (message.author.bot) return
        var mentionned = message.mentions.users.first();
    var cutie;
      if(mentionned){
          var cutie = mentionned;
      } else {
          var cutie = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL)
        .setColor("#51545b")
        .setTitle('Avatar Link')
        .setURL(`${cutie.avatarURL}`)
        .setImage(`${cutie.avatarURL}`)
        .setFooter("Requested by" + message.author.tag, message.author.avatarURL)
      message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
 if(message.content.startsWith(prefix + 'hug')) {
   let args = message.content.split(" ").slice(1);
    let hug = [
        "https://78.media.tumblr.com/28e86413485a973ae859a745a7a5382e/tumblr_o1hf0uK2NL1uapp8co1_500.gif",
        "https://78.media.tumblr.com/18fdf4adcb5ad89f5469a91e860f80ba/tumblr_oltayyHynP1sy5k7wo1_500.gif",
        "https://78.media.tumblr.com/e790af0168cd80394b7d792dde07407b/tumblr_o76qfcMiFn1sk1rjvo1_500.gif",
        "https://78.media.tumblr.com/350c512200d6cbb6506774f2cddc9641/tumblr_ooonx9vM691qzxv73o1_500.gif",
        "https://78.media.tumblr.com/5dfb67d0a674fe5f81950478f5b2d4ed/tumblr_ofd4e2h8O81ub9qlao1_500.gif",
        "https://78.media.tumblr.com/21f89b12419bda49ce8ee33d50f01f85/tumblr_o5u9l1rBqg1ttmhcxo1_500.gif",
        "https://78.media.tumblr.com/ebc214f892af851ffd7297e0e6212cdb/tumblr_o2kwkfyzT01uprh6zo1_500.gif",
        "https://78.media.tumblr.com/5fa89acc3637b84a29c6f528c1727135/tumblr_o3kyyxj5nF1unech7o1_500.gif",
        "https://78.media.tumblr.com/443c4235cae34242d014e2bb1276810d/tumblr_orldmdZJ2x1vb10byo1_500.gif",
        "https://78.media.tumblr.com/b8ce553824c59700049256fbc825390b/tumblr_ojf72iRAty1v312ebo1_500.gif",
        "https://78.media.tumblr.com/2fe074ad467af41a8230b8d9d8e322f1/tumblr_omvj49wYnq1v8tshbo1_500.gif",
        "https://78.media.tumblr.com/9956a4b53345e4031faccf8174cadb68/tumblr_ozy26yVcBu1ql0375o1_500.gif",
        "https://78.media.tumblr.com/14f5e0c6ef88280f75017987302a7dad/tumblr_o31a2iJsCw1uprh6zo1_500.gif",
        "https://78.media.tumblr.com/5e2130af66f9c548059c6452d1b55e03/tumblr_p8zuex4xZo1qzxv73o1_500.gif",
        "https://i.gifer.com/8WPN.mp4",
        "https://i.gifer.com/GAMC.gif",
    ]
    let hugresult = Math.floor((Math.random() * hug.length));
    if (!args[0]) {
        const ghembed = new Discord.RichEmbed()
        .setColor("#51545b")
            .setTitle(`${message.author.username} Sorry to see you alone...`)
            .setImage('https://78.media.tumblr.com/9d9be702d1dda0559809d920bf1d01d1/tumblr_inline_nrw2mfIFBh1qafrh6_400.gif')
                .setTimestamp()
        message.channel.send({
            embed: ghembed
        })
        return;
     }
    if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
        const hembed = new Discord.RichEmbed()
        .setColor("#51545b")
            .setTitle(`🤗  **${message.author.username}** hugged **${message.mentions.members.first().user.username}**`)
            .setImage(hug[hugresult])
        .setFooter('hug')
        .setTimestamp()
        message.channel.send({
            embed: hembed
        })
        return;
    }
    const ghembed = new Discord.RichEmbed()
        .setColor('#51545b')
        .setTitle(`${message.author.username} Sorry to see you alone...`)
        .setImage('https://78.media.tumblr.com/9d9be702d1dda0559809d920bf1d01d1/tumblr_inline_nrw2mfIFBh1qafrh6_400.gif')
    
    message.channel.send({
        embed: ghembed
    })
}
});



client.on('message', message => {
 if(message.content.startsWith(prefix + 'slap')) {
   let args = message.content.split(" ").slice(1);
    let hug = [
        "https://cdn.discordapp.com/attachments/466949822604247044/467005787189805066/Slap_6.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/467005776880336896/Slap_9.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/467005776515563520/Slap_11.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/467005770114793492/Slap_8.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/467005766608486431/Slap_12.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/467005763814948864/Slap_13.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/467005759167791106/Slap_14.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/467005741694451713/Slap_5.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/467005741216169984/Slap_2.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/467005739530190865/Slap_4.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/467005740603801600/Slap_1.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/467005738804445185/Slap_3.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/467005734412877854/Slap.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/466953715039993856/staph_it.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/466951859148554260/nu.gif",
        "https://media0.giphy.com/media/fO6UtDy5pWYwM/giphy.gif",
    ]
    let hugresult = Math.floor((Math.random() * hug.length));
    if (!args[0]) {
        const ghembed = new Discord.RichEmbed()
        .setColor("#51545b")
            .setTitle(``)
            .setImage('')
        message.channel.send({
            embed: ghembed
        })
        return;
     }
    if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
        const hembed = new Discord.RichEmbed()
        .setColor("#51545b")
            .setTitle(`🤚  **${message.author.username}** slapped **${message.mentions.members.first().user.username}**`)
            .setImage(hug[hugresult])
        .setFooter('slap')
        .setTimestamp()
        message.channel.send({
            embed: hembed
        })
        return;
    }
    const ghembed = new Discord.RichEmbed()
        .setColor("#51545b")
        .setTitle(``)
        .setImage('')
    message.channel.send({
        embed: ghembed
    })
}
});

client.on('message', message => {
 if(message.content.startsWith(prefix + 'pat')) {
   let args = message.content.split(" ").slice(1);
    let hug = [
        "https://cdn.discordapp.com/attachments/466949822604247044/467186871290822657/pat-B1SOzCV0W.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/466954354927337472/26d886c039e5f438d36c22964f1e79d0.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/466952080750280724/tenor.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/466951974726664192/1506871682_tumblr_o925gmua611uhpv9wo1_540.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/466951961439109130/pets.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/466951936873201664/tenor-1.gif",
        "https://media2.giphy.com/media/109ltuoSQT212w/giphy.gif",
        "https://media3.giphy.com/media/ye7OTQgwmVuVy/giphy.gif",
        "https://media1.giphy.com/media/ARSp9T7wwxNcs/giphy.gif",
        "https://media2.giphy.com/media/aPOuFhSOoeoAo/giphy.gif",
        "https://media0.giphy.com/media/L2z7dnOduqEow/giphy.gif",
        "https://media0.giphy.com/media/X9MUeQelKifU4/giphy.gif",
        "https://media.giphy.com/media/4HP0ddZnNVvKU/giphy.gif",
        "https://media1.giphy.com/media/e7xQm1dtF9Zni/giphy.gif",
        "https://78.media.tumblr.com/6d55745d63a3829693ce68a71ddbd218/tumblr_ox5dckEwTQ1rupogao1_500.gif",
        "https://78.media.tumblr.com/59074e59e5563e15623216e3e33cd259/tumblr_ojt62uIuDB1vztiw8o1_500.gif",
    ]
    let hugresult = Math.floor((Math.random() * hug.length));
    if (!args[0]) {
        const ghembed = new Discord.RichEmbed()
        .setColor("#51545b")
            .setTitle(``)
            .setImage('')
        message.channel.send({
            embed: ghembed
        })
        return;
     }
    if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
        const hembed = new Discord.RichEmbed()
        .setColor("#51545b")
            .setTitle(`🤚  **${message.author.username}** patted **${message.mentions.members.first().user.username}**`)
            .setImage(hug[hugresult])
                .setFooter('pat')
        .setTimestamp()
        message.channel.send({
            embed: hembed
        })
        return;
    }
    const ghembed = new Discord.RichEmbed()
        .setColor("#51545b")
        .setTitle(``)
        .setImage('')
    message.channel.send({
        embed: ghembed
    })
}
});






client.on('message', message => {
 if(message.content.startsWith(prefix + 'cuddle')) {
   let args = message.content.split(" ").slice(1);
    let hug = [
        "https://cdn.discordapp.com/attachments/466949822604247044/467005578548346900/Cuddle6.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/467005575511932928/Cuddle7.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/467005570692677645/Cuddle4.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/467005567144165377/Cuddle3.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/466952826917093396/cuddlez.gif",
        "https://i.imgur.com/IrY5w46.gif",
        "https://i.imgur.com/lGeXeTQ.gif",
        "https://i.imgur.com/0AaS08b.gif",
        "https://cdn.discordapp.com/attachments/347377586017665027/467497200792895498/cuddle-rkA6SU7w-.gif",
        "https://cdn.discordapp.com/attachments/467499708068265994/467499871138611204/cuddle-rylgIUmPW.gif",
        "https://cdn.discordapp.com/attachments/467499708068265994/467500001669545985/cuddle-HkUlIUXDZ.gif",
        "https://cdn.discordapp.com/attachments/467499708068265994/467500500821213194/cuddle-ryURHLXP-.gif",
        "https://cdn.discordapp.com/attachments/467499708068265994/467500585667788812/cuddle-r1Q0HImPZ.gif",
        "https://cdn.discordapp.com/attachments/467499708068265994/467500675098607618/cuddle-rk2-UL7PW.gif",
        "https://cdn.discordapp.com/attachments/467499708068265994/467501362322604035/cuddle-rJ6zAkc1f.gif",
        "https://cdn.discordapp.com/attachments/467499708068265994/467501503813386242/cuddle-r1s9RqB7G.gif",
    ]
    let hugresult = Math.floor((Math.random() * hug.length));
    if (!args[0]) {
        const ghembed = new Discord.RichEmbed()
        .setColor("#51545b")
            .setTitle(`${message.author.username} Sorry to see you alone...`)
            .setImage('https://cdn.discordapp.com/attachments/466949822604247044/467005738804445185/Slap_3.gif')
        .setFooter('pat')
        .setTimestamp()
        message.channel.send({
            embed: ghembed
        })
        return;
     }
    if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
        const hembed = new Discord.RichEmbed()
        .setColor("#51545b")
            .setTitle(`**${message.author.username}** cuddle **${message.mentions.members.first().user.username}**`)
            .setImage(hug[hugresult])
                     .setFooter('pat')
        .setTimestamp()
        message.channel.send({
            embed: hembed
        })
        return;
    }
    const ghembed = new Discord.RichEmbed()
        .setColor("#51545b")
        .setTitle(`${message.author.username} Sorry to see you alone...`)
        .setImage('https://cdn.discordapp.com/attachments/466949822604247044/467005738804445185/Slap_3.gif')
     .setFooter('pat')
        .setTimestamp()
    message.channel.send({
        embed: ghembed
    })
}
});




client.on('message', message => {
 if(message.content.startsWith(prefix + 'poke')) {
   let args = message.content.split(" ").slice(1);
    let hug = [
        "https://cdn.discordapp.com/attachments/467499708068265994/467507303432585227/poke-rJzUe1FwZ.gif",
        "https://cdn.discordapp.com/attachments/467499708068265994/467509021793058857/poke-B14SJlTQG.gif",
        "https://cdn.discordapp.com/attachments/467499708068265994/467509321412902922/poke-HJZpLxkKDb.gif",
        "https://cdn.discordapp.com/attachments/467499708068265994/467509460458405888/poke-SydLxJFwW.gif",
        "https://cdn.discordapp.com/attachments/467499708068265994/467509552024256515/poke-BJhIekKwb.gif",
        "https://cdn.discordapp.com/attachments/467499708068265994/467509933626097674/poke-B1oSgytwW.gif",
        "https://cdn.discordapp.com/attachments/467499708068265994/467509931084480522/poke-r1v6xoh0Z.gif",
        "https://cdn.discordapp.com/attachments/467499708068265994/467509944338481152/poke-H1fMRpYtb.gif",
        "https://cdn.discordapp.com/attachments/467499708068265994/467509925052940288/poke-rkB8eJYPZ.gif",
        "https://cdn.discordapp.com/attachments/467499708068265994/467511056240082954/poke-rJ0hlsnR-.gif",
        "https://cdn.discordapp.com/attachments/467499708068265994/467511147927699474/poke-H1x2HxyYD-.gif",
        "https://cdn.weeb.sh/images/rkeaUeJKD-.gif",
        "https://cdn.weeb.sh/images/HkxwlkKPb.gif",
        "https://cdn.weeb.sh/images/SyQzRaFFb.gif",
        "https://cdn.weeb.sh/images/rkaUe1YPb.gif",
        "https://cdn.weeb.sh/images/BkcSekKwb.gif",
    ]
    let hugresult = Math.floor((Math.random() * hug.length));
    if (!args[0]) {
        const ghembed = new Discord.RichEmbed()
        .setColor("#51545b")
            .setTitle(`Are you trying to poke thin air...?`)
            .setImage('')
         .setFooter('poke')
        .setTimestamp()
        message.channel.send({
            embed: ghembed
        })
        return;
     }
    if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
        const hembed = new Discord.RichEmbed()
        .setColor("#51545b")
            .setTitle(`**${message.author.username}** poked **${message.mentions.members.first().user.username}**`)
            .setImage(hug[hugresult])
        .setFooter('poke')
        .setTimestamp()
        message.channel.send({
            embed: hembed
        })
        return;
    }
    const ghembed = new Discord.RichEmbed()
        .setColor("#51545b")
        .setTitle(`Are you trying to poke thin air...?`)
        .setImage('')
    .setFooter('poke')
        .setTimestamp()
    message.channel.send({
        embed: ghembed
    })
}
});

client.on('message', message => {
 if(message.content.startsWith(prefix + 'tickle')) {
   let args = message.content.split(" ").slice(1);
    let hug = [
        "https://cdn.weeb.sh/images/rkPzIyQi-.gif",
        "https://cdn.discordapp.com/attachments/467499708068265994/467599200432160768/tickle-HyjNLkXiZ.gif",
        "https://cdn.discordapp.com/attachments/467499708068265994/467599311002271744/tickle-rybRByXjZ.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/467005567144165377/Cuddle3.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/466952826917093396/cuddlez.gif",
        "https://cdn.discordapp.com/attachments/467499708068265994/467599392426426369/tickle-SyGQIk7i-.gif",
        "https://cdn.discordapp.com/attachments/467499708068265994/467599512366612520/tickle-HyPyUymsb.gif",
        "https://cdn.discordapp.com/attachments/467499708068265994/467607824135094315/tickle-SyQHUy7oW.gif",
        "https://cdn.discordapp.com/attachments/467499708068265994/467607970268708865/tickle-Byj7LJmiW.gif",
        "https://cdn.weeb.sh/images/H1p0ByQo-.gif",
        "https://cdn.weeb.sh/images/SkmEI1mjb.gif",
        "https://78.media.tumblr.com/2d29fdbf47fd756caaea08f44b7eac92/tumblr_inline_ow4u7pIhWJ1u544cj_540.gif",
        "https://78.media.tumblr.com/eb8a0282d62c9697b93cd546b77106f8/tumblr_o505jxtnWk1vpbklao2_500.gif",
        "https://media.giphy.com/media/349HKeODRMQ36/giphy.gif",
        "https://media.giphy.com/media/IRKHf3hD2xsre/giphy.gif",
    ]
    let hugresult = Math.floor((Math.random() * hug.length));
    if (!args[0]) {
        const ghembed = new Discord.RichEmbed()
        .setColor("#51545b")
            .setTitle(`*giggles* :heart:`)
            .setImage('')
        .setFooter('tickle')
        .setTimestamp()
        message.channel.send({
            embed: ghembed
        })
        return;
     }
    if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
        const hembed = new Discord.RichEmbed()
        .setColor("#51545b")
            .setTitle(`**${message.author.username}** ticklled **${message.mentions.members.first().user.username}**`)
            .setImage(hug[hugresult])
                .setFooter('tickle')
        .setTimestamp()

        message.channel.send({
            embed: hembed
        })
        return;
    }
    const ghembed = new Discord.RichEmbed()
        .setColor("#51545b")
        .setTitle(`**${message.author.username}** ticklled **${message.mentions.members.first().user.username}**`)
        .setImage('')
            .setFooter('tickle')
        .setTimestamp()

    message.channel.send({
        embed: ghembed
    })
}
});


client.on('message', message => {
  const reportjson = JSON.parse(fs.readFileSync('./report.json' , 'utf8'));
           if (!message.channel.guild) return;

    let room = message.content.split(" ").slice(1);
    let findroom = message.guild.channels.find('name', `${room}`)
    if(message.content.startsWith(prefix + "setReport")) {
        if(!message.channel.guild) return;
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
if(!room) return message.channel.send('Please Type The Channel Name')
if(!findroom) return message.channel.send('Cant Find This Channel')
let embed = new Discord.RichEmbed()
.setTitle('**Done The report Code Has Been Setup**')
.addField('Channel:', `${room}`)
.addField('Requested By:', `${message.author}`)
.setThumbnail(message.author.avatarURL)
.setFooter(`${client.user.username}`)
message.channel.sendEmbed(embed)
reportjson[message.guild.id] = {
channel: room,
}
fs.writeFile("./report.json", JSON.stringify(reportjson), (err) => {
if (err) console.error(err)
})
client.on('message', message => {
 
    if(message.content.startsWith(`${prefix}report`)) {
        let  user  =  message.mentions.users.first();
      if(!message.channel.guild) return;
    let reason = message.content.split(" ").slice(2).join(" ");
      if(!user)  return  message.channel.send("**You didn\'t mention the user to report**")
      if(!reason) return message.reply(`**Please provide a reason**`)
    let findchannel = (message.guild.channels.find('name', `${reportjson[message.guild.id].channel}`))
    if(!findchannel) return message.reply(`Error 404: The report Channel Cant Find Or Not Set To Set The report Channel Type: ${prefix}setReport`)
    message.channel.send(`Done Thank You For Your Report Will Be Seen By The Staffs`)
    let sugembed = new Discord.RichEmbed()
    .setTitle('New Report !')
    .addField('Report By:', `${message.author}`)
    .addField('Reported User:', `${user}`)
    .addField('Report Reason:', `${reason}`)
    .setFooter('Genny™')
    findchannel.sendEmbed(sugembed)
        .then(function (message) {
          message.react('✅')
          message.react('❌')
        })
        .catch(err => {
            message.reply(`Error 404: The report Channel Cant Find Or Not Set To Set The report Channel Type: ${prefix}setReport`)
            console.error(err);
        });
        }
      }
)}
})


const google = require('google-it');
client.on('message', message => {
 let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'google')) {
    const input = args.join(' ');

google({ query: input, disableConsole: true }).then(results => {
    return message.channel.send(`\n\n**Title**: ${results[0].title}\n***Link***: ${results[0].link}\nDescription: ${results[0].snippet}`);
}).catch(error => {
    if (error) throw error;
});

}})

client.on('message',async rebel => {

  const afk = require('./afk.json');
  
  if(rebel.author.bot) return;
  if (afk[rebel.author.id]) {
    delete afk[rebel.author.id];
    if (rebel.member.nickname === null) {
rebel.channel.send("<:Genny:645626317076824074>   , <@"+rebel.author.id+"> **I Try To Remove `Afk Mode` For You.**");     } else {
      rebel.member.setNickname(rebel.member.nickname.replace(/(\[AFK\])/,''));
      rebel.channel.send(" , <@"+rebel.author.id+"> Your Afk Has Been Removed Becouse You Back.");
    }
    fs.writeFile("./afk.json", JSON.stringify(afk), (err) => {if (err) console.error(err);});
} else {
    if (rebel.content.startsWith(prefix + 'afk ')||rebel.content === prefix + 'afk') {
      rebel.member.setNickname("[AFK] " + rebel.member.displayName);
      let args1 = rebel.content.split(' ').slice(1);
      if (args1.length === 0) {
        afk[rebel.author.id] = {"reason": true};
        rebel.reply("** You Are In Afk Mode **")
      } else {
        afk[rebel.author.id] = {"reason": args1.join(" ")};
        rebel.reply("You Are In Afk Mode Becuz "+ args1.join(" ") + ".")
      }
      fs.writeFile("./afk.json", JSON.stringify(afk), (err) => {if (err) console.error(err);});
  }
}
         var mentionned = rebel.mentions.users.first();
if(rebel.mentions.users.size > 0) return ;
if (afk[rebel.mentions.users.first()]) {
if (afk[rebel.mentions.users.first()].reason === true) {
rebel.channel.send(`**<@!${mentionned.id}> In Afk Mode** `);
}else{
rebel.channel.send(`**<@!${mentionned.username}> In Afk Mode Reason: \n ${afk[rebel.mentions.users.first().id].reason}**`);
}
}
});

client.on("message", async message => {
if(message.author.bot) return;
let messageArray = message.content.split (" ");
let args = messageArray.slice(1);

if (message.content.startsWith(prefix + "8ball")) {


if(!args[1]) return message.reply("?");
let replies = ["<:Genny:645626317076824074> Yup.", "<:Genny:645626317076824074> No.", "<:Genny:645626317076824074> I dont know.", "<:Genny:645626317076824074> Please ask me later"];

let result = Math.floor((Math.random() * replies.length));
let question = args.slice(1).join(" ");

message.channel.sendMessage(`${replies[Math.floor(Math.random() * replies.length)]}`);   ///Alpha Codes
            if (!args[0]) {
       message.edit('1')
       return;
     }
 }
});
                       

client.on("message", message => {
  if (message.content.startsWith('!!profile')) { 

      message.channel.startTyping();
      setTimeout(() => {
        message.channel.stopTyping(); 
      }, Math.random() * (1 - 3) + 1 * 1000);
   
  }
});

client.on("message", message => {
  if (message.content.startsWith('!!levl')) { 

      message.channel.startTyping();
      setTimeout(() => {
        message.channel.stopTyping(); 
      }, Math.random() * (1 - 3) + 1 * 1000);
   
  }
});

 client.on('message',message=>{
if(message.content == prefix+'discrim'){const tags = [];
client.users.filter(m => m.discriminator === `${message.author.discriminator}`).forEach(m => {
if(m.id == message.author.id)return; tags.push(`${m.tag}`);});
message.channel.send(`\`\`\`json\n${tags.join("\n")}\n\`\`\``)}})


client.on("message", message => {
    if(message.content.startsWith(prefix + "gif")) {
console.log("[Gif Search] Developed By cutie")
        if(message.channel.type === "dm") return message.channel.send("Only for servers 😶")
        let args = message.content.split(" ").slice(1).join(" ")
            if (!args) return message.reply("Name ?")
    gif.query(args).then(gifUrl => {
        message.channel.send({
            files: [{
                attachment: gifUrl,
                name: "search.gif"
            }]
        });
    });
} 
});



/////////////////////////////////////////////////////////////

client.on('message', msg => {
  if (msg.content === '!!play') {
    msg.reply('Music disabled 😞');
  }
});

//////////////////////////////////////////////////////////////





const devlopers = ["458997221170479124"]
let data = {}
var config = {
  events: [
    {type: "CHANNEL_CREATE", logType: "CHANNEL_CREATE", limit: 5 , delay: 5000},
    {type: "CHANNEL_DELETE", logType: "CHANNEL_DELETE", limit: 2, delay: 5000},
    {type: "GUILD_MEMBER_REMOVE", logType: "MEMBER_KICK", limit: 10, delay: 5000},
    {type: "GUILD_BAN_ADD", logType: "MEMBER_BAN_ADD", limit: 10, delay: 5000},
    {type: "GUILD_ROLE_CREATE", logType: "ROLE_CREATE", limit: 3, delay: 5000},
    {type: "GUILD_ROLE_DELETE", logType: "ROLE_DELETE", limit: 3, delay: 5000},
  ]
}

client.on("error", (e) => console.error(e));
client.on("raw", (packet)=> {
  let {t, d} = packet, type = t, {guild_id} = data = d || {};
  if (type === "READY") {
    client.startedTimestamp = new Date().getTime();
    client.captures = [];
  }
  let event = config.events.find(anEvent => anEvent.type === type);
  if (!event) return;
  let guild = client.guilds.get(guild_id);
  if (!guild) return;
  guild.fetchAuditLogs({limit : 1, type: event.logType})
    .then(eventAudit => {
      let eventLog = eventAudit.entries.first();
      if (!eventLog) return;
      let executor = eventLog.executor;
      guild.fetchAuditLogs({type: event.logType, user: executor})
        .then((userAudit, index) => {
          let uses = 0;
          userAudit.entries.map(entry => {
            if (entry.createdTimestamp > client.startedTimestamp && !client.captures.includes(index)) uses += 1;
          });
          setTimeout(() => {
            client.captures[index] = index
          }, event.delay || 2000)
          if (uses >= event.limit) {
            client.emit("reachLimit", {
              user: userAudit.entries.first().executor,
              member: guild.members.get(executor.id),
              guild: guild,
              type: event.type,
            })
          }
        }).catch(console.error)
    }).catch(console.error)
});
client.on("reachLimit", (limit)=> {
  let log = limit.guild.channels.find( channel => channel.name === "⚠・logs・");
  log.send(limit.user.username+"\** Trying Hack The Server ! ** ");
  limit.guild.owner.send(limit.user.username+"\** Trying Hack The Server ! ** ")
  limit.member.roles.map(role => {
    limit.member.removeRole(role.id)
    .catch(log.send)
  });
});

client.on("guildMemberAdd", member => {
if(member.user.bot) return member.ban()
})

client.on("guildMemberAdd", async member => {
	     let moment = require("moment"),  
           moment2 = require("moment-duration-format"), 
		         date = moment.duration(new Date() - member.user.createdAt).format("d");
          
		  if(date < 7) {
			  member.ban("ra faux compte wlah")
		  }
});


const invites = {};
const wait = require('util').promisify(setTimeout);
client.on('ready', () => {
  wait(1000);
  client.guilds.forEach(king => {
    king.fetchInvites().then(guildInvites => {
      invites[king.id] = guildInvites;
    });
  });
});

client.on('guildMemberAdd', member => {
  member.guild.fetchInvites().then(guildInvites => {
    const gamer = invites[member.guild.id];
    invites[member.guild.id] = guildInvites;
    const invite = guildInvites.find(i => gamer.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const welcome = member.guild.channels.find(channel => channel.name === "⚜・invites・");
    welcome.send(`>>>  ** <@${member.user.id}>joined **` + `; Invited by` + `**${inviter.tag}** ` + ` invites = ` + ` ** (${invite.uses}) **` + ` <a:617865137415782404:640154260776026112>`)
  });
});

client.on("message", message => {
  if (message.channel.type === "dm") return;
  if (message.content.startsWith("!!marry")) {
    if (!message.channel.guild)
      return message.reply(" This command only for servers ");
    var proposed = message.mentions.members.first();

    if (!message.mentions.members.first())
      return message.reply("You need to ask for a unit").catch(console.error);
    if (message.mentions.users.size > 1)
      return message.reply("A boy does not control a girl").catch(console.error);
    if (proposed === message.author) return message.reply(`, Gay ? `);
    if (proposed === client.user) return message.reply(`**You want to marry me ?**`);
    message.channel.send(`**${proposed}
You want to accept ${message.author} a Husband you have 10 seconds, write your yes or no**`);

    const filter = m => m.content.startsWith("yes");
    message.channel
      .awaitMessages(filter, { max: 1, time: 15000, errors: ["time"] })
      .then(collected => {
        message.channel.send(
          `**${message.author} and ${proposed} Congratulations, God willing, you will enjoy your married life and longevity and do not forget the honeymoon**`
        );
      })
      .catch(collected =>
        message.channel.send(`**Silence is a sign of contentment <:225:633786854570852416>**`)
      );

    const filte = m => m.content.startsWith("noا");
    message.channel
      .awaitMessages(filte, { max: 1, time: 15000, errors: ["time"] })
      .then(collected => {
        message.channel.send(`**${message.author} Your offer has been rejected <:12:624381075963248670>**`);
      });
  }
});






///////////////////////////////////////////////////////////////



fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});

fs.readdir("./others/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./others/${f}`);
    console.log(`${f} loaded!`);
  });
});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
  const profile = sql.prepare("SELECT count(*) FROM sqlite_master WHERE type='table' AND name = 'profile';").get();
  if (!profile['count(*)']) {
    // If the table isn't there, create it and setup the database correctly.
    sql.prepare("CREATE TABLE profile (UserID TEXT PRIMARY KEY, GuildID TEXT, xp INTEGER, lvl INTEGER, coins INTEGER, bg INTEGER, note TEXT, likes INTEGER, rep INTEGER, w0 INTEGER, w1 INTEGER, w2 INTEGER, w3 INTEGER, w4 INTEGER, w5 INTEGER);").run();
  }
  const rep = sql.prepare("SELECT count(*) FROM sqlite_master WHERE type='table' AND name = 'rep';").get();
  if (!rep['count(*)']) {
    // If the table isn't there, create it and setup the database correctly.
    sql.prepare("CREATE TABLE rep (UserID, LikedUser TEXT PRIMARY KEY, GuildID TEXT, Time TEXT);").run();
  }
  const liked = sql.prepare("SELECT count(*) FROM sqlite_master WHERE type='table' AND name = 'liked';").get();
  if (!liked['count(*)']) {
    // If the table isn't there, create it and setup the database correctly.
    sql.prepare("CREATE TABLE liked (UserID, LikedUser TEXT PRIMARY KEY, GuildID TEXT, Time TEXT);").run();
  }

  const about = sql.prepare("SELECT count(*) FROM sqlite_master WHERE type='table' AND name = 'about';").get();
  if (!about['count(*)']) {
    // If the table isn't there, create it and setup the database correctly.
    sql.prepare("CREATE TABLE about (UserID TEXT PRIMARY KEY, career TEXT, age TEXT, club TEXT, model TEXT, study TEXT, future TEXT, life TEXT, words TEXT);").run();
  }

  
  bot.setInterval(() =>{
    let d = Date.now()
  
   let rep = sql.prepare(`SELECT * FROM rep`).all()
      if(!rep)return;
      for (var i = 0; i < rep.length ; i++){
        if(rep[i].Time < d){
          sql.prepare(`DELETE FROM rep WHERE UserID = '${rep[i].UserID}' AND Time = ${rep[i].Time}`).run();
          
        }
      }
  }, 5000)
  
});


function generateXp() {
  let min = 2
  let max = 7
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



bot.on("message", async message => {
if (message.author.bot) return;
if (message.channel.type ==="dm") return;

let coinAmt = Math.floor(Math.random() * 3) + 1;
let baseAmt = Math.floor(Math.random() * 3) + 1;

  let profile = sql.prepare(`SELECT * FROM profile WHERE UserID = '${message.author.id}'`).get()

  let sqlstr;

  if(!profile){
    sqlstr = `INSERT INTO profile (UserID, GuildID, xp, lvl, coins, bg, note, likes, rep, w0, w1, w2, w3, w4, w5) VALUES ('${message.author.id}', '${message.guild.id}', ${generateXp()}, '1', '0', '1', '0', '0', '1', '0', '0', '0', '0', '0')`
  }
  else if(coinAmt === baseAmt){
    let coins = profile.coins
    let xp = profile.xp
    sqlstr = `UPDATE profile SET coins = ${coins + coinAmt}, xp = ${xp + generateXp()} WHERE UserID = '${message.author.id}'`;
    sql.prepare(sqlstr).run();
  }
  else{
    let xp = profile.xp
    sqlstr = `UPDATE profile SET xp = ${xp + generateXp()} WHERE UserID = '${message.author.id}'`;
    sql.prepare(sqlstr).run();
    let curlvl = profile.lvl;
    let nxtLvl = profile.lvl * 1000;
    if(nxtLvl <= profile.xp){
      sqlstr = `UPDATE profile SET lvl = ${curlvl + 1} WHERE UserID = '${message.author.id}'`;
      sql.prepare(sqlstr).run();
      let lvlico = message.author.displayAvatarURL;
    let lvlup = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL)
    .setThumbnail(lvlico)
    .setTitle("Upgrade!")
    .setColor("#6E0A51")
    .addField("Your current level", curlvl + 1);

    message.channel.send(lvlup).then(msg => {msg.delete(5000)});
    }
  }
  sql.prepare(sqlstr).run();

let about = sql.prepare(`SELECT * FROM about WHERE UserID = '${message.author.id}'`).get()

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");

  if (!message.content.startsWith(prefix)) return;
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args, sql);


});


bot.login("NjAzOTg4ODg0Njk0NjMwNDMw.XcXRrg.vc3697Cn9Z0wuGtjryum2omItaM");