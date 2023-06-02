import translations from './translations.js';

document.addEventListener('DOMContentLoaded', function () {
  const langToggle = document.getElementById('lang-toggle');
  const themeToggle = document.getElementById('theme-toggle');
  const background1 = document.getElementById('background-1');
  const background2 = document.getElementById('background-2');
  const body = document.body;
  let currentLang = 'fr';

  function updateTranslations() {
    const translatedElements = document.querySelectorAll('[data-translate]');

    translatedElements.forEach((element) => {
      const translationKey = element.getAttribute('data-translate');
      element.textContent = translations[currentLang][translationKey];
    });
  }

  function updateButtonLabel() {
    const lightModeIcon = document.querySelector('.light-mode-icon');
    const darkModeIcon = document.querySelector('.dark-mode-icon');
  
    if (body.classList.contains('dark')) {
      lightModeIcon.style.opacity = '0';
      darkModeIcon.style.opacity = '1';
    } else {
      lightModeIcon.style.opacity = '1';
      darkModeIcon.style.opacity = '0';
    }
  }

  langToggle.addEventListener('click', function () {
    currentLang = currentLang === 'fr' ? 'en' : 'fr';
    updateTranslations();
    langToggle.classList.toggle('fr');
  });  

  themeToggle.addEventListener('click', function () {
    body.classList.toggle('dark');
    updateButtonLabel();
  });

  // Set the initial translations and button label
  updateTranslations();
  updateButtonLabel();

  // Add an event listener for scrolling
  window.addEventListener('scroll', function () {
    if (window.scrollY > window.innerHeight / 2) {
      background1.style.opacity = 0;
      background2.style.opacity = 1;
    } else {
      background1.style.opacity = 1;
      background2.style.opacity = 0;
    }
  });

  // Typewriter effect
  const codeText = `Welcome to my resume!`;

  const typewriterText = document.getElementById('typewriter-text');
  let currentIndex = 0;

  function typeWriter() {
    if (currentIndex < codeText.length) {
      typewriterText.innerHTML += codeText.charAt(currentIndex);
      currentIndex++;
      setTimeout(typeWriter, 200);
    }
  }
  typeWriter();
});
