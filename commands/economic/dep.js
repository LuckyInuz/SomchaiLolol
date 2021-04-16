const db = require('quick.db')
module.exports = {
    name: 'ฝาก',
    description: 'ฝากเงินเข้าธนาคาร',
    aliases: ['ฝ', 'ฝากเงิน'],
    usage: "[จำนวนเงิน]",
    execute: async(client, message, args) => {
        var member = message.author;
        var bal = db.fetch(`bal_${member.id}_${message.guild.id}`)
        if (bal === null) bal = 0

        var bank = db.fetch(`bank_${member.id}_${message.guild.id}`)
        if (bank === null) bank = 0

        let x = 10
        if(args === NaN) return;

        if (bal < x) {
            message.channel.send(`นายหน่ะ, ต้องมี ${x} บาทก่อนนายถึงจะฝากเงินได้`)
        } else if (bal = x || bal > x) {
            db.subtract(`bal_${member.id}_${message.guild.id}`, args)
            db.add(`bank_${member.id}_${message.guild.id}`, args)
            message.channel.send(`นายได้ฝากเงิน ${args} ไว้ในธนาคาร, และตอนนี้นายมีเงิน ${bal} บาทในกระเป๋าตัง และอีก ${bank} บาทในบัญชี`)
        }
    }
}
