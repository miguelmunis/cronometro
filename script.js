let timer;
let countdownTime = 0; // Tempo inicial padrão em segundos
let isPaused = false;


function startCountdown() {
  const inputTime = document.getElementById('inputTime').value;
  if (inputTime !== '') {
    countdownTime = parseInt(inputTime, 10);
    updateCountdown();
    if (!timer) {
      timer = setInterval(updateCountdown, 1000);
    }
  } else {
    alert('Por favor, insira um tempo válido em segundos.');
  }
}

function pauseCountdown() {
  if(isPaused = !isPaused){
    let paused = document.querySelector('#pausar');
    paused.style.backgroundColor = "#3554C2";
  } else{
    let paused = document.querySelector('#pausar');
    paused.style.backgroundColor = "#353535";
  }
}


function resetCountdown() {
  clearInterval(timer);
  timer = null;
  isPaused = false;
  countdownTime = 0;
  document.getElementById('countdown').innerText = '00:00:00';
}

function updateCountdown() {
  if (!isPaused) {
    const hours = Math.floor(countdownTime / 3600);
    const minutes = Math.floor((countdownTime % 3600) / 60);
    const seconds = countdownTime % 60;

    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    document.getElementById('countdown').innerText = formattedTime;


    if (countdownTime <= 0) {
      clearInterval(timer);
      timer = null;
    } else {
      countdownTime--;

    }
  }
}

// Update Countdown when the page loads
updateCountdown();
