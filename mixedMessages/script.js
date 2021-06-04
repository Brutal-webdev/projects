// Storage for messages
const message1 = ['Stealthy Ninja', 'Strong Warrior', 'Pro Hacker', 'Ninja Coder', 'Ninja Hacker', 'Pro Coder'];
const message2 = ['“The Future Belongs To The Competent. Get Good, Get Better, Be The Best!” – Success Quote By Brian Tracy', ' “For Every Reason It’s Not Possible, There Are Hundreds Of People Who Have Faced The Same Circumstances And Succeeded.” – Jack Canfield',
'“Things Work Out Best For Those Who Make The Best Of How Things Work Out.” – Positive Quote By John Wooden', '“Fake It Until You Make It! Act As If You Had All The Confidence You Require Until It Becomes Your Reality.” – Brian Tracy'];
const message3 = ['trucking!', 'putting your heart in it!', 'staying positive youll make it!', 'looking up you\'ll get there'];

// random number generator
const randomNumber = (arr) => {
    return Math.floor(Math.random() * arr.length);
}

// assign variables to random message created
let randomMsg1 = message1[randomNumber(message1)];
let randomMsg2 = message2[randomNumber(message2)];
let randomMsg3 = message3[randomNumber(message3)];

// Create the random message
let randomMsg = `Hey there ${randomMsg1} \n Your random quote today is: \n ${randomMsg2} \n Keep on ${randomMsg3}`

// Output to console
const messageOutput = () => {
    return console.log(randomMsg);
}

// log console to tell user to type the function into the console
// console.log('Hey there type messageOutput() into the console to get your random message today!');

// call function
messageOutput();
