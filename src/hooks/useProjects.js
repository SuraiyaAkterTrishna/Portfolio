import { useEffect, useState } from 'react';

const useProjects = () => {
    const [projects, setProjects] = useState([]);
    useEffect( () => {
        fetch("https://toolkits.up.railway.app/project")
        .then(res => res.json())
        .then(data => setProjects(data))
    },[])
    return ([projects]);
};

export default useProjects;