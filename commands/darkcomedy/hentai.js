module.exports = {
    name: 'โดจิน',
    aliases: ['โด'],
    description: 'ก็รู้ ๆ กันอ่ะนะ',
    execute: async(client, message) => {
if(!message.channel.nsfw) return;
        const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

const image = await nsfw.hentai();
const embed = new Discord.MessageEmbed()
    .setTitle(`อย่าดูเยอะนักหล่ะ`)
    .setColor("GREEN")
    .setImage(image);
message.channel.send(embed);
    }
}
