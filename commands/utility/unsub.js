module.exports = {
	name: 'เลิกตาม',
	description: 'Verifying people',
	cooldown: 10,
	execute(message, args) {
		if (message.channel.id === '814315760004497428') {
		let myRole = message.guild.roles.cache.find(role => role.name === "◀️ติดตามการโฆษณา");
if(args = "ขาย") {
        if(message.member.roles.cache.find(r => r.name === "◀️ติดตามการโฆษณา")) {
message.member.roles.remove(myRole)
message.channel.send("Now you are unsub from it")
        } else if(!message.member.roles.cache.find(r => r.name === "◀️ติดตามการโฆษณา")) {
            message.channel.send("What")
        }
} else {
message.channel.send("To unsub advert, type x!unsub advert")
	}
} else {
    message.channel.send("ขออภัย ฟังก์ชั่นนี้ยังไม่เปิดให้ในสาธารณะ หากจำเป็นต้องใช้ ให้แอดเพื่อนและเปิดข้อความส่วนตัวมาให้ มีปัญหาหรอ#1424 พร้อม : เซอร์เวอร์ไอดี / ไอดีของบทบาทที่ต้องการให้")
}
}
}
