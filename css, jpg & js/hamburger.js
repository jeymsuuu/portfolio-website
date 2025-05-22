// Hamburger menu functionality
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger-menu")
  const navbar = document.querySelector(".navbar")

  // Toggle menu when hamburger is clicked
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navbar.classList.toggle("active")
    console.log("Hamburger clicked, navbar toggled")
  })

  // Close menu when clicking a navigation link
  document.querySelectorAll(".navbar a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active")
      navbar.classList.remove("active")
    })
  })

  // Close menu when clicking outside
  document.addEventListener("click", (event) => {
    if (!navbar.contains(event.target) && !hamburger.contains(event.target) && navbar.classList.contains("active")) {
      hamburger.classList.remove("active")
      navbar.classList.remove("active")
    }
  })
})
