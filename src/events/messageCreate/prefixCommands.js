const config = require('../../../config')
const { commands, settings } = require('../../../config')
const {
  ipEmbed,
  voteEmbed,
  playerList,
  versionEmbed,
  offlineStatus,
  statusEmbed,
  motdEmbed,
  helpEmbed,
} = require('../../embeds')

module.exports = async (message, client) => {
  if (
    message.author.bot ||
    !commands.prefixCommands.enabled ||
    !commands.prefixCommands.prefix ||
    !message.content.startsWith(commands.prefixCommands.prefix)
  )
    return

  const prefix = commands.prefixCommands.prefix
  const content = message.content.slice(prefix.length)

  if (commands.help.enabled && (content === 'help' || commands.help.alias.includes(content))) {
    message.channel.send({ embeds: [await helpEmbed(client)] })
  }
  if (commands.motd.enabled && (content === 'motd' || commands.motd.alias.includes(content))) {
    await message.channel.sendTyping()
    message.channel.send({ embeds: [await motdEmbed()] })
  }
  if (commands.ip.enabled && (content === 'ip' || commands.ip.alias.includes(content))) {
    message.channel.send({ embeds: [ipEmbed] })
  }
  if (commands.vote.enabled && config.mcserver.vote && (content === 'vote' || commands.vote.alias.includes(content))) {
    message.channel.send({ embeds: [voteEmbed] })
  }
  if (commands.version.enabled && (content === 'version' || commands.version.alias.includes(content))) {
    message.channel.send({ embeds: [versionEmbed] })
  }

  if (commands.players.enabled && (content === 'players' || commands.players.alias.includes(content))) {
    await message.channel.sendTyping()
    message.channel.send({ embeds: [await playerList()] })
  }
  if (commands.status.enabled && (content === 'status' || commands.status.alias.includes(content))) {
    await message.channel.sendTyping()
    try {
      message.channel.send({ embeds: [await statusEmbed()] })
    } catch (error) {
      message.channel.send({ embeds: [offlineStatus()] })
      if (settings.logging.error) {
        const { getError } = require('../../index')
        console.log(getError(error, 'Prefix status command'))
      }
    }
  }
}
