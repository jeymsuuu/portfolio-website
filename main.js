// Hamburger menu toggle
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger-menu")
  const navbar = document.querySelector(".navbar")

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navbar.classList.toggle("active")
  })

  // Close menu when clicking a link
  document.querySelectorAll(".navbar a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active")
      navbar.classList.remove("active")
    })
  })
})


// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        })

        // Update active link
        document.querySelectorAll(".navbar a").forEach((link) => {
          link.classList.remove("active")
        })
        this.classList.add("active")
      }
    })
  })

  // Update active navigation link based on scroll position
  window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section")
    const navLinks = document.querySelectorAll(".navbar a")

    let currentSection = ""

    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.clientHeight

      if (window.scrollY >= sectionTop - 200) {
        currentSection = section.getAttribute("id")
      }
    })

    navLinks.forEach((link) => {
      link.classList.remove("active")
      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active")
      }
    })
  })
})

// Initialize Typed.js if the element exists