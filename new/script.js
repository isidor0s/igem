
// const menu = document.querySelector('.navigation-menu');
const menuHamBtn = document.querySelector('.menu-toggle-button')

const handleClick = (e) => {
    const toggleMenu = () => menuHamBtn.classList.toggle('open');
    if(!menuHamBtn.classList.contains('open')){
        toggleMenu();
        addOffClick(e, toggleMenu);
    }
}

const addOffClick = (e, cb) => {
    const offClick = (evt) => {
        if(e !== evt) {
            cb()
            document.removeEventListener('click', offClick);
        }
    }
    document.addEventListener('click', offClick);
}

menuHamBtn.addEventListener('click', handleClick);

