import React from 'react';


export const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center px-8 py-4 my-6 mx-4 bg-black text-white h-[55px] rounded-md ">
      <div className="text-xl font-bold">SNAVARROS</div>
      <nav className="flex gap-6">
        <a href="#" className="hover:underline">Blog</a>
        <a href="#" className="hover:underline">Sitios</a>
        <a href="#" className="hover:underline">Soluciones</a>
        <a href="#" className="hover:underline">About Me</a>        
      </nav>
      <div className="flex gap-4">
        <button className="border border-white rounded px-4 py-1">Contacto</button>
        <button className="bg-white text-black rounded px-4 py-1">Whatsapp</button>
      </div>
    </header>
  );
};
