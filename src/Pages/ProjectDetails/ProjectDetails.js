import React from "react";
import { useParams } from "react-router-dom";
import useProjects from "../../hooks/useProjects";

const ProjectDetails = () => {
  const { id } = useParams();
  const [projects] = useProjects();

  const project = projects.find((p) => p.id == id);
  return (
    <div className="bg-gray-100 p-12">
      <h1>My Project Details</h1>
      <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 gap-12 my-5 justify-items-center">
        <div className="card card-compact w-96 bg-base-100 shadow-xl ">
          <figure>
            <img src={project?.img1} alt="" />
          </figure>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={project?.img2} alt="" />
          </figure>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={project?.img3} alt="" />
          </figure>
        </div>
      </div>
      <div className="card lg:card-side bg-base-100 shadow-xl container mx-auto">
        <div className="card-body">
          <h2 className="text-4xl font-bold text-center">{project?.name}</h2>
          <p>{project?.description}</p>
          <h2 className="text-xl font-bold">Features:</h2>
          {
            project?.details.map((detail,index) =><li key={index}>{detail.step}</li>)
          }
          <h2 className="text-xl font-bold">Technology:</h2>
          <span>{project?.tools}</span>
          <h2 className="text-xl font-bold">Live Link:</h2>
          <a href={project?.link}>{project?.link}</a>
          <h2 className="text-xl font-bold">Github Link(Client):</h2>
          <a href={project?.githubClient}>{project?.githubClient}</a>
          
          {project?.githubServer && <div>
                <h2 className="text-xl font-bold">Github Link(Server):</h2>
                <a href={project?.githubServer}>{project?.githubServer}</a>
            </div>}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
