// Function to generate random number

const randomNumberGenerator = (number) => {
    let randomNumber = Math.floor(Math.random() * number);
    return randomNumber;
}

// Fortunes

const fortunes = {
    personalityTrait: 
    [
        'Humble', 'Honorable', 'Loayal', 'Patient', 'Curios', 'Persistent', 'Disciplined'
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
        'It takes courage to grow up and become who you really are.','Your self-worth is determined by you.', 
        'Keep your face always toward the sunshine, and shadows will fall behind you.', 
        'Champions keep playing until they get it right.', 'Believe you can and you are halfway there.',
        'It is during our darkest moments that we must focus to see the light.'
    ]
}

// Storing the message

let messages = [];
for (let message in fortunes) {
    let value = fortunes[message];
    let randomIndex = randomNumberGenerator(value.length);
    messages = push(value[randomIndex]);
}

// Main function

const fortunesMessage = (arr) => {
    let finalMessage = [];
    finalMessage.push(`As predicted your best personality trait is ${arr[0]}`);
    finalMessage.push(`That is great but you shoud work more on your ${arr[1]}`);
    finalMessage.push(`Don't worry though because you will succeed in ${arr[2]}.`);
    finalMessage.push(`Your quote of the day is ${arr[3]}`);

    const messageString = finalMessage.join('\n');
    console.log(messageString);
}

fortunesMessage(messages);





/*As predicted your best personality trait is {}. That is great but you
shoud work more on your {}. Don't worry though because you will succeed in {}.
Your quote of the day is: {} */

