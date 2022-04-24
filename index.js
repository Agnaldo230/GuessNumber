const form = document.getElementById('form');
form.addEventListener('submit', handlesubmit);

let status = document.getElementById('status');
let attempt = document.getElementById('attempt');
let result = document.getElementById('result');

const Guess = {
    max: 10,
    attemptsNunber:0,
    numberDrawn: function randonValue(){
        return Math.round(Math.random() * this.max);
    }
};

let numberDrawn = Guess.numberDrawn();

function UpdatAttempt(attempt, value){
    attempt.innerHTML = 'Tentativas: ' + value
};

function handlesubmit (e){
    e.preventDefault();

    let kick = document.getElementById('kick').value;

    if (!kick) {
        alert('Digite algum valor! ')
        return;
    };

    UpdatAttempt(attempt, ++Guess.attemptsNunber);

    if(numberDrawn == kick) {
        playAgain();
        status.innerHTML = 'Parbés você acertou! ';
        result.style.transition = '0.4s';
        result.style.backgroundColor = '#37e978';
        result.style.color = '#fff';
        status.style.color = '#fff';
        clear();
    }else if(numberDrawn > kick) {
        status.innerHTML = 'O número é maior!';
        status.style.color = '#de4251';
        clear();
    }else if(numberDrawn < kick){
        status.innerHTML = 'O número é menor!';
        status.style.color = '#de4251';
        clear();
    }
};

function playAgain(){
    document.getElementById('btnRestat').style.display = 'FLEX';
};

function restart() {
    document.location.reload(true);
};

function clear() {
    document.getElementById('kick').value = '';
};