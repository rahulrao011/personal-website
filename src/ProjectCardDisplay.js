import './ProjectCardDisplay.css';
import ProjectCard from './ProjectCard';

function ProjectCardDisplay(props) {
    const projects = props.projects;

    return (
        <div className="projectCardDisplay">
            {projects.map((project) => (
                <ProjectCard key={project.id} idVal={project.id} image={project.image} title={project.title} text={project.text} link={project.link}/>
            ))}
        </div>
    );
}



export default ProjectCardDisplay;