const arr = [
    'Вёрстка соответствует макету. Ширина экрана 768px +48',
    'Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15',
    'На ширине экрана 768рх и меньше реализовано адаптивное меню +22',
    'при ширине страницы 768рх панель навигации скрывается, появляется бургер-иконка +2',
    'при нажатии на бургер-иконку справа плавно появляется адаптивное меню, бургер-иконка изменяется на крестик +4',
    'высота адаптивного меню занимает всю высоту экрана. При ширине экрана 768-620рх вёрстка меню соответствует макету, когда экран становится уже, меню занимает всю ширину экрана +4',
    'при нажатии на крестик адаптивное меню плавно скрывается уезжая за правую часть экрана, крестик превращается в бургер-иконку +4',
    'бургер-иконка, которая при клике превращается в крестик, создана при помощи css-анимаций без использования изображений 0',
    'ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям +2',
    'при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, крестик превращается в бургер-иконку 0',
    '*********************',
    'Итого: 101',
];

function printEstimate() {
    arr.forEach(el => console.log(el));
}