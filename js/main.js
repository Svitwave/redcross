document.addEventListener("DOMContentLoaded", () => {
  const copyBtn = document.querySelector(".donation-btn");
  if (!copyBtn) return;

  const iban = copyBtn.dataset.iban || "UA12 1234 5678 9012 3456 7890 1234";

  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(iban);
      showToast("IBAN скопійовано ✅");

      // тимчасово міняємо кнопку
      const oldText = copyBtn.textContent;
      copyBtn.textContent = "✅ Скопійовано";
      copyBtn.disabled = true;
      setTimeout(() => {
        copyBtn.textContent = oldText;
        copyBtn.disabled = false;
      }, 2000);
    } catch (err) {
      console.error("Помилка копіювання:", err);
      showToast("Не вдалося скопіювати ❌", true);
    }
  });

  function showToast(message, isError = false) {
    const toast = document.createElement("div");
    toast.className = "copy-toast" + (isError ? " error" : "");
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add("visible"), 50);
    setTimeout(() => {
      toast.classList.remove("visible");
      setTimeout(() => toast.remove(), 300);
    }, 2000);
  }
});
