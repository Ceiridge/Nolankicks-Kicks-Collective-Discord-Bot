const mongoose = require('mongoose');
const { Client, EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');
const Coin = require('./kicksCoinSchema.js');

module.exports["Leaderboard"] = async (Client) =>
{
    const client = Client;
    client.on('messageCreate', async (interaction) =>
    {
        if (interaction.content === 'Leaderboard')
        {
            const query = {
                guildID: interaction.guild.id,
            };
            const leaderboard = await Coin.find(query).sort({ coins: -1 }).limit(10);
            const embed = new EmbedBuilder().setTitle('Leaderboard');
            await leaderboard.forEach(async (user, index) => {
                const name = await client.users.fetch(user.userID);

                embed.addFields({
                    name: `${index + 1}. ${name.username}`,
                    value: `${user.coins} coins`,
                });
            });

            await interaction.reply({ embeds: [embed] });
        }
    });
}