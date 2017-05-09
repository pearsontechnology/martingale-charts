import React from 'react';

import {
  ResponsiveContainer,
  Legend,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from 'recharts';

const Chart = ({
    data = [],
    colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'],
    lines = [],
    XAxisKey = 'name'
  })=>{
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}
        margin={{top: 5, right: 30, left: 20, bottom: 5}}>
        <XAxis dataKey={XAxisKey} />
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       {lines.map((dataKey, index) => <Line isAnimationActive={false} type="monotone" key={dataKey} dataKey={dataKey} stroke={colors[index % colors.length]} />)}
       </LineChart>
     </ResponsiveContainer>
  );
};

export default Chart;
