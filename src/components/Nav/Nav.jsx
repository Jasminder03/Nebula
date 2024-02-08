import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  const [toggler, settoggler] = useState("");

  return (
    <nav className="navbar navbar-expand-lg mt-3 mb-3">
      <a href="#" className="ms-20">
        <img className="navbar-brand img" src="/vite.svg" />
      </a>

      <div className="sm:flex hidden">
        <div className="d-flex end_it font-roboto">
          <Link to="/" className="font-bold text-3xl pe-10 hover:text-black">
            Home
          </Link>
          <Link to="/services" className="font-bold text-3xl pe-10 hover:text-black">
            Services
          </Link>
          <Link to="/about" className="font-bold text-3xl pe-10 hover:text-black">
            About Us
          </Link>
          <Link to="/contact_us" className="font-bold text-3xl pe-10 hover:text-black">
            Contact Us
          </Link>
        </div>
      </div>
      <div className="sm:hidden flex ">
        <div className="d-flex flex-col">
          <button
            className="navbar-toggler mb-1 absolute left-6 top-24"
            onClick={() => settoggler(true)}
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          {toggler && (
            <div className="d-flex flex-col absolute top-36 left-0 right-0 pb-96 pt-36 bg-white li">
              <Link
                to="/"
                onClick={() => settoggler(false)}
                className="font-bold text-5xl pb-10 font-mono ms-8"
              >
                {" "}
                Home
              </Link>
              <Link
                to="/services"
                className="font-bold text-5xl pb-10 font-mono ms-8"
                onClick={() => settoggler(false)}
              >
                {" "}
                Services
              </Link>
              <Link
                to="/about"
                className="font-bold text-5xl pb-10 font-mono ms-8"
                onClick={() => settoggler(false)}
              >
                {" "}
                About Us
              </Link>
              <Link
                to="/contact_us"
                className="font-bold text-5xl pb-10 font-mono ms-8"
                onClick={() => settoggler(false)}
              >
                {" "}
                Contact Us
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
