let handler = async (m, {usedPrefix}) => {	
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender
let name = conn.getName(who) 
m.reply(`╭「𝐁𝐨𝐭𝐜𝐢𝐭𝐨 𝐈𝐙𝐍」
│💰 *𝐁𝐀𝐋𝐀𝐍𝐂𝐄* 
│┈┈┈┈┈┈┈┈┈┈┈┈┈
│➯‣❏ *✨*𝙽𝚘𝚖𝚋𝚛𝚎:* ${name}
│➯‣❏ *💎𝙳𝚒𝚊𝚖𝚊𝚗𝚝𝚎𝚜:* ${global.db.data.users[who].limit}💎
│➯‣❏ *💥Tokens* 🪙${global.db.data.users[who].joincount}
│➯‣❏ *♦️ʜᴀᴅᴇs-ᴄᴏɪɴs* ${global.db.data.users[who].money}
│➯‣❏ *🧿Exp*${global.db.data.users[who].exp}
╰───────────────╯
🍁᭢━━━━━━━━━᭥🍁᭢
╭「𝐁𝐨𝐭𝐜𝐢𝐭𝐨 𝐈𝐙𝐍」
│➯‣ 📝*𝙽𝙾𝚃𝙰:*
│➯‣*𝙿𝚞𝚎𝚍𝚎𝚜 𝚌𝚘𝚖𝚙𝚛𝚊𝚛 𝚍𝚒𝚊𝚖𝚊𝚗𝚝𝚎𝚜 💎 𝚞𝚜𝚊𝚗𝚍𝚘 𝚕𝚘𝚜 𝚌𝚘𝚖𝚊𝚗𝚍𝚘𝚜*
│➯‣❏ *${usedPrefix}buy <cantidad>*
│➯‣❏ *${usedPrefix}buyall*
╰───────────────╯`)
}
handler.help = ['bal']
handler.tags = ['xp']
handler.command = ['bal', 'diamantes', 'diamond', 'balance'] 
handler.register = true
export default handler
