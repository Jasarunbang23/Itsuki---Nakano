let handler =  m => m.reply(`
╭─「 🧚🏻‍♂️ *DONASI* 」
│ Chat owner
├ • OWNERKU
├ wa.me/628973730304
╰───────────
`.trim()) // Tambah sendiri kalo mau

handler.menugroup = ['donasi']
handler.tagsgroup = ['group']
handler.command = /^(dona(te|si))$/i

export default handler
