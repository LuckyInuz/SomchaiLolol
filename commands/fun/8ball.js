module.exports = {
name: 'ทำนาย',
aliases: ['ทน'],
description: 'ทำนายสิ่งที่คุณถาม',
usage: "[คำถาม]",
execute(client, message, args) {

    function fRANDOM() {
        let banswer = [
            "ใช่",
            "ไม่",
            "แน่นอน!",
            "รอชาติหน้า"
        ]
        return banswer[Math.floor(Math.random() * banswer.length)]
    }

    if(!args) return;
    message.channel.send(fRANDOM())
}
}