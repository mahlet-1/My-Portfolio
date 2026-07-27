export default function ProjectCard(props) {
  return (
    <div className="project-card">
      <h3>{props.title}</h3>
      <ul>
        <li>{props.description}</li>
        <li>Tech Stack: {props.techStack}</li>
        <li>
          Link: <a href={props.link} target="_blank" rel="noopener noreferrer">View Project</a>
        </li>
      </ul>
    </div>
  )
}