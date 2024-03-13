// src/pages/Tasks.jsx
import React from 'react';
import NavBar from '../components/navBar'; // Ajustez le chemin selon votre structure
import Footer from '../components/footer'; // Ajustez le chemin selon votre structure
import KanbanBoard from '../components/KanbanBoard'; // Ajustez le chemin selon votre structure
import './Tasks.css'; // Optionnel, si vous souhaitez appliquer des styles spécifiques à la page

const Tasks = () => {
    return (
        <div className="tasks-page">
            <main className="tasks-content">
                <KanbanBoard />
            </main>
        </div>
    );
};

export default Tasks;
