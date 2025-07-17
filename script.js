document.getElementById('playButton').addEventListener('click', () => {
  document.getElementById('intro').style.display = 'none';
  document.getElementById('mainContent').classList.remove('hidden');
  document.getElementById('bgMusic').play();
});

function revealMessage() {
  document.getElementById('secretMessage').classList.remove('hidden');
}
