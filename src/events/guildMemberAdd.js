const { MessageEmbed } = require("discord.js");
const { getWelcomeChannel } = require("../utils/functions");

module.exports = {
  name: "guildMemberAdd",
  async execute(bot, member) {
    const welcomeChannel = await getWelcomeChannel(member.guild.id);

    // not enabled
    if (welcomeChannel === null || !welcomeChannel) return;

    const embed = new MessageEmbed()
      .setTitle("👋 New Member!")
      .setDescription(`Welcome ${member} to ${member.guild.name}`)
      .setColor("BLUE")
      .setTimestamp()
      .setFooter(bot.user.username);

    bot.channels.cache.get(welcomeChannel.id).send({ embed });
  },
};
