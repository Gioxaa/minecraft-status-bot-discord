module.exports = {
  bot: {
    token: '',

    presence: {
      enabled: true,
      activity: 'Watching', 
      text: {
        online: 'Craft Topia {playeronline}/{playermax} players', 
        offline: 'Server sedang Offline', 
      },
      status: {
        online: 'online', 
        offline: 'idle', 
      },
    },
  },
  mcserver: {
    ip: 'crafttopiaind.xyz', // IP of  MC server.
    port: 25565, // Port number of MC server. Default Port - Java: 25565, Bedrock: 19132.
    type: 'java', 
    name: 'CraftTopia', 
    version: '1.20', 
    icon: 'https://i.imgur.com/90APNyn.png', 
    vote: 'https://minecraft-mp.com/server/334327/vote/', 
  },

  settings: {
    logging: {
      inviteLink: true, 
      debug: false, 
      error: true, 
      serverInfo: true, 
    },
  },

  autoChangeStatus: {
    enabled: true,
    updateInterval: 30, 
    isOnlineCheck: true, 
  },

  playerCountCH: {
    enabled: true,
    guildID: '1264171602774331492', // COY TOLONG BACA Playcountstats kalau ga ada buat manual ya ke /src/ lalu buka data.json
    channelId: '1264915528737099858',  // bagian PlayerCountStats kasih channel id VOICE ya bukan text
    onlineText: '🟢 {playeronline}/{playermax} Players playing',
    offlineText: '🔴 Offline', 
  },

  autoReply: {
    enabled: true,
    version: {
      enabled: true,
      triggerWords: ['versi berapa?', 'versi'],
      replyText: "Gunakan versi: **`{version}`**",
    },
    ip: {
      enabled: true,
      triggerWords: ['ipnya apa', 'ip'],
      replyText: '**IP: `{ip}`\nPort: `{port}`**',
    },
    vote: {
      enabled: true,
      triggerWords: ['website link', 'website', 'url', 'site', 'link vote'],
      replyText: "Website link: **<{vote}>**",
    },
    status: {
      enabled: true,
      triggerWords: ['server on ga', 'is server offline', 'status of the server'],
      onlineReply: 'Servernya sedang on **`🟢ONLINE`** with **`{playerOnline}/{playerMax}`** yang lagi main',
      offlineReply: 'servernya lagi **`🔴OFFLINE`**.',
    },
  },

  commands: {
    slashCommands: true,
    prefixCommands: {
      enabled: true,
      prefix: 'mc!', 
    },
    language: 'id', 
    ip: {
      enabled: true, 
      alias: ['ip'], 
    },
    vote: {
      enabled: true, 
      alias: ['vote', 'link'], 
    },
    version: {
      enabled: true, 
      alias: ['versi'], 
    },
    players: {
      enabled: true, 
      alias: ['players'], 
    },
    status: {
      enabled: true, 
      alias: ['info'], 
    },
    motd: {
      enabled: true, 
      alias: ['motd'], 
    },
    help: {
      enabled: true, 
      alias: ['commands'],
    },
  },
}
