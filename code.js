// should get random number from 0 to 3
let randomNumber1 = Math.floor(Math.random() * 3); // for first part of the message
let randomNumber2 = Math.floor(Math.random() * 3); // for second part of the message

// message's components
const animals = [
        'cat', 
        'fox', 
        'horse', 
        'squirrel'];
const messages = [
        'happiness consists of getting enough sleep',
        'better to ask the way than to go astray',
        'the body achieves what te mind believes',
        'it takes as much energy to wish as it does to plan'];
const toKnow = [
        'you\'re enough',
        'it\'s ok to feel down sometimes',
        'you\'ll see some changes soon',
        'you\'re on the right path'];

// store the output in new array
let guardianMessage = [];

//getting the message
if (animals[randomNumber1] === animals[0]) {
    guardianMessage.push(`   ☆   Your today's guardian animal is the ${animals[0]}.   ☆   `);
    guardianMessage.push(`       ✧･ﾟ: *✧･ﾟ:*     🐈     *:･ﾟ✧*:･ﾟ✧   `);
    guardianMessage.push(`   ☆   It's message for you is: "${messages[0]}".    ☆   `);
    guardianMessage.push(`   ☆   Your guardian animal wants you to know that ${toKnow[randomNumber2]}.   ☆   `)
} else if (animals[randomNumber1] === animals[1]) {
    guardianMessage.push(`   ☆   Your today's guardian animal is the ${animals[1]}.    ☆   `);
    guardianMessage.push(`       ✧･ﾟ: *✧･ﾟ:*     🦊    *:･ﾟ✧*:･ﾟ✧   `);
    guardianMessage.push(`   ☆   It's message for you is: "${messages[1]}".    ☆   `);
    guardianMessage.push(`   ☆   Your guardian animal wants you to know that ${toKnow[randomNumber2]}.   ☆   `)
} else if (animals[randomNumber1] === animals[2]) {
    guardianMessage.push(`   ☆   Your today's guardian animal is the ${animals[2]}.    ☆   `);
    guardianMessage.push(`       ✧･ﾟ: *✧･ﾟ:*     🐎     *:･ﾟ✧*:･ﾟ✧   `);
    guardianMessage.push(`   ☆   It's message for you is: "${messages[2]}".    ☆   `);
    guardianMessage.push(`   ☆   Your guardian animal wants you to know that ${toKnow[randomNumber2]}.   ☆   `)
} else if (animals[randomNumber1] === animals[3]) {
    guardianMessage.push(`   ☆   Your today's guardian animal is the ${animals[3]}.    ☆   `);
    guardianMessage.push(`       ✧･ﾟ: *✧･ﾟ:*     🐿     *:･ﾟ✧*:･ﾟ✧   `);
    guardianMessage.push(`   ☆   It's message for you is: "${messages[3]}".    ☆   `);
    guardianMessage.push(`   ☆   Your guardian animal wants you to know that ${toKnow[randomNumber2]}.   ☆   `)
} else {
    return `The guardian animals are asleep`
};

//output message
console.log(`\n       Hello!\n\n${guardianMessage.join('\n')}\n\n       Thank you for visiting!\n\n`);
