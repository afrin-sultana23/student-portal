"use client"
import React from 'react';
import {PieChart, Pie, Cell, ResponsiveContainer, Tooltip} from 'recharts';

const chartData = [
    { name: 'Programming', value: 500 },
    { name: 'Speaking English', value: 300 },
    { name: 'Leadership', value: 300 },
    { name: 'Campaign', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const handlePieEnter = (data, index) => {
    console.log(`Sector ${data.name} (${data.value}%) was entered!`);
};

const Stats = () => {
    return (
        <div >
            <ResponsiveContainer width="100%" height={180}>
                <PieChart>
                    <Pie
                        data={chartData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                        onMouseEnter={handlePieEnter}
                    >
                        {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Stats;