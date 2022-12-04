import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const Piechart = () => {
  const inside = [
    { name: "away", value: 100 },
    { name: "room", value: 80 },
    { name: "offline", value: 20 },
  ];
  const outside = [
    { name: "online", value: 180 },
    { name: "offline", value: 20 },
  ];

  const COLORS = ["#0088FE", "#FF8042", "#fc5335"]; //blue,orange,red

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    index,
    payload,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {payload.name}
      </text>
    );
  };

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={inside}
        dataKey="value"
        cx="50%"
        cy="50%"
        outerRadius={60}
        labelLine={false}
        label={renderCustomizedLabel}
      >
        {inside.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Pie
        data={outside}
        dataKey="value"
        cx="50%"
        cy="50%"
        innerRadius={70}
        outerRadius={90}
        fill="#82ca9d"
        label
      >
        <Cell fill="#82ca9d" />
        <Cell fill="#fc5335" />
      </Pie>
    </PieChart>
  );
};

export default Piechart;
