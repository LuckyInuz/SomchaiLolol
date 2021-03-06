module.exports = {
    name: "รากที่สอง",
    description: "คำนวณรากที่สองให้",
    usage: "[เลข] <เลข>",
    execute(client, message, args) {
        if(!args.length) {
            message.channel.send("ระบุตัวเลข")
        } else if(args === NaN) {
            message.channel.send("ระบุตัวเลขให้ถูกต้อง")
        } else if(!args[1]) {
            let answer = Math.round(Math.sqrt(args[0]))
            if(answer === NaN) answer = "มีบางอย่างไม่ถูกต้อง"
            message.channel.send("รากที่สองของ " + args[0] + " คือ: " + answer)
            } else if(args[1]) {
                let answer = Math.round(Math.sqrt(args[0]))
                let answer2 = Math.round(Math.sqrt(args[1]))
                message.channel.send("รากที่สองของ " + args[0] + " และ " + args[1] + " คือ: " + answer + " และ " + answer2)
            }
    }
}