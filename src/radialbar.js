import React from 'react';

import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
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
 * @param {number} options.height - Height of the chart in pixels
 * @param {boolean} options.clockWise - Bars should go clockwise
 * @param {object} options.margin - Margins associated with the axis and data
 * @param {number} options.margin.top - Top margin
 * @param {number} options.margin.left - Left margin
 * @param {number} options.margin.bottom - Bottom margin
 * @param {number} options.margin.right - Right margin
*/

const Chart = ({
    data: rawData = [],
    colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'],
    bars = [],
    XAxisKey = 'name',
    height=400,
    margin,
    clockWise = true
  })=>{

  const data = rawData.map((p, index)=>Object.assign({fill: colors[index % colors.length]}, p));
	return (
    <ResponsiveContainer width="100%" height={height}>
    	<RadialBarChart
        innerRadius="10%"
        outerRadius="90%"
        height={height}
        data={data}
        margin={margin}>
       <Tooltip/>
       <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
       {bars.map((dataKey, index) => <RadialBar minAngle={15} startAngle={90} endAngle={-270} isAnimationActive={false} key={dataKey} dataKey={dataKey} label background clockWise={clockWise}/>)}
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
