const math = require('discord-math');
 
module.exports = {
    name: "เลข",
    description: "คำนวณเลขให้",
    usage: "[เลข] [เครื่องหมาย] [เลข]",
    execute: async (client, message, args) => {
        try {
            let num1 = Number(args[0]);
            let op1 = args[1];
            let num2 = Number(args[2]);
            if (!num1) return message.channel.send('ต้องระบุตัวเลข');
            if (!op1) return message.channel.send('ต้องระบุเครื่องหมายให้ถูกต้อง (+(บวก) -(ลบ) *(คูณ) /(หาร) **(ยกกำลัง))');
            if (!num2) return message.channel.send('ต้องระบุตัวเลข');
 
            message.channel.send(`ผล: ${math.calculate(num1, op1, num2)}`);
            if (args[3]) {
                message.channel.send("มากไปแล้วมั้ง")
            }
        } catch (e) {
            console.log(e);
        }
    }
}