var outcomeElem = document.getElementById('outcome')

var playerChoice = ["rock", "paper", "scissors"]
var computersChoice = ""


function play(choice) {
    var choices = ['r', 'p', 's']
    var compChoice = choices[Math.floor(Math.random()) * 3]

    if (choice == compChoice) {
        outcomeElem.textContent = 'DRAW'
        return
    }


    if (compChoice == 'r') {
        if (choice == 's') {
            returneElem.textContent = 'COMP WINS'
        } else {
            return outcomeElem.textContent = 'YOU WIN'
        }
    }
}
