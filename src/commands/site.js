const { SlashCommandBuilder } = require('discord.js')
const { siteEmbed } = require('../embeds')
const { commands, mcserver } = require('../../config')
module.exports = {
  data: new SlashCommandBuilder().setName('vote').setDescription('Mengirim link website'),

  run: ({ interaction }) => {
    interaction.reply({ embeds: [siteEmbed] })
  },
}
