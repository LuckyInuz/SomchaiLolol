module.exports = {
    name: 'หล่อ',
    aliases: ['หล'],
    description: 'คำนวณค่าความหล่อ',
    usage: "<ผู้ใช้>",
    execute(client, message, args) {

        const { MessageEmbed } = require("discord.js")

let ping = message.mentions.users.first();
if(!ping){
    let hd = Math.floor(Math.random() * 100) + 1;
    let embed = new MessageEmbed()
    .setColor("PINK")
    .setTitle(`${message.author.username} นั้นความหล่อประมาณ...`)
    .setDescription(`${hd}% 💞`)
    message.channel.send(embed)
} else if(ping) {
    let hd = Math.floor(Math.random() * 100) + 1;
    let embed = new MessageEmbed()
    .setColor("PINK")
    .setTitle(`${ping.username} นั้นความหล่อประมาณ...`)
    .setDescription(`${hd}% 💞`)
    message.channel.send(embed)
}
    }
}
