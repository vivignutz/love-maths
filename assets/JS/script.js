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
                alert("You clicked Submit!");                  // If we click the addition button then 'this' is referring to that specific button.
            } else {                                            // If we click the submit button  then 'this' is referring to that specific button.
                let gameType = this.getAttribute("data-type");  // If it is equal to submit then we're going to display  an alert to tell the user, "you clicked submit".      
                alert(`You clicked $(gameType)`);              // Notice that we're using a template literal here: back quotes in the alert rather than apostrophes or double quotes. And then we're using the dollar sign and curly braces to refer to the game type. So what this will just do is tell the  user what button has been clicked.)
            }
        })
    }
})

/** 
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame() {  
    let num1 = Math.floor (Math.random() * 25) +1;
    let num2 = Math.floor (Math.random() * 25) +1;
}

function checkAnswer() {

}

function calculateCorrectAnswer () {

}

function incrementScore() {

}

function incrementWrongAnswer () {

}

function displayAditionQuestion () {
    
}

function displaySubtractQuestion () {

}

function displayMultiplyQuestion () {
    
}