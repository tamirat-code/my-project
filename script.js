const game = ["rock", "scissors", "paper"]
let HumanScore = 0
let ComputerScore = 0
let roundsPlayed = 0

function getComputerChoice() {
  return game[Math.floor(Math.random() * 3)]
}

function playRound(HumanChoice, ComputerChoice) {
  HumanChoice = HumanChoice.toLowerCase()
  ComputerChoice = ComputerChoice.toLowerCase()
  const roundDiv = document.createElement('div')

  if (
    (ComputerChoice == "rock" && HumanChoice == "paper") ||
    (ComputerChoice == "paper" && HumanChoice == "scissors") ||
    (ComputerChoice == "scissors" && HumanChoice == "rock")
  ) {
    HumanScore++
    roundDiv.textContent = `You chose ${HumanChoice}. Computer chose ${ComputerChoice}. You win this round.`
  } else if (
    (ComputerChoice == "paper" && HumanChoice == "rock") ||
    (ComputerChoice == "scissors" && HumanChoice == "paper") ||
    (ComputerChoice == "rock" && HumanChoice == "scissors")
  ) {
    ComputerScore++
    roundDiv.textContent = `You chose ${HumanChoice}. Computer chose ${ComputerChoice}. You lose this round.`
  } else {
    roundDiv.textContent = `You chose ${HumanChoice}. Computer chose ${ComputerChoice}. It's a tie.`
  }

  document.getElementById('roundResults').appendChild(roundDiv)
}

function handleChoice(choice) {
  if (roundsPlayed >= 5) return

  const HumanChoice = choice
  const ComputerChoice = getComputerChoice()
  playRound(HumanChoice, ComputerChoice)
  roundsPlayed++

  if (roundsPlayed === 5) {
    const final = document.getElementById('finalResult')
    final.textContent = `Final Scores - Human: ${HumanScore} Computer: ${ComputerScore}`

    if (HumanScore > ComputerScore) final.textContent += ' You win the game!'
    else if (ComputerScore > HumanScore) final.textContent += ' Computer wins the game!'
    else final.textContent += ' The game is a tie.'

    showRestartButton()
  }
}

function showRestartButton() {
  const final = document.getElementById('finalResult')
  const restartBtn = document.createElement('button')
  restartBtn.textContent = "🔄 Play Again"
  restartBtn.classList.add("restart-btn")
  restartBtn.addEventListener('click', resetGame)
  final.appendChild(document.createElement('br'))
  final.appendChild(restartBtn)
}

function resetGame() {
  HumanScore = 0
  ComputerScore = 0
  roundsPlayed = 0
  document.getElementById('roundResults').innerHTML = ""
  document.getElementById('finalResult').innerHTML = ""
}

document.querySelectorAll('.choice').forEach(btn => {
  btn.addEventListener('click', () => handleChoice(btn.dataset.choice))
})
