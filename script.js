document.addEventListener('DOMContentLoaded', function () {

    const languageActiveButton = document.getElementById('languageActiveButton');
    const languageButtons = document.getElementsByClassName('inActiveLanguageButton');
    let languages = ["English", "Русский", "O'zbek"];

    for (let index = 0; index < languageButtons.length; index++) {
        const button = languageButtons[index];
        const activeLanguage = languages[0]
        const clickedLanguage = button.innerText;
        button.addEventListener('click', function () {
            const lang = languages.indexOf(clickedLanguage);
            languages[0] = clickedLanguage;
            languages[lang] = activeLanguage;
            languageActiveButton.getElementsByTagName('span')[0].innerHTML = clickedLanguage;

        });

    }
})