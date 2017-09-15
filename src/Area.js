import React from 'react';

import {
  ResponsiveContainer,
  Legend,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from 'recharts';

/**
 * Generates an Area Chart
 * @name AreaChart
 * @param {object} options - Rendering options
 * @param {array} options.data - Array of Array's of data to render
 * @param {array} options.colors - The colors for each Area section
 * @param {array} options.lines - Defines the area section lines to render
 * @param {string} options.XAxisKey - Name of the member to use as the X Axis Key
 * @param {number} options.height - Height of the chart in pixels
 * @param {object} options.margin - Margins associated with the axis and data
 * @param {number} options.margin.top - Top margin
 * @param {number} options.margin.left - Left margin
 * @param {number} options.margin.bottom - Bottom margin
 * @param {number} options.margin.right - Right margin
 */
const Chart = ({
    data = [],
    colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'],
    lines = [],
    XAxisKey = 'name',
    height=400,
    margin={top: 5, right: 30, left: 20, bottom: 5}
  })=>{
  return (
    <ResponsiveContainer width="100%" height={height}>
      <AreaChart data={data}
        margin={margin}>
       <XAxis dataKey={XAxisKey} />
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       {lines.map((dataKey, index) => <Area isAnimationActive={false} type="monotone" key={dataKey} dataKey={dataKey} stroke={colors[index % colors.length]} fillOpacity={0.1} fill={colors[index % colors.length]} />)}
      </AreaChart>
     </ResponsiveContainer>
  );
};

export default Chart;
