// script.js — Альба-Маре: форма отзыва, счётчик символов, модалка «Спасибо»

// --- Счётчик символов (CSS ждёт классы limit-near / limit-reached) ---
const messageInput = document.getElementById('review-message');
const counterEl = document.getElementById('char-counter');

function updateCounter() {
  const len = messageInput.value.length;
  counterEl.textContent = len + ' / 1000';
  counterEl.classList.toggle('limit-near', len >= 800 && len < 1000);
  counterEl.classList.toggle('limit-reached', len >= 1000);
}

if (messageInput && counterEl) {
  messageInput.addEventListener('input', updateCounter);
}

// --- Модалка «Спасибо»: открывается/закрывается через класс active (как в style.css) ---
function showThanksModal() {
  document.getElementById('thanks-modal')?.classList.add('active');
}

function closeThanksModal() {
  document.getElementById('thanks-modal')?.classList.remove('active');
}

// Закрытие по клику на затемнённый фон
document.getElementById('thanks-modal')?.addEventListener('click', (e) => {
  if (e.target.classList.contains('thanks-modal-overlay')) closeThanksModal();
});

// Закрытие по Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeThanksModal();
});

// --- Отправка формы через Formspree без перезагрузки страницы ---
const reviewForm = document.querySelector('.review-form');
if (reviewForm) {
  reviewForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = reviewForm.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Отправка...';
    }

    try {
      const response = await fetch(reviewForm.action, {
        method: 'POST',
        body: new FormData(reviewForm),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        showThanksModal();
        reviewForm.reset();
        if (counterEl) updateCounter();
      } else {
        alert('Не удалось отправить отзыв. Попробуйте позже.');
      }
    } catch (err) {
      alert('Не удалось отправить отзыв. Попробуйте позже.');
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Отправить отзыв';
      }
    }
  });
}
