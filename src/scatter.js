import React from 'react';

import {
  ResponsiveContainer,
  Legend,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip
} from 'recharts';

/**
 * Generates a Scatter Chart
 * @name ScatterChart
 * @param {object} options - Rendering options
 * @param {array} options.data - Array of Array's of data to render
 * @param {array} options.colors - The colors for each dot
 * @param {array} options.scatters - Defines the scatter groups to render
 * @param {string} options.XAxisKey - Name of the member to use as the X Axis Key
 * @param {string} options.YAxisKey - Name of the member to use as the Y Axis Key
 * @param {string} options.ZAxisKey - Name of the member to use as the Z Axis Key (size)
 * @param {string} options.XAxisTitle - Title of the X Axis
 * @param {string} options.YAxisTitle - Title of the Y Axis
 * @param {string} options.ZAxisTitle - Title of the Z Axis
 * @param {string} options.XAxisUnit - Unit of the X Axis
 * @param {string} options.YAxisUnit - Unit of the Y Axis
 * @param {string} options.ZAxisUnit - Unit of the Z Axis
 * @param {string} options.ZAxisScale - How to scale the Z axis values
 * @param {array} options.ZAxisRange - Array of [min, max] size in pixels to render points
 * @param {number} options.height - Height of the chart in pixels
 */

const Chart = ({
    data = [],
    colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'],
    scatters = [],
    XAxisKey = 'x',
    YAxisKey = 'y',
    ZAxisKey = 'z',
    XAxisTitle,
    YAxisTitle,
    ZAxisTitle,
    XAxisUnit = '',
    YAxisUnit = '',
    ZAxisUnit = '',
    ZAxisScale= 'auto',
    ZAxisRange= [10, 100],
    height=400
  })=>{
  return (
    <ResponsiveContainer width="100%" height={height}>
      <ScatterChart data={data}
        margin={{top: 5, right: 30, left: 20, bottom: 5}}>
         <XAxis dataKey={XAxisKey} name={XAxisTitle || XAxisKey} unit={XAxisUnit} />
         <YAxis dataKey={YAxisKey} name={YAxisTitle || YAxisKey} unit={YAxisUnit} />
         <ZAxis scale={ZAxisScale} dataKey={ZAxisKey} range={ZAxisRange} name={ZAxisTitle || ZAxisKey} unit={ZAxisUnit} />
         <CartesianGrid strokeDasharray="3 3"/>
         <Tooltip/>
         <Legend />
         {scatters.map(({name, data}, index) => <Scatter key={name} name={name} data={data} fill={colors[index % colors.length]} />)}
       </ScatterChart>
     </ResponsiveContainer>
  );
};

export default Chart;
