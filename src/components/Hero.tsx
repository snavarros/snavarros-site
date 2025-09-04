import React from 'react';
import DateDisplay from './DateDisplay';

export const Hero: React.FC = () => {
  return (
    <section className="flex justify-between px-16 py-16">
      {/* Texto principal */}
      <div className="max-w-lg">
        <span className="text-sm uppercase tracking-widest">Me Presento</span>
        <h1 className="text-6xl font-bold mt-2">
          Sebastián  <br />
          Navarro S. <br />
          <span className="bg-accent">CS + Data + IA.</span>
        </h1>
        <p className="mt-4 text-gray-700">         
          <strong>Ingeniero</strong> en Ciencias de la Computación y <strong>Magíster</strong> en Ciencia de Datos, explorando IA y nuevas tecnologías para transformar datos en información valiosa.
        </p>
        <button className="mt-6 px-6 py-3 bg-black text-white rounded">Get Started →</button>

        <div className="flex gap-16 mt-12">
          <div>
            <p className="text-3xl font-bold">40K+</p>
            <p className="text-gray-700">
              <strong>Active users</strong> using the premium version of the application worldwide.
            </p>
          </div>
          <div>
            <p className="text-3xl font-bold">80+</p>
            <p className="text-gray-700">
              <strong>Additional features</strong> to improve travels experience — better solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Panel de tickets */}
      <div className="flex flex-col gap-4">
        <div className="bg-black text-white p-4 rounded-lg">
          <p>Information details</p>
          <h3 className="mt-2 font-bold">Sebastián Navarro</h3>
        </div>
        <div className="bg-black text-white p-4 rounded-lg">
          <DateDisplay/>
        </div>
        <div className="bg-grayTicket p-4 rounded-lg border border-white border-dashed">
          <p>JKF</p>
          <p>New York</p>
          <p>7:05PM</p>
        </div>
        <div className="bg-white p-4 rounded-lg">
          <p>Ticket Flight</p>
          <p>19 July 2022</p>
          <div className="mt-2 border-t border-black pt-2">||||||| BARCODE |||||||</div>
        </div>
      </div>
    </section>
  );
};
