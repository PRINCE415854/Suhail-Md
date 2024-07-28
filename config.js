const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923145269482" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923145269482";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_28_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNDksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgODksXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwLFxuICAgICAgICAzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA3MixcbiAgICAgICAgNzcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTU0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTc1LFxuICAgICAgICA3OCxcbiAgICAgICAgNzksXG4gICAgICAgIDY4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNixcbiAgICAgICAgMTgxLFxuICAgICAgICA3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDYwLFxuICAgICAgICAxODEsXG4gICAgICAgIDgyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjA4LFxuICAgICAgICA1NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNixcbiAgICAgICAgNTMsXG4gICAgICAgIDk3LFxuICAgICAgICA1NCxcbiAgICAgICAgODAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDM0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDgzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTE1LFxuICAgICAgICA0MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDksXG4gICAgICAgIDk1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDQ3LFxuICAgICAgICA3NCxcbiAgICAgICAgMjE0LFxuICAgICAgICA4NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTg1LFxuICAgICAgICA4LFxuICAgICAgICA2OSxcbiAgICAgICAgNCxcbiAgICAgICAgMjUxLFxuICAgICAgICA2NixcbiAgICAgICAgMTIsXG4gICAgICAgIDgyLFxuICAgICAgICA5NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDg0LFxuICAgICAgICA1MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDc5LFxuICAgICAgICA3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDM2LFxuICAgICAgICA3MyxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICA4MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjM0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEzNixcbiAgICAgICAgODYsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzksXG4gICAgICAgIDI1LFxuICAgICAgICA4NixcbiAgICAgICAgMjAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjExLFxuICAgICAgICA0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDg3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDkyLFxuICAgICAgICAzNCxcbiAgICAgICAgMjE3LFxuICAgICAgICA5OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA3MixcbiAgICAgICAgICA4NixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEyNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDc3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDkxLFxuICAgICAgICA3MixcbiAgICAgICAgNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODUsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjA1LFxuICAgICAgICA2MSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDk2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE3LFxuICAgICAgICA3MixcbiAgICAgICAgMTM4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTksXG4gICAgICAgIDUwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjYsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxODYsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDksXG4gICAgICAgIDQ0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTM2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJZTDR4M1JGWnVaUk9YSlBJanVweXc4STExN2l3b3N4Q24xaGRzMFB4aEtnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzQxNTI5NzQwNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNjlFODU4RjA5MDkxN0NERkVBMzA1N0YwOTk2MUQ5MEJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyMTU4ODgzXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzNDE1Mjk3NDA0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzRTUzQ0E2MkVDMjgzNjM3QjUyQzcxQUI3QzFDNzU1QVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjIxNTg4ODVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVDNrVnVRSE5TSE9rUkxtWmtIM2MwZ1wiLFxuICBcInBob25lSWRcIjogXCJjM2I3ODY1NS03MGI0LTQ3YzgtOTI1My1jNDQyZDZkYWUyNDZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM5LFxuICAgICAgMTgwLFxuICAgICAgMTA4LFxuICAgICAgNDgsXG4gICAgICAxNTEsXG4gICAgICA2NCxcbiAgICAgIDE3NCxcbiAgICAgIDI1LFxuICAgICAgMTM5LFxuICAgICAgMjQsXG4gICAgICA3NCxcbiAgICAgIDE4OCxcbiAgICAgIDExMSxcbiAgICAgIDIwMCxcbiAgICAgIDI5LFxuICAgICAgNjEsXG4gICAgICA5MCxcbiAgICAgIDcyLFxuICAgICAgNDAsXG4gICAgICAxNjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzMsXG4gICAgICAxNixcbiAgICAgIDI3LFxuICAgICAgMTkyLFxuICAgICAgMTkxLFxuICAgICAgMTA4LFxuICAgICAgNjQsXG4gICAgICA1NixcbiAgICAgIDIzLFxuICAgICAgMTY0LFxuICAgICAgMTMsXG4gICAgICA1NCxcbiAgICAgIDYyLFxuICAgICAgNDgsXG4gICAgICAyMTIsXG4gICAgICAyMjYsXG4gICAgICAyMjQsXG4gICAgICA2NyxcbiAgICAgIDE2MCxcbiAgICAgIDM5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkxQQzM0SjRNXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM0MTUyOTc0MDQ6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI3MjkxOTg3MTY0Nzg3MzoxNEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJQUk9HUkFNTUVSXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUEcvbEpFQkVKMmVtTFVHR0FVZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJsMjhvUXJ2YTRpb0lWK2d1VTF5TFJPOERlcVNTc2ExN05YSGxjbXo5bFVJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjVsZnNRc0xDZlFqb2tVYXljMFBCZXQxL2l6MkdiT0tDR3FPSTZxNi9nYkNFMlBiWkY4UC9iTlpsVWRYTTdVbGpuOUlQTk90Wm5xUUtIajBFNEw1dURBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlUxRXhLbXNHMEtSL2F6MXFDM3ZCRWRGcGQrenBOei9taC9UTldPVzlyVHV0MzRSendxbW5oejFmakhQV29vMG1RSm9KbUMwVWM4UnM0R2VqMHlBWmd3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzQxNTI5NzQwNDoxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDY2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIxNTg4ODAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFeHVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUV4dS5qc29uIjogIntcImtleURhdGFcIjpcInA3OXBaV0xsc0c1c2NwdzRoN2o0eEdiNXA1S2hWUTN5K0pQTjZxNlpOT2s9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzA0NDIyODk3LFwiY3VycmVudEluZGV4XCI6NSxcImRldmljZUluZGV4ZXNcIjpbMCwxLDIsMyw1XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjIxNTg4ODU0OTNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
