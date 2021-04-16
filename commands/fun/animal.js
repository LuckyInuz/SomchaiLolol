const https = require('https');
const Discord = require('discord.js');
module.exports = {
    name: 'สัตว์',
    aliases: ['น่ารัก'],
    description: 'รูปสัตว์น่ารัก ๆ',
    execute: async(client, message) =>{
        const subReddits = ["cute"];
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];

        const img = await randomPuppy(random);
        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setImage(img)
        .setTitle(`ภาพไม่ติดหรอ? คลิ๊กตรงนี้`)
        .setURL(`https://reddit.com/r/${random}`)
        message.channel.send(embed);

    },
}