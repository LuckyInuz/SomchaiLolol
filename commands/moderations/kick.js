module.exports = {
	name: 'เตะ',
  description: 'เตะผู้ใช้',
  usage: "[ผู้ใช้]",
	cooldown: 20,
	execute: async(client, message, args) => {
    if(!message.member.hasPermission("KICK_MEMBERS")) {
        message.channel.send("คุณไม่มีสิทธิในการเตะ!")
    }
  const user = message.mentions.users.first();
  if (user) {
    const member = message.guild.member(user);
    if (member) {
      member
        .kick('Optional reason that will display in the audit logs')
        .then(() => {
          message.reply(`เตะ ${user.tag}`);
        })
        .catch(err => {
          message.reply('เตะไม่ได้!');
          console.error(err);
        });
    } else {
      message.reply("เตะใคร?");
    }
  } else {
    message.reply("เตะใคร?");
  }
}
}