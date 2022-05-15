const CHANNEL_NAME = "auronplay";
const COMMANDS = ["$clear"]
const client = new tmi.Client({
    options: { debug: false },
    channels: [ CHANNEL_NAME ]
});

client.connect();


client.on("message", (channel, userstate, message, self) =>{

    const isMod = userstate?.mod;
    const userNick = userstate.username;

    console.log (isMod, CHANNEL_NAME, userNick)

    if (isMod || userNick === CHANNEL_NAME) {
        if (message === COMMANDS[0]) {
                    window.location.reload();
        } else{

        }

    } else{

    }
})