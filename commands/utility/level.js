const Level = require('discord-xp')
module.exports = {
    name: 'เลเวล',
    aliases: ['ลว', 'เวล', 'ล', 'เว'],
    description: "เช็คเลเวลของผู้ใช้",
    usage: "<ผู้ใช้>",
    execute: async(client, message) => {
        const user = await Level.fetch(message.author.id, message.guild.id)

        const { MessageEmbed } = require('discord.js')
        const embed = new MessageEmbed()
        embed.setTitle(`${message.author.username} levels`)
        embed.setColor("GREEN")
        embed.setThumbnail(message.author.avatarURL())
        embed.addField(`❇เลเวล`, `${user.level}`, true)
        embed.addField(`◎ประสบการณ์`, `${user.xp}`, true)
        message.channel.send(embed)
    }
}