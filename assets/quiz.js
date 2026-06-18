/**
 * Minimal quiz engine for Kotlin 2.4 lessons.
 *
 * Usage: attach data-correct="true" to the correct .option button.
 * Call initQuiz() after DOM is ready.
 */
function initQuiz() {
  document.querySelectorAll('.question').forEach(q => {
    const options = q.querySelectorAll('.option');
    const feedback = q.querySelector('.feedback');
    const explanations = {};

    options.forEach(btn => {
      const exp = btn.dataset.explanation || '';
      explanations[btn.dataset.key || btn.textContent] = exp;

      btn.addEventListener('click', () => {
        if (q.dataset.answered) return;
        q.dataset.answered = '1';

        options.forEach(o => {
          o.disabled = true;
          if (o.dataset.correct === 'true') o.classList.add('correct');
        });

        const isCorrect = btn.dataset.correct === 'true';
        if (!isCorrect) btn.classList.add('incorrect');

        if (feedback) {
          feedback.textContent = btn.dataset.explanation ||
            (isCorrect ? '✓ Correct.' : '✗ Not quite — the highlighted option is correct.');
          feedback.style.color = isCorrect ? 'var(--green)' : 'var(--red)';
        }

        updateScore(q.closest('.quiz'));
      });
    });
  });
}

function updateScore(quiz) {
  if (!quiz) return;
  const total   = quiz.querySelectorAll('.question').length;
  const answered = quiz.querySelectorAll('.question[data-answered]').length;
  const correct  = quiz.querySelectorAll('.option.correct[data-correct="true"]').length -
                   quiz.querySelectorAll('.option.correct[data-correct="true"]').length +
                   [...quiz.querySelectorAll('.question[data-answered]')].filter(q =>
                     q.querySelector('.option.correct') && !q.querySelector('.option.incorrect')
                   ).length;

  if (answered === total) {
    const scoreEl = quiz.querySelector('.quiz-score');
    if (scoreEl) {
      const rightCount = [...quiz.querySelectorAll('.question')].filter(q =>
        !q.querySelector('.option.incorrect') && q.dataset.answered
      ).length;
      scoreEl.textContent = `Score: ${rightCount} / ${total}`;
      scoreEl.style.display = 'block';
      scoreEl.style.color = rightCount === total ? 'var(--green)' : 'var(--accent)';
    }
  }
}

document.addEventListener('DOMContentLoaded', initQuiz);
