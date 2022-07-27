// ====================== Reduce the size and print on A4 sheet ======================
function scaleCv() {
  document.body.classList.add("scale-cv");
}

// ====================== REMOVE THE SIZE WHEN THE CV IS DOWNLOADED ======================
function removeScale() {
  document.body.classList.remove("scale-cv");
}

// ====================== GENERATE PDF ==========================
// PDF generated area

let resumeButton = document.getElementById("resume-button");

// when the button is clicked - executes 3 functions
resumeButton.addEventListener("click", () => {
  // 1. class scale-cv is added to the body
  scaleCv();
  // 2. the PDF is generated
  // 3. the scale-cv class is removed from the body after 5 seconds
});
