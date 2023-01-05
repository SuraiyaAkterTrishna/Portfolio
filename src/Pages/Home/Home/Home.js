import React, { useEffect, useState } from "react";
import Services from "../../../Services/Services";
import About from "../../About/About";
import Contact from "../../Contact/Contact";
import Project from "../../Project/Project";
import Banner from "../Banner/Banner";


const Home = () => {
  const [projects, setProjects] = useState([]);
    useEffect( () => {
        fetch('projects.json')
        .then(res=> res.json())
        .then(data => setProjects(data));
    } , [])
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <div className='bg-gray-100 p-12'>
            <h1 className='text-5xl font-bold text-center pb-8'>My Projects</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-12 my-5'>
                {
                    projects.map(project => <Project
                    key={project.id}
                    project={project}
                    ></Project>).slice(0,3)
                }
            </div>
      </div>
      <Contact></Contact>
    </div>
  );
};

export default Home;
