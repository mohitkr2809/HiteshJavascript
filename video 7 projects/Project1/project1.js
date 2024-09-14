const buttons =document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button) {
    console.log(button)
    button.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);
        if(e.targer.id === 'grey') {
            body.style.background = e.target.id;
        }
        if(e.targer.id === 'white') {
            body.style.background = e.target.id;
        }
            if(e.targer.id === 'blue') {
                body.style.background = e.target.id;
            }
                if(e.targer.id === 'yellow') {
                    body.style.background = e.target.id;
                }
    });
});



