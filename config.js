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


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+234 912 842 5936";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

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
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_06_06_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDksXG4gICAgICAgIDExLFxuICAgICAgICAxODcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxODQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyLFxuICAgICAgICA2MCxcbiAgICAgICAgNjksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTk1LFxuICAgICAgICA2MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTI4LFxuICAgICAgICA2NCxcbiAgICAgICAgMjksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDgwLFxuICAgICAgICA1LFxuICAgICAgICAxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDU0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDQsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOCxcbiAgICAgICAgNDksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTg2LFxuICAgICAgICA5NyxcbiAgICAgICAgNzMsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDU1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTYxLFxuICAgICAgICA4NixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTA3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgODIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTYzLFxuICAgICAgICAzNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjksXG4gICAgICAgIDE5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDUwLFxuICAgICAgICA0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDk2LFxuICAgICAgICAxNjksXG4gICAgICAgIDcwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDg3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDU5LFxuICAgICAgICAxODIsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDksXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDk5LFxuICAgICAgICA0MyxcbiAgICAgICAgMjEyLFxuICAgICAgICA1MixcbiAgICAgICAgMzMsXG4gICAgICAgIDc2LFxuICAgICAgICA1MSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDMyLFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDkwLFxuICAgICAgICAxODEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjE0LFxuICAgICAgICAzMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAzLFxuICAgICAgICA1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxODcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTk1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDczLFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1LFxuICAgICAgICAzLFxuICAgICAgICAyNixcbiAgICAgICAgMjIwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxODAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDU0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDkzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjA5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDcwLFxuICAgICAgICAxODYsXG4gICAgICAgIDk1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAzNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTc4LFxuICAgICAgICA5NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjM5LFxuICAgICAgICA0MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDQ0LFxuICAgICAgICA5MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwMixcbiAgICAgICAgNTQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4LFxuICAgICAgICAxODYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTUyLFxuICAgICAgICA5MixcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDY4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkluQm9ZdVpKYmdua1ErcE0vWmZ1bVF1UEJncGlxZmhKRzZWUTZNV3Rlcjg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTEyODQyNTkzNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQTVDOTFGREJFNzg3OUEzODkzNkU0MjJEQkMwNDdDREFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE3NTE3MTcxXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkRXZUVLX2JKUllTbW1zLUhkdE5JR0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiZGE2ZjI4NjMtZmUwOS00OTdiLWIxNjktNjJhYzQ4ZmU4NjgwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDgsXG4gICAgICAxNjgsXG4gICAgICA2NixcbiAgICAgIDIxLFxuICAgICAgMTE3LFxuICAgICAgMTU5LFxuICAgICAgMTk0LFxuICAgICAgOTAsXG4gICAgICA1OCxcbiAgICAgIDIxMixcbiAgICAgIDIzMSxcbiAgICAgIDExNyxcbiAgICAgIDk3LFxuICAgICAgNjMsXG4gICAgICA0NixcbiAgICAgIDIzNixcbiAgICAgIDE5NSxcbiAgICAgIDg3LFxuICAgICAgNzIsXG4gICAgICAxMjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM3LFxuICAgICAgMTMzLFxuICAgICAgNTQsXG4gICAgICAxOTcsXG4gICAgICA2MCxcbiAgICAgIDE5OSxcbiAgICAgIDY2LFxuICAgICAgNDgsXG4gICAgICAyMDgsXG4gICAgICAyMzYsXG4gICAgICAyMzksXG4gICAgICAxNzcsXG4gICAgICAxMTksXG4gICAgICAyMzQsXG4gICAgICAyMjYsXG4gICAgICAyMTYsXG4gICAgICAxMzIsXG4gICAgICAxNDcsXG4gICAgICA1MCxcbiAgICAgIDYzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjJWRVJQSFMyXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTI4NDI1OTM2OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI0NTgwNDE2NjEwNDUwOjJAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiTXVtJ3MgQ2hpbGQg6rmA7KeA7Zi4KEtpbSBKaWhvKVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0kvejhwSUNFT24yL0xJR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieThaRzVBS09odzdmaWNua2lsRml2MDZKNkNKUTdENjZXaEdodHU5a1hYQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI4K205UWdFaDNHMDRXZ1YzbGdSNkpsYzV5YjBORVp2K0lvZmhDSm9GQVJDcFlWUjQ1L3cyNDRWd0VOc00vbjkyRjRNdzBxamFaQTA5SHQ3RW5tRjVDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJEVHQ1bWxEc3dVWVQ3aDhGWk1SSEY2NEF5ZGtJUUk1TGRnTzYwcWhZSm9YOEhUN09NVzRGM1RrTk56WW91WE80UmpFeW1FRHdsUFhsOVJySUhJYitoUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTI4NDI1OTM2OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNzUxNzE2NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU81QVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTzVBLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMHUrTm5HVXNZVi9RaXovbXFSVC9nOFU5d2k2eUVwZlV6QXhzYVVJWGVFWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1NzY1MDIxNTksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNzA5NTE4ODg3NVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
