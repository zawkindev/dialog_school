document.addEventListener("DOMContentLoaded", function () {
  const languageActiveButton = document.getElementById("languageActiveButton");
  const allDivs = document.querySelectorAll("div");
  const home = document.getElementById("home");
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
  let menuIconOpened = false;

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
    moreMenuLoggic = true;
    moreDropdownMenu.style.display = "flex";
  });
  more.addEventListener("click", function () {
    moreMenuLoggic = !moreMenuLoggic;
    moreDropdownMenu.style.display = moreMenuLoggic ? "flex" : "none";
  });
  moreDropdownMenuOptions.addEventListener("mouseout", function () {
    moreMenuLoggic = false;
    moreDropdownMenu.style.display = "none";
  });
  moreDropdownMenuOptions.addEventListener("mouseover", function () {
    moreMenuLoggic = true;
    moreDropdownMenu.style.display = "flex";
  });

  allDivs.forEach((els) => {
    if (!els.classList.contains("notHidden")) {
      els.classList.add("hidden");
    }
  });

  const hiddenElements = document.querySelectorAll(".hidden");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  const menuIcon = document.getElementsByClassName("menu-icon")[0];
  const mNavbar = document.querySelector("#m-navbar");
  const menuIconSvg = document.getElementsByClassName("menu-icon-svg")[0];

  menuIcon.addEventListener("click", () => {
    menuIconOpened = !menuIconOpened;
    if (menuIconOpened) {
      mNavbar.style.display = "flex";
      menuIconSvg.style.stroke = "#eef1f0"
      menuIconSvg.style.backgroundColor = "#6000ff"

    } else {
      mNavbar.style.display = "none";
      menuIconSvg.style.stroke = "#6000ff"
      menuIconSvg.style.backgroundColor = ""
    }
  });
  hiddenElements.forEach((el) => observer.observe(el));
});
