
/* BY HYKO */

const DiscordRPC = require('discord-rpc');
const client = new DiscordRPC.Client({ transport: 'ipc' });
require('dotenv').config();

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
   
readline.question('What is the link of the stream? ', url => {
    readline.question('What is the title of the stream? ', name => {
        readline.question('What is the game? ', game => {
            const startTimestamp = new Date();
            (async () => {
                client.on('ready', async () => {
                    await client.setActivity({
                        buttons: [{ label: "Watch the stream", url: url }],
                        details: "Live on YouTube",
                        largeImageKey: "logo",
                        largeImageText: name,
                        startTimestamp,
                        state: `Playing ${game}`
                    }).catch(err => console.log(err));
                    console.log(`Live on: ${name} - ${url} (${game})`);
                });
                await client.login({ clientId: "920028422330253474" }).catch(console.error);
            })();
            readline.close();
        })
    })
});

/* BY HYKO */

