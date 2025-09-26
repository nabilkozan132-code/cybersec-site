document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      formMessage.textContent = "✅ تم إرسال رسالتك بنجاح!";
      form.reset();
    });
  }
});