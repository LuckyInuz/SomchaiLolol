require('dotenv').config()
const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client()
client.commands = new Discord.Collection();
const db = require('quick.db');
const commandFolders = fs.readdirSync('./commands');
let prefix = process.env.PREFIX

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

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	if (command.guildOnly && message.channel.type === 'dm') {
		return message.reply('I can\'t execute that command inside DMs!');
	}

	if (command.permissions) {
		const authorPerms = message.channel.permissionsFor(message.author);
		if (!authorPerms || !authorPerms.has(command.permissions)) {
			return message.reply('You can not do this!');
		}
	}

	if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;

		if (command.usage) {
			reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);
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
			return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
		}
	}

	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('ในการรันคำสั่ง มีการผิดพลาด!');
	}

	var member = message.mentions.users.first() || message.author;
	let bad = require('./bad.json')
	db.fetch(`warn_${member.id}_${message.guild.id}`)
db.fetch(`chat_${member.id}_${message.guild.id}`)
db.fetch(`xp_${member.id}_${message.guild.id}`)
	
	if(message.content) {
		db.add(`xp_${member.id}_${message.guild.id}`, 1)
		db.add(`chat_${member.id}_${message.guild.id}`, 1)
	} else if(!message.content) {
		return;
	} else if(message.author.bot){ 
		return;
	}

	
});

client.login(process.env.TOKEN);
