import React from 'react';
import InteractiveChart from '../components/InteractiveChart';
import './suivi.css'; // Assurez-vous de créer ce fichier CSS

const Suivi = () => {
    return (
        <div className="suivi-page">
            <div className="content">
                <h1>Suivi de Performance</h1>
                <InteractiveChart />
            </div>
        </div>
    );
};

export default Suivi;
