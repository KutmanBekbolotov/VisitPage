import React from "react";
import SideBar from "../submodules/SideBar";
import kutman from "../../assets/Photos/kutman.png";
import "./HomePage.css";

function HomePage() {
  return (
    <div>
      <SideBar />
      <h1>HomePage</h1>
      <div className="cards-container">
        <article>
          <figure>
            <img src={kutman} alt="Kutman" />
          </figure>
          <h2>Mike's mindful morning</h2>
          <p>Course • Mindful Mike</p>
        </article>
        <article>
          <figure>
            <img src="https://assets.codepen.io/605876/person.png" alt="Person" />
          </figure>
          <h2>John's journey to calm</h2>
          <p>Course • Peaceful John</p>
        </article>
      </div>
    </div>
  );
}

export default HomePage;
