let timer; // Timer variable
let isRunning = false; // Flag to track if stopwatch is running
let lapCount = 1; // Counter for lap times

// Function to start or stop the stopwatch
function startStop() {
    if (isRunning) {
        clearInterval(timer); // Stop the timer
        document.getElementById('startStopBtn').textContent = 'Start'; // Change button text to Start
    } else {
        timer = setInterval(updateDisplay, 10); // Start the timer
        document.getElementById('startStopBtn').textContent = 'Stop'; // Change button text to Stop
    }
    isRunning = !isRunning; // Toggle the running state
}

// Function to reset the stopwatch or record a lap time
function lapReset() {
    if (isRunning) {
        // Record lap time
        const time = document.getElementById('display').textContent;
        const lapList = document.getElementById('laps');
        const lapItem = document.createElement('li');
        lapItem.textContent = `Lap ${lapCount}: ${time}`;
        lapList.appendChild(lapItem);
        lapCount++;
    } else {
        // Reset the stopwatch
        clearInterval(timer);
        document.getElementById('startStopBtn').textContent = 'Start';
        document.getElementById('display').textContent = '00:00:00';
        isRunning = false;
        lapCount = 1;
        document.getElementById('laps').innerHTML = ''; // Clear lap times
    }
}

// Function to reset the stopwatch
function resetStopwatch() {
    clearInterval(timer);
    document.getElementById('startStopBtn').textContent = 'Start';
    document.getElementById('display').textContent = '00:00:00';
    isRunning = false;
    lapCount = 1;
    document.getElementById('laps').innerHTML = ''; // Clear lap times
}

// Function to update the display with elapsed time
function updateDisplay() {
    const display = document.getElementById('display');
    const timeParts = display.textContent.split(':');
    let hours = parseInt(timeParts[0]);
    let minutes = parseInt(timeParts[1]);
    let seconds = parseInt(timeParts[2]);

    // Increment time by 1/100th of a second
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }

    // Format and display time
    display.textContent = 
        (hours < 10 ? '0' + hours : hours) + ':' +
        (minutes < 10 ? '0' + minutes : minutes) + ':' +
        (seconds < 10 ? '0' + seconds : seconds);
}
