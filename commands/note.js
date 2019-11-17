
const fs = require("fs");
  const Discord = require("discord.js");
module.exports.run = async (bot, message, args, sql) => {
    let noty = args.join(" ");
    if(message.mentions.users.size >= 1) return message.reply("**EROOR !**");
    if(noty.length < 1) return message.reply("**Please write `Appropriate words` about yourself**")
    if(noty.length > 180) return message.reply("**Please enter a maximum of `180` characters**")

    let rows = sql.prepare(`SELECT * FROM profile WHERE UserID = '${message.author.id}'`).get()
    let sqlstr;
    let uCoins = rows.coins;
    if(uCoins<0) return message.channel.send("");

    sqlstr = `UPDATE profile SET note = "${noty}" WHERE UserID = '${message.author.id}'`;
    sql.prepare(sqlstr).run();
    sqlstr = `UPDATE profile SET coins = ${uCoins - 0} WHERE UserID = '${message.author.id}'`;
  sql.prepare(sqlstr).run();

    return message.reply("**The `Information` has been changed  <:yagami:634487399807844365>**")
    
}

module.exports.help = {
  name:"title"
}
