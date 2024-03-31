import './ProjectCardDisplay.css';
import ProjectCard from './ProjectCard';

function ProjectCardDisplay(props) {
    const projects = props.projects;

    return (
        <div className="projectCardDisplay">
            {projects.map((project) => (
                <ProjectCard key={project.id} idVal={project.id} image={project.image} title={project.title} text={project.text} demoLink={project.demoLink} githubLink={project.githubLink}/>
            ))}
        </div>
    );
}



export default ProjectCardDisplay;