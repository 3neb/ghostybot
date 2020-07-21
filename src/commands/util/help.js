const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "help",
    description: "Shows all commands",
    execute(bot, message, args) {

        const embed = new MessageEmbed()
            .setTimestamp()
            .setFooter(message.author.username)
            .setColor("BLUE")
            .addField("Admin Commands", "```addrole, ban, ctopic, kick, lockchannel, removerole, say, unlockchannel```")
            .addField("Animal Commands", "```bunny, cat, dog, duck, fox, lizard, owl```")
            .addField("BotOwner Commands", "```eval, shutdown```")
            .addField("Game Commands", "```8ball, advice, bet, block, calc, clyde, dadjoke, dice, flipcoin, happy, hug, iq, kiss, owo, ping, randomjoke, randomnumber, rps, wyr```")
            .addField("Music Commands", "```pause, play, queue, resume, skip, stop```")
            .addField("NSFW Commands", "```boobs, butt, neko```")
            .addField("Util Commands", "```avatar, botinfo, channelinfo, define, delete, dependencies, emojis, help, instagram, invite, minecraft, morse, poll, randomcolor, roleinfo, roles, serverinfo, translate, userinfo, worldclock```")
            .setTitle("Help");

        message.channel.send(embed)
    }
}