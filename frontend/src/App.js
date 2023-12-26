import generatePDF from "./Component/PDFGenerator/PDFGenerator";
import "./App.css";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Sortable from "sortablejs";
import Rech from "./Component/Rech/Rech.jsx";

import Bars from "./Component/Bar/Bars.jsx";

function App() {
  const handleGeneratePDF = () => {
    generatePDF();
  };
  const [storeData, setStoreData] = useState([]);

  useEffect(() => {
    fetchStoreData();
  }, []);

  const fetchStoreData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/store");
      if (response.status === 200) {
        if (Array.isArray(response.data)) {
          setStoreData(response.data);
        } else if (
          response.data &&
          response.data.store &&
          Array.isArray(response.data.store)
        ) {
          setStoreData(response.data.store);
        } else {
          console.error("Failed to fetch data or incorrect data format");
        }
      } else {
        console.error("Failed to fetch data - Invalid response status");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const [riskData, setRiskData] = useState([]);

  useEffect(() => {
    fetchRiskData();
  }, []);

  const fetchRiskData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/risk");
      if (response.status === 200) {
        if (Array.isArray(response.data)) {
          setRiskData(response.data);
        } else if (
          response.data &&
          response.data.risk &&
          Array.isArray(response.data.risk)
        ) {
          setRiskData(response.data.risk);
        } else {
          console.error("Failed to fetch data or incorrect data format");
        }
      } else {
        console.error("Failed to fetch data - Invalid response status");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const [performanceData, setPerformanceData] = useState([]);

  useEffect(() => {
    fetchPerformanceData();
  }, []);

  const fetchPerformanceData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/performance");
      if (response.status === 200) {
        if (Array.isArray(response.data)) {
          setPerformanceData(response.data);
        } else if (
          response.data &&
          response.data.performance &&
          Array.isArray(response.data.performance)
        ) {
          setPerformanceData(response.data.performance);
        } else {
          console.error("Failed to fetch data or incorrect data format");
        }
      } else {
        console.error("Failed to fetch data - Invalid response status");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const dragAreaRef = useRef(null);
  useEffect(() => {
    if (dragAreaRef.current) {
      new Sortable(dragAreaRef.current, {
        animation: 350,
      });
    }
  }, []);

  return (
    <div className="App" ref={dragAreaRef}>
      <div className="item">
        <div className="head">
          <h1>Store Evaluation Dashboard</h1>
        </div>
        <div className="body" draggable="true" data-item="A">
          <table className="table1">
            <thead>
              <tr>
                <th className="category">Ref</th>
                <th className="category">Category</th>
                <th className="weight">Weight</th>
                <th className="points">
                  Standard
                  <br /> Points
                </th>
                <th className="points">
                  Deviations <br />
                  Points
                </th>
                <th className="percentage">
                  N/A <br />
                  Points
                </th>
                <th className="points">
                  Score <br />%
                </th>
              </tr>
            </thead>
            <tbody>
              {storeData.length > 0 ? (
                storeData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.ref}</td>
                    <td>{item.category}</td>
                    <td>{item.weight}</td>
                    <td>{item.standard}</td>
                    <td>{item.deviation}%</td>
                    <td>{item.na_points}</td>
                    <td>{item.score}%</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="2">Loading...</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="item">
        <div className="line-container">
          <hr className="horizontal-line" />
          <div className="line-text">Risk Analysis</div>
        </div>
        <div className="body">
          <div className="body2" draggable="true" data-item="B">
            <table className="table2">
              <thead>
                <tr>
                  <th className="risk">Risk Range</th>
                  <th className="impact">Weight</th>
                </tr>
              </thead>
              <tbody>
                {riskData.length > 0 ? (
                  riskData.map((item, index) => (
                    <tr key={index}>
                      <td>{item.riskrange}</td>
                      <td>{item.weight}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="2">Loading...</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="line-container">
          <hr className="horizontal-line" />
          <div className="line-text">Performance Ratings</div>
        </div>
        <div className="body3 page-break box" draggable="true">
          <table className="table3">
            <tbody>
              {performanceData.length > 0 ? (
                performanceData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.title}</td>
                    <td>
                      <i className="fa-solid fa-arrow-right-long fa-2xl"></i>
                    </td>
                    <td>{item.num}%</td>
                    <td>
                      <i
                        className="fa-solid fa-flag fa-2xl"
                        style={{ color: "#ff0000" }}
                      ></i>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="2">Loading...</td>
                </tr>
              )}
            </tbody>
            {/* <tbody>
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
            </tbody> */}
          </table>
        </div>
      </div>
      <div className="body page-break">
        <Bars />
      </div>
      <div className="body">
        <Rech />
      </div>
      <div className="body4">
        <button className="button" onClick={handleGeneratePDF}>
          <span className="button_lg">
            <span className="button_sl"></span>
            <span className="button_text">Download Now</span>
          </span>
        </button>
      </div>
    </div>
  );
}

export default App;
