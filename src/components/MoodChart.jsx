'use client';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    LinearScale,
    Title,
    Legend,
    CategoryScale, 
} from 'chart.js';
import { getMoodHistory, dayLabel, moodLabel } from "@/utils/MoodUtils";
import { useState } from 'react';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title, Legend);

export const getMoodChartData = () => {
    const moodHistory = getMoodHistory();
    const labels = Object.values(dayLabel).slice(0, moodHistory.length).reverse();
    const data = moodHistory.reverse();

    return { labels, data };
};

export const MoodChart = () => {
    const { labels, data } = getMoodChartData();
    const [hoveredPoint, setHoveredPoint] = useState(null);

    const chartData = {
        labels,
        datasets: [
            {
                data,
                borderColor: "rgba(141, 141, 188, 1)",
                backgroundColor: "rgba(141, 141, 188, 0.2)",
                borderWidth: 2,
                tension: 0.5,
                pointBackgroundColor: "rgba(255,255,255)",
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            x: {
                grid: {
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                    color: 'rgba(255, 255, 255, 0.1)',
                },
                ticks: {
                    color: 'white',
                    font: {
                        size: 10.5,
                        family: "Mali",
                    },
                },
            },
            y: {
                grid: {
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                    color: 'rgba(255, 255, 255, 0.1)',
                },
                ticks: {
                    color: 'white',
                    font: {
                        size: 15,
                        family: "Mali",
                    },
                    callback: function(value) {
                        const moodMap = {
                            '0': 'Tough',
                            '1': 'Not Great',
                            '2': 'Alright',
                            '3': 'Great',
                            '4': 'Amazing',
                        };
                        return moodMap[value];
                    },
                },
            },
        },
        elements: {
            line: {
                tension: 0.4,
                borderWidth: 2,
            },
            point: {
                radius: 5,
                hoverRadius: 7,
                backgroundColor: 'white',
                borderColor: 'white',
                borderWidth: 2,
                // Show hovered point on mouseover
                hoverBackgroundColor: (context) => {
                    const index = context.dataIndex;
                    setHoveredPoint({
                        label: `Day ${labels[index]}`,
                        mood: moodLabel[data[index]] || 'No mood recorded',
                        moodIndex: data[index],
                    });
                    return 'rgba(255, 255, 255, 0.5)';
                },
                hoverBorderColor: 'white',
                hoverBorderWidth: 2,
            },
        },
    };

    return (
        <div className="w-full max-w-lg mx-auto p-4 bg-[#2a2a59] bg-opacity-75 border-2 border-white border-opacity-25 rounded-3xl shadow-md">
            <h2 className="text-center mb-4 text-white">Mood Chart for the Last 7 Days</h2>
            <Line data={chartData} options={options} />
        </div>
    );
};
