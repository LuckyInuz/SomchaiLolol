module.exports = {
    name: 'พูด',
    aliases: ['พด'],
    description: 'พูดตาม',
    usage: "[คำพูด]",
    execute: async(client, message, args) => {
        const { MessageEmbed } = require('discord.js')
        if(!message.member.hasPermission("MANAGE_MESSAGES")) { 
            message.channel.send("คุณต้องได้รับอนุญาติในการจัดการข้อความ")
        } else if(!args.length) {
            function RANDOM() {
                let nothing = ['[ใส่ข้อความตรงนี้]', 'บางอย่างที่วางเปล่า', 'น่าสนใจมากกก', 'ต้องการอาร์กิวเมนต์นะค่ะ', 'เมื่อไรปิดเทอม', 'จอมไม่หล่อ']
                return nothing[Math.floor(Math.random() * nothing.length)]
            }
            message.delete()
            let cool = new MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL())
            .setDescription(RANDOM())
            .setTimestamp()
            await message.channel.send(cool)
            } else {
                    let text = args.join(" ");
                    message.delete()
                    let embed = new MessageEmbed()
                    .setAuthor(message.author.tag, message.author.avatarURL())
                    .setDescription(text)
                    .setTimestamp()
                    await message.channel.send(embed)
            }
                }
            
    }