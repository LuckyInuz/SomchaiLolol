const https = require('https');
const Discord = require('discord.js');
module.exports = {
    name: 'มีม',
    description: 'ส่งมีม',
    execute: async(client, message) => {
        const subReddits = ["dankmeme", "meme", "me_irl"];
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