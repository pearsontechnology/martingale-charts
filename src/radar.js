import React from 'react';

import {
  ResponsiveContainer,
  Legend,
  RadarChart,
  Radar,
  PolarAngleAxis,
  PolarRadiusAxis,
  PolarGrid,
  Tooltip
} from 'recharts';

/**
 * Generates a Radar Chart
 * @name LineChart
 * @param {object} options - Rendering options
 * @param {array} options.data - Array of Array's of data to render
 * @param {array} options.colors - The colors for each line
 * @param {array} options.radars - Defines the lines to render
 * @param {string} options.AxisKey - Name of the member to use as the Axis Key
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
    radars = [],
    axisKey = 'name',
    height=400,
    margin={top: 5, right: 30, left: 20, bottom: 5}
  })=>{
  return (
    <ResponsiveContainer width="100%" height={height}>
      <RadarChart data={data}
        margin={margin}>
        <PolarGrid/>
        <Tooltip/>
        <Legend />
        <PolarAngleAxis dataKey={axisKey} />
        <PolarRadiusAxis />
        {radars.map((dataKey, index) => <Radar isAnimationActive={false} name={dataKey} key={dataKey} dataKey={dataKey} stroke={colors[index % colors.length]} fill={colors[index % colors.length]} fillOpacity={0.6} />)}
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
