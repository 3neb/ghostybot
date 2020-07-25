const db = require("quick.db");

module.exports = {
    name: "deposit",
    description: "deposit money to your bank",
    category: "economy",
    async execute(bot, message, args) {
        const user = message.author;
        const amount = Number(args[0]);

        if (!amount)
            return message.reply("Please provide an amount to deposit");

        if (typeof amount !== "number")
            return message.reply("Please provide a valid amount to deposit");


        const money = db.fetch(`money_${message.guild.id}_${user.id}`);


        if (money !== 0 && amount === "all") {
            db.add(`bank_${message.guild.id}_${user.id}`, money);
            db.subtract(`money_${message.guild.id}_${user.id}`, money);
            return message.channel.send("Successfully deposited all your money!");
        }

        if (money <= amount)
            return message.channel.send("You don't have that much money!");

        db.add(`bank_${message.guild.id}_${user.id}`, amount);
        db.subtract(`money_${message.guild.id}_${user.id}`, amount);

        message.channel.send(`Successfully deposited ${amount} coins`);
    }
};