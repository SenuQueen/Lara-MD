const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'false') {
    return text === fault ? true : true;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Oro3naSI#hGwRaQRgWBVSli3U80Nn5rmL6tjYtdwVdGCmNp6hPh4", // Add your session id
MONGODB: process.env.MONGODB || "mongodb+srv://laramd:sadeesha2006@anya.gvsp435.mongodb.net/?retryWrites=true&w=majority&appName=Anya", // Add your mongodb url
};
