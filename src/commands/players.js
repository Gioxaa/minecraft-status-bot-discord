const { SlashCommandBuilder } = require('discord.js')
const { commands, settings } = require('../../config')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('players')
    .setDescription('Mengirim daftar pemain'),
  run: async ({ interaction }) => {
    await interaction.deferReply()
    const { playerList } = require('../embeds')
    try {
      interaction.editReply({ content: '', embeds: [await playerList()] })
    } catch (error) {
      interaction.editReply({ content: 'Error saat mengambil Daftar Pemain' })
      if (settings.logging.error) {
        const { getError } = require('../index')
        console.log(getError(error, 'Slash command - Player'))
      }
    }
  },
}
