const pagination = require('discord.js-pagination');
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
    const money = new MessageEmbed()
    .setTitle("คำสั่งบอต")
    .setColor("GREEN")
    .setThumbnail("https://tinnaphat-somsang.web.app/files/assets/artifacts/root/emulated/0/image/somchai.png")
    .addField("🤖ตารางคำสั่ง🤖", "ตัวกำหนดคำสั่ง = sm!")
    .addField("💵 การเงิน💵", "วัน / อาทิตย์ / เดือน = ได้รับเงินประจำวัน สัปดาห์ หรือเดือน ตามลำดับ\nเป๋า = ตรวจสอบยอดเงินคงเหลือ\nถอน / ฝาก = ฝากหรือถอนเงินในธนาคาร\nอันดับเงิน = แสดงอันดับคนเงินเยอะสุด")
    .setDescription("—————————————————————————————")
    .setTimestamp()
    

    const admin = new MessageEmbed()
    .setTitle("คำสั่งบอต")
    .setColor("GREEN")
    .setThumbnail("https://tinnaphat-somsang.web.app/files/assets/artifacts/root/emulated/0/image/somchai.png")
    .addField("🤖ตารางคำสั่ง🤖", "ตัวกำหนดคำสั่ง = sm!")
    .addField("🔒**ผู้ดูแลเท่านั้น**🔒", "เตะ = เตะสมาชิก\nแบน = แบนสมาชิก\nเตือน = เตือนผู้ใช้")
    .setDescription("—————————————————————————————")
    .setTimestamp()

    const fun = new MessageEmbed()
    .setTitle("คำสั่งบอต")
    .setColor("GREEN")
    .setThumbnail("https://tinnaphat-somsang.web.app/files/assets/artifacts/root/emulated/0/image/somchai.png")
    .addField("🤖ตารางคำสั่ง🤖", "ตัวกำหนดคำสั่ง = sm!")
    .addField("🎈บันเทิง🎈", "พูด = พูดตามสิ่งที่พูด\nหล่อ = คำนวนค่าความหล่อจาก 0 - 100\nรัก = แสดงผลเป็นอาร์กิวเมนต์\nทำนาย = ทำนายสิ่งที่ถาม\nมีม = แสดงผลเป็นรูปภาพมีม(อาจจะแสดงผลช้า)\nดวง = ดวงวันนี้ของคุณ")
    .setDescription("—————————————————————————————")
    .setTimestamp()

    const manage = new MessageEmbed()
    .setTitle("คำสั่งบอต")
    .setColor("GREEN")
    .setThumbnail("https://tinnaphat-somsang.web.app/files/assets/artifacts/root/emulated/0/image/somchai.png")
    .addField("🤖ตารางคำสั่ง🤖", "ตัวกำหนดคำสั่ง = sm!")
    .addField("💠บริหารเซิฟเวอร์💠", "เลเวล = แสดงเลเวล\nระเบิด = ลบข้อความ*ทั้งหมดในช่อง*(ยกเว้นข้อความที่เก่ากว่า 2 สัปดาห์)\nลบ = ลบข้อความ 1-99 ข้อความ")
    .setDescription("—————————————————————————————")
    .setTimestamp()

    const math = new MessageEmbed()
    .setTitle("คำสั่งบอต")
    .setColor("GREEN")
    .setThumbnail("https://tinnaphat-somsang.web.app/files/assets/artifacts/root/emulated/0/image/somchai.png")
    .addField("🤖ตารางคำสั่ง🤖", "ตัวกำหนดคำสั่ง = sm!")
    .addField("🔢คณิตศาสตร์🔢", "รากที่สาม = คำนวณรากที่สาม\nรากที่สอง = คำนวณรากที่สอง\nปัดลง = ปัดเลขลง\nปัด = ปัดเลข\nตัดเศษ = ตัดเศษเลข\nเลข = คำนวณเลข")
    .setDescription("—————————————————————————————")
    .setTimestamp()

    const nsfw = new MessageEmbed()
    .setTitle("คำสั่งบอต")
    .setColor("GREEN")
    .setThumbnail("https://tinnaphat-somsang.web.app/files/assets/artifacts/root/emulated/0/image/somchai.png")
    .addField("🤖ตารางคำสั่ง🤖", "ตัวกำหนดคำสั่ง = sm!")
    .addField("🔞18+🔞", "โดจิน = เอิ่ม\nเนโกะ = ไม่รู้วว")
    .setDescription("—————————————————————————————")
    .setTimestamp()

    const others = new MessageEmbed()
    .setTitle("คำสั่งบอต")
    .setColor("GREEN")
    .setThumbnail("https://tinnaphat-somsang.web.app/files/assets/artifacts/root/emulated/0/image/somchai.png")
    .addField("🤖ตารางคำสั่ง🤖", "ตัวกำหนดคำสั่ง = sm!")
    .addField("💉อื่นๆ💉", "อวาตาร = แสดงผลเป็นรูปโปรไฟล์ของสมาชิก\nเซอร์เวอร์ = แสดงผลเป็นค่าข้อมูลเซิฟเวอร์", "อันดับ = แสดงอันดับเลเวล\nปิง = แสดงปิง\nแปะ = แปะข้อความลง Pastebin\nพจนานุกรม = หาศัพท์อังกฤษ")
    .setDescription("—————————————————————————————")
    .setTimestamp()

    const pages = [
      money,
      fun,
      admin,
      manage,
      math,
      nsfw, 
      others
]

const emojiList = ["◀", "▶"];

const timeout = '120000';

pagination(message, pages, emojiList, timeout)

      }
      if(args[0]) {
        let command = args[0];

        if(client.commands.has(command)) {
            
            command = client.commands.get(command);
            var embed = new MessageEmbed()
            .setAuthor(`คำสั่ง ${command.name}`)
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

