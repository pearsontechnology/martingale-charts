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

const Chart = ({
    data = [],
    colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'],
    bars = [],
    XAxisKey = 'name',
    height=400
  })=>{

	return (
    <ResponsiveContainer width="100%" height={height}>
    	<BarChart data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
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
