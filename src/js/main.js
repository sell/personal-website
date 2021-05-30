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

const loader = document.querySelector('.loader');
const main = document.querySelector('.main');

const preLoader = () => {
    localStorage.setItem('loader', 'true')
    setTimeout(() => {
        loader.classList.opacity = 0;
        loader.style.display = 'none';

        main.style.display = 'block';
        setTimeout(() => main.style.opacity = 1, 50)
    }, 4000)
}

const loaderDisabled = localStorage.getItem('loader');

if (loaderDisabled !== 'true') {
    preLoader();
} else {
    loader.classList.opacity = 0;
    loader.style.display = 'none';
    main.style.display = 'block';
    main.style.opacity = '1'
}
