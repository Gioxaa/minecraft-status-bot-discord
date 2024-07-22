const { SlashCommandBuilder } = require('discord.js')
const { ipEmbed } = require('../embeds')
const { commands } = require('../../config')
module.exports = {
  data: new SlashCommandBuilder().setName('ip').setDescription('Mengirim Alamat Server dari Server Minecraft.'),
  run: ({ interaction }) => {
    interaction.reply({ embeds: [ipEmbed] })
  },
}
