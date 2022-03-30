// Si window.load SI espera a que cargue index-b.js -> deberíamos ver 'index-b.js'
// Si window.load NO espera a que cargue index-b.js -> deberíamos ver 'index.js'

window.onload = () => {
    console.log('index.js');

    let counter = 0;

    function showInConsoleLog(message) {
        console.log(message);
    }

    function showInWeb(message) {
        let label = document.querySelector('#labelCounter');
        label.textContent = message;
    }

    function showAlert(message) {
        alert(message);
    }

    let buttonCounter = document.querySelector('#buttonCounter');
    buttonCounter.addEventListener('click', (e) => {
        counter++;
        showInConsoleLog(counter);
    });

    buttonCounter.addEventListener('click', () => {
        showInWeb(counter);
    });

    if (confirm('¿Desea mostrar alert?')) {
        buttonCounter.addEventListener('click', () => {
            showAlert(counter);
        });
    }

    // Cronómetro
    let stopWatch;
    let buttonStopWatch = document.querySelector('#buttonStopWatch');
    let stopWatchIsRunning = false;
    let speed = 1;
    buttonStopWatch.addEventListener('click', (e) => {
        if (stopWatchIsRunning == false) {
            stopWatchIsRunning = true;
            buttonStopWatch.innerHTML = "Detener cronómetro";

            // Ejecuta el showInWeb indefinida cantidad de veces cada 1 segundo
            stopWatch = setInterval(() => {
                counter++;
                showInWeb(counter);
            }, 1000 / speed);
        } else {
            stopWatchIsRunning = false;
            buttonStopWatch.innerHTML = "Iniciar cronómetro";
            clearInterval(stopWatch);
        }
    });

    document.querySelector('#buttonResetStopWatch').onclick = function() {
        counter = 0;
        stopWatchIsRunning = false;
        clearInterval(stopWatch);
        buttonStopWatch.innerHTML = "Iniciar cronómetro";
        showInWeb(0);
    };

    let buttonDelayedMessage = document.querySelector('#buttonDelayedMessage');
    buttonDelayedMessage.addEventListener('click', () => {
        let time = Date.now();

        // Retrasa el showInConsoleLog 2 segundos
        setTimeout(() => {
            showInConsoleLog('Mensaje con retraso ' + (Date.now() - time));
        }, 2000);
    });

    function readInputStopWatch(e) {
        if (e.key == 'f') {
            console.log(e.key);
        }
        speed = e.key;
    }

    let inputStopWatch = document.querySelector('#inputStopWatch');
    inputStopWatch.onkeypress = readInputStopWatch;
};
console.log('index.js fuera de onload');