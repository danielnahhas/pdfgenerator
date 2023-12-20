import generatePDF from "./Component/PDFGenerator/PDFGenerator";
import "./App.css";

function App() {
  const handleGeneratePDF = () => {
    generatePDF();
  };
  return (
    <div className="App">
      <div className="head">
        <h1>Store Evaluation Dashboard</h1>
      </div>
      <div className="body">
        <table className="table1">
          <thead>
            <tr>
              <th class="category">Ref</th>
              <th class="category">Category</th>
              <th class="weight">Weight</th>
              <th class="points">
                Standard
                <br /> Points
              </th>
              <th class="points">
                Deviations <br />
                Points
              </th>
              <th class="percentage">
                N/A <br />
                Points
              </th>
              <th class="points">
                Score <br />%
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>A</td>
              <td>Hospitality</td>
              <td>20</td>
              <td>11</td>
              <td>5</td>
              <td>4</td>
              <td>68.75%</td>
            </tr>
            <tr>
              <td>B</td>
              <td>Maintenance and General Safety</td>
              <td>25</td>
              <td>12</td>
              <td>9</td>
              <td>4</td>
              <td>57.14%</td>
            </tr>
            <tr>
              <td>C</td>
              <td>Cleanliness - Exterior and Interior</td>
              <td>17</td>
              <td>8</td>
              <td>9</td>
              <td>0</td>
              <td>47.06%</td>
            </tr>
            <tr>
              <td>D</td>
              <td>Personal Hygiene</td>
              <td>20</td>
              <td>6</td>
              <td>14</td>
              <td>0</td>
              <td>30.00%</td>
            </tr>
            <tr>
              <td>E</td>
              <td>Receiving and Storage</td>
              <td>30</td>
              <td>4</td>
              <td>23</td>
              <td>3</td>
              <td>14.81%</td>
            </tr>
            <tr>
              <td>F</td>
              <td>Food handling</td>
              <td>55</td>
              <td>10</td>
              <td>33</td>
              <td>12</td>
              <td>23.26%</td>
            </tr>
            <tr>
              <td>G</td>
              <td>Conformity to recipe book</td>
              <td>3</td>
              <td>0</td>
              <td>3</td>
              <td>0</td>
              <td>0.00%</td>
            </tr>
            <tr>
              <td>H</td>
              <td>Conformity to Legal requirements</td>
              <td>10</td>
              <td>0</td>
              <td>3</td>
              <td>7</td>
              <td>0.00%</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td rowSpan={2}></td>
              <td>Total</td>
              <td>180</td>
              <td>51</td>
              <td>99</td>
              <td>30</td>
              <td id="last" rowSpan={2}>
                34.00%
              </td>
            </tr>
            <tr>
              <td id="total">Total%</td>
              <td id="percent">100%</td>
              <td id="some">28.33%</td>
              <td>55.00%</td>
              <td>16.67%</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div class="line-container">
        <hr class="horizontal-line" />
        <div class="line-text">Risk Analysis</div>
      </div>
      <div className="body">
        <div className="body2">
          <table className="table2">
            <thead>
              <tr>
                <th class="risk">Risk Range</th>
                <th class="impact">Weight</th>
              </tr>
              <tr>
                <td>Low</td>
                <td>1</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Moderate</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Critical</td>
                <td>3</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="line-container">
        <hr class="horizontal-line" />
        <div class="line-text">Performance Ratings</div>
      </div>
      <div className="body3">
        <table className="table3">
          <tbody>
            <tr>
              <td>Unsatisfactory</td>
              <td>
                <i className="fa-solid fa-arrow-right-long fa-2xl"></i>
              </td>
              <td>40%</td>
              <td>
                <i
                  className="fa-solid fa-flag fa-2xl"
                  style={{ color: "#ff0000" }}
                ></i>
              </td>
              <td>Low</td>
            </tr>
            <tr>
              <td>Needs Improvement</td>
              <td>
                <i className="fa-solid fa-arrow-right-long fa-2xl"></i>
              </td>
              <td>60%</td>
              <td>
                <i
                  className="fa-solid fa-flag fa-2xl"
                  style={{ color: "#ff7b00" }}
                ></i>
              </td>
              <td rowSpan={3}>
                <i className="fa-solid fa-arrow-up-long fa-rotate-180 fa-2xl"></i>
              </td>
            </tr>

            <tr>
              <td>Meets Requirments</td>
              <td>
                <i className="fa-solid fa-arrow-right-long fa-2xl"></i>
              </td>
              <td>80%</td>
              <td>
                <i
                  className="fa-solid fa-flag fa-2xl"
                  style={{ color: "#e1ff00" }}
                ></i>
              </td>
            </tr>
            <tr>
              <td>Exceeds Requirments</td>
              <td>
                <i className="fa-solid fa-arrow-right-long fa-2xl"></i>
              </td>
              <td>90%</td>
              <td>
                <i
                  className="fa-solid fa-flag fa-2xl"
                  style={{ color: "#00aaff" }}
                ></i>
              </td>
            </tr>
            <tr>
              <td>Outstanding</td>
              <td>
                <i className="fa-solid fa-arrow-right-long fa-2xl"></i>
              </td>
              <td>100%</td>
              <td>
                <i
                  className="fa-solid fa-flag fa-2xl"
                  style={{ color: "#00ff1e" }}
                ></i>
              </td>
              <td>High</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="body4">
        <button class="button" onClick={handleGeneratePDF}>
          <span class="button_lg">
            <span class="button_sl"></span>
            <span class="button_text">Download Now</span>
          </span>
        </button>
      </div>
    </div>
  );
}

export default App;
