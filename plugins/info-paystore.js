let handler =  m => m.reply(`
╭━━━━「 *SEWA* 」
┊⫹⫺ *Hemat:* _5k/grup (1 minggu)_
┊⫹⫺ *Normal:* _10k/grup (1 bulan)_
┊⫹⫺ *Standar:* _20k/grup (2 bulan)_
┊⫹⫺ *Pro:* _40k/grup (4 bulan)_                                                      
┊⫹⫺ *Vip:* = _60k/grup (12 bulan)_
╰═┅═━––––––๑

╭━━━━「 *PREMIUM* 」
┊⫹⫺ *Hemat:* _10k (1 minggu)_
┊⫹⫺ *Normal:* _20k (1 bulan)_
┊⫹⫺ *Pro:* _30k (4 bulan)_
┊⫹⫺ *Vip:* _40k (8 bulan)_                                               
┊⫹⫺ *Permanent:* = _50k (Unlimited)_
╰═┅═━––––––๑
*⫹⫺ PAYMENT*
*DANA*
*GOPAY*
*PULSA*

🗣️: Kak, Kok harganya mahal banget?
💬: Mau tawar menawar? boleh, silahkan chat owner aja
Minat Hubungi Wa.me/628973730304

`.trim()) // Tambah sendiri kalo mau
handler.help = ['sewa', 'premium']
handler.tags = ['main']
handler.command = /^(sewa(bot)?|premium)$/i

export default handler
