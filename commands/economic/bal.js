const db = require('quick.db')
module.exports = {
    name: 'กระเป๋า',
    description: 'ตรวจสอบเงินคงเหลือ',
    aliases: ['เป๋า', 'เงิน'],
    execute: async(client, message, args) => {
        var member = message.mentions.members.first() || message.author;

        var bal = db.fetch(`bal_${member.id}_${message.guild.id}`)
        if (bal === null) bal = 0

        var bank = db.fetch(`bank_${member.id}_${message.guild.id}`)
        if (bank === null) bank = 0

        const { MessageEmbed } = require('discord.js')
        const embed = new MessageEmbed()
        embed.setTitle(`เงินของ ${member.username} ทั้งหมด`)
        embed.addField(`💵เงินในกระเป๋า`, `${bal} บาท`, true)
        embed.addField(`🏧เงินในธนาคาร`, `${bank} บาท`, true)
        message.channel.send(embed)
    }
}