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