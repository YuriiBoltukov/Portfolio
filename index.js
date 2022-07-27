const btnBurger = document.querySelector(".btn__burger");
const closeBurger = document.querySelector('.modal__wrapper');
const backdrop = document.querySelector('.modal__empty');
const navList = document.querySelectorAll('.burger-nav-item');

printEstimate();

btnBurger.addEventListener('click',()=>{
    openModal();
});
[...navList, backdrop, closeBurger].forEach(item => {
    item.addEventListener('click', () => {
        closeModal();
    });
});

portfolioInit(3);

initLanguage('en');

initTheme(0);