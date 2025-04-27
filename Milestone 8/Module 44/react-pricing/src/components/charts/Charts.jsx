import { LineChart, Line, XAxis, YAxis } from 'recharts';
import React from 'react';

const resultData = [
    { "id": 1, "name": "Alice", "physics": 85, "chemistry": 78, "math": 92 },
    { "id": 2, "name": "Bob", "physics": 67, "chemistry": 45, "math": 18 },
    { "id": 3, "name": "Charlie", "physics": 90, "chemistry": 58, "math": 95 },
    { "id": 4, "name": "David", "physics": 65, "chemistry": 70, "math": 62 },
    { "id": 5, "name": "Ella", "physics": 80, "chemistry": 33, "math": 84 },
    { "id": 6, "name": "Frank", "physics": 72, "chemistry": 55, "math": 38 },
    { "id": 7, "name": "Grace", "physics": 95, "chemistry": 92, "math": 96 },
    { "id": 8, "name": "Harry", "physics": 68, "chemistry": 74, "math": 41 },
    { "id": 9, "name": "Ivy", "physics": 88, "chemistry": 90, "math": 62 },
    { "id": 10, "name": "Jack", "physics": 77, "chemistry": 79, "math": 33 }
  ];
  

const Charts = () => {
    return (
        <div>
            <LineChart className='mt-10' width={500} height={500} data={resultData}>
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math" stroke='red'></Line>
                <Line dataKey="chemistry" stroke='green'></Line>
            </LineChart>
        </div>
    );
};

export default Charts;