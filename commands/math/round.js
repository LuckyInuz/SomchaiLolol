module.exports = {
    name: "ปัดเลข",
    description: "ปัดเลขขึ้นหรือลง",
    usage: "[เลข] <เลข>",
    execute(client, message, args) {
        if(!args.length) {
            message.channel.send("ระบุตัวเลข")
        } else if(args === NaN) {
            message.channel.send("ระบุตัวเลขให้ถูกต้อง")
        } else if(!args[1]) {
            let answer = Math.round(args[0])
            if(answer === NaN) answer = "มีบางอย่างไม่ถูกต้อง"
            message.channel.send("ปัด " + args[0] + " จะได้: " + answer)
            } else if(args[1]) {
                let answer = Math.round(args[0])
                let answer2 = Math.round(args[1])
                message.channel.send("ปัด " + args[0] + " และ " + args[1] + " จะได้: " + answer + " และ " + answer2)
            }
    }
}