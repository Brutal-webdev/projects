// Storage for messages
const message1 = [];
const message2 = [];
const message3 = [];

// random number generator
const randomNumber = (arr) => {
    return Math.floor(Math.random() * arr.length);
}

// assign variables to random message created
let randomMsg1 = message1[randomNumber(message1)];
let randomMsg2 = message2[randomNumber(message2)];
let randomMsg3 = message3[randomNumber(message3)];

// Create the random message
let randomMsg = `Hey there ${randomMsg1} \n Your random quote today is: ${randomMsg2} \n Keep on being ${randomMsg3}`

// Output to console
const messageOutput = () => {
    return console.log(randomMsg);
}

// log console to tell user to type the function into the console
console.log('Hey there type messageOutput() into the console to get your random message today!');