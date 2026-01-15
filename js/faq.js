const questions = document.querySelectorAll(".faq-question");

questions.forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.parentElement;

    // Close all others
    document.querySelectorAll(".faq-item").forEach((faq) => {
      if (faq !== item) {
        faq.classList.remove("active");
      }
    });

    // Toggle current
    item.classList.toggle("active");
  });
});
