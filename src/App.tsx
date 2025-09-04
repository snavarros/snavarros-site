import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';

const App: React.FC = () => {
  return (
    <div className="bg-[#F7F6F0] min-h-screen font-sans">
      <Header />
      <Hero />
    </div>
  );
};

export default App;
