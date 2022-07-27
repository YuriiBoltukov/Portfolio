const arrThemes = ['light', 'dark'];
const btnTheme = document.querySelector('.theme-reverse');

function initTheme(indexTheme) {
    document.body.classList.add(arrThemes[indexTheme]);
    btnTheme.addEventListener('click',()=> {
        const currentIndexTheme = arrThemes.findIndex(theme => {
            return Array.from(document.body.classList).includes(theme)
        });
        document.body.classList.remove(arrThemes[currentIndexTheme]);
        if (currentIndexTheme === 0) {
            document.body.classList.add(arrThemes[1]);
        } else {
            document.body.classList.add(arrThemes[0]);
        }
    })
}