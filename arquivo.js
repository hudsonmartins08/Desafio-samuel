setInterval(function(){
    document.getElementById('slide' + contador) .checked = true
    contador++
    if(contador > 5){
        contador = 1
    }
} ,2000)