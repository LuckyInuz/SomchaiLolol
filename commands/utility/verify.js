module.exports = {
	name: 'ยืนยัน',
	description: 'Verifying people',
	cooldown: 10,
	execute(message) {
        if(message.guild.id === '805974679322886165') {
		let myRole = message.guild.roles.cache.find(role => role.name === "🟢สมาชิก");
let advert = message.guild.roles.cache.find(role => role.name === "◀️ติดตามการโฆษณา");
        if (message.channel.id === '814315760004497428') {
        if(message.member.roles.cache.find(r => r.name === "🟢สมาชิก")) {
            message.channel.send("Amazing! You are already has the role.")
        } else if(!message.member.roles.cache.find(r => r.name === "🟢สมาชิก")) {
            message.member.roles.add(myRole)
message.member.roles.add(advert)
            message.channel.send(`${message.author.username} is verified!`)
        }
    } else {
        message.channel.send("You don't have permission to use this command in this channel!")
    }
} else {
    message.channel.send("ขออภัย ฟังก์ชั่นนี้ยังไม่เปิดให้ในสาธารณะ หากจำเป็นต้องใช้ ให้แอดเพื่อนและเปิดข้อความส่วนตัวมาให้ มีปัญหาหรอ#1424 พร้อม : เซอร์เวอร์ไอดี / ไอดีของบทบาทที่ต้องการให้")
}
	},
};
