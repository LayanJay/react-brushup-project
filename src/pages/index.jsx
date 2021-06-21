import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="bg-gray-800 h-screen flex flex-col justify-center items-center">
      <h1 className="font-bold text-7xl text-white font-mono">Coding Bears</h1>
      <ul className="flex my-4 font-sans text-white">
        <li className="mx-4 underline text-gray-200 hover:text-white hover:no-underline transition">
          <Link to="/sankhaja">Sankhaja</Link>
        </li>
        <li className="mx-4 underline text-gray-200 hover:text-white hover:no-underline transition">
          <Link to="/layan">Layan</Link>
        </li>
        <li className="mx-4 underline text-gray-200 hover:text-white hover:no-underline transition">
          <Link to="/menaka">Menaka</Link>
        </li>
        <li className="mx-4 underline text-gray-200 hover:text-white hover:no-underline transition">
          <Link to="/navindu">Navindu</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
