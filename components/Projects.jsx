import '../styles/Projects.css';
import ProjectCard from './ProjectCard'
import { projects } from '../data'

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-heading">MY PROJECTS</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard 
            key={project.id} 
            title={project.title} 
            description={project.description} 
            techStack={project.techStack} 
            link={project.link} 
          />
        ))}
      </div>
    </section>
  )
}
