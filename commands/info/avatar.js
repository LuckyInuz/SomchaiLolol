module.exports = {
    name: "อวาตาร์",
    aliases: ['อวต'],
    description: "แสดงโปรไฟล์ผู้ใช้",
    usage: "<ผู้ใช้>",
    execute(client, message) {
        const { MessageEmbed } = require('discord.js') 
        let embed = new MessageEmbed()
        let ping = message.mentions.users.first() || message.author;
        embed.setTitle(`อวาตาร์ของ ${ping.username}`)
        embed.setImage(ping.avatarURL())
        message.channel.send(embed)
    }
}
// This is shortest command