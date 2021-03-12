require('dotenv').config()
const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client()
client.commands = new Discord.Collection();
const commandFolders = fs.readdirSync('./commands');
let prefix = process.env.PREFIX
const Level = require('discord-xp')
Level.setURL("mongodb+srv://Somchai:SQA8bahqZ1C3C1Pq@somchai-cluster.3rerz.mongodb.net/test")
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Somchai:SQA8bahqZ1C3C1Pq@somchai-cluster.3rerz.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true, })
mongoose.set('useFindAndModify', false);
const AntiSpam = require('discord-anti-spam');
const antiSpam = new AntiSpam({
	warnThreshold: 3, // Amount of messages sent in a row that will cause a warning.
	muteThreshold: 4, // Amount of messages sent in a row that will cause a mute
	kickThreshold: 7, // Amount of messages sent in a row that will cause a kick.
	banThreshold: 7, // Amount of messages sent in a row that will cause a ban.
	maxInterval: 2000, // Amount of time (in milliseconds) in which messages are considered spam.
	warnMessage: '{@user}, หยุดสแปมครับ', // Message that will be sent in chat upon warning a user.
	kickMessage: '**{user_tag}** โดนเตะเพราะสแปม', // Message that will be sent in chat upon kicking a user.
	muteMessage: '**{user_tag}** โดนมิวต์เพราะสแปม',// Message that will be sent in chat upon muting a user.
	banMessage: '**{user_tag}** โดนแบนเพราะสแปม', // Message that will be sent in chat upon banning a user.
	maxDuplicatesWarning: 7, // Amount of duplicate messages that trigger a warning.
	maxDuplicatesKick: 10, // Amount of duplicate messages that trigger a warning.
	maxDuplicatesBan: 12, // Amount of duplicate messages that trigger a warning.
	exemptPermissions: [ 'ADMINISTRATOR'], // Bypass users with any of these permissions.
	ignoreBots: false, // Ignore bot messages.
	verbose: true, // Extended Logs from module.
	ignoredUsers: [], // Array of User IDs that get ignored.
	muteRoleName: "Muted", // Name of the role that will be given to muted users!
	removeMessages: true // If the bot should remove all the spam messages when taking action on a user!
	// And many more options... See the documentation.
});

const PasteClient = require("pastebin-api").default;

const paste = new PasteClient("eI-wkXBK2-y7xBAXVxEXvCMDRNPFTYUw");

for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
		client.commands.set(command.name, command);
	}
}
const cooldowns = new Discord.Collection();
client.once('ready', () => {
	const activities_list = [
		"sm!คำสั่ง เพื่อแสดงคำสั่ง", 
		`บอตถูกใช้ใน ${client.guilds.cache.size} เซอร์เวอร์!`,
		"กับคุณ", 
		"Half-life 3"
		];
	console.log(`${prefix}`);
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
        client.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.
    }, 3000); // Runs this every 10 seconds.
});

client.on('message', async message => {
	antiSpam.message(message);
client.snipe = new Discord.Collection()
	if (message.author.bot || !message.guild) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	const randomXp = Math.trunc(Math.random() * 10) - 1;
	const hasLevelUp = await Level.appendXp(message.author.id, message.guild.id, randomXp)
	function RandomMessage() {
		let msgr = ['That\'s awesome!', 'Keep going!', 'How nice!', 'Very cool!', 'You are chatting experts!']
		return msgr[Math.floor(Math.random() * msgr.length)]
	}
	if(hasLevelUp) {
		const user = await Level.fetch(message.author.id, message.guild.id)
		message.channel.send(`<@${message.author.id}> has now level up to ${user.level}!` + RandomMessage())
	}

	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	if (command.guildOnly && message.channel.type === 'dm') {
		return message.reply('ไม่สามารถสั่งคำสั่งภายใน Direct Message ได้');
	}
	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;

	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`โปรดรออีก ${timeLeft.toFixed(1)} วินาทีก่อนจะใช้คำสั่ง \`${command.name}\``);
		}
	}

	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

	try {
		command.execute(client, message, args);
	} catch (error) {
		console.error(error);
const url = await paste.createPaste({
	code: error,
	expireDate: "N",
	format: "javascript",
	name: "somchai-error-logs",
	publicity: 0,
  });
		message.channel.send("มีการผิดพลาด!, ดู error ได้ที่" + url);
	}
	
	
});

client.login(process.env.TOKEN);
