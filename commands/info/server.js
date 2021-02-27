const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'เซอร์เวอร์',
    args: false,
    execute: async(message) => {
        let verify = ["None", "Low", "Medium", "High", "Highest"];
        let region = {
            "brazil": ":flag_br: Brazil",
            "eu-central": ":flag_eu: Central Europe",
        "singapore": ":flag_sg: Singapore",
        "us-central": ":flag_us: U.S. Central",
        "sydney": ":flag_au: Sydney",
        "us-east": ":flag_us: U.S. East",
        "us-south": ":flag_us: U.S. South",
        "us-west": ":flag_us: U.S. West",
        "eu-west": ":flag_eu: Western Europe",
        "vip-us-east": ":flag_us: VIP U.S. East",
        "london": ":flag_gb: London",
        "amsterdam": ":flag_nl: Amsterdam",
        "hongkong": ":flag_hk: Hong Kong",
        "russia": ":flag_ru: Russia",
        "southafrica": ":flag_za:  South Africa"
    };
    const embed = new MessageEmbed()
        .setTitle(`ข้อมูลของเซอร์เวอร์ ${message.guild.name}`) // Title
        .setThumbnail(message.guild.iconURL())
        .addField("ชื่อ", message.guild.name, true) //server name
        .addField("ไอดี", message.guild.id, true) // server id
        .addField("ผู้สร้าง", `<@${message.guild.ownerID}>`, true) // Owner
        .addField("ภูมิภาค", region[message.guild.region], true) // Region
        .addField("สมาชิกทั้งหมด", `${message.guild.memberCount}`, true) // All members
        .addField("บอต", `${message.guild.members.cache.filter(member => member.user.bot).size}`, true) // Bots
        .addField("สมาชิก", `${message.guild.members.cache.filter(member => !member.user.bot).size}`, true) // Users
        .addField("ระดับขั้นความปลอดภัย", message.guild.verificationLevel, true, true) // Vrification Levels
        .addField("ช่อง", message.guild.channels.cache.size, true) // Channels
        .addField("บทบาท", message.guild.roles.cache.size, true) // Roles
        .addField("วันที่สร้าง", message.guild.createdAt.toLocaleString(), true) // Creation date
        message.channel.send(embed)
    }
}
