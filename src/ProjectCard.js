import './ProjectCard.css';

function ProjectCard(props) {
    const image = props.image;
    const title = props.title;
    const text = props.text;
    const link = props.link;
    const idVal = props.idVal;

    return (
        <div className="projectCard">
            <img src={image}></img>
            <div className="projectCardContent">
                <h3 className="title">{title}</h3>
                <p className="text">{text}</p>
                <a href={link} className="btn" target="_blank" rel="noopener noreferrer" id={"btn-" + idVal}>Demo</a>
                <a href={link} className="btn" target="_blank" rel="noopener noreferrer" id={"btn-" + idVal}>Github</a>
            </div>
        </div>
    );
}



export default ProjectCard;