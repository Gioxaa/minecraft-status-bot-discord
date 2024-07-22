    const { SlashCommandBuilder } = require('discord.js')
    const { motdEmbed } = require('../embeds')
    const { commands, settings } = require('../../config')

    module.exports = {
      data: new SlashCommandBuilder()
        .setName('motd')
        .setDescription('Mengirim Pesan Hari Ini'),

      run: async ({ interaction }) => {
        interaction.deferReply()
        try {
          interaction.editReply({ embeds: [await motdEmbed()] })
        } catch (error) {
          interaction.editReply({
            content: 'Error saat mengambil Pesan Hari ini',
          })
          if (settings.logging.error) {
            const { getError } = require('../index')
            console.log(getError(error, 'Slash command - Botinfo'))
          }
        }
      },
    }
