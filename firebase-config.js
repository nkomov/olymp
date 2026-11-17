/* Налаштування підключення до Firebase (проєкт olymp-english).
   Ці значення не є секретними: доступ до даних обмежують правила з файлу firestore.rules. */
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyAQTcwFvZwspHCo4V7h30fFSVesRUiI_VY",
  authDomain: "olymp-english.firebaseapp.com",
  projectId: "olymp-english",
  storageBucket: "olymp-english.firebasestorage.app",
  messagingSenderId: "590346291365",
  appId: "1:590346291365:web:3b633e5b0f8afcb05c654c",

  /* Необов'язково, для створення завдань із фото за допомогою ШІ (див. README, розділ «Завдання з фото»). */
  recaptchaSiteKey: "",   // ключ сайту reCAPTCHA v3, якщо ввімкнено захист App Check
  aiModel: ""             // назва моделі Gemini; порожньо — сайт обере сам
};

/* Назва сайту та підпис на екрані входу. Можна змінити будь-коли й перезавантажити файл на GitHub. */
window.SITE_SETTINGS = {
  name: "EnglishGym",
  tagline: "Тренування з англійської: читання, письмо, підготовка до олімпіад"
};
