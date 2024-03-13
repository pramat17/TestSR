import React from 'react';
import backgroundImage from './images/bg.png';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./components/navBar";
import Footer from "./components/footer";

// Corrigez l'importation ici pour un export par défaut
import Suivi from './pages/Suivi';
import Messagerie from './pages/Messagerie';
import Tasks from './pages/Tasks';
import ContactsPage from "./pages/ContactsPage";

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                // Mettez à jour la syntaxe pour React Router v6
                <Route path="/suivi" element={<Suivi />} />
                {/* Remplacez `component` par `element` et utilisez JSX */}
                <Route path="/messagerie" element={<Messagerie />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/contact" element ={<ContactsPage/>} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
