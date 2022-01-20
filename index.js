const Discord = require("discord.js")
const prefix = "!";
const TOKEN = "OTMzODU5MjY0NjY4MjcwNzU0.YenqNg.NF89CPuiCaMggguYx0C-geov-B8"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready",() => {
    console.log('Logged is as',client.user.tag);
    console.log(client.channels)

})
const user = client.users.cache.get('320854891558076418');


client.on("messageCreate", msg => {
    if(msg.author.bot || !msg.content.startsWith(prefix)) return;
    const args = msg.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();
    
    if(cmd === "hi") {
        msg.channel.send("hello");
    }
    else if (cmd === "love") {
        msg.channel.send("asd")
        //msg.react(":hearts:");
    }
    else if (cmd === "a") {
        msg.channel.send("Люблю ваню!!")
        
        msg.react('💖')
    }
    //#chat-spam 
    
    else if (cmd === "ping") {
        msg.author.send("i love u, " + msg.author.username)
    }
})


client.login(TOKEN);