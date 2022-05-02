import React from 'react';
import Layout from '@theme/Layout';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const data = [

                {name: 'Mar21', water: 34.31, electricity: 12.35, amt: 2400},
                {name: 'Apr21', water: 49.85, electricity: 9.75, amt: 2400},
                {name: 'May21', water: 44.48, electricity: 33.65, amt: 2400},
                {name: 'Jun21', water: 44.47, electricity: 58.40, amt: 2400}, 
                {name: 'Jul21', water: 29.00, electricity: 123.78, amt: 2400},
                {name: 'Aug21', water: 29.03, electricity: 39.92, amt: 2400},
                {name: 'Sep21', water: 21.91, electricity: 39.42, amt: 2400},
                {name: 'Oct21', water: 30.10, electricity: 47.47, amt: 2400},
                {name: 'Nov21', water: 29.39, electricity: 81.16, amt: 2400}, 
                {name: 'Dez21', water: 29.39, electricity: 66.19, amt: 2400}, 
                {name: 'Jan22', water: 26.65, electricity: 62.22, amt: 2400},
                {name: 'Feb22', water: 30.30, electricity: 51.18, amt: 2400},
                {name: 'Mar22', water: 35.23, electricity: 101.52, amt: 2400},
                {name: 'Apr22', water: 24.97, electricity: 95.56, amt: 2400}
            ]

function RenderLineChart() {
    return (
        <Layout title="charts">
            <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="linear" dataKey="water" stroke="#8884d8" />
                <Line type="linear" dataKey="electricity" stroke="#FF0000" />
                <CartesianGrid stroke="#ccc" strokeDasharray="1 1" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
            </LineChart>
        </Layout>
    );
  }

export default RenderLineChart;