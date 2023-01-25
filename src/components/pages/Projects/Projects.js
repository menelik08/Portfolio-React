import React from 'react';
import './Projects.css';
import Zodiac from '../../Assets/Zodiac.png'
import Sneakers from '../../Assets/Sneakers.png'
import Misogi from '../../Assets/Misogi.png'
function Projects() {
    const projectsArray = [
        {
            title:"Zodiac Playlist",
            desc:"Team effort to design an site that will give you your astrological sign, along with a playlist.",
            img: Zodiac,
            github:"https://github.com/LindsayK82/Group-Collab-One",
            deployed:" https://lindsayk82.github.io/Group-Collab-One/"
        },
        {
            title:"SneakersPeak",
            desc:"Team project with the goal to develop a site that lets user get information about the latest sneaker trends and communicate with other users.",
            img: Sneakers,
            github:"https://github.com/menelik08/Group-1-pro-2",
            deployed:" https://safe-lake-28734.herokuapp.com/"
        },
        {
          title:"Misogi",
          desc:"Team project using React.js to raise awarness about ocean polution and provide a possible solution to the problem.",
          img: Misogi,
          github:"https://github.com/LindsayK82/Misogi",
          deployed:"https://misogi.herokuapp.com/"
      },
    ] 
  return (
    
      <div>
      <h1 class="projects-header">Projects</h1>
      <div 
      class="projects-container"
      style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
     {projectsArray.map(project =>(
        <div class="card" style= {{width: "18rem", border:'solid', margin: '2%', color: 'whitesmoke'}}>
        <img src={project.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{project.title}</h5>
          <p className="card-text">{project.desc}</p>
          <div style={{margin: '2%'}}>
          <a href={project.github} className="btn btn-primary">Github Repo</a>
          </div>
          <a href={project.deployed} className="btn btn-primary">Deployed Link</a>
          
        </div>
      </div>
     ))}
     </div>
    </div>
  );
}
export default Projects;