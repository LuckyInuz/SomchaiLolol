// module
require('dotenv').config() 
const fs = require('fs'); 
const Level = require('discord-xp')
const { prefix, level } = require('./token.json')
Level.setURL(level)
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://Somchai:SQA8bahqZ1C3C1Pq@somchai-cluster.3rerz.mongodb.net/test", { useNewUrlParser: true, useUnifiedTopology: true, })
mongoose.set('useFindAndModify', false);

// Discord
const Discord = require('discord.js');
const client = new Discord.Client()
client.commands = new Discord.Collection();
const cooldowns = new Discord.Collection();

// Reading files
const commandFolders = fs.readdirSync('./commands');

for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
		client.commands.set(command.name, command);
	}
}
client.once('ready', () => {
	const activities_list = [
		"sm!คำสั่ง เพื่อแสดงคำสั่ง", 
		`บอตถูกใช้ใน ${client.guilds.cache.size} เซอร์เวอร์!`,
		"กับคุณ", 
		"Half-life 3",
"Update 1.7.12"
		];
	console.log(`${prefix}`);
        client.user.setActivity("sm!คำสั่ง"); // Set bot activity
});

client.on('message', async message => {
	
// Filter
if(!message.content.startsWith(prefix)) return;
if (message.author.bot || !message.guild) return;

// Commands
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

// Guild Only
	if (command.guildOnly && message.channel.type === 'dm') {
		return message.reply('ไม่สามารถสั่งคำสั่งภายใน Direct Message ได้');
	}

// Cooldowns
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

// User EXP
	const randomXp = Math.trunc(Math.random() * 10) - 1;
	const hasLevelUp = await Level.appendXp(message.author.id, message.guild.id, randomXp)
	function RandomMessage() {
		let msgr = ['เจ๋งมาก!', 'ทำต่อไป!']
		return msgr[Math.floor(Math.random() * msgr.length)]
	}
	if(hasLevelUp) {
		const user = await Level.fetch(message.author.id, message.guild.id)
		message.channel.send(`<@${message.author.id}> เลเวลอัพถึง ${user.level} ! ` + RandomMessage())
	}

// error catch
	try {
		command.execute(client, message, args);
	} catch (error) {
		console.error(error)
  error.toString()
		message.channel.send("มีการผิดพลาด!, บันทึกข้อผิดพลาด : " + error);
		console.log(error)
	}
	
	
});
// Login
client.login(process.env.TOKEN);
