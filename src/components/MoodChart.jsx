'use client';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    CategoryScale, // x-axis scale
} from 'chart.js';
import { getMoodHistory, dayLabel, moodLabel } from "@/utils/MoodUtils";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend);

export const getMoodChartData = () => {
    const moodHistory = getMoodHistory();
    const labels = Object.values(dayLabel).slice(0, moodHistory.length).reverse();
    const data = moodHistory.reverse(); // Reverse to match day labels (latest first)

    return { labels, data };
};


export const MoodChart = () => {
    const { labels, data } = getMoodChartData();

    const moodDescriptions = data.map((mood) => moodLabel[mood]);

    const chartData = {
        labels, // Days
        datasets: [
            {
                label: "Mood Score",
                data, // Scores
                borderColor: "rgba(54, 162, 235, 1)", // Line color
                backgroundColor: "rgba(54, 162, 235, 0.2)", // Fill color
                borderWidth: 2,
                tension: 0.3,
                pointBackgroundColor: "rgba(75, 192, 192, 1)"
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
            y: {
                beginAtZero: true,
                max: 5, 
            },
        },
    };

    return (
        <div className="w-full max-w-lg mx-auto p-4 bg-white rounded-md shadow-md">
            <h2 className="text-center mb-4">Mood Chart for the Last 7 Days</h2>
            <Line data={chartData} options={options} />
            <div className="text-sm text-gray-500 mt-2">
                Moods: {moodDescriptions.join(", ")}
            </div>
        </div>
    );
};