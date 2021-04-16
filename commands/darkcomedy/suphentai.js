module.exports = {
    name: 'โคตรโดจิน',
    aliases: ['โคตรเฮ็นไต'],
    description: 'ก็รู้ ๆ กันอ่ะนะ',
    execute: async(client, message) => {
if(!message.channel.nsfw) return;
        const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

var i = 0
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  
while(i<10) {
message.channel.send(await nsfw.hentai())
i += 1
sleep(100)
if(i === 4) {
    message.channel.send("หยุดเนื่องจากป้องกันเรทลิมิตและสแปม, จะทำอีกภายในไม่ช้า...")
    sleep(3000)
} else if(i === 9) {
    message.channel.send("หยุดเนื่องจากป้องกันเรทลิมิตและสแปม, จะทำอีกภายในไม่ช้า...")
    sleep(3000)
}
}
    }
}
