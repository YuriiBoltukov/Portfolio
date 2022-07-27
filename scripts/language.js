const arrayKeys = ['skills', 'portfolio', 'video', 'price', 'contacts', 'hero-title', 'hero-text', 'hire', 'skill-title-1',
    'skill-text-1', 'skill-title-2', 'skill-text-2', 'skill-title-3', 'skill-text-3', 'skill-title-4', 'skill-text-4',
    'winter', 'spring', 'summer', 'autumn', 'price-description-1-span-1', 'price-description-1-span-2', 'price-description-1-span-3',
    'price-description-1-span-4', 'price-description-1-span-5', 'price-description-2-span-1', 'price-description-2-span-2',
    'price-description-2-span-3', 'price-description-2-span-4', 'price-description-2-span-5', 'price-description-3-span-1',
    'price-description-3-span-2', 'price-description-3-span-3', 'price-description-3-span-4', 'price-description-3-span-5',
    'contact-me', 'send-message', 'price-order-1', 'price-order-2', 'price-order-3','video-title', 'price-title', 'portfolio-title',
    'skill-section-title', 'skills-burger', 'portfolio-burger', 'video-burger', 'price-burger', 'contacts-burger',
];
const languageBtns = document.querySelectorAll('.language-item');

/**
 * Init Language
 * @param language: string
 */
function initLanguage(language) {
    /**
     * Initialisation default values
     */
    changeClasses(
        languageBtns,
        Array.from(languageBtns).find(btn => btn.value === language),
        'language-item--active');
    translateTeamplate(language);
    /**
     * Listening click for translate template
     */
    languageBtns.forEach(btn => btn.addEventListener('click', ()=>{
        changeClasses(languageBtns, btn, 'language-item--active');
        translateTeamplate(btn.value)
    }));
}

/**
 * Translate language in template
 * @param language: string
 */
function translateTeamplate(language) {
    arrayKeys.forEach(key => {
        document.querySelector(`#${key}`).innerHTML = dictionary[language][key];
    })
}
