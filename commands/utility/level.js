const db = require('quick.db')
module.exports = {
    name: 'เลเวล',
    aliases: ['ลว', 'เวล', 'ล', 'เว'],
    execute: async(message, args) => {
        var member = message.mentions.users.first() || message.author;
        var xp = db.fetch(`xp_${member.id}_${message.guild.id}`)
        var lv = db.fetch(`lv_${member.id}_${message.guild.id}`)
        var chat = db.fetch(`chat_${member.id}_${message.guild.id}`)
        var lvexp = db.fetch(`lvexp_${member.id}_${message.guild.id}`)
        var lvup = 50;


	db.add(`lvexp_${member.id}_${message.guild.id}`, 100)
    if(lv === null) lv = 0
	if(xp === lvexp) {
		db.add(`lv_${member.id}_${message.guild.id}`, 1)
		db.add(`lvexp_${member.id}_${message.guild.id}`, lvup)
	}
        const { MessageEmbed } = require('discord.js')
        const embed = new MessageEmbed()
        embed.setTitle(`${member.username} levels`)
        embed.setColor("GREEN")
        embed.setThumbnail(member.avatarURL())
        embed.addField(`❇ประสบการณ์`, `${xp}`, true)
        embed.addField(`⬆เลเวล`, `${lv}`, true)
        embed.addField(`💬ข้อความที่ส่ง`, `${chat}`, true)
        message.channel.send(embed)
    }
}