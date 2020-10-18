const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "roleDelete",
  async execute(bot, role) {
    if (!role.guild) return;
    if (!role.guild.me.hasPermission("MANAGE_WEBHOOKS")) {
      return;
    }
    const w = await role.guild.fetchWebhooks();
    const webhook = w.find((w) => w.name === "GhostyBot");

    const embed = new MessageEmbed()
      .setTitle("Role deleted")
      .setDescription(`Role: **${role.name}** was deleted`)
      .setColor("RED")
      .setTimestamp();

    webhook.send(embed);
  },
};
