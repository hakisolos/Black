//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://imgur.com/a/9etcJPe";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349112171078";
global.owner = process.env.OWNER_NUMBER || "2349112171078";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0w1U04vSEthSFBHK0FseW9mQURyclZRSERWS2FaSWRmSEowRFBxa3dXVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVzVqQThMNm1paFFoWTRRdUZOZ0lGR1hOWkVrUE8vaXJwVFd4bjRISUZWST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPUHV2azF5NklRRld0UlA0YldaSlFyaWozaU9VQ3FXWHdGaElyVkNPeTN3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2U1hQN0pKbnBVVHBmWmNrYUV0ejlNVlMvRk10S0dwUk55Y3J5V3ZUUjJFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFFZFZ2c201Ni92eGRyODlQYWFhZVRjbHd0a09PMk5MMUltRTFNMDdMbW89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFqTXdOeUNZMXZxU1UwdWU4Q1I0ZFNrQVlDcEVVeUVIM25CM1lLQVlneFU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUtDVVNJaXBFV0Y3ZFhtOTR5SkwzNXlvbWxpUHFQOWlVaXJZbTZsWUMyaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNUFobCtUWkpFOEdtUmhaNzFYYVY2UG1oaHBHMlZ4UE1Ob1YyK1JCM25paz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhBbzRaUE5ZZ2V5ZVJ6UENmcVcyRys0S2VuNUVrRnNxOWtmU0MwaVJlK2ZzOGpTQUZ6Vm9kRnRLRThlZDVLRE1wa3dLMjZRQnhBdzRINUVTV2FTaGdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzAsImFkdlNlY3JldEtleSI6IjFjemRBbURZRGp1NU5sRzd1YjFNaEUvdlkwY2tDWW9kSTlNemczUkRwakU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjo2MSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjYxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InFGZFRTbnBCUnZ1bDJZLWJIOEw5SmciLCJwaG9uZUlkIjoiMDQzMjNkNDAtMjgxZS00MzcwLWE2NmItMTEyN2NlMDZiYTUxIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkN3ZTJ1MzdJS0V1Mk1FUHZjN3Q2NVF1U2F3WT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtSC96K1MyM3RsVFFTNTFzdzgzelBybjVoc0U9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSkg0SkJOVDQiLCJtZSI6eyJpZCI6IjIzNDkwMzU2NTk1NDI6NUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJCzLTMjMyJzYvMg82EzJPMi82SzZHMkM2TzKHNnMyqzKXMnm/Mtc2bzJvMp82OdMy2zL3MkMyDzJvNhM2bzIfMjMyMzJDNmiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTjdndlBjR0VPU284TGNHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiV0ZlZlpXWG5PNmlEMTNSOU55cnNaN1V0M3ZrNWFMQnlNc1FhTmhNWGtIbz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVGFaRUVFc0hUSi9WcjRDaWRrdlZVcjRMUzBJYnVNb3hFMm4vckdXQ3U3Vno4Q0Fqbk1lT3I3R0lvYzdDd2UrV243RHBmYWNSazY5a3ZwTUlyRXBYQ1E9PSIsImRldmljZVNpZ25hdHVyZSI6IkRVN01Pc0tkYXpvQlJ1REY3YUtaQ1EwcTFnTEt0bG43ODhNeXNUSEo2VCtJQUNMVUxaNHhTMEhNajJNZXRaakFCY2NueUtoWWNhY3F3WXRxcnAwTWpRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTAzNTY1OTU0Mjo1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZoWG4yVmw1enVvZzlkMGZUY3E3R2UxTGQ3NU9XaXdjakxFR2pZVEY1QjYifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mjc3OTYzMzcsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQXpzIn0=" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
