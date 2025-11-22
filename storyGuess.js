const story = document.getElementById("story");
const nextChoices = document.getElementById("next-choices");
const restartBtn = document.getElementById("restart");

function makeChoice(direction) {
  if (direction === "left") {
    story.textContent = "You take the left path and find a sleeping dragon 🐉. Do you sneak past or run away?";
    nextChoices.innerHTML = `
      <button onclick="secondChoice('sneak')">😶 Sneak Past</button>
      <button onclick="secondChoice('run')">🏃 Run Away</button>
    `;
  } else if (direction === "right") {
    story.textContent = "You take the right path and find a treasure chest 💰. Do you open it or ignore it?";
    nextChoices.innerHTML = `
      <button onclick="secondChoice('open')">🗝️ Open</button>
      <button onclick="secondChoice('ignore')">🚶 Ignore</button>
    `;
  }

  nextChoices.classList.remove("hidden");
}

function secondChoice(choice) {
  switch (choice) {
    case "sneak":
      story.textContent = "You sneak past the dragon and find a hidden cave full of gems! 💎 YOU WIN!";
      break;
    case "run":
      story.textContent = "The dragon wakes up and chases you away! 🐲 GAME OVER.";
      break;
    case "open":
      story.textContent = "The chest was trapped! 😵 You fall into a pit. GAME OVER.";
      break;
    case "ignore":
      story.textContent = "You walk away safely and find a friendly village ahead. 🏘️ YOU WIN!";
      break;
  }

  nextChoices.classList.add("hidden");
  restartBtn.classList.remove("hidden");
}

function restartGame() {
  story.textContent = "You find yourself at a fork in a magical forest. Do you go left or right?";
  restartBtn.classList.add("hidden");
  nextChoices.classList.add("hidden");
}
