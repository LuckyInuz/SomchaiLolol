module.exports = {
    name: 'โดจิน',
    aliases: ['โด'],
    description: 'ก็รู้ ๆ กันอ่ะนะ',
    execute: async(client, message, args) => {
        const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

const image = await nsfw.hentai();
const embed = new Discord.MessageEmbed()
    .setTitle(`เอารูปที่คุณชอบ ๆ ไป`)
    .setColor("GREEN")
    .setImage(image);
message.channel.send(embed);
    }
}