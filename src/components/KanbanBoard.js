import React, { useState } from 'react';
import './KanbanBoard.css';

// Structure initiale pour les tâches réparties dans les différentes colonnes
const initialTasks = {
    toDo: [
        { id: 't1', title: "Tâche 1", description: "Description de la tâche 1", assignedTo: "Alice" },
        { id: 't2', title: "Tâche 2", description: "Description de la tâche 2", assignedTo: "Bob" },
    ],
    inProgress: [
        { id: 't3', title: "Tâche 3", description: "Description de la tâche 3", assignedTo: "Charlie" },
    ],
    done: [
        { id: 't4', title: "Tâche 4", description: "Description de la tâche 4", assignedTo: "Dana" },
    ],
};

const KanbanBoard = () => {
    const [tasks, setTasks] = useState(initialTasks);

    const onDragStart = (e, taskId) => {
        e.dataTransfer.setData("taskId", taskId);
    };

    const onDrop = (e, column) => {
        const taskId = e.dataTransfer.getData("taskId");
        const task = Object.values(tasks).flat().find(task => task.id === taskId);

        if (task) {
            setTasks(prev => {
                // Enlever la tâche de sa colonne actuelle
                const newTasks = {
                    toDo: prev.toDo.filter(t => t.id !== taskId),
                    inProgress: prev.inProgress.filter(t => t.id !== taskId),
                    done: prev.done.filter(t => t.id !== taskId),
                };
                // Ajouter la tâche à la nouvelle colonne
                newTasks[column].push(task);
                return newTasks;
            });
        }
    };

    const onDragOver = (e) => {
        e.preventDefault();
    };

    return (
        <div className="kanban-board">
            {Object.entries(tasks).map(([columnName, columnTasks]) => (
                <div
                    key={columnName}
                    className="kanban-column"
                    onDrop={e => onDrop(e, columnName)}
                    onDragOver={onDragOver}
                >
                    <h3>{columnName}</h3>
                    {columnTasks.map(task => (
                        <div
                            key={task.id}
                            className="task-card"
                            draggable
                            onDragStart={e => onDragStart(e, task.id)}
                        >
                            <h4>{task.title}</h4>
                            <p>{task.description}</p>
                            <span>Assigné à: {task.assignedTo}</span>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default KanbanBoard;
