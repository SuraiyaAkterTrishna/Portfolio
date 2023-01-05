import useProjects from '../../hooks/useProjects';
import Project from '../Project/Project';

const Projects = () => {
    const [projects] = useProjects();
    return (
        <div className='bg-gray-100 p-12'>
            <h1 className='text-5xl font-bold text-center pb-8'>My Projects</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-12 my-5'>
                {
                    projects.map(project => <Project
                    key={project.id}
                    project={project}
                    ></Project>)
                }
            </div>
        </div>
    );
};

export default Projects;