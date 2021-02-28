const Discord = require('discord.js');
const client = new Discord.Client()
const db = require('quick.db')
module.exports = {
    name: 'อันดับเงิน',
    description: 'แสดงผู้ที่เงินเยอะที่สุด',
    aliases: ['อดง', 'อันดับง', 'อันง', 'อันดง'],
    execute: async(client, message) => {
        let money = db.all().filter(data => data.ID.startsWith(`bal`)).sort((a, b) => b.data - a.data)
        money.length = 10;
        var finalLb = "";
        for (var i in money) {
            finalLb += `**${money.indexOf(money[i])+1}. <@${money[i].ID.split('_')[1]}>** - ${money[i].data} บาท\n`;
        }
        const embed = new Discord.MessageEmbed()
        .setAuthor(`อันดับการเงิน - บาท\nแสดงคนที่มีเงินมากที่สุด:`, message.guild.iconURL())
        .setColor("#7289da")
        .setDescription(finalLb)
        .setTimestamp()
        message.channel.send(embed);
    }
}