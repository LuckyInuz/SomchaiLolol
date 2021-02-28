  
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'คำสั่ง',
    aliases: ['คอมมานต์'],
    description: 'ดูคำสั่งทั้งหมด',
    cooldown: 3,
    args: false,
    usage: "<ชื่อคำสั่งที่ต้องการ>",
    execute(client, message, args) {
      if(!args.length) {
		message.channel.send("เวอร์ชั่น : 1.3.0")
		message.channel.send("โดย THE ONE CLASSROOM; http://docs-toc.web.app/#join-my-server")
    message.channel.send("ผู้สร้าง : `มีปัญหาหรอ#1424`")
    const embed = new MessageEmbed()
    .setTitle("คำสั่งบอต")
    .setColor("GREEN")
    .setThumbnail("https://toc-prunusoide.web.app/Image/logo.jpg")
    .addField("🤖ตารางคำสั่ง🤖", "ตัวกำหนดคำสั่ง = sm!")
.addField("💵**[ใหม่!]** การเงิน💵", "วัน / อาทิตย์ / เดือน = ได้รับเงินประจำวัน สัปดาห์ หรือเดือน ตามลำดับ\nเป๋า = ตรวจสอบยอดเงินคงเหลือ\nถอน / ฝาก = ฝากหรือถอนเงินในธนาคาร\nสุ่ม = เล่นเกมทายเลข 1-10 แล้วจะได้รางวัล\nอันดับเงิน = แสดงอันดับคนเงินเยอะสุด")
    .addField("🔒**ผู้ดูแลเท่านั้น**🔒", "เตะ = เตะสมาชิก\nแบน = แบนสมาชิก")
    .addField("🎈บันเทิง🎈", "พูด = พูดตามสิ่งที่พูด\nหล่อ = คำนวนค่าความหล่อจาก 0 - 100\nรัก = แสดงผลเป็นอาร์กิวเมนต์\nทำนาย = ทำนายสิ่งที่ถาม\nมีม = แสดงผลเป็นรูปภาพมีม(อาจจะแสดงผลช้า)\nดวง = ดวงวันนี้ของคุณ")
    .addField("💉อื่นๆ💉", "อวาตาร = แสดงผลเป็นรูปโปรไฟล์ของสมาชิก\nเซอร์เวอร์ = แสดงผลเป็นค่าข้อมูลเซิฟเวอร์", "อันดับ = แสดงอันดับเลเวล")
    .addField("💠บริหารเซิฟเวอร์💠", "เลเวล = แสดงเลเวล\nระเบิด = ลบข้อความ*ทั้งหมดในช่อง*(ยกเว้นข้อความที่เก่ากว่า 2 สัปดาห์)\nลบ = ลบข้อความ 1-99 ข้อความ")
    .setDescription("—————————————————————————————")
    message.channel.send(embed)
      }
      if(args[0]) {
        let command = args[0];

        if(client.commands.has(command)) {
            
            command = client.commands.get(command);
            var embed = new MessageEmbed()
            .setAuthor(`${command.name} Command`)
            .setDescription(`
            - **ชื่อคำสั่ง:** __${command.name || "ไม่มีชื่อคำสั่ง"}__
            - **คำอธิบาย:** __${command.description || "ไม่มีคำบรรยาย"}__
            - **ชื่อคำสั่งอื่น ๆ:** __${command.aliases || "ไม่มีชื่อคำสั่งอื่น ๆ"}__
            - **คูลดาวน์:** __${command.cooldown || "ไม่มีการคูลดาวน์"}__
            - **วิธีใช้:** __${command.usage || "พิมพ์คำสั่งได้เลย"}__

            `)
            .setColor('BLURPLE')

        message.channel.send(embed);
    }}
}
    }

