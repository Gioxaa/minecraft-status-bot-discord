const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js')
const { botInfoEmbed } = require('../embeds')
module.exports = {
  data: new SlashCommandBuilder()
    .setName('info')
    .setDescription('Mengirim informasi terkini tentang bot.')
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
  run: async ({ interaction, client }) => {
    interaction.deferReply({
      ephemeral: true,
    })
    try {
      await interaction.editReply({
        ephemeral: true,
        embeds: [await botInfoEmbed(interaction, client)],
      })
    } catch (error) {
      interaction.editReply({
        content: 'Error saat mengambil Info',
        ephemeral: true,
      })
      const { settings } = require('../../config')
      if (settings.logging.error) {
        const { getError } = require('../index')
        console.log(getError(error, 'Slash command - info'))
      }
    }
  },
}
