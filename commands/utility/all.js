const Levels = require('discord-xp')
module.exports = {
    name: 'อันดับ',
    aliases: ['อัน', 'ลีดเดอร์บอร์ด', 'อด', 'อันด'],
    description: "อันดับของคนที่เลเวลเยอะที่สุด",
    execute: async(client, message) => {
        const rawLeaderboard = await Levels.fetchLeaderboard(message.guild.id, 5);
        if (rawLeaderboard.length < 1) return reply("ยังไม่มีใครติดอันดับ...");

        const leaderboard = await Levels.computeLeaderboard(client, rawLeaderboard); 

        const lb = leaderboard.map(e => `*${e.position}*) ***${e.username}#${e.discriminator}***\nเลเวล: **${e.level}**\nประสบการณ์: **${e.xp.toLocaleString()}**`);

        message.channel.send(`${lb.join("\n\n")}}`)
    }
}