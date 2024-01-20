//Wait for the DOM to finish loading beofre running the game 
//Get the button elements and event listeners to them

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for(let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswercheckAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }

    runGame("addition");

})
/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType) {
    // Creates two random numbers between 1 and 25
    let num1 =  Math.floor(Math.random() * 25) + 1;
    let num2 =  Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Uknown game type: ${gameType}`);
        throw `Uknown game type: ${gameType} . Aborting!`;
    }
}

/**
 * Check the answer agianst the first element in the returned 
 * calculateCorrectAnswer array
 */
function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculateCorrectAnswer[0];

    if (isCorrect) {
        alert("Hey! you git this right! :D");
    } else {
        alert(`Awwww...you answered ${userAnswer}. The correct anwer was ${calculatedAnswer[0] }`);
    }

    runGame(calculatedAnswer[1]);
}

/**
 * Get operands (the numbers) and operator (-, +, /, *) directly from the DOM, 
 * and returns the correct answer.  
 */
function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if (operator === "+") {
        return [operand1, operand2, "addition"];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }
}

function incrementScore() {
    
}

function incrementWrongAnswer() {
    
}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";
}

function displaySubstractQuestion() {
    
}

function displayMutiplyQuestion() {
    
}