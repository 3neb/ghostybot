<a href="https://ghostybot.tk" align="center">
     <img src=".github/Ghostybot-banner.png" alt="banner" />               
</a>

![license](https://img.shields.io/github/license/dev-caspertheghost/ghostybot?style=for-the-badge&color=gr) ![contr](https://img.shields.io/github/contributors/dev-caspertheghost/ghostybot?color=gr&style=for-the-badge) ![stars](https://img.shields.io/github/stars/dev-caspertheghost/ghostybot?style=for-the-badge&color=gr)

# Ghostybot

A Custom Discord bot with a lot of commands for Discord communities. (+100 commands) Economy, util, fun, music, admin, xp system, welcome messages, audit-logs and more!

[Invite ghostybot here](https://discord.com/oauth2/authorize?client_id=632843197600759809&scope=bot&permissions=8)

### Disclaimer (if self-hosted)

You are not allowed to upload this bot to any service such as discordbotlist or top.gg, you are only allowed to host this bot for your community.

## Table of contents

- [Features](#features)
- [Requirements](https://github.com/Dev-CasperTheGhost/ghostybot#requirements)
- [Usage](https://github.com/Dev-CasperTheGhost/ghostybot#usage)
- [Commands](https://github.com/Dev-CasperTheGhost/ghostybot#commands)
- [Bot Events](#bot-events)
- [API's used](https://github.com/Dev-CasperTheGhost/ghostybot#apis-used)

## Features

- Easy to use
- Enable/disable welcome messages
- Play games
- Use util commands to get your avatar, botinfo, channelinfo and more
- Play music
- Get animal pictures/gifs
- And more!

## Requirements

- [Discord bot token](https://discord.com/developers/applications)
- [Node](https://nodejs.org/)
- [Youtube Api key](https://developers.google.com/youtube/v3/getting-started)
- [FFmpeg](https://ffmpeg.org/download.html)

## Usage

1. Clone the repo: `git clone https://github.com/Dev-CasperTheGhost/ghostybot`
2. Install all dependencies: `npm install`
3. Rename `config.example.json` to `config.json`: `mv config.example.json config.json`
4. Create a bot at [Discord Developers](https://discord.com/developers/applications)
5. Copy your token and paste into `config.json`
6. Run the bot: `npm start`
   - Using pm2: `pm2 start src/index.js --name ghostybot`

## Commands

| Admin       | Animal | Botowner | Games        | Music      | NSFW  | util         | Economy   | Levels      |
| ----------- | ------ | -------- | ------------ | ---------- | ----- | ------------ | --------- | ----------- |
| addrole     | bunny  | eval     | 8ball        | pause      | boobs | avatar       | balance   | xp          |
| ban         | cat    | shutdown | advice       | play       | butt  | botinfo      | daily     | leaderboard |
| ctopic      | dog    |          | bet          | queue      | neko  | bugreport    | deposit   | level       |
| kick        | duck   |          | block        | resume     |       | channelinfo  | work      |
| lockchannel | fox    |          | calc         | skip       |       | define       | store     |
| removerole  | lizard |          | clyde        | stop       |       | delete       | inventory |
| say         | owl    |          | dadjoke      | leave      |       | dependencies | buy       |
| sticky      | cow    |          | dice         | volume     |       | emojis       |
| unsticky    | panda  |          | flipcoin     | nowplaying |       | help         |
| prefix      | cowsay |          | happiness    |            |       | instagram    |
| announce    | shibe  |          | hug          |            |       | minecraft    |
| set         | birb   |          | iq           |            |       | morse        |
| unset       |        |          | kiss         |            |       | poll         |
|             |        |          | owo          |            |       | randomcolor  |
|             |        |          | ping         |            |       | roleinfo     |
|             |        |          | randomjoke   |            |       | roles        |
|             |        |          | randomnumber |            |       | serverinfo   |
|             |        |          | rps          |            |       | translate    |
|             |        |          | wyr          |            |       | userinfo     |
|             |        |          | ascii        |            |       | wordclock    |
|             |        |          | compliment   |            |       | uptime       |
|             |        |          | pat          |            |       | github       |
|             |        |          | slap         |            |       | channels     |
|             |        |          | poke         |            |       | suggest      |
|             |        |          | smug         |            |       | bmi          |
|             |        |          | lmgtfy       |            |       | npm          |
|             |        |          | changemymind |            |       | servericon   |
|             |        |          | supreme      |            |       |              |
|             |        |          | tweet        |            |       |              |

## Bot events

these are the used events for the audit logs, more coming soon

#### welcome message

| Name              | Description                              |
| ----------------- | ---------------------------------------- |
| guildMemberAdd    | A new member joined the server/guild     |
| guildMemberRemove | A member left/was kicked from the server |

#### Audit logs

| Name          | Description               |
| ------------- | ------------------------- |
| channelCreate | A new channel was created |
| channelDelete | A channel was deleted     |
| emojiCreate   | A new emoji was created   |
| emojiDelete   | An emoji was deleted      |
| roleCreate    | A role was created        |
| roleDelete    | A role was deleted        |

## API's used

| Command      | URL                                                                                                                                      |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| meme         | [https://meme-api.herokuapp.com/gimme](https://meme-api.herokuapp.com/gimme)                                                             |
| bunny        | [https://api.bunnies.io/v2/loop/random/?media=gif,png](https://api.bunnies.io/v2/loop/random/?media=gif,png)                             |
| cat          | [https://nekos.life/api/v2/img/meow](https://nekos.life/api/v2/img/meow)                                                                 |
| catfact      | [https://cat-fact.herokuapp.com/facts?animal_type=cat](https://cat-fact.herokuapp.com/facts?animal_type=cat)                             |
| dog          | [https://dog.ceo/api/breeds/image/random](https://dog.ceo/api/breeds/image/random)                                                       |
| dogfact      | [https://cat-fact.herokuapp.com/facts?animal_type=dog](https://cat-fact.herokuapp.com/facts?animal_type=dog)                             |
| duck         | [https://random-d.uk/api/v1/random?type=gif](https://random-d.uk/api/v1/random?type=gif)                                                 |
| fox          | [https://randomfox.ca/floof/](https://randomfox.ca/floof/)                                                                               |
| lizard       | [https://nekos.life/api/v2/img/lizard](https://nekos.life/api/v2/img/lizard)                                                             |
| owl          | [http://pics.floofybot.moe/owl](http://pics.floofybot.moe/owl)                                                                           |
| snailfact    | [https://cat-fact.herokuapp.com/facts?animal_type=snail](https://cat-fact.herokuapp.com/facts?animal_type=snail)                         |
| advice       | [https://api.adviceslip.com/advice](https://api.adviceslip.com/advice)                                                                   |
| clyde        | [https://nekobot.xyz/api/imagegen?type=clyde&text=hello%20world](https://nekobot.xyz/api/imagegen?type=clyde&text=hello%20world)         |
| dadjoke      | [https://icanhazdadjoke.com/slack](https://icanhazdadjoke.com/slack)                                                                     |
| hug          | [https://nekos.life/api/hug](https://nekos.life/api/hug)                                                                                 |
| kiss         | [https://nekos.life/api/kiss](https://nekos.life/api/kiss)                                                                               |
| owo          | [https://rra.ram.moe/i/r?type=owo](https://rra.ram.moe/i/r?type=owo)                                                                     |
| boobs        | [http://api.oboobs.ru/boobs/0/1/random](http://api.oboobs.ru/boobs/0/1/random)                                                           |
| butt         | [http://api.obutts.ru/butts/0/1/random](http://api.obutts.ru/butts/0/1/random)                                                           |
| neko         | [https://nekobot.xyz/api/image?type=neko](https://nekobot.xyz/api/image?type=neko)                                                       |
| instagram    | [https://instagram.com](https://instagram.com)                                                                                           |
| minecraft    | [https://mcapi.us/server/status?ip=](https://mcapi.us/server/status?ip=)                                                                 |
| github       | [https://api.github.com/](https://api.github.com/)                                                                                       |
| birb         | [https://api.alexflipnote.dev/birb](https://api.alexflipnote.dev/birb)                                                                   |
| changemymind | [https://nekobot.xyz/api/imagegen?type=changemymind&text=helloworld](https://nekobot.xyz/api/imagegen?type=changemymind&text=helloworld) |
| supreme      | [https://api.alexflipnote.dev/supreme?text=helloworld](https://api.alexflipnote.dev/supreme?text=helloworld)                             |

## Workflows

Workflows are currently disable since a few dependencies got deleted that were needed for the workflows.
