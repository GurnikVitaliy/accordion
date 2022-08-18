const accord = document.querySelectorAll('.accordion');


   accord.forEach(function(item) {
    item.addEventListener('click',function() {
        if(item.classList.contains('active')) {
            item.classList.remove('active');
        }
        else {
            accord.forEach(function(el) {
                el.classList.remove('active');
            })
            item.classList.add('active');
        }
    })
   })