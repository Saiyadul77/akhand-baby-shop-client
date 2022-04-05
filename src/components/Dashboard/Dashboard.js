import React from 'react';
import { Legend, Line, LineChart, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, Tooltip, XAxis, YAxis } from 'recharts';
import useReviews from '../../hooks/useReviews';

const Dashboard = () => {
    const data = [
        {
            "id": 1,
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401,

        },
        {
            "id": 2,
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500,

        },
        {
            "id": 3,
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010,

        },
        {
            "id": 4,
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405,

        },
        {
            "id": 5,
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900,

        },
        {
            "id": 6,
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000,

        }
    ];
    return (
        <div>
            <div>
                <LineChart width={800} height={500} data={data}>
                    <Line dataKey={'investment'}></Line>
                    <Line dataKey={'revenue'}></Line>
                    <XAxis dataKey={'month'}></XAxis>
                    <Tooltip></Tooltip>
                    <YAxis></YAxis>
                </LineChart>
            </div>
            <div>
                <RadarChart outerRadius={90} width={730} height={250} data={data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="month" />
                    <PolarRadiusAxis angle={30} domain={[0, 150]} />
                    <Radar name="Investment" dataKey="investment" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                    <Radar name="Revenue" dataKey="revenue" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                    <Legend />
                    <Tooltip></Tooltip>
                </RadarChart>
            </div>
        </div>
    );
};

export default Dashboard;