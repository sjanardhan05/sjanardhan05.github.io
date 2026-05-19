const toggleBtn = document.querySelector(".toggle-button");
const dropdownMenu = document.querySelector(".dropdown-menu");
const navLinks = document.querySelectorAll(".dropdown-menu a");

// Toggle mobile menu
toggleBtn.addEventListener("click", () => {
  dropdownMenu.classList.toggle("top-16");
  dropdownMenu.classList.toggle("top-[-500px]");
});

// Close menu after clicking link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    dropdownMenu.classList.remove("top-16");
    dropdownMenu.classList.add("top-[-500px]");
  });
});
