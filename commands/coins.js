const Discord = require("discord.js");

module.exports.run = async (bot, message, args, sql) => {

 let rows =  sql.prepare(`SELECT * FROM profile WHERE UserID = '${message.author.id}'`).get()
    if(rows.length < 1) return message.reply("**Try again please !**")
  let uCoins = rows.coins;

  message.channel.send(`**${message.author.username}, your 💴 balance is \`\$${uCoins}\`**`);

}

module.exports.help = {
  name: "credits"
}