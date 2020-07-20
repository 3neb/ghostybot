const fetch = require("node-fetch");

module.exports = {
    name: "advice",
    description: "Gives you advice",
    async execute(bot, message, args) {
        const data = await fetch("https://api.adviceslip.com/advice").then(res => res.json());

        message.channel.send(data.slip.advice)
    }
}