const block = document.querySelectorAll('.block');
      body = document.getElementById('white-fon'),
      btnDark = document.querySelector('.dark'),
      sunyBtn = document.querySelector('.sunny');

for(let blocks of block) {
    blocks.addEventListener('click', function() {
        this.classList.toggle('actv');
    });
}


sunyBtn.addEventListener('click', function() {
    body.classList.add('active');
});

btnDark.addEventListener('click', function() {
    body.classList.remove('active');
});

let date = new Date(),
    time = date.getHours();

    
if(time >= 0 && time <= 6) {
    document.getElementById('time').innerHTML = 'Доброе утро';
} else if(time >= 11 && time <= 16) {
    document.getElementById('time').innerHTML = 'Дорый день';
} else if(time >= 17 && time <= 20) {
    document.getElementById('time').innerHTML = 'Добрый вечер';
} else {
    document.getElementById('time').innerHTML = 'Доброй ночи';
}

let likeBtn = document.getElementById('like');

function counter() { 
let c = document.getElementById('count');
        let count = 0;
        return function f() {
            count++;
            c.innerHTML = count;
        }
}

let res = counter();
likeBtn.addEventListener('click', function() {
    res();
});

function lookTime() {
   let time = document.querySelector('.time')
    let date = new Date();
    let hours = date.getHours();
    let mimuts = date.getMinutes();
    let seconds = date.getSeconds();
    if(seconds < 10) {
        seconds = '0' + seconds; 
    }
    time.innerHTML = hours + ':' + mimuts + ':' + seconds;
}
setInterval(lookTime, 1000);
