import React from "react";
import { PieChart, Pie, Tooltip, Legend, Label } from "recharts";

function Rech() {
  const data = [{ name: "Branch1", value: 30 }];
  const data1 = [{ name: "Branch2", value: 60 }];
  const data2 = [{ name: "Branch3", value: 80 }];

  return (
    <div style={{ display: "flex" }}>
      <div>
        <PieChart width={300} height={300}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            startAngle={90}
            endAngle={0}
            innerRadius={60}
            outerRadius={80}
            fill="#ffA500"
            labelLine={false}
          >
            <Label
              value={`${30}.${12}%`}
              position="center"
              fill="#000"
              fontSize={24}
            />
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
      <div>
        <PieChart width={300} height={300}>
          <Pie
            data={data1}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            startAngle={90}
            endAngle={-130}
            innerRadius={60}
            outerRadius={80}
            fill="#ff0000"
            labelLine={false}
          >
            <Label
              value={`${62}.${79}%`}
              position="center"
              fill="#000"
              fontSize={24}
            />
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
      <div>
        <PieChart width={300} height={300}>
          <Pie
            data={data2}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            startAngle={90}
            endAngle={-230}
            innerRadius={60}
            outerRadius={80}
            fill="#0000ff"
            labelLine={false}
          >
            <Label
              value={`${80}.${20}%`}
              position="center"
              fill="#000"
              fontSize={24}
            />
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
}

export default Rech;
