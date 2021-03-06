module.exports = {
	name: 'ยืนยัน',
	description: 'Verifying people',
	cooldown: 10,
	execute(message) {
        if(message.guild.id === '805974679322886165') {
		let myRole = message.guild.roles.cache.find(role => role.name === "🟢สมาชิก");
let advert = message.guild.roles.cache.find(role => role.name === "◀️ติดตามการโฆษณา");
        if(message.member.roles.cache.find(r => r.name === "🟢สมาชิก")) {
            message.channel.send("คุณมีบทบาทนี้แล้ว")
        } else if(!message.member.roles.cache.find(r => r.name === "🟢สมาชิก")) {
            message.member.roles.add(myRole)
message.member.roles.add(advert)
            message.channel.send(`${message.author.username} ถูกยืนยัน`)
        } else {
            return;
         }
    }

	},
};
