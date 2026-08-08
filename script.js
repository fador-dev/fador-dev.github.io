const translations = {
  fr: {
    hero_title: "Développeur Web Freelance",
    hero_text: "Je crée des sites modernes, rapides et sur-mesure pour votre activité",
    hero_btn: "Voir mes projets",
    projects_title: "Mes Projets",
    project_pinterest_desc: "Réseau social de partage d'images avec grille responsive",
    project_shop_desc: "Boutique en ligne avec panier fonctionnel et calcul du total",
    project_restaurant_desc: "Site vitrine bilingue pour restaurant, avec menu et galerie",
    view_project: "Voir le projet",
    contact_title: "Travaillons ensemble",
    contact_text: "Vous avez un projet de site web ? Contactez-moi.",
  },
  en: {
    hero_title: "Freelance Web Developer",
    hero_text: "I build modern, fast, custom websites for your business",
    hero_btn: "View my projects",
    projects_title: "My Projects",
    project_pinterest_desc: "Image-sharing social network with responsive grid",
    project_shop_desc: "Online shop with working cart and total calculation",
    project_restaurant_desc: "Bilingual restaurant showcase site with menu and gallery",
    view_project: "View project",
    contact_title: "Let's work together",
    contact_text: "Have a website project in mind? Get in touch.",
  }
};

function detectLanguage() {
  const saved = localStorage.getItem("lang");
  if (saved) return saved;
  return navigator.language.startsWith("fr") ? "fr" : "en";
}

let currentLang = detectLanguage();

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key];
  });

  document.getElementById("lang-toggle").textContent = lang === "fr" ? "EN" : "FR";
}

document.getElementById("lang-toggle").addEventListener("click", () => {
  applyLanguage(currentLang === "fr" ? "en" : "fr");
});

applyLanguage(currentLang);
  
