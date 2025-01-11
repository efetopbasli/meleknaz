// "Soruları Göster" butonunu seç
const toggleQuestionsBtn = document.getElementById("toggleQuestionsBtn");
// "Koyu Mod" butonunu seç
const darkModeToggleBtn = document.getElementById("darkModeToggleBtn");
// Soruların bulunduğu ana kapsayıcı
const questionsWrapper = document.getElementById("questionsWrapper");

// Soruları göter/gizle fonksiyonu
toggleQuestionsBtn.addEventListener("click", () => {
  // .hide class'ını toggling ediyoruz
  questionsWrapper.classList.toggle("hide");

  // Buton metnini değiştirelim
  if (questionsWrapper.classList.contains("hide")) {
    toggleQuestionsBtn.textContent = "Soruları Göster";
  } else {
    toggleQuestionsBtn.textContent = "Soruları Gizle";
  }
});

// Koyu mod fonksiyonu
darkModeToggleBtn.addEventListener("click", () => {
  // body tag'ine dark-mode class'ı ekleyip çıkarıyoruz
  document.body.classList.toggle("dark-mode");

  // Buton metnini değiştirelim
  if (document.body.classList.contains("dark-mode")) {
    darkModeToggleBtn.textContent = "Koyu Modu Kapat";
  } else {
    darkModeToggleBtn.textContent = "Koyu Modu Aç";
  }
});
