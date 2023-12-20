import html2pdf from "html2pdf.js";

const generatePDF = () => {
  const element = document.querySelector(".App");
  const opt = {
    margin: 10,
    filename: "webpage.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
  };

  html2pdf().from(element).set(opt).save();
};

export default generatePDF;
