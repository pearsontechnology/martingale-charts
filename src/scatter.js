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
