const { SlashCommandBuilder } = require('discord.js')
const { commands, settings } = require('../../config')

module.exports = {
  data: new SlashCommandBuilder().setName('status').setDescription('Mengirim status server'),
  run: async ({ interaction }) => {
    await interaction.deferReply()
    try {
      const { statusEmbed } = require('../embeds')
      interaction.editReply({ content: '', embeds: [await statusEmbed()] })
    } catch (error) {
      interaction.editReply({
        content: 'Error saat mengambil status dari server',
      })
      if (settings.logging.error) {
        const { getError } = require('../index')
        console.log(getError(error, 'Slash command - Status'))
      }
    }
  },
}
