import React from 'react';

import {
  ResponsiveContainer,
  Legend,
  ComposedChart,
  Area,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from 'recharts';

/**
 * Generates a Composed (Line, Bar, Area) Chart
 * @name LineChart
 * @param {object} options - Rendering options
 * @param {array} options.data - Array of Array's of data to render
 * @param {array} options.colors - The colors for each line
 * @param {array} options.areas - Defines the areas to render
 * @param {array} options.bars - Defines the bars to render
 * @param {array} options.lines - Defines the lines to render
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
    areas = [],
    bars = [],
    lines = [],
    XAxisKey = 'name',
    height=400,
    margin={top: 5, right: 30, left: 20, bottom: 5}
  })=>{
  return (
    <ResponsiveContainer width="100%" height={height}>
      <ComposedChart data={data}
        margin={margin}>
        <XAxis dataKey={XAxisKey} />
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       {areas.map((dataKey, index) => <Area isAnimationActive={false} type="monotone" key={dataKey} dataKey={dataKey} stroke={colors[index % colors.length]} />)}
       {bars.map((dataKey, index) => <Bar isAnimationActive={false} key={dataKey} dataKey={dataKey} fill={colors[(index + areas.length) % colors.length]} />)}
       {lines.map((dataKey, index) => <Line isAnimationActive={false} type="monotone" key={dataKey} dataKey={dataKey} stroke={colors[(index + areas.length + bars.length) % colors.length]} />)}
       </ComposedChart>
     </ResponsiveContainer>
  );
};

export default Chart;
