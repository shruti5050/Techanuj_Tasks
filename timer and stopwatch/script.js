// Handle user selection for Timer or Stopwatch
document.getElementById('choose-timer').addEventListener('click', () => {
    document.getElementById('initial-screen').style.display = 'none';
    document.getElementById('timer-section').style.display = 'block';
});

document.getElementById('choose-stopwatch').addEventListener('click', () => {
    document.getElementById('initial-screen').style.display = 'none';
    document.getElementById('stopwatch-section').style.display = 'block';
});

// Timer variables
let timerInterval;
let timerSeconds = 0;

// Stopwatch variables
let stopwatchInterval;
let stopwatchSeconds = 0;
let splits = [];

// Timer functions
function startTimer() {
    if (timerInterval) return;
    timerInterval = setInterval(() => {
        timerSeconds++;
        updateDisplay('timer-display', timerSeconds);
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function resetTimer() {
    stopTimer();
    timerSeconds = 0;
    updateDisplay('timer-display', timerSeconds);
}

// Stopwatch functions
function startStopwatch() {
    if (stopwatchInterval) return;
    stopwatchInterval = setInterval(() => {
        stopwatchSeconds++;
        updateDisplay('stopwatch-display', stopwatchSeconds);
    }, 1000);
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
}

function resetStopwatch() {
    stopStopwatch();
    stopwatchSeconds = 0;
    splits = [];
    updateDisplay('stopwatch-display', stopwatchSeconds);
    updateSplitsDisplay();
}

function splitStopwatch() {
    splits.push(stopwatchSeconds);
    updateSplitsDisplay();
}

// Utility function to update display
function updateDisplay(elementId, seconds) {
    const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    document.getElementById(elementId).textContent = `${hours}:${minutes}:${secs}`;
}

// Utility function to update splits display
function updateSplitsDisplay() {
    const splitsContainer = document.getElementById('splits-container');
    splitsContainer.innerHTML = '';
    splits.forEach((split, index) => {
        const splitElement = document.createElement('p');
        splitElement.textContent = `Split ${index + 1}: ${formatTime(split)}`;
        splitsContainer.appendChild(splitElement);
    });
}

function formatTime(seconds) {
    const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${secs}`;
}

// Event listeners for timer buttons
document.getElementById('start-timer').addEventListener('click', startTimer);
document.getElementById('stop-timer').addEventListener('click', stopTimer);
document.getElementById('reset-timer').addEventListener('click', resetTimer);

// Event listeners for stopwatch buttons
document.getElementById('start-stopwatch').addEventListener('click', startStopwatch);
document.getElementById('stop-stopwatch').addEventListener('click', stopStopwatch);
document.getElementById('reset-stopwatch').addEventListener('click', resetStopwatch);
document.getElementById('split-stopwatch').addEventListener('click', splitStopwatch);
