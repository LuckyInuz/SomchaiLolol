const db = require('quick.db')
module.exports = {
    name: 'ฝาก',
    aliases: ['ฝ', 'ฝากเงิน'],
    execute: async(message, args) => {
        var member = message.author;
        var bal = db.fetch(`bal_${member.id}_${message.guild.id}`)
        if (bal === null) bal = 0

        var bank = db.fetch(`bank_${member.id}_${message.guild.id}`)
        if (bank === null) bank = 0

        let x = 10
        if(args === NaN) return;

        if (bal < x) {
            message.channel.send(`คุณต้องมี ${x} บาทถึงจะฝากเงินได้`)
        } else if (bal = x || bal > x) {
            db.subtract(`bal_${member.id}_${message.guild.id}`, args)
            db.add(`bank_${member.id}_${message.guild.id}`, args)
            message.channel.send(`คุณได้ฝากเงิน ${args} ในธนาคาร, และตอนนี้คุณมีเงิน ${bal} บาทในกระเป๋าตัง และอีก ${bank} บาทในบัญชี`)
        }
    }
}
