const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_37_12_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMixcbiAgICAgICAgMzEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQzLFxuICAgICAgICA3NCxcbiAgICAgICAgNDksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNSxcbiAgICAgICAgMyxcbiAgICAgICAgMjA0LFxuICAgICAgICA4NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxODcsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDcsXG4gICAgICAgIDE2MixcbiAgICAgICAgNDQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTY0LFxuICAgICAgICA5MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDgsXG4gICAgICAgIDk5LFxuICAgICAgICAxODIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyLFxuICAgICAgICA3MCxcbiAgICAgICAgNCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTA0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTk3LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTE3LFxuICAgICAgICA5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNyxcbiAgICAgICAgMjE0LFxuICAgICAgICA1NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTk2LFxuICAgICAgICA2MixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjM2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjksXG4gICAgICAgIDk2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMixcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDQzLFxuICAgICAgICAzMixcbiAgICAgICAgMjMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjksXG4gICAgICAgIDMxLFxuICAgICAgICA5MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDEzLFxuICAgICAgICA3MixcbiAgICAgICAgNzMsXG4gICAgICAgIDcxLFxuICAgICAgICAyNyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDk2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDczLFxuICAgICAgICAxNTAsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDYxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTMzLFxuICAgICAgICA0MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMSxcbiAgICAgICAgMjI3LFxuICAgICAgICA2MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMixcbiAgICAgICAgMjksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAzNyxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEyNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMzAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDgxLFxuICAgICAgICA1OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTA0LFxuICAgICAgICA0MixcbiAgICAgICAgMjUyLFxuICAgICAgICA5MyxcbiAgICAgICAgMjAwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTAzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDU2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI4LFxuICAgICAgICA2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTUwLFxuICAgICAgICA0MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOCxcbiAgICAgICAgMTY1LFxuICAgICAgICA2NixcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDc2LFxuICAgICAgICA0OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDY5LFxuICAgICAgICAxMixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3NixcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDksXG4gICAgICAgIDE0M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTM2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlNOVXJQclFxRmJZcUllekVhdGd3UjZYWjFWdm1aYnVBQVI2ZS9zV3FycW89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlZZd2NSbGpEUURXdUxwMkQ1eGNiWmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjUzNGVhNzMtMWMzMC00NDc0LWE2OTMtZTEzOWIwMzJmZTZlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYxLFxuICAgICAgMjMyLFxuICAgICAgNjAsXG4gICAgICAxNDQsXG4gICAgICAxNjQsXG4gICAgICAxMzQsXG4gICAgICAxMDUsXG4gICAgICAzMyxcbiAgICAgIDExNixcbiAgICAgIDIwNCxcbiAgICAgIDIwNyxcbiAgICAgIDQzLFxuICAgICAgODUsXG4gICAgICA5OSxcbiAgICAgIDQ2LFxuICAgICAgNDcsXG4gICAgICAyNTQsXG4gICAgICA2NCxcbiAgICAgIDE4NSxcbiAgICAgIDU0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY1LFxuICAgICAgMjUxLFxuICAgICAgNTAsXG4gICAgICAxOTAsXG4gICAgICA1NSxcbiAgICAgIDc1LFxuICAgICAgODMsXG4gICAgICAxMDEsXG4gICAgICAxNzksXG4gICAgICA4MixcbiAgICAgIDc0LFxuICAgICAgMTgxLFxuICAgICAgMTgsXG4gICAgICA1MyxcbiAgICAgIDEwNixcbiAgICAgIDIyOSxcbiAgICAgIDgxLFxuICAgICAgMTQsXG4gICAgICAxNzksXG4gICAgICA3NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJYUjlCTEI5UlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA2Njc5NTkzNDoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQWxtb25kIENyZWF0aW9ucyBIdWJcIixcbiAgICBcImxpZFwiOiBcIjI0ODI1MzEzNjYxMDM1OjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT3FnM3NVRkVJWEJ6Ym9HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ0OHRnQkJwVUxzOTB2bUl1MGtqUVluUVR0cStEZ0c3QzlkYytNNk5VcmdVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImlzMnpDQzY0ekFUS240aVdFbGZLa1RuQ1ZBdEJWaVZlYWNuTTZsVWx1Tm5NTHJ6Y25lZHJWVlUwRk5uaE1WN1EzWndIVHI2dVNZMlF1U0pRUVZXTEJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk5aOUVHcFVmb1RYeUlaZEJibWNEdi9YVkp4SE8wb3E5TldZM2tQa3VkWkFOV2Zka3NPSFJuOHNPd25pcTh4UzJvSTBRMTM3ZDlRa05hUDE4T09mR2pBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNjY3OTU5MzQ6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzNTE3NDQ5XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
