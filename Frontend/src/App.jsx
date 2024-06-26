import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ContactList from './components/ContactList';
import CreateContact from './components/CreateContact';
import UpdateContact from './components/UpdateContact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<ContactList />} />
            <Route path="/create" element={<CreateContact />} />
            <Route path="/update/:id" element={<UpdateContact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;