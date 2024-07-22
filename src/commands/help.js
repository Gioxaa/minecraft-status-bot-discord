const { SlashCommandBuilder } = require('discord.js')
const { helpEmbed } = require('../embeds')
const { commands } = require('../../config')
module.exports = {
  data: new SlashCommandBuilder().setName('help').setDescription('Mengirim daftar perintah yang tersedia.'),
  run: async ({ interaction, client }) => {
    await interaction.deferReply()
    await interaction.editReply({ embeds: [await helpEmbed(client)] })
  },
}
