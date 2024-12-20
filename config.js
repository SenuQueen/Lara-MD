const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : true;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "GroQnCyA#Z78YQ8GenR88ws6NYCaqrw8cxdh46vL_ja66uJN_bGg", // Add your session id
MONGODB: process.env.MONGODB || "mongodb+srv://laramd:sadeesha2006@anya.gvsp435.mongodb.net/?retryWrites=true&w=majority&appName=Anya", // Add your mongodb url
};
