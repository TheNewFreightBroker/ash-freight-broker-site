
import React from 'react';
import { Mail, Phone, Ship } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold text-blue-900">PortLink Freight Solutions</h1>
        <p className="text-lg text-gray-700 mt-2">Your remote freight brokerage partner in Durban and beyond</p>
      </header>

      <section className="grid md:grid-cols-3 gap-6 mt-10">
        {[
          ['Freight Brokerage', 'Connecting shippers with reliable carriers across sea, road, and rail.'],
          ['Customs & Documentation', 'Assistance with cross-border shipping paperwork and customs clearance.'],
          ['Port & Drayage Coordination', 'Handling the first and last-mile container logistics around Durban Port.']
        ].map(([title, desc]) => (
          <div key={title} className="p-6 bg-white rounded-xl shadow-md">
            <Ship className="text-blue-700 w-8 h-8 mb-4" />
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-600">{desc}</p>
          </div>
        ))}
      </section>

      <section className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-blue-800">Get in Touch</h2>
        <p className="text-gray-600 mt-2">Let’s discuss how we can support your shipping needs</p>
        <div className="mt-6 flex flex-col md:flex-row justify-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg">
            <Mail className="w-5 h-5" /> info@portlinkfreight.co.za
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg">
            <Phone className="w-5 h-5" /> +27 82 123 4567
          </button>
        </div>
      </section>

      <footer className="text-center mt-16 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} PortLink Freight Solutions. All rights reserved.
      </footer>
    </div>
  );
}
