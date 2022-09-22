import { useEffect, useState } from 'react';

const useProjects = () => {
    const [projects, setProjects] = useState([]);
    useEffect( () => {
        fetch("https://thawing-mesa-46610.herokuapp.com/project")
        .then(res => res.json())
        .then(data => setProjects(data))
    },[])
    return ([projects]);
};

export default useProjects;