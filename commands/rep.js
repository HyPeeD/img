const ms = require("ms");
const fs = require("fs");
const Discord = require("discord.js");
const prettyMs = require('pretty-ms');
module.exports.run = async (bot, message, args, sql) => {
  let currentTime = Date.now()
let LUser;
  let pUser = message.mentions.users.first();
  if(message.mentions.users.size < 1) return message.channel.send(`**🔍 | ${message.author.username}**, the user could not be found.`)
  {
  let rows = sql.prepare(`SELECT * FROM profile WHERE UserID = '${pUser.id}'`).get()
  
    if(rows.length < 1) return message.channel.send("")
    let LUser  = rows.rep;
    
  }
    
    
      let sqlstr;
      let allrep = sql.prepare(`SELECT * FROM rep WHERE UserID = '${message.author.id}'`).all()

        
        if(!allrep) {
          {
          let rows = sql.prepare(`SELECT * FROM profile WHERE UserID = '${pUser.id}'`).get()
    if(rows.length < 1) return message.reply("You are not **registerd in `database` !**")
    let LUser  = rows.rep;
            sqlstr = `INSERT INTO rep (UserID, LikedUser, GuildID, Time) VALUES ('${message.author.id}', '${pUser.id}', '${message.guild.id}', '${currentTime + 43200000}')`
          sql.prepare(sqlstr).run()
          if(args[1] === '-'){
          sqlstr = `UPDATE profile SET rep = ${LUser - 1} WHERE UserID = '${pUser.id}'`;
          sql.prepare(sqlstr).run()
           return message.channel.send("")
          }else{
            sqlstr = `UPDATE profile SET rep = ${LUser + 1} WHERE UserID = '${pUser.id}'`;
            sql.prepare(sqlstr).run()
             return message.channel.send(`**🆙  |  ${message.author.username} has given <@${pUser.id}> a reputation point!**`)
           }
            }
        }else{
          for (var i = 0; i < allrep.length;i++){
            
          if(allrep[i].LikedUser === pUser.id){
            if(allrep[i].LikedUser !== pUser.id) continue;
            let timeleft = allrep[i].Time - Date.now()
            return message.channel.send(`__${prettyMs((timeleft), {verbose: true})}__** من قبل حاول بعد <@${pUser.id}>  تم إعطاء سمعة لـ **`)
        
        }
          }
       
          
          {
          let rows = sql.prepare(`SELECT * FROM profile WHERE UserID = '${pUser.id}'`).get()
    if(rows.length < 1) return message.reply("You are not **registerd in `database` !**")
    let LUser  = rows.rep;
    sqlstr = `INSERT INTO rep (UserID, LikedUser, GuildID, Time) VALUES ('${message.author.id}', '${pUser.id}', '${message.guild.id}', '${currentTime + 43200000}')`
           sql.prepare(sqlstr).run()
           if(args[1] === '-'){
            sqlstr = `UPDATE profile SET rep = ${LUser - 1} WHERE UserID = '${pUser.id}'`;
            sql.prepare(sqlstr).run()
             return message.channel.send("")
            }else{
              sqlstr = `UPDATE profile SET rep = ${LUser + 1} WHERE UserID = '${pUser.id}'`;
            sql.prepare(sqlstr).run()
               return message.channel.send(`**🆙  |  ${message.author.username} has given <@${pUser.id}> a reputation point!**`)
             }
          }
            
        }  
              
       
            
  
  
        
        

    
  }
module.exports.help = {
name:"rep"
}
