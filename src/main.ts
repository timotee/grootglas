import "./style.css";

window.addEventListener("DOMContentLoaded", () => {
  revealEmail();
});

function revealEmail(): void {
  const user: string = "info";
  const domain: string = "grootglas.nl";
  const email: string = `${user}@${domain}`;
  const emailElement: HTMLElement | null = document.getElementById("email");
  if (emailElement) {
    emailElement.innerHTML = `<a class="block" href="mailto:${email}">${email}</a>`;
  }
}
