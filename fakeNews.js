const readlineSync = require('readline-sync');
let userNews=readlineSync.question("Enter the news first \n");
let newsSource=(readlineSync.question("What's the source of the news...?\n")).toLowerCase();
if (newsSource==='facebook'||newsSource==='whatsapp'||newsSource==='telegram') {
    console.log(`Don't believe things on Facebook , WhatsApp and Telegram.`);
}
else if(newsSource==='twitter'||newsSource==='website'){
    console.log(`Seems like you can believe on this news.`);
}
else{
    console.log(`Not aware of this source (•_•)`);
}