module.exports = {
    name: 'โคตรโดจิน',
    aliases: ['โคตรเฮ็นไต'],
    description: 'ก็รู้ ๆ กันอ่ะนะ',
    execute: async(client, message) => {
if(!message.channel.nsfw) return;
        const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

const image = await nsfw.hentai();
const img = new Discord.MessageAttachment(image)
for(i=0,i<100,i++) {
message.channel.send(img)
}
    }
}
