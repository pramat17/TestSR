import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./components/navBar";
import Footer from "./components/footer";

// Corrigez l'importation ici pour un export
import Suivi from './pages/Suivi';
import Messagerie from './pages/Messagerie';
import Tasks from './pages/Tasks';
import ContactsPage from "./pages/ContactsPage";

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/suivi" element={<Suivi />} />
                <Route path="/messagerie" element={<Messagerie />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/contact" element ={<ContactsPage/>} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
