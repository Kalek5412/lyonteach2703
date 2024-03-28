const stars=document.querySelectorAll('.star');
stars.forEach(function(star, diapo9){
    star.addEventListener('click',function(){
        for(let i=0; i<=diapo9; i++){
            stars[i].classList.add('checked');
        }
        for(let i=diapo9+1; i<stars.length; i++){
            stars[i].classList.remove('checked');
        }
    })
})