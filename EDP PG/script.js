document.addEventListener("DOMContentLoaded", () => {
  // Keep footer year current on every page.
  const footerText = document.querySelector("footer p");
  if (footerText) {
    const currentYear = new Date().getFullYear();
    footerText.textContent = `© ${currentYear} Procter & Gamble`;
  }

  // Smooth scroll for in-page anchor links (used on index hero buttons).
  const internalLinks = document.querySelectorAll('a[href^="#"]');
  internalLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") {
        return;
      }

      const target = document.querySelector(targetId);
      if (!target) {
        return;
      }

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  // Lightweight client-side confirmation for the contact form.
  const contactForm = document.querySelector(".contact-form form");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      alert("Thanks for contacting P&G. Your message has been received.");
      contactForm.reset();
    });
  }
});
