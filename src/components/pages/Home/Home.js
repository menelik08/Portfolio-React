import React from 'react';
import './Home.css';
import Menelik from '../../Assets/Menelik.png'

function Home() {
  return (
    <div>
      <h1 className="home">Menelik Agared, FullStack Developer</h1>
      <img className="col-2" id="img" src= {Menelik} alt="Mene"></img>
    <h5 className="description">
    Newly graduated FullStack Developer from OSU. Eager to get started in the feild.  
    </h5>
    <h4 className="description">
    Qualifications and Skills
    </h4>
    <ul className="skills">
        <li className="skills-list">
    <li>
        HTML
    </li>
    <li>
        CSS
    </li>
    <li>
        JavaScript
    </li>
    <li>
        React JS
    </li>
    <li>
        Node JS
    </li>
    </li>
    <li className="skills-list">
    <li>
        MongoDB
    </li>
    <li>
        SQL
    </li>
    
    <li>
       Web APIs
    </li>
    <li>
        NoSQL
    </li>
    <li>
        Express
    </li>
    </li>
    </ul>
    </div>
   
  );
}
export default Home;