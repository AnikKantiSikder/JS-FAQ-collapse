

const toggleBtns = document.querySelectorAll('.faq-toggle');

toggleBtns.forEach(function(btn){
    btn.addEventListener('click', function() {
        btn.parentNode.classList.toggle('active');
    })
})

