const { SlashCommandBuilder } = require('discord.js')
const { versionEmbed } = require('../embeds')
const { commands } = require('../../config')

module.exports = {
  data: new SlashCommandBuilder().setName('version').setDescription('Mengirim versi dari Server Minecraft.'),

  run: ({ interaction }) => {
    interaction.reply({ embeds: [versionEmbed] })
  },
}
