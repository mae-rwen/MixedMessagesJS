// message's components
const animals = ["cat", "fox", "horse", "squirrel"];
const messages = [
  "happiness consists of getting enough sleep",
  "better to ask the way than to go astray",
  "the body achieves what te mind believes",
  "it takes as much energy to wish as it does to plan",
];
const toKnow = [
  "you're enough",
  "it's ok to feel down sometimes",
  "you'll see some changes soon",
  "you're on the right path",
];

// store the output in new array
let guardianMessage = [];

// should get random number from 0 to 3
let randomAnimal = Math.floor(Math.random() * animals.length); // for first part of the message
let randomToKnow = Math.floor(Math.random() * toKnow.length); // for second part of the message

let message = () => {
  guardianMessage.push(
    `       ･ﾟ: *✧･ﾟ:*   Hello!   ✧･ﾟ: *✧･ﾟ:*       `,
    `   ☆   Your today's guardian animal is the ${animals[randomAnimal]}.`,
    `       ✧･ﾟ: *✧･ﾟ:*    '('.')'    *:･ﾟ✧*:･ﾟ✧   `,
    `   ☆   It's message for you is: "${messages[randomAnimal]}".`,
    `   ☆   Your guardian animal wants you to know that ${toKnow[randomToKnow]}.`,
    `       ✧･ﾟ: *✧･ﾟ:*   Thank you for visiting!   ✧･ﾟ: *✧･ﾟ:*       `
  );
  return guardianMessage;
};

message(guardianMessage);

console.log(guardianMessage);
