module.exports = {
	name: 'ตาม',
	description: 'Verifying people',
	cooldown: 10,
	execute(message, args) {
		if (message.channel.id === '814315760004497428') {
		let myRole = message.guild.roles.cache.find(role => role.name === "◀️ติดตามการโฆษณา");
if(args = "ขาย") {
        if(message.member.roles.cache.find(r => r.name === "◀️ติดตามการโฆษณา")) {
message.channel.send("You are already subscibe")
        } else if(!message.member.roles.cache.find(r => r.name === "◀️ติดตามการโฆษณา")) {
            message.member.roles.add(myRole)
message.channel.send("Sub complete")
        }
} else if(!args.length) {
message.channel.send("To sub advert, type x!sub advert")
	}
} else {
    message.channel.send("ขออภัย ฟังก์ชั่นนี้ยังไม่เปิดให้ในสาธารณะ หากจำเป็นต้องใช้ ให้แอดเพื่อนและเปิดข้อความส่วนตัวมาให้ มีปัญหาหรอ#1424 พร้อม : เซอร์เวอร์ไอดี / ไอดีของบทบาทที่ต้องการให้")
}
}
}
