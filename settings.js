
/**
* andrew x
* andrew x
*/

require('dotenv').config();

const botName = 'Yeoboe-xmd';
const repositoryUrl = 'https://github.com/Yeoboe/Yeoboe-xmd';
const repositoryApiUrl = 'https://api.github.com/repos/Yeoboe/Yeoboe-xmd';
const newsletterJid = '120363430143893568@newsletter';
const newsletterName = 'Yeoboe-xmd';
const whatsappInviteCode = 'GO7V7oGqjGfEHjcnYOs9DU';

const settings = {
  packname: botName,
  author: botName,
  botName,
  prefix: process.env.PREFIX || '.',
  botOwner: 'Yeoboe-xmd',
  ownerNumber: process.env.OWNER_NUMBER || '255742579250',
  giphyApiKey: process.env.GIPHY_API_KEY || 'qnl7ssQChTdPjsKta2Ax2LMaGXz303tq', // committed to git - rotate; set GIPHY_API_KEY in .env
  commandMode: "public",
  maxStoreMessages: 20, 
  storeWriteInterval: 10000,
  description: "This is a bot for managing group commands and automating tasks.",
  version: "2.7.6",
  repositoryUrl,
  repositoryApiUrl,
  newsletterJid,
  newsletterName,
  whatsappInviteCode,
  whatsappInviteLink: `https://chat.whatsapp.com/${whatsappInviteCode}`,
  channelLink: `https://whatsapp.com/channel/${newsletterJid.replace('@newsletter', '')}`,
  updateBranch: 'main',
  updateZipToken: '',
  updateZipUrl: `${repositoryUrl}/archive/refs/heads/main.zip`,
  timezone: process.env.BOT_TIMEZONE || 'Africa/Nairobi',   // was 'Africa/nairobi'; Intl tolerates the bad case but moment-timezone throws on it
};

module.exports = settings;
