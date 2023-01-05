import React from "react";
import { useNavigate } from "react-router-dom";

const Project = ({project}) => {
    const {id, name, img, description} = project;
    const navigate = useNavigate();
    const navigateToProjectDetails = id =>{
        navigate(`/project/${id}`);
    }
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="" className="rounded-xl w-60" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{description.slice(0,300)}</p>
        <button onClick={() => navigateToProjectDetails(id)} className="btn btn-primary">Explore More</button>
      </div>
    </div>
  );
};

export default Project;
