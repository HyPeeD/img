const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args, sql) => {
  //!pay @isatisfied 59345
  let pUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(message.mentions.users.size < 1) return message.channel.send(`**⁉ | ${message.author.username}, type the credit you need to transfer!**`)
  if(pUser.id === message.author.id) return message.channel.send(`**⁉ | ${message.author.username}, I can't find The user**`);
  let amount = args.join(" ").slice(22);
  let rows = sql.prepare(`SELECT * FROM profile WHERE UserID = '${pUser.id}'`).get()

    if(!rows) return message.channel.send(`**⁉ | ${message.author.username}, type the credit you need to transfer!**`)
    let pCoins = rows.coins;
    
  let rows2 = sql.prepare(`SELECT * FROM profile WHERE UserID = '${message.author.id}'`).get()

    let sqlstr;
    if(!rows2) return message.reply("**Try again Please !**")
    let sCoins = rows2.coins;

  
  if(sCoins < args[1]) return message.channel.send(`**🤔  |  ${message.author.username}, Your balance is not enough for that!**`);
  if(!parseInt(args[1])) return message.channel.send("");
if(parseInt(args[1]) < 0) return message.channel.send("");
if(isNaN(amount)) return message.channel.send("");
  
  sqlstr = `UPDATE profile SET coins = ${sCoins - parseInt(args[1])} WHERE UserID = '${message.author.id}'`;
  sql.prepare(sqlstr).run()
  sqlstr = `UPDATE profile SET coins = ${pCoins + parseInt(args[1])} WHERE UserID = '${pUser.id}'`;
  sql.prepare(sqlstr).run()

  let payEmb = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.displayAvatarURL)
  .setTitle(`✔[Bank transfer] [${args[1]} credits]`)
  .setColor("#C2C2C2")
  .addField("[From]", `${message.author}`, true)
  .addField("[To]", `${pUser}`, true)
  message.channel.send(payEmb);


}

module.exports.help = {
  name: "trans"
}
