document.addEventListener("DOMContentLoaded", function () {
  const siteEmail = "zawkindev@gmail.com";

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
  // const moreDropdownMenuOptions =
  // document.getElementsByClassName("moreMenuOptions")[0];
  // const more = document.getElementById("more");
  const menuIcon = document.getElementsByClassName("menu-icon")[0];
  const mNavbar = document.querySelector("#m-navbar");
  const menuIconSvg = document.getElementsByClassName("menu-icon-svg")[0];
  const mNavbarOptions = document.getElementsByClassName("m-navbar-option");

  let languages = ["English", "Русский", "O'zbek"];
  let currentLanguage = 2 

  let languageDropdown = false;
  // let moreMenuLoggic = false;
  let menuIconOpened = false;

  const dictionary = {
    tashent: ["Tashkent", "Ташкент", "Toshkent"],
    home: ["home", "Главный", "Asosiy"],
    services: ["services", "Услуги", "Xizmatlar"],
    about: ["about us", "О нас", "Biz haqimizda"],
    gallery: ["gallery", "Галерея", "Albom"],
    videos: ["videos", "Видео", "video"],
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
    about_text: [
      "We pride ourselves in providing exceptional services for all rehabilitation needs. By merging innovative service models and technology, we, Medi Physiocare, situated at Kohalli, Aigali, Karnataka, provide special speech tools and expert services for total child development, academic performance, professional speaking and mental health services. Connect with us to see how we can serve you and your loved ones.",
      "Мы гордимся тем, что предоставляем исключительные услуги для всех потребностей в реабилитации. Объединяя инновационные модели обслуживания и технологии, мы, Medi Physiocare, расположенная в Кохалли, Айгали, Карнатака, предоставляем специальные речевые инструменты и экспертные услуги для общего развития ребенка, успеваемости, профессиональной речи и услуг в области психического здоровья. Свяжитесь с нами, чтобы узнать, как мы можем служить вам и вашим близким.",
      "Biz barcha reabilitatsiya ehtiyojlari uchun ajoyib xizmatlarni taqdim etishdan faxrlanamiz. Innovatsion xizmat modellari va texnologiyalarini birlashtirib, biz, Kohalli, Aigali, Karnatakada joylashgan Medi Physiocare, bolaning umumiy rivojlanishi, akademik ko'rsatkichlari, professional nutqi va ruhiy salomatlik xizmatlari uchun maxsus nutq vositalari va ekspert xizmatlarini taqdim etamiz. Sizga va yaqinlaringizga qanday xizmat qilishimizni bilish uchun biz bilan bog'laning.",
    ],
    submit: ["submit", "Отправить", "Yuborish"],
  };

  for (let index = 0; index < languageButtons.length; index++) {
    const button = languageButtons[index];
    const clickedLanguage = button.innerText;
    const activeLanguage = languages[currentLanguage];
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

  // more.addEventListener("mouseover", function () {
  //   moreMenuLoggic = true;
  //   moreDropdownMenu.style.display = "flex";
  // });
  // more.addEventListener("click", function () {
  //   moreMenuLoggic = !moreMenuLoggic;
  //   moreDropdownMenu.style.display = moreMenuLoggic ? "flex" : "none";
  // });
  // moreDropdownMenuOptions.addEventListener("mouseout", function () {
  //   moreMenuLoggic = false;
  //   moreDropdownMenu.style.display = "none";
  // });
  // moreDropdownMenuOptions.addEventListener("mouseover", function () {
  //   moreMenuLoggic = true;
  //   moreDropdownMenu.style.display = "flex";
  // });

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
