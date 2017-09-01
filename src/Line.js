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

/**
 * Generates a Line Chart
 * @name LineChart
 * @param {object} options - Rendering options
 * @param {array} options.data - Array of Array's of data to render
 * @param {array} options.colors - The colors for each line
 * @param {array} options.lines - Defines the lines to render
 * @param {string} options.XAxisKey - Name of the member to use as the X Axis Key
 * @param {number} options.height - Height of the chart in pixels
 */
const Chart = ({
    data = [],
    colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'],
    lines = [],
    XAxisKey = 'name',
    height=400
  })=>{
  return (
    <ResponsiveContainer width="100%" height={height}>
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
