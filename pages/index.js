import React from 'react';
import Navbar from './components/Navbar';

const Home = () => {
  return (
    
    <div className="bg-secondary min-h-screen flex flex-col items-center justify-between">
  
      <main className="flex-grow flex items-center justify-center">
      <Navbar/>
        <div className="bg-white p-8 rounded shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-700">Welcome to EchoPad</h2>
          <p className="mt-4 text-gray-600">Your one-stop solution for all your echo needs.</p>
        </div>
      </main>
      <footer className="bg-white w-full p-4 shadow-md">
        <p className="text-center text-gray-600">&copy; 2024 EchoPad. All rights reserved.</p>
      </footer>
  
    </div>
  );
};

export default Home;
