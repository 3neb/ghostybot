const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "happiness",
    description: "Get a happiness returned",
    execute(bot, message, args) {
        const happiness = Math.floor(Math.random() * 100) + 1;

        const embed = new MessageEmbed()
            .setTitle("8Ball")
            .setTitle(`${happiness}`)
            .setColor("BLUE")
            .setFooter(message.author.username)
            .setTimestamp()

        message.channel.send(embed)
    }
}