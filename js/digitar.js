document.addEventListener("DOMContentLoaded", function() {
    const digitar = document.querySelector('.digitar');
    const texto = digitar.textContent;
    digitar.textContent = '';
    let index = 0;
    for (let letra of texto) {
        const span = document.createElement('span');
        span.textContent = letra;
        span.classList.add(`letra-${index}`);
        span.style.visibility = 'hidden';
        digitar.appendChild(span);        
        index++;
    }
    for(let index = 0; index < texto.length; index++){
        setTimeout(function(){
            const alter = document.querySelector(`.letra-${index}`);
            if(index > texto.length - 3){
                alter.style.animation = "blink 0.7s infinite";
            }
            alter.style.visibility = 'visible';
        },20 * index);
    }

});
