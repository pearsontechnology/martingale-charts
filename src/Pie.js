import React from 'react';

import {
  ResponsiveContainer,
  Legend,
  PieChart,
  Pie,
  Cell,
  Tooltip
} from 'recharts';

const Chart = ({
    data = [],
    colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'],
    height=400
  })=>{
  return (
    <ResponsiveContainer width="100%" height={height}>
      <PieChart>
        <Pie isAnimationActive={false} data={data} fill="#8884d8">
          {data.map((entry, index) => <Cell key={index} fill={colors[index % colors.length]}/>)}
        </Pie>
        <Tooltip/>
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default Chart;
