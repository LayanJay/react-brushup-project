import React from "react";
import { Link } from "react-router-dom";

function index() {
  return (
    <>
      <div className="prose">
        <h1>Sankhaja</h1>
        <h3>Projects</h3>
        <ul>
          <li>
            <Link to="/sankhaja/bmi-calculator">BMI Calculator</Link>
          </li>
          <li>
            <Link to="/sankhaja/calculator">Calculator</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default index;
