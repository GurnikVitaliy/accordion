const accardion = document.querySelectorAll('.accardion__item');

for(let accardions of accardion) {
    accardions.addEventListener('click', function() {
        accardions.classList.toggle('active');
    })
}
