// Wait for the DOM to finish loading before running the game (evento1)
// Get the button elements and add event listeners to them (evento2)

// add o eventListener no °main document object°: document.addEventListener
// ele vai ouvir o DOM content carregar: "DOMContentLoaded"
// qd a page carregar e o conteudo DOM aparecer, o cód. desse block code vai exwcutar
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button"); //button aqui é a tag q estamos procurando nessa execucao

    for (let button of buttons){
        button.addEventListener("click", function() {
            if(this.getAttribute("data-type") === "submit") {  //Inside of the code block 'this' refers to the button that was just clicked. 
                checkAnswer();                                   // If we click the addition button then 'this' is referring to that specific button.
            } else {                                            // If we click the submit button  then 'this' is referring to that specific button.
                let gameType = this.getAttribute("data-type");  // If it is equal to submit then we're going to display  an alert to tell the user, "you clicked submit".      
                runGame(gameType);                                           // Notice that we're using a template literal here: back quotes in the alert rather than apostrophes or double quotes. And then we're using the dollar sign and curly braces to refer to the game type. So what this will just do is tell the  user what button has been clicked.)
            }
        })
    }                              

    runGame("addition"); 

});

/** this is a docstring:
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType) {  
    
    // Creates 2 random numbers between 1 and 25
    let num1 = Math.floor (Math.random() * 25) +1;
    let num2 = Math.floor (Math.random() * 25) +1;

    if (gameType === "addition") { //if the game type is equal to addition then we want to display our addition question
        displayAdditionQuestion(num1, num2);
    } else if (gameType === "multiply") {
        displayMultiplyQuestion(num1, num2);
    } else if (gameType === "subtract") {
        displaySubtractQuestion(num1, num2)
    }        
        else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
} 

/**
 * Checks the answer against the first element in 
 * the returned calculateCorrectAnswer array
 */
function checkAnswer() {

    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert("Hey! You got it right! :D");
        incrementScore();
    } else {
        alert(`Awww.... you answered ${userAnswer}. The correct answer was ${calculatedAnswer [0]}!`);
        incrementWrongAnswer();
    }

    runGame(calculatedAnswer[1]);

}

/**
 * Gets the operands  (the numbers) and the operator (plus, minus, etc)
 * directly from the DOM, and returns the correct answers.
 */
function calculateCorrectAnswer() {

    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else if (operator === "x") {
        return [operand1 * operand2, "multiply"];
    } else if (operator === "-") {
        return [operand1 - operand2, "subtract"];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }

}

/**
 * Gets the currenty score from the DOM and increments it by 1
 */
function incrementScore() {

    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}

/**
 * Gets the tally of incorrectanswers from the DOM and increments it by 1
 */
function incrementWrongAnswer () {

    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
}

function displayAdditionQuestion(operand1, operand2) {

    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
    
}

function displaySubtractQuestion (operand1, operand2) {

    document.getElementById('operand1').textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById('operand2').textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById('operator').textContent = "-";
} 

function displayMultiplyQuestion (operand1, operand2) {

    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "x";
}