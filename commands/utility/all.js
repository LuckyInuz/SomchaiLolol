const Discord = require('discord.js');
const client = new Discord.Client()
const db = require('quick.db')
module.exports = {
    name: 'อันดับ',
    aliases: ['อัน', 'ลีดเดอร์บอร์ด', 'อด', 'อันด'],
    description: "อันดับของคนที่เลเวลเยอะที่สุด",
    execute: async(client, message) => {
        let money = db.all().filter(data => data.ID.startsWith(`xp`)).sort((a, b) => b.data - a.data)
        money.length = 10;
        var finalLb = "";
        for (var i in money) {
            finalLb += `**${money.indexOf(money[i])+1}. <@${money[i].ID.split('_')[1]}>** - ${money[i].data} ประสบการณ์\n`;
        }
        const embed = new Discord.MessageEmbed()
        .setAuthor(`อันดับประสบการณ์\แสดงคนที่ประสบการณ์เยอะที่สุด:`, message.guild.iconURL())
        .setColor("#7289da")
        .setDescription(finalLb)
        .setTimestamp()
        message.channel.send(embed);
    }
}