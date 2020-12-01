const burger = document.querySelector('#burger');
const menu  = document.querySelector('#menu');
const cancel  = document.querySelector('#cancel');


burger.addEventListener('click', () => {
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
        cancel.classList.remove('hidden')
        burger.classList.add('hidden')
    }
});


cancel.addEventListener('click', () => {
    if(!menu.classList.contains('hidden')){
        menu.classList.add('hidden');
        cancel.classList.add('hidden')
        burger.classList.remove('hidden')
    }
});
console.log('heerrrer')