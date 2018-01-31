var outcomeElem = document.getElementById('outcome')

var playerChoice = ["rock", "paper", "scissors"]
var computersChoice = ""


function play(choice) {
    var choices = ['rock', 'paper', 'scissors']
    var compChoice = choices[Math.floor(Math.random() * 3)]

    if (choice == compChoice) {
        outcomeElem.textContent = 'DRAW'
        return
    }

    if (compChoice == 'rock') {
        if (choice == 'scissors') {
            outcomeElem.textContent = 'COMP WINS'
        } else {
            return outcomeElem.textContent = 'YOU WIN'
        }
    }

    if (compChoice == 'paper') {
        if (choice == 'rock') {
            outcomeElem.textContent = 'COMP WINS'
        } else {
            return outcomeElem.textContent = 'YOU WIN'
        }
    }

    if (compChoice == 'scissors') {
        if (choice == 'paper') {
            outcomeElem.textContent = 'COMP WINS'
        } else {
            return outcomeElem.textContent = 'YOU WIN'
        }
    }
}
