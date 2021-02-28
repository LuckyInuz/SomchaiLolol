const db = require('quick.db')
module.exports = {
    name: "ถอนเงิน",
    aliases: ['ถอน', 'ถ'],
    description: 'ถอนเงินจากธนาคาร',
    usage: "[จำนวนเงิน]",
 execute: async (client, message, args) => {
    var member = message.author;
        var bal = db.fetch(`bal_${member.id}_${message.guild.id}`)
        if (bal === null) bal = 0

        var bank = db.fetch(`bank_${member.id}_${message.guild.id}`)
        if (bank === null) bank = 0

        let x = 1
        if(args === NaN) return;

        if (bank < x) {
            message.channel.send(`คุณไม่มีตังที่จะต้องถอน`)
        } else if (bank = x || bal > x) {
            db.add(`bal_${member.id}_${message.guild.id}`, args)
            db.subtract(`bank_${member.id}_${message.guild.id}`, args)
            message.channel.send(`คุณได้ถอนเงิน ${args} ในกระเป๋าตังของคุณ, ณ ตอนนี้คุณมีเงินจำนวน ${bal} ในกระเป๋าตัง และอีก ${bank} ในบัญชี`)
        }
    }
}