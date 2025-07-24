import React from "react";
import hero from "../src/assets/hero.png";
import "../home/Home.css";

function Home() {
  return (
    <div>
      <div className="container">
        <div className="left">
          <img src={hero} alt="" className="hero-img" />
        </div>
        <div className="right">
          <h1 className="title">Welcome to our website</h1>
          <p className="fs-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            enim iusto omnis facilis odio nemo dolore delectus veniam rem
            quibusdam? Asperiores reprehenderit possimus iusto, earum quibusdam
            voluptate quod molestiae nulla!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
