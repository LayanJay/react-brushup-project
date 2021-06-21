import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/layout";

function index() {
  return (
    <Layout>
      <section className="max-w-7xl mx-auto min-h-screen flex flex-col justify-center items-center">
        <div className="bg-gray-900 shadow-2xl p-6 flex flex-col justify-center items-center rounded-xl">
          <h1 className="font-serif font-bold">Layan</h1>
          <div className="list-none flex flex-col text-xl">
            <p className="underline text-gray-200 hover:no-underline text-2xl hover:text-white transition-all transform hover:scale-110">
              <Link to="/layan/fitpal">FitPal</Link>
            </p>
          </div>
          <Link
            className="px-4 py-1 text-white bg-indigo-600 rounded-xl shadow-2xl hover:bg-indigo-800 transition"
            to="/"
          >
            Home
          </Link>
        </div>
      </section>
    </Layout>
  );
}

export default index;
