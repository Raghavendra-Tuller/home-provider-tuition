// Simple client-side validation & fake UI submission
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('enquiryForm');
  const result = document.getElementById('formResult');

  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    result.textContent = '';

    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const cls = form.class.value;
    const subject = form.subject.value.trim();

    // Basic checks
    if (!name || !phone || !cls || !subject) {
      result.style.color = 'crimson';
      result.textContent = 'Please fill in all required fields.';
      return;
    }

    // phone numeric check (basic)
    const digits = phone.replace(/\D/g,'');
    if (digits.length < 10) {
      result.style.color = 'crimson';
      result.textContent = 'Please enter a valid 10-digit phone number.';
      return;
    }

    // Show a successful "UI-only" message
    result.style.color = 'green';
    result.innerHTML = `Thanks, <strong>${escapeHtml(name)}</strong>! Your enquiry has been recorded on the UI (no backend). We'll contact: ${escapeHtml(phone)}.`;

    // Reset after a short display
    setTimeout(() => { form.reset(); }, 2000);
  });

  // simple escape to avoid injecting user input into innerHTML accidentally
  function escapeHtml(str){
    return str.replace(/[&<>"']/g, (m) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  }
});
