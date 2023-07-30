document.addEventListener('DOMContentLoaded', function () {
    const logInButton = document.getElementById('login');
    const signUpButton = document.getElementById('signup');
    const profileSvg = document.getElementById('profileSvg');
    const languageActiveButton = document.getElementById('languageActiveButton');
    const languageInActiveButtons = document.getElementById("languageInactiveButtons");
    const languageDropdownMenu = document.getElementById('languageDropdownMenu');
    const languageButtons = document.getElementsByClassName('languageButton');
    const hoverColor = "#f83838";
    let activeLanguage = languageButtons[0].getElementsByTagName('span')[0].innerText;
    let languages = {
        'english': 'English',
        'russian': 'Русский',
        'uzbek': "O'zbek",
    }


    languageInActiveButtons.children.forEach(button => {
        button.addEventListener('click', () => {
                    language = button.getElementsByTagName('span')[0].innerText;
                    return language
                });
    });
 

    // });
    console.log(languageInActiveButtons.children);
    languageActiveButton.innerHTML = `<span style="margin-right: 5px">${languages[0]}</span>
              <svg
                style="margin-top: 5px"
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z"
                />
              </svg>
`


















    const Hover = (target, color) => {
        target.style.fill = color;
    }
    logInButton.addEventListener('mouseover', function (event) {
        Hover(profileSvg, hoverColor)
    });
    logInButton.addEventListener('mouseout', function (event) {
        Hover(profileSvg, "")
    })
    signUpButton.addEventListener('mouseover', function (event) {
        Hover(profileSvg, hoverColor)
    });

    signUpButton.addEventListener('mouseout', function (event) {
        Hover(profileSvg, "")
    });


})