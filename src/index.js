require('dotenv').config();
const { Client, IntentsBitField  } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});





client.login(process.env.TOKEN);

function getMove() {
    const replies = ['paper', 'rock', 'scissors' ];
    const random = Math.floor(Math.random() * 3)
    
    return replies[random]
}

client.on('messageCreate', (message) =>
{
    if (message.content === '/paper')
    {
        if (getMove() == 'paper')
        {
            message.reply('I choose paper! It\'s a tie!');
        }

        if (getMove() == 'rock')
        {
            message.reply('I choose rock! You win!');
        }

        if (getMove() == 'scissors')
        {
            message.reply('I choose scissors! You lose!');
        }
    }

})

client.on('messageCreate', (message) =>
{
    if (message.content === '/sizzors')
    {
        if (getMove() == 'sizzors')
        {
            message.reply('I choose sizzors! It\'s a tie!');
        }

        if (getMove() == 'rock')
        {
            message.reply('I choose rock! I lose!');
        }

        if (getMove() == 'paper')
        {
            message.reply('I choose paper! You win!');
        }
    }

})



console.log(getMove());






