
const hora = document.getElementById('hora');
const minuto = document.getElementById('minuto');
const segundo = document.getElementById('segundo');

const time_base_ms = 1;
var cronometro = 0;
var mm = 0;
var ss = 0;
var hh = 0;

hora.innerHTML = '00';
minuto.innerHTML = '00';
segundo.innerHTML = '00';

function start() {
    cronometro = setInterval(() => { timer_counter(); }, time_base_ms);

    // Controles disponiveis
    document.getElementById('start').style.display = 'none';
    document.getElementById('stop').style.display = 'inline-block';
    document.getElementById('reset').style.display = 'inline-block';
    document.getElementById('save').style.display = 'none';
};

function stop() {
    clearInterval(cronometro);
    // Controles disponiveis
    document.getElementById('start').style.display = 'inline-block';
    document.getElementById('start').innerHTML = 'Continuar';
    document.getElementById('stop').style.display = 'none';
    document.getElementById('reset').style.display = 'inline-block';
    document.getElementById('save').style.display = 'inline-block';
};

function reset() {
    clearInterval(cronometro);
    hora.innerHTML = '00';
    minuto.innerHTML = '00';
    segundo.innerHTML = '00';
    hh = 0;
    mm = 0;
    ss = 0;

    // Controles disponiveis
    document.getElementById('start').style.display = 'inline-block';
    document.getElementById('start').innerHTML = 'Começar';
    document.getElementById('stop').style.display = 'none';
    document.getElementById('reset').style.display = 'none';
    document.getElementById('save').style.display = 'none';
};


function timer_counter() {
    hora.innerHTML = hh < 10 ? '0' + hh : hh;
    minuto.innerHTML = mm < 10 ? '0' + mm : mm;
    segundo.innerHTML = ss < 10 ? '0' + ss : ss;

    if (ss < 59) { ss += 1; }
    else if (mm < 59) { ss = 0; mm += 1; }
    else if (hh < 23) { ss = 0; mm = 0; hh += 1; };
};
