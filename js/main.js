// document.addEventListener("DOMContentLoaded", () => {
//   // Функціональність копіювання IBAN
//   const copyBtn = document.querySelectorAll(".donation-btn");
//   if (copyBtn) {
//     const iban = copyBtn.dataset.iban || "UA103052990000026009010813957";

//     copyBtn.addEventListener("click", async () => {
//       try {
//         await navigator.clipboard.writeText(iban);
//         showToast("IBAN скопійовано ✅");

//         // тимчасово міняємо кнопку
//         const oldText = copyBtn.textContent;
//         copyBtn.textContent = "✅ Скопійовано";
//         copyBtn.disabled = true;
//         setTimeout(() => {
//           copyBtn.textContent = oldText;
//           copyBtn.disabled = false;
//         }, 2000);
//       } catch (err) {
//         console.error("Помилка копіювання:", err);
//         showToast("Не вдалося скопіювати ❌", true);
//       }
//     });
//   }

//   // Функціональність бургер меню
//   const burgerBtn = document.getElementById("burgerMenuBtn");
//   const navBar = document.getElementById("navBar");
//   const navLinks = document.querySelectorAll(".nav-link");

//   if (burgerBtn && navBar) {
//     // Створюємо overlay для затемнення фону
//     const overlay = document.createElement("div");
//     overlay.className = "overlay";
//     document.body.appendChild(overlay);

//     // Функція відкриття/закриття меню
//     function toggleMenu() {
//       burgerBtn.classList.toggle("active");
//       navBar.classList.toggle("active");
//       overlay.classList.toggle("active");
//       document.body.style.overflow = navBar.classList.contains("active")
//         ? "hidden"
//         : "";
//     }

//     // Обробник кліку по бургер кнопці
//     burgerBtn.addEventListener("click", toggleMenu);

//     // Обробник кліку по overlay (закриття меню)
//     overlay.addEventListener("click", () => {
//       if (navBar.classList.contains("active")) {
//         toggleMenu();
//       }
//     });

//     // Закриття меню при кліку на посилання
//     navLinks.forEach((link) => {
//       link.addEventListener("click", () => {
//         if (navBar.classList.contains("active")) {
//           toggleMenu();
//         }
//       });
//     });

//     // Закриття меню при натисканні Escape
//     document.addEventListener("keydown", (e) => {
//       if (e.key === "Escape" && navBar.classList.contains("active")) {
//         toggleMenu();
//       }
//     });

//     // Закриття меню при зміні розміру вікна (якщо стало більше 768px)
//     window.addEventListener("resize", () => {
//       if (window.innerWidth > 768 && navBar.classList.contains("active")) {
//         toggleMenu();
//       }
//     });

//     // Перевірка початкового стану при завантаженні сторінки
//     function checkInitialState() {
//       if (window.innerWidth > 768) {
//         // На планшетах та десктопах ховаємо overlay
//         overlay.style.display = "none";
//       } else {
//         overlay.style.display = "block";
//       }
//     }

//     // Викликаємо перевірку при завантаженні
//     checkInitialState();
//   }

//   function showToast(message, isError = false) {
//     const toast = document.createElement("div");
//     toast.className = "copy-toast" + (isError ? " error" : "");
//     toast.textContent = message;
//     document.body.appendChild(toast);

//     setTimeout(() => toast.classList.add("visible"), 50);
//     setTimeout(() => {
//       toast.classList.remove("visible");
//       setTimeout(() => toast.remove(), 300);
//     }, 2000);
//   }
// });

document.addEventListener("DOMContentLoaded", () => {
  // Функціональність копіювання IBAN
  const copyButtons = document.querySelectorAll(".donation-btn");

  if (copyButtons.length > 0) {
    copyButtons.forEach((btn) => {
      // Шукаємо IBAN: або з data-атрибуту, або зі сусіднього тексту
      const iban =
        btn.dataset.iban ||
        btn.closest("div").textContent.match(/UA\d{26,}/)?.[0] ||
        "UA103052990000026009010813957";

      btn.addEventListener("click", async () => {
        try {
          await navigator.clipboard.writeText(iban);
          showToast("IBAN скопійовано ✅");

          const oldText = btn.textContent;
          btn.textContent = "✅ Скопійовано";
          btn.disabled = true;
          setTimeout(() => {
            btn.textContent = oldText;
            btn.disabled = false;
          }, 2000);
        } catch (err) {
          console.error("Помилка копіювання:", err);
          showToast("Не вдалося скопіювати ❌", true);
        }
      });
    });
  }

  // Функціональність бургер меню
  const burgerBtn = document.getElementById("burgerMenuBtn");
  const navBar = document.getElementById("navBar");
  const navLinks = document.querySelectorAll(".nav-link");

  if (burgerBtn && navBar) {
    // Створюємо overlay для затемнення фону
    const overlay = document.createElement("div");
    overlay.className = "overlay";
    document.body.appendChild(overlay);

    // Функція відкриття/закриття меню
    function toggleMenu() {
      burgerBtn.classList.toggle("active");
      navBar.classList.toggle("active");
      overlay.classList.toggle("active");
      document.body.style.overflow = navBar.classList.contains("active")
        ? "hidden"
        : "";
    }

    // Обробник кліку по бургер кнопці
    burgerBtn.addEventListener("click", toggleMenu);

    // Обробник кліку по overlay (закриття меню)
    overlay.addEventListener("click", () => {
      if (navBar.classList.contains("active")) {
        toggleMenu();
      }
    });

    // Закриття меню при кліку на посилання
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (navBar.classList.contains("active")) {
          toggleMenu();
        }
      });
    });

    // Закриття меню при натисканні Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && navBar.classList.contains("active")) {
        toggleMenu();
      }
    });

    // Закриття меню при зміні розміру вікна (якщо стало більше 768px)
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768 && navBar.classList.contains("active")) {
        toggleMenu();
      }
    });

    // Перевірка початкового стану при завантаженні сторінки
    function checkInitialState() {
      if (window.innerWidth > 768) {
        // На планшетах та десктопах ховаємо overlay
        overlay.style.display = "none";
      } else {
        overlay.style.display = "block";
      }
    }

    // Викликаємо перевірку при завантаженні
    checkInitialState();
  }

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
