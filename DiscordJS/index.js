const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg) => {
    if (msg.content === "ping") {
        msg.reply("pong");
    }
});

client.login("ODgxMTg5OTgyMjkzODg0OTc4.YSpOHw.pXKaDXDAB-YYqX2y8yajeCrBnQE");
