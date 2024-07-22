const { autoReply, mcserver, commands, settings } = require('../../../config')
module.exports = async (msg) => {
  try {
    if (!autoReply.enabled || msg.author.bot || msg.content.startsWith(commands.prefixCommands.prefix)) return
    const { content } = msg
    const { ip, vote, status, version } = autoReply
    const isIp = new RegExp(`\\b(${ip.triggerWords.join('|')})\\b`)
    const isvote = new RegExp(`\\b(${vote.triggerWords.join('|')})\\b`)
    const isStatus = new RegExp(`\\b(${status.triggerWords.join('|')})\\b`)
    const isVersion = new RegExp(`\\b(${version.triggerWords.join('|')})\\b`)

    if (isIp.test(content) && autoReply.ip.enabled) {
      msg.channel.send(ip.replyText.replace(/{ip}/g, mcserver.ip).replace(/{port}/g, mcserver.port))
    }
    if ((isvote.test(content) && autoReply.vote.enabled) || !mcserver.vote) {
      msg.channel.send(vote.replyText.replace(/{vote}/g, mcserver.vote))
    }
    if (isVersion.test(content) && autoReply.version.enabled) {
      msg.channel.send(version.replyText.replace(/{version}/g, mcserver.version))
    }
    if (isStatus.test(content) && autoReply.status.enabled) {
      await msg.channel.sendTyping()
      const { getServerDataOnly } = require('../../index')
      const { data, isOnline } = await getServerDataOnly()
      msg.channel.send(
        isOnline
          ? status.onlineReply.replace(/{playerOnline}/g, data.players.online).replace(/{playerMax}/g, data.players.max)
          : status.offlineReply
      )
    }
  } catch (error) {
    if (settings.logging.error) {
      const { getError } = require('../../index')
      console.log(getError(error, 'Auto Reply'))
    }
  }
}
