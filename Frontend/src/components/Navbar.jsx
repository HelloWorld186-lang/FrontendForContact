import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link to="/" className="flex items-center py-4 px-2">
                <span className="font-semibold text-white text-lg">Contact Manager</span>
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Link to="/" className="py-2 px-2 text-white hover:text-gray-200 transition duration-300">Contacts</Link>
            <Link to="/create" className="py-2 px-2 font-medium text-white bg-blue-500 rounded hover:bg-blue-400 transition duration-300">Add Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;