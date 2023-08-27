document.addEventListener("DOMContentLoaded", function () {

  const siteEmail = "zawkindev@gmail.com"

  const languageActiveButton = document.getElementById("languageActiveButton");
  const allDivs = document.querySelectorAll("div");
  const submitButton = document.getElementById("submit-button");
  const form = document.getElementById("contact");
  const languageInActiveButtons = document.getElementById(
    "languageInactiveButtons",
  );
  const languageButtons = document.getElementsByClassName(
    "inActiveLanguageButton",
  );
  const moreDropdownMenuOptions =
    document.getElementsByClassName("moreMenuOptions")[0];
  const more = document.getElementById("more");
  const menuIcon = document.getElementsByClassName("menu-icon")[0];
  const mNavbar = document.querySelector("#m-navbar");
  const menuIconSvg = document.getElementsByClassName("menu-icon-svg")[0];
  const mNavbarOptions = document.getElementsByClassName("m-navbar-option");

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

  for (let i = mNavbarOptions.length - 1; i >= 0; i--) {
    mNavbarOptions[i].addEventListener("click", function () {
      menuIconOpened = !menuIconOpened;
      if (menuIconOpened) {
        mNavbar.style.display = "flex";
        menuIconSvg.style.stroke = "#eef1f0";
        menuIconSvg.style.backgroundColor = "#6000ff";
      } else {
        mNavbar.style.display = "none";
        menuIconSvg.style.stroke = "#6000ff";
        menuIconSvg.style.backgroundColor = "";
      }
    });
  }

  menuIcon.addEventListener("click", () => {
    menuIconOpened = !menuIconOpened;
    if (menuIconOpened) {
      mNavbar.style.display = "flex";
      menuIconSvg.style.stroke = "#eef1f0";
      menuIconSvg.style.backgroundColor = "#6000ff";
    } else {
      mNavbar.style.display = "none";
      menuIconSvg.style.stroke = "#6000ff";
      menuIconSvg.style.backgroundColor = "";
    }
  });
  hiddenElements.forEach((el) => observer.observe(el));

  function sendEmail(sender,receiver,body) {
    Email.send({
      Host: "smtp.gmail.com",
      To: receiver,
      From: sender,
      Subject: "Email from Dialog School website",
      Body: body,
    }).then(function (message) {
      alert("mail sent successfully");
      console.log(message)
    });
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let fullName = document.getElementById("full-name");
    let mobileNumber = document.getElementById("mobile-number");
    let emailID = document.getElementById("email-id");
    let textArea = document.getElementById("message-text");

    if (
      mobileNumber.value == "" ||
      emailID.value == "" ||
      textArea.value == ""
    ) {
      alert("Ensure you input a value in both fields!");
    } else {
      console.log(emailID.value)
      console.log(emailID.value)
      sendEmail(emailID.value,siteEmail,textArea.value)
      alert("This form has been successfully submitted!");

      fullName.value = "";
      mobileNumber.value = "";
      emailID.value = "";
      textArea.value = "";
    }
  });
});
