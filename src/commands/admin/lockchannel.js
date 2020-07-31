const { errorEmbed } = require("../../utils/functions");

module.exports = {
  name: "lockchannel",
  description: "Lock A channel",
  category: "admin",
  execute(bot, message, args) {
    if (!message.guild.me.hasPermission("MANAGE_CHANNELS"))
      return message.channel.send(
        errorEmbed("manage channels! (Manage Channels)", message)
      );

    const user = message.member;
    const lockReason = args.join(" ");

    if (!lockReason)
      return message.reply("Please provide a reason to lock this channel");

    if (!user.hasPermission(["MANAGE_CHANNELS"]))
      return message.channel.send("You don't have to correct permissions!");

    message.channel.updateOverwrite(message.guild.id, {
      SEND_MESSAGES: false,
    });
    message.channel.send(
      `Channel was successfully locked, Reason: **${lockReason}**`
    );
  },
};
