const tabs = document.querySelectorAll('.segment-btn');
const imageList = document.querySelector('.image-list');
const classes = ['btn-fill', 'btn-outline'];
const seasons = ['winter', 'spring', 'summer', 'autumn'];
const path = './assets/img/';

/**
 * Init Portfolio
 * @param index: number
 */
function portfolioInit(index = 3) {
    /**
     * Set default values
     */
    replacedClasses(tabs, Array.from(tabs).find(tab => +tab.value === +index), classes);
    fillImgList(index);
    /**
     * Added listener for click: MouseEvent
     */
    tabs.forEach(tab =>  tab.addEventListener('click', ()=>{
        replacedClasses(tabs, tab, classes);
        fillImgList(tab.value);
    }))
}

/**
 * Creating path for image
 * @param indexOfSeasons: number
 * @param nameImg: string
 * @returns {string}
 */
function createPath(indexOfSeasons, nameImg) {
    return `${path}${seasons[indexOfSeasons]}/${nameImg}.jpg`;
}

/**
 * Create node with image
 * @param tabValue: string
 * @param i: number
 * @returns {string}
 */
function createNodeImg(tabValue, i) {
    return `
        <li class="image-item">
           <img class="image-img" src=${createPath(tabValue, i)} alt="Portfolio's image. ${seasons[tabValue]}" width="450">
        </li>
    `;
}

/**
 * Setting nodes to image list
 * @param value: number
 */
function fillImgList(value) {
    let template = '';
    for(let i = 1; i <= 6; i++) {
        template += createNodeImg(value, i);
    }
    imageList.innerHTML = template;
}