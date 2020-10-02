import '../images/DocfdmFjsM.png';
import '../images/L3ReU9oqgR.gif';

const viewMore = document.querySelectorAll('.info')
let state = 'none';

viewMore.forEach(i => i.addEventListener('click', (e) => {
    e.target.parentNode.querySelector('.infoDescription').classList.toggle('opacity-1');

    if(state === 'none') {
        e.target.parentNode.querySelector('.drop').innerHTML = ' &#9650'
        state = 'initial';
    } else {
        e.target.parentNode.querySelector('.drop').innerHTML = ' &#9660'
        state = 'none'
    }
}))

// let state = 'none'
// text.style.display = state;
//
//
// button.addEventListener('click', () => {
//     if(state==='none') state = 'initial';
//     else state = 'none'
//     text.style.display = state;
// })