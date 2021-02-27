  
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'คำสั่ง',
    aliases: ['คอมมานต์'],
    description: 'ดูคำสั่งทั้งหมด',
    execute(message, args) {
      if(!args.length) {
		message.channel.send("เวอร์ชั่น : 1.2.0: ภาษาไืทย")
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
    .addField("💠บริหารเซิฟเวอร์💠", "ยืนยัน = ยืนยันตัวตน\nตาม / เลิกตาม = ติดตามหรือเลิกติดตามบางอย่าง\nเลเวล = แสดงเลเวล\nระเบิด = ลบข้อความ*ทั้งหมดในช่อง*\nลบ = ลบข้อความ 1-99 ข้อความ")
    .setDescription("—————————————————————————————")
    message.channel.send(embed)
      }
    else if(args = "วัน" && "อาทิตย์" && "เดือน") {
      message.channel.send("ได้รับเงินประจำวัน สัปดาห์ หรือเดือน ตามลำดับ")
      message.channel.send("วิธีใช้ : พิมพ์คำสั่งได้เลย!")
      message.channel.send("อาร์กิวเมนต์ : ไม่")
    } else if(args = "เป๋า") {
      message.channel.send("ตรวจสอบยอดเงินคงเหลือ")
      message.channel.send("วิธีใช้ : พิมพ์คำสั่งได้เลย! / แท็กผู้ใช้คนใดคนหนึ่ง")
      message.channel.send("อาร์กิวเมนต์ : ใช่")
    } else    if(args = "ถอน" && "ฝาก") {
      message.channel.send("ถอนหรือฝากเงิน")
      message.channel.send("วิธีใช้ : คำสั่ง + จำนวนเงิน")
      message.channel.send("อาร์กิวเมนต์ : ใข่")
    } else    if(args = "สุ่ม") {
      message.channel.send("สุ่มทายเลข 1-10 ทายถูกได้จำนวนเงินพนัน * 3 แพ้ * 2")
      message.channel.send("วิธีใช้ : คำสั่ง + จำนวนเงิน + เลข")
      message.channel.send("อาร์กิวเมนต์ : ใช่")
    } else    if(args = "อันดับเงิน") {
      message.channel.send("แสดงผู้คนที่เงินเยอะสุด")
      message.channel.send("วิธีใช้ : พิมพ์คำสั่งได้เลย!")
      message.channel.send("อาร์กิวเมนต์ : ไม่")
     } else if(args = "เตะ") {
      message.channel.send("เตะผู้ใช้")
      message.channel.send("วิธีใช้ : คำสั่ง + ผู้ใช้")
      message.channel.send("อาร์กิวเมนต์ : ใช่")
    } else if(args = "แบน") {
      message.channel.send("แบนผู้ใช้")
      message.channel.send("วิธีใช้ : คำสั่ง + ผู้ใช้")
      message.channel.send("อาร์กิวเมนต์ : ใช่")
    } else  if(args = "เตะ") {
      message.channel.send("พูด")
      message.channel.send("วิธีใช้ : คำสั่ง + คำพูด")
      message.channel.send("อาร์กิวเมนต์ : ใช่")
    } else if(args = "หล่อ") {
      message.channel.send("ความหล่อของผู้ใช้")
      message.channel.send("วิธีใช้ : พิมพ์คำสั่งได้เลย / คำสั่ง + ผู้ใช้")
      message.channel.send("อาร์กิวเมนต์ : ใช่")
    } else if(args = "รัก") {
      message.channel.send("รักผู้ใช้")
      message.channel.send("วิธีใช้ : คำสั่ง + ผู้ใช้")
      message.channel.send("อาร์กิวเมนต์ : ใช่")
    } else if(args = "ทำนาย") {
      message.channel.send("ทำนายสิ่งที่ถาม")
      message.channel.send("วิธีใช้ : คำสั่ง + คำถาม")
      message.channel.send("อาร์กิวเมนต์ : ใช่")
    } else if(args = "มีม") {
      message.channel.send("แสดงมีม")
      message.channel.send("วิธีใช้ : พิมพ์คำสั่งได้เลย!")
      message.channel.send("อาร์กิวเมนต์ : ไม่")
    } else if(args = "ดวง") {
      message.channel.send("ดวงผู้ใช้")
      message.channel.send("วิธีใช้ : พิมพ์คำสั่งได้เลย!")
      message.channel.send("อาร์กิวเมนต์ : ไม่")
    } else if(args = "อวาตาร") {
      message.channel.send("แสดงอวาตารผู้ใช้")
      message.channel.send("วิธีใช้ : พิมพ์คำสั่งได้เลย! / คำสั่ง + ผู้ใช้")
      message.channel.send("อาร์กิวเมนต์ : ใช่")
    } else if(args = "เซอร์เวอร์") {
      message.channel.send("ข้อมูลเซอร์เวอร์")
      message.channel.send("วิธีใช้ : พิมพ์คำสั่งได้เลย!")
      message.channel.send("อาร์กิวเมนต์ : ไม่")
    } else if(args = "เลเวล") {
      message.channel.send("แสดงเลเวล")
      message.channel.send("วิธีใช้ : พิมพ์คำสั่งได้เลย! / คำสั่ง + ผู้ใช้")
      message.channel.send("อาร์กิวเมนต์ : ไม่")
    } else if(args = "อันดับ") {
      message.channel.send("เแสดงเลเวลผู้ใช้")
      message.channel.send("วิธีใช้ : พิมพ์คำสั่งได้เลย!")
      message.channel.send("อาร์กิวเมนต์ : ไม่")
    } else if(args = "ลบ") {
      message.channel.send("ลบข้อความ")
      message.channel.send("วิธีใช้ : คำสั่ง + จำนวน")
      message.channel.send("อาร์กิวเมนต์ : ใช")
    } else if(args = "ระเบิด") {
      message.channel.send("ลบทุกข้อความในช่อง")
      message.channel.send("วิธีใช้ : พิมพ์คำสั่งได้เลย!")
      message.channel.send("อาร์กิวเมนต์ : ไม่")
    }
}
}
