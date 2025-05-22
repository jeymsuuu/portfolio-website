// Certificate data
const certificateData = {
  cert1: {
    title: "sample",
    image: "certificate1.jpg", 
    issuer: "none",
    date: "May 2025",
    skills: "none",
    description:
      "this certificate is just a sample certificate because i dont have any certificate.",
  },
  cert2: {
    title: "sample",
    image: "certificate2.jpg",
    issuer: "none",
    date: "May 2025",
    skills: "none",
    description:
      "this certificate is just a sample certificate because i dont have any certificate.",
  },
}

// Modal functionality
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("certificateModal")
  const modalImage = document.getElementById("modalImage")
  const modalTitle = document.getElementById("modalTitle")
  const modalIssuer = document.getElementById("modalIssuer")
  const modalDate = document.getElementById("modalDate")
  const modalSkills = document.getElementById("modalSkills")
  const modalDescription = document.getElementById("modalDescription")
  const closeModal = document.querySelector(".close-modal")

  // Open modal when clicking on "View Certificate" buttons
  document.querySelectorAll(".view-certificate").forEach((button) => {
    button.addEventListener("click", function () {
      const certId = this.getAttribute("data-cert-id")
      const certData = certificateData[certId]

      if (certData) {
        // Populate modal with certificate data
        modalImage.src = certData.image
        modalImage.alt = certData.title
        modalTitle.textContent = certData.title
        modalIssuer.textContent = certData.issuer
        modalDate.textContent = certData.date
        modalSkills.textContent = certData.skills
        modalDescription.textContent = certData.description

        // Show modal
        modal.style.display = "block"
      }
    })
  })

  // Also open modal when clicking on certificate images
  document.querySelectorAll(".certificate-image").forEach((imgContainer) => {
    imgContainer.addEventListener("click", function () {
      const certId = this.closest(".certificate-card").querySelector(".view-certificate").getAttribute("data-cert-id")
      document.querySelector(`[data-cert-id="${certId}"]`).click()
    })
  })

  // Close modal when clicking on close button
  closeModal.addEventListener("click", () => {
    modal.style.display = "none"
  })

  // Close modal when clicking outside of modal content
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none"
    }
  })

  // Close modal when pressing Escape key
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.style.display === "block") {
      modal.style.display = "none"
    }
  })
})
