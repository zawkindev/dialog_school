document.addEventListener("DOMContentLoaded", () => {
  const siteEmail = "zawkindev@gmail.com";

  const languageActiveButton = document.getElementById("languageActiveButton");
  const allDivs = document.querySelectorAll("div");
  const form = document.getElementById("contact");
  const languageInActiveButtons = document.getElementById(
    "languageInactiveButtons",
  );
  const languageButtons = document.getElementsByClassName(
    "inActiveLanguageButton",
  );
  const menuIcon = document.getElementsByClassName("menu-icon")[0];
  const mNavbar = document.querySelector("#m-navbar");
  const menuIconSvg = document.getElementsByClassName("menu-icon-svg")[0];
  const mNavbarOptions = document.getElementsByClassName("m-navbar-option");

  let languages = ["English", "Русский", "O'zbek"];
  let currentLanguage = 2;

  let languageDropdown = false;          // the "opened" value of language dropdown menu
  let menuIconOpened = false;            // the same value of menu icon [navbar for mobile phone, tablet screens]

  const dictionary = {                               // contains all translations of website
    language: ["English", "Русский", "O'zbek"],
    tashent: ["Tashkent", "Ташкент", "Toshkent"],
    home: ["home", "Главный", "Asosiy"],
    services: ["services", "Услуги", "Xizmatlar"],
    about: ["about us", "О нас", "Biz haqimizda"],
    gallery: ["gallery", "Галерея", "Galereya"],
    videos: ["videos", "Видео", "videolar"],
    contact: ["contact us", "Контакт", "Bog'lanish"],
    audiology: ["audiology", "Аудиология", "audiologiya"],
    group_therapy: ["group therapy", "Групповая терапия", "Jamoaviy terapiya"],
    individual_classes: [
      "individual classes",
      "Индивидуальные занятия",
      "Individual darslar",
    ],
    diagnostic_evaluations: [
      "diagnostic evaluations",
      "Диагностические оценки",
      "Diagnostik baholash",
    ],

    audiology_info: [
      "Our audiology services offer comprehensive diagnostic testing and personalized treatment options to help individuals regain their quality of life and improve their communication abilities.",
      "Наши аудиологические услуги предлагают комплексное диагностическое тестирование и индивидуальные варианты лечения, чтобы помочь людям восстановить качество жизни и улучшить свои коммуникативные способности.",
      "Bizning audiologiya xizmatlarimiz odamlarga hayot sifatini tiklashga va muloqot qobiliyatlarini yaxshilashga yordam berish uchun keng qamrovli diagnostika testlari va shaxsiylashtirilgan davolash usullarini taklif etadi.",
    ],
    group_therapy_info: [
      "Our expert therapists create a safe and inclusive space for individuals to grow, heal, and navigate their personal journeys towards lasting positive change.",
      "Наши опытные терапевты создают безопасное и инклюзивное пространство, в котором люди могут расти, исцеляться и вести свой личный путь к устойчивым позитивным изменениям.",
      "Mutaxassis terapetlarimiz bolalarning o'sishi, sog'ayishi va doimiy ijobiy o'zgarishlar sari shaxsiy sayohatlarida harakatlanishi uchun xavfsiz va inklyuziv makon yaratadi.",
    ],
    individual_classes_info: [
      "Through a collaborative therapeutic relationship, clients can gain self-awareness, develop healthy coping mechanisms, and experience long-lasting positive change.",
      "Благодаря совместным терапевтическим отношениям клиенты могут обрести самосознание, развить здоровые механизмы преодоления трудностей и испытать долгосрочные позитивные изменения.",
      "Hamkorlikdagi terapetik munosabatlar orqali mijozlar o'z-o'zini anglashlari, sog'lom kurashish mexanizmlarini rivojlantirishlari va uzoq davom etadigan ijobiy o'zgarishlarni boshdan kechirishlari mumkin.",
    ],
    diagnostic_evaluations_info: [
      "Our team of experienced clinicians utilizes a combination of standardized tests, interviews, and clinical observations to gather information and provide accurate diagnoses.",
      "Наша команда опытных врачей использует комбинацию стандартизированных тестов, интервью и клинических наблюдений для сбора информации и постановки точного диагноза.",
      "Bizning tajribali klinisyenlar jamoasi ma'lumot to'plash va aniq tashxis qo'yish uchun standartlashtirilgan testlar, intervyular va klinik kuzatuvlar kombinatsiyasidan foydalanadi.",
    ],
    about_info: [
      "We pride ourselves in providing exceptional services for all rehabilitation needs. By merging innovative service models and technology, we, Medi Physiocare, situated at Kohalli, Aigali, Karnataka, provide special speech tools and expert services for total child development, academic performance, professional speaking and mental health services. Connect with us to see how we can serve you and your loved ones.",
      "Мы гордимся тем, что предоставляем исключительные услуги для всех потребностей в реабилитации. Объединяя инновационные модели обслуживания и технологии, мы, Medi Physiocare, расположенная в Кохалли, Айгали, Карнатака, предоставляем специальные речевые инструменты и экспертные услуги для общего развития ребенка, успеваемости, профессиональной речи и услуг в области психического здоровья. Свяжитесь с нами, чтобы узнать, как мы можем служить вам и вашим близким.",
      "Biz barcha reabilitatsiya ehtiyojlari uchun ajoyib xizmatlarni taqdim etishdan faxrlanamiz. Innovatsion xizmat modellari va texnologiyalarini birlashtirib, biz, Kohalli, Aigali, Karnatakada joylashgan Medi Physiocare, bolaning umumiy rivojlanishi, akademik ko'rsatkichlari, professional nutqi va ruhiy salomatlik xizmatlari uchun maxsus nutq vositalari va ekspert xizmatlarini taqdim etamiz. Sizga va yaqinlaringizga qanday xizmat qilishimizni bilish uchun biz bilan bog'laning.",
    ],
    full_name: ["Full Name", "Имя Отчество", "Ism Familiya"],
    mobile_number: [
      "Mobile Number",
      "Номер мобильного телефона",
      "Telefon Raqam",
    ],
    email_id: ["Email", "Электронная почта", "Email"],
    message_text: ["Message", "Текст", "Matn"],
    submit: ["submit", "Отправить", "Yuborish"],
  };

  function setCurrentLanguage(language) {            //sets the default language's ID
    switch (language) {
      case "English":
        currentLanguage = 0;
        break;
      case "Русский":
        currentLanguage = 1;
        break;
      case "O'zbek":
        currentLanguage = 2;
        break;
    }
    console.log("changed");
  }

  for (let index = 0; index < languageButtons.length; index++) {        // adds event listeners for language dropdown buttons (options)
    const button = languageButtons[index];

    button.addEventListener("click", function () {
      let clickedLanguage = button.innerText;
      setCurrentLanguage(clickedLanguage);
      let activeLanguage = languages[currentLanguage];
      languageActiveButton.innerHTML = activeLanguage;
      translateTexts();
      languageDropdown = false;
      languageInActiveButtons.style.display = "none";
    });
  }
  languageActiveButton.addEventListener("click", function () {
    languageDropdown = !languageDropdown;
    languageInActiveButtons.style.display = languageDropdown ? "flex" : "none";
  });

  function forTranslate(elements, value) { // function to make translating a bit more `automatic` ( • ᴗ - ) ✧
    for (let index = 0; index < elements.length; index++) {
      elements[index].innerHTML = value;
    }
  }

  function translateTexts() {      // translates the whole page. Magic!
    document.getElementById("tashkent-text").innerHTML =
      dictionary.tashent[currentLanguage];

    forTranslate(
      document.getElementsByClassName("home-text"),
      dictionary.home[currentLanguage],
    );
    forTranslate(
      document.getElementsByClassName("services-text"),
      dictionary.services[currentLanguage],
    );
    forTranslate(
      document.getElementsByClassName("about-text"),
      dictionary.about[currentLanguage],
    );
    forTranslate(
      document.getElementsByClassName("gallery-text"),
      dictionary.gallery[currentLanguage],
    );
    forTranslate(
      document.getElementsByClassName("videos-text"),
      dictionary.videos[currentLanguage],
    );
    forTranslate(
      document.getElementsByClassName("contact-text"),
      dictionary.contact[currentLanguage],
    );
    forTranslate(
      document.getElementsByClassName("group_therapy"),
      dictionary.group_therapy[currentLanguage],
    );
    forTranslate(
      document.getElementsByClassName("group_therapy_info"),
      dictionary.group_therapy_info[currentLanguage],
    );
    forTranslate(
      document.getElementsByClassName("individual_classes"),
      dictionary.individual_classes[currentLanguage],
    );
    forTranslate(
      document.getElementsByClassName("individual_classes_info"),
      dictionary.individual_classes_info[currentLanguage],
    );
    forTranslate(
      document.getElementsByClassName("diagnostic_evaluations"),
      dictionary.diagnostic_evaluations[currentLanguage],
    );
    forTranslate(
      document.getElementsByClassName("diagnostic_evaluations_info"),
      dictionary.diagnostic_evaluations_info[currentLanguage],
    );

    document.getElementById("audiology-text").innerHTML =   // the function above did not work for those, then I got by id
      dictionary.audiology[currentLanguage];

    document.getElementById("audiology-info").innerHTML =
      dictionary.audiology_info[currentLanguage];

    document.getElementById("about_info").innerHTML =
      dictionary.about_info[currentLanguage];
    document.getElementById("full_name").placeholder =
      dictionary.full_name[currentLanguage];
    document.getElementById("mobile_number").placeholder =
      dictionary.mobile_number[currentLanguage];
    document.getElementById("email_id").placeholder =
      dictionary.email_id[currentLanguage];
    document.getElementById("message_text").placeholder =
      dictionary.message_text[currentLanguage];

    document.getElementById("submit-button").innerHTML =
      dictionary.submit[currentLanguage];
  }

  // allDivs.forEach((els) => {
  //   if (!els.classList.contains("notHidden")) {
  //     els.classList.add("hidden");
  //   }
  // });

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

  function sendEmail(sender, receiver, body) {
    Email.send({
      Host: "smtp.gmail.com",
      To: receiver,
      From: sender,
      Subject: "Email from Dialog School website",
      Body: body,
    }).then(function (message) {
      alert("mail sent successfully");
      console.log(message);
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
      console.log(emailID.value);
      console.log(emailID.value);
      sendEmail(emailID.value, siteEmail, textArea.value);
      alert("This form has been successfully submitted!");

      fullName.value = "";
      mobileNumber.value = "";
      emailID.value = "";
      textArea.value = "";
    }
  });
});
