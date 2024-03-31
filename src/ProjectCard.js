import './ProjectCard.css';

function ProjectCard(props) {
    const image = props.image;
    const title = props.title;
    const text = props.text;
    const demoLink = props.demoLink;
    const githubLink = props.githubLink;
    const idVal = props.idVal;

    return (
        <div className="projectCard">
            <img src={image} alt="Could Not Load"></img>
            <div className="projectCardContent">
                <h3 className="title">{title}</h3>
                <p className="text">{text}</p>
                <a href={demoLink} className="btn" target="_blank" rel="noopener noreferrer" id={"btn-" + idVal}>Demo</a>
                <a href={githubLink} className="btn" target="_blank" rel="noopener noreferrer" id={"btn-" + idVal}>Github</a>
            </div>
        </div>
    );
}



export default ProjectCard;