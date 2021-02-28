module.exports = {
    name: 'รัก',
    aliases: ['ร'],
    description: 'คุณรักเขาเท่าไร',
    usage: "[แท็กผู้ใช้]",
    execute: async(client, message, args) => {
        let ping = message.mentions.users.first();
        if(!ping) return;
        message.delete()
let random = Math.floor(Math.random() * 100) + 1;
        const { MessageEmbed } = require('discord.js')
        let embed = new MessageEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setDescription(`💖 คุณนั้นรัก <@${ping.id}> ${random} เปอร์เซนต์`)
        .setTimestamp()
        await message.channel.send(embed)
    }

    }