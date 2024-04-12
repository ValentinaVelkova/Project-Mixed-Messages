// Function to generate random number

const randomNumberGenerator = (number) => {
    let randomNumber = Math.floor(Math.random() * number);
    return randomNumber;
}

// Fortunes

const fortunes = {
    personalityTrait: 
    [
        'Humble', 'Honorable', 'Loyal', 'Patient', 'Curios', 'Persistent', 'Disciplined'
    ],
    needMoreWork: 
    [
        'Creativity', 'Time managment', 'Confidence', 'Honesty', 'Independence', 'Self Love', 'Efficiency'
    ],
    success: 
    [
        'Carrer', 'Personal Development', 'Love Life', 'Relationships', 'Finances', 'Health'
    ],
    quote: 
    [
        ' "It takes courage to grow up and become who you really are!"','"Your self-worth is determined by you!"', 
        '"Keep your face always toward the sunshine, and shadows will fall behind you!"', 
        '"Champions keep playing until they get it right!"', '"Believe you can and you are halfway there!"',
        '"It is during our darkest moments that we must focus to see the light!"'
    ]
}

// Storing the message

let messages = [];
for (let message in fortunes) {
    let value = fortunes[message];
    let randomIndex = randomNumberGenerator(value.length);
    messages.push(value[randomIndex]);
}

// Main function

const fortunesMessage = (arr) => {
    let finalMessage = [];
    finalMessage.push(`As predicted your best personality trait is <b> ${arr[0]} </b> \u{1F60D}`);
    finalMessage.push(`That is great but you should work more on your <b> ${arr[1]} </b> \u{1F613} `);
    finalMessage.push(`Don't worry though, because you will succeed in <b> ${arr[2]} </b> \u{1F60E}`);
    finalMessage.push(`Your quote of the day is <b> ${arr[3]} </b> \u{1F607}`);

    const messageString = finalMessage.join('\n');
    return messageString;
}


// Creating the Find out button

const text = document.getElementById("text");
const list = document.getElementById("list");

const buttonFindOut = document.getElementById("findOut");
const buttonReturn = document.getElementById("return");



const hideElements = () => {
    text.style.display = "none";
    list.style.display = "none";
    buttonFindOut.style.display = "none";
}

const showMessages = document.getElementById("messages");

const getMessages = () => {
    return showMessages.innerHTML = fortunesMessage(messages);
}








