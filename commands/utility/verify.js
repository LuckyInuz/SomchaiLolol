module.exports = {
	name: 'ยืนยัน',
	description: 'Verifying people',
	cooldown: 10,
	execute(message) {
		let myRole = message.guild.roles.cache.find(role => role.name === "🟢สมาชิก");
let advert = message.guild.roles.cache.find(role => role.name === "◀️ติดตามการโฆษณา");
        if(message.member.roles.cache.find(r => r.name === "🟢สมาชิก")) {
            return;
        } else if(!message.member.roles.cache.find(r => r.name === "🟢สมาชิก")) {
            message.member.roles.add(myRole)
message.member.roles.add(advert)
message.delete()
        }

	},
};
