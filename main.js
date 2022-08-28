const block = document.querySelectorAll('.block');

for(let blocks of block) {
    blocks.addEventListener('click', function() {
        this.classList.toggle('actv');
    })
}