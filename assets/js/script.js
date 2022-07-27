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
let areaCv = document.getElementById("area-cv");

let resumeButton = document.getElementById("resume-button");

// html2pdf options
let opt = {
  margin: 0,
  filename: "marykasparianCV.pdf",
  image: { type: "jpeg", quality: 0.98 },
  html2canvas: { scale: 2 },
  jsPDF: { format: "a4", orientation: "portrait" },
};

// function to call areaCv and Html2pdf options
function generateResume() {
  html2pdf(areaCv, opt);
}

// when the button is clicked - executes 3 functions
resumeButton.addEventListener("click", () => {
  // 1. class scale-cv is added to the body
  scaleCv();
  // document.querySelector(".skills").classList.add("hide");
  // document.querySelector(".interests").classList.add("hide");
  // 2. the PDF is generated
  generateResume();

  // 3. the scale-cv class is removed from the body after 5 seconds
  setTimeout(removeScale, 5000);
});
