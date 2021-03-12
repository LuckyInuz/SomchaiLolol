module.exports = {
    name: 'เพสบิน',
    aliases: ['แปะ'],
    description: 'แปะอะไรก็ได้',
    usage: "[ข้อความ]",
    execute: async (client, message, args) => {
const messageArgs = args.join(" ")
const PasteClient = require("pastebin-api").default;

const paste = new PasteClient("eI-wkXBK2-y7xBAXVxEXvCMDRNPFTYUw");

const url = await paste.createPaste({
  code: messageArgs,
  expireDate: "N",
  format: "javascript",
  name: `${message.author.username} paste`,
  publicity: 0,
});
message.channel.send(url)
    }
}
