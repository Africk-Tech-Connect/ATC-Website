const burger = document.querySelector('#burger');
const menu  = document.querySelector('#menu');

console.log(menu)

burger.addEventListener('click', () => {
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
});

console.log('heerrrer')