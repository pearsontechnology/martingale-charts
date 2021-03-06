import React from 'react';

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';

/**
 * Generates a Bar Chart
 * @name BarChart
 * @param {object} options - Rendering options
 * @param {array} options.data - Array of data to render
 * @param {array} options.colors - The colors for each Bar
 * @param {array} options.bars - Defines the bars to render
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
    bars = [],
    XAxisKey = 'name',
    height=400,
    margin={top: 5, right: 30, left: 20, bottom: 5}
  })=>{

	return (
    <ResponsiveContainer width="100%" height={height}>
    	<BarChart data={data}
            margin={margin}>
       <XAxis dataKey={XAxisKey} />
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       {bars.map((dataKey, index) => <Bar isAnimationActive={false} key={dataKey} dataKey={dataKey} fill={colors[index % colors.length]} />)}
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
