const db = require('quick.db')
module.exports = {
    name: 'สุ่ม',
    aliases: ['ส', 'สม'],
    execute: async(message, args) => {

        var bal = db.fetch(`bal_${message.member.id}_${message.guild.id}`)
        if(bal < args[0]) {
            message.channel.send("ตังคุณไม่พอ!")
        } else if(args[0] === NaN || args[0] === null) {
            message.channel.send("ระบุจำนวนเงิน!")
        } else if(args[0] < 10) {
            message.channel.send("จำนวนเงินต้องมากกว่า 10 บาท")
        } else {
var num = 10;
        var randomNum = Math.floor(Math.random() * 10) + 1;
        var playToken = args[0];
        const { MessageEmbed } = require('discord.js')
        if (args[1] === randomNum) {
            var result = ['❌ ผิด']
        } else if (args[1] != randomNum) {
            var result = ['✔ ถูก']
        }
        if(args[1] === NaN) {
            message.channel.send(`${args} ไม่ใช่จำนวนที่ถูกต้อง!`)
        } else if (args[1] > num) {
            message.channel.send(`${args} มากกว่า 0-10!`)
        } else if (args[1] === num) {
            db.subtract(`bal_${member.id}_${message.guild.id}`, playToken)
            const embed = new MessageEmbed()
            .setTitle("🔢 เกมสุ่มทายเลข!")
            .addField("🎯 เลขเป๋าหมาย", `${randomNum}`, true)
            .addField("💭 สิ่งที่คุณทาย", `${args}`)
            .addField("🧾 ผลลัพธ์", `${result}`)
            message.channel.send(embed)
        }
        var amount = args[0] * 3;
        var lose = args[0] * 2;
        if (result === '✔ ถูก') {
            db.add(`bal_${member.id}_${message.guild.id}`, amount)
        } else if (result === '❌ ผิด') {
            db.subtract(`bal_${member.id}_${message.guild.id}`, lose)
        }
}
}
}
