import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const Hero = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xs-10 col-md">
          <div className="content">
            <p className="text-6xl mb-2">Welcome To</p>
            <h1 className="font-bold text-7xl mb-10">Nebula Nexus Innovations</h1>
            <h3 className="font-medium text-3xl mb-4">
              "Welcome to our educational hub, where we believe in a hands-on
              approach to learning. Our programs go beyond theory, focusing on
              practical knowledge that prepares students for real-world
              challenges. Immerse yourself in an educational experience that
              empowers you with the skills needed to thrive in today's dynamic
              industries."
            </h3>
            <button className="black_bt">About Us</button>
          </div>
        </div>
        <div className="col-xs-10 col-md">
          <img src="/student.jpg" className="student" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
