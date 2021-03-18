import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/layout";

export default function FitPal() {
  return (
    <Layout>
      <section className="max-w-7xl mx-auto flex flex-col justify-center items-center min-h-screen">
        <div className="bg-gray-900 shadow-2xl p-6 flex flex-col justify-center items-center rounded-xl">
          <h1 className="font-serif font-bold">FitPal</h1>
          <p className="text-white text-2xl">Stay Healthy, Stay Fit</p>
          <Link
            className="px-4 py-1 text-white bg-indigo-600 rounded-xl shadow-2xl hover:bg-indigo-800 transition"
            to="/layan"
          >
            Back
          </Link>
        </div>
      </section>
    </Layout>
  );
}
