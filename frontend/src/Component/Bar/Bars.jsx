import React, { useState, useEffect } from "react";
import "./Bars.css";
import axios from "axios";
import {
  Tooltip,
  XAxis,
  YAxis,
  BarChart,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";

function Bars() {
  const [bardata, setBardata] = useState([]);

  useEffect(() => {
    fetchBardata();
  }, []);

  const fetchBardata = async () => {
    try {
      const response = await axios.get("http://localhost:3000/Bar_Chart");
      if (response.status === 200) {
        const responseData = response.data;

        if (
          responseData &&
          responseData.Bar_Chart &&
          Array.isArray(responseData.Bar_Chart)
        ) {
          setBardata(responseData.Bar_Chart);
        } else if (Array.isArray(responseData)) {
          setBardata(responseData);
        } else {
          console.error("Incorrect data format received:", responseData);
        }
      } else {
        console.error(
          "Failed to fetch data - Invalid response status:",
          response.status
        );
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const branches = ["Branch1", "Branch2", "Branch3"];

  const bars = branches.map((branch, index) => (
    <Bar
      key={index}
      dataKey={branch}
      name={branch}
      stackId="a"
      fill={index === 0 ? "#ffA500" : index === 1 ? "#ff0000" : "#0000ff"}
      barSize={15}
    />
  ));

  return (
    <div className="page-break">
      <BarChart
        width={800}
        height={400}
        data={bardata}
        margin={{ bottom: 50, left: 50 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        {bars}
      </BarChart>
    </div>
  );
}

export default Bars;
