module.exports = {
	name: 'แบน',
	description: 'Banning people',
	cooldown: 20,
	execute: async(message, args) => {
    if(!message.member.hasPermission("BAN_MEMBERS")) {
        message.channel.send("คุณไม่มีสิทธิในการแบน!")
    }
  const user = message.mentions.users.first();
  if (user) {
    const member = message.guild.member(user);
    if (member) {
      member
      .ban({
          reason: 'something rude insert here',
        })
        .then(() => {
          message.reply(`แบน ${user.tag} ไปก่อนหน้าแล้ว`);
        })
        .catch(err => {
          message.reply('แบนไม่ได้');
          console.error(err);
        });
    } else {
      message.reply("แบนใคร?");
    }
  } else {
    message.reply("แบนใคร?");
  }
}
}
