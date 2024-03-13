import React, { useState } from 'react';
import { Radar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
    RadialLinearScale
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
    RadialLinearScale
);

const InteractiveChart = () => {
    const [playerValues, setPlayerValues] = useState([0, 0, 0, 0, 0]);
    const [comparisonValues, setComparisonValues] = useState([1, 2, 3, 4, 5]);

    const handleChangePlayerValues = (index, newValue) => {
        const updatedValues = [...playerValues];
        updatedValues[index] = Number(newValue);
        setPlayerValues(updatedValues);
    };

    const handleChangeComparisonValues = (index, newValue) => {
        const updatedValues = [...comparisonValues];
        updatedValues[index] = Number(newValue);
        setComparisonValues(updatedValues);
    };

    const data = {
        labels: ['Attaque', 'Défense', 'Collectif', 'Partage', 'Individuel'],
        datasets: [
            {
                label: 'Première évaluation',
                data: playerValues,
                backgroundColor: 'rgba(255, 255, 0, 0.2)',
                borderColor: 'rgba(255, 240, 132, 1)',
                borderWidth: 1,
            },
            {
                label: '3 mois après',
                data: comparisonValues,
                backgroundColor: 'rgba(0, 255, 255, 0.2)',
                borderColor: 'rgba(0, 255, 255, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scales: {
            r: {
                angleLines: {
                    display: true,
                    color: "#FFFFFF"
                },
                grid: {
                    color: "#FFFFFF"
                },
                pointLabels: {
                    color: "#FFFFFF"
                },
                ticks: {
                    stepSize: 1,
                    color: "#FFFFFF",
                    backdropColor: "transparent"
                },
                suggestedMin: 0,
                suggestedMax: 5,
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: "#FFFFFF"
                }
            }
        }
    };

    return (
        <div className="chart-container">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '20px' }}>
                {playerValues.map((value, index) => (
                    <div key={index} style={{ marginBottom: '10px' }}>
                        <label>{data.labels[index]}: </label>
                        <input type="number" value={value} onChange={(e) => handleChangePlayerValues(index, e.target.value)} min="0" max="5" />
                        vs
                        <input type="number" value={comparisonValues[index]} onChange={(e) => handleChangeComparisonValues(index, e.target.value)} min="0" max="5" />
                    </div>
                ))}
                <div style={{ width: '600px', height: '600px' }}>
                    <Radar data={data} options={options}/>
                </div>
            </div>
        </div>
    );
};

export default InteractiveChart;
