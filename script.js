document.addEventListener("DOMContentLoaded", function () {
  const languageActiveButton = document.getElementById("languageActiveButton");
  const languageInActiveButtons = document.getElementById(
    "languageInactiveButtons",
  );
  const languageButtons = document.getElementsByClassName(
    "inActiveLanguageButton",
  );
  const moreDropdownMenuOptions =
    document.getElementsByClassName("moreMenuOptions")[0];
  const more = document.getElementById("more");

  let languages = ["English", "Русский", "O'zbek"];
  let languageDropdown = false;
  let moreMenuLoggic = false;
  for (let index = 0; index < languageButtons.length; index++) {
    const button = languageButtons[index];
    const activeLanguage = languages[0];
    const clickedLanguage = button.innerText;
    button.addEventListener("click", function () {
      const lang = languages.indexOf(clickedLanguage);
      languages[0] = clickedLanguage;
      languages[lang] = activeLanguage;
      languageActiveButton.getElementsByTagName("span")[0].innerHTML =
        clickedLanguage;
      languageDropdown = false;
      languageInActiveButtons.style.display = "none";
    });
  }
  languageActiveButton.addEventListener("click", function () {
    languageDropdown = !languageDropdown;
    languageInActiveButtons.style.display = languageDropdown ? "flex" : "none";
  });

  more.addEventListener("mouseover", function () {
    moreMenuLoggic = true
    moreDropdownMenu.style.display = "flex";
  });
  more.addEventListener("click", function () {
    moreMenuLoggic = !moreMenuLoggic;
    moreDropdownMenu.style.display = moreMenuLoggic ? "flex" : "none";
  });
  moreDropdownMenuOptions.addEventListener("mouseout", function () {
    moreMenuLoggic = false
    moreDropdownMenu.style.display = "none";
  });
  moreDropdownMenuOptions.addEventListener("mouseover", function () {
    moreMenuLoggic = true
    moreDropdownMenu.style.display = "flex";
  });

  console.log(moreDropdownMenu);
  console.log(moreDropdownMenu);
});
