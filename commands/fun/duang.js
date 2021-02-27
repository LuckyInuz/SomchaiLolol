module.exports = {
    name: 'ดวง',
    aliases: ['ดง'],
    description: 'ดูคำสั่งทั้งหมด',
    execute: async(message) => {
    const { MessageEmbed } = require('discord.js')
        function RANDOM() {
            let banswer = [
                "ดีเยี่ยม!",
                "ดีมาก ๆ",
                "ดี",
                "ปกติ",
                "ค่อนข้างแย่",
                "แย่", 
                "แย่มาก ๆ",
                "นรกชัด ๆ"
            ]
            return banswer[Math.floor(Math.random() * banswer.length)]
        }
        let embed = new MessageEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setDescription("🔮 วันนี้ดวงคุณนั้น" + RANDOM())
        .setTimestamp()
        await message.channel.send(embed)
    }
    }