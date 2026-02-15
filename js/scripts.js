//Home-work18.1
// 1. Початковий час (у секундах)
let totalSeconds = 17; // 01:27

const timerEl = document.getElementById('timer');
const startBtn = document.getElementById('start');

let intervalId = null;

// Форматування часу MM:SS
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// Відобразити стартовий час
timerEl.textContent = formatTime(totalSeconds);

startBtn.addEventListener('click', () => {
  if (intervalId) return; // захист від повторного запуску

  intervalId = setInterval(() => {
    totalSeconds--;
    timerEl.textContent = formatTime(totalSeconds);

    // 3. Коли таймер закінчився — зупинити
    if (totalSeconds <= 0) {
      clearInterval(intervalId);
      intervalId = null;
      timerEl.textContent = "00:00";
    }
  }, 1000);
});

