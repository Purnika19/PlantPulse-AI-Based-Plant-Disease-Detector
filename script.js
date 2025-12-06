// 🌿 PlantPulse Frontend Integration with Flask Backend (Safe for All Pages)

document.addEventListener("DOMContentLoaded", () => {

  // ============================
  // 🌱 PAGE DETECTION
  // ============================
  const isUploadPage = document.querySelector(".upload-section");
  const isHomePage = document.querySelector(".hero");

  // ============================
  // 💚 UPLOAD PAGE LOGIC
  // ============================
  if (isUploadPage) {
    const uploadBox = document.getElementById("uploadBox");
    const fileInput = document.getElementById("fileInput");
    const previewImage = document.getElementById("previewImage");
    const analyzeButton = document.getElementById("analyzeButton");
    const resultCard = document.getElementById("resultCard");
    const predictedClass = document.getElementById("predictedClass");

    let selectedFile = null;

    // 📤 Handle File Upload + Drag & Drop
    uploadBox.addEventListener("click", () => fileInput.click());
    fileInput.addEventListener("change", handleFileSelect);
    uploadBox.addEventListener("dragover", (e) => e.preventDefault());
    uploadBox.addEventListener("drop", handleFileDrop);

    function handleFileSelect(e) {
      selectedFile = e.target.files[0];
      showPreview(selectedFile);
    }

    function handleFileDrop(e) {
      e.preventDefault();
      selectedFile = e.dataTransfer.files[0];
      showPreview(selectedFile);
    }

    function showPreview(file) {
      if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (e) => {
          previewImage.src = e.target.result;
          previewImage.style.display = "block";
        };
        reader.readAsDataURL(file);
      }
    }

    // 🔍 Predict Using Flask Model (No Confidence Display)
    analyzeButton.addEventListener("click", async () => {
      if (!selectedFile) {
        alert("Please upload a leaf image first!");
        return;
      }

      const formData = new FormData();
      formData.append("file", selectedFile);

      analyzeButton.innerText = "⏳ Predicting...";
      analyzeButton.disabled = true;

      try {
        const response = await fetch("http://127.0.0.1:5000/predict", {
          method: "POST",
          body: formData,
        });

        const result = await response.json();

        if (response.ok) {
          predictedClass.textContent = `Detected Disease: ${result.disease}`;
          resultCard.style.display = "block";
        } else {
          alert("Prediction failed: " + (result.error || "Unknown error"));
        }
      } catch (error) {
        alert("⚠️ Could not connect to the Flask server!");
        console.error("Fetch error:", error);
      }

      analyzeButton.innerText = "🔍 Predict Disease";
      analyzeButton.disabled = false;
    });
  }

  // ============================
  // 🌿 COMMON EFFECTS (All Pages)
  // ============================

  // ✨ Fade-in animations on scroll
  const fadeElements = document.querySelectorAll(".fade-in");
  function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.9;
    fadeElements.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < triggerBottom) el.classList.add("visible");
    });
  }
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  // 💫 Heading pop animation on load
  setTimeout(() => {
    const headings = document.querySelectorAll("h1, h2, h3");
    headings.forEach((h) => h.classList.add("pop-heading"));
  }, 300);

  // 🌟 Button hover glow
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
      btn.style.boxShadow = "0 4px 15px rgba(27, 107, 59, 0.3)";
    });
    btn.addEventListener("mouseleave", () => {
      btn.style.boxShadow = "none";
    });
  });
});






