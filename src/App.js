import generatePDF from "./Component/PDFGenerator/PDFGenerator";
import "./App.css";

function App() {
  const handleGeneratePDF = () => {
    generatePDF();
  };
  return (
    <div className="App">
      <h1>Pdf Generator</h1>
      <p>lorem</p>
      <p>Sample webpage to genarate a pdf</p>
      <button onClick={handleGeneratePDF}>Generate PDF</button>
    </div>
  );
}

export default App;
