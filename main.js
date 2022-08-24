
const accardion = document.querySelectorAll('.accardion__item');

for(let accardions of accardion) {
    accardions.addEventListener('click',function() {
        if(accardions.classList.contains('active')){
            accardions.classList.remove('active');
        } else {
            accardion.forEach(function(item) {
                item.classList.remove('active');
            })
            accardions.classList.add('active');
        }
    })
}