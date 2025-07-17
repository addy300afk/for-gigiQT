document.getElementById('playButton').addEventListener('click', () => {
  document.getElementById('intro').classList.add('hidden');
  document.getElementById('mainContent').classList.remove('hidden');
  document.getElementById('bgMusic').play();
});

// Surprise Message
function revealMessage() {
  document.getElementById("secretMessage").classList.remove("hidden");
}

// Countdown Timer
const targetDate = new Date("December 7, 2031 00:00:00").getTime();
setInterval(() => {
  const now = new Date().getTime();
  const diff = targetDate - now;

  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
  const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));

  document.getElementById("timer").innerText = `${years} years and ${days} days`;
}, 1000);

// Love Counter
let loveCount = 0;
setInterval(() => {
  loveCount++;
  document.getElementById("loveCount").innerText = loveCount;
}, 1000);

// Quiz Logic
function checkAnswer(btn, correctAnswer, actualCorrect) {
  if (btn.innerText === actualCorrect || btn.value === actualCorrect) {
    btn.style.background = "#90ee90";
  } else {
    btn.style.background = "#ffcccb";
  }
}

function saveAnswer(id) {
  const value = document.getElementById(id).value;
  alert("Answer saved: " + value);
}

// Couple Result Reveal
function showResult() {
  document.getElementById("coupleResult").classList.remove("hidden");
}

// Catch the Hearts Game
function startHeartGame() {
  const area = document.getElementById("heartGameArea");
  area.innerHTML = "";
  let caught = 0;
  let total = 10;

  for (let i = 0; i < total; i++) {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.classList.add("heart");
    heart.style.top = Math.random() * 270 + "px";
    heart.style.left = Math.random() * 270 + "px";
    heart.addEventListener("click", () => {
      heart.remove();
      caught++;
      if (caught === total) {
        document.getElementById("heartGameResult").innerText = "You caught all the love! 💖";
      }
    });
    area.appendChild(heart);
  }
}

// Find Love Notes
const loveNotes = [
  "You are my favorite notification 💌",
  "Every love song reminds me of you 🎶",
  "You make my heart do backflips 💞",
  "Forever isn't long enough with you ⏳",
  "You're my person, always 💍"
];

window.onload = () => {
  const notesArea = document.getElementById("loveNotesArea");
  loveNotes.forEach(note => {
    const div = document.createElement("div");
    div.classList.add("note");
    div.innerText = "Tap to reveal 💘";
    div.onclick = () => div.innerText = note;
    notesArea.appendChild(div);
  });
};
