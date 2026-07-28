import '../styles/MySkills.css';
import SkillCard from './SkillCard'
import { skills } from '../data.js';
export default function MySkills() {
  return (
    <section id="skills">
      <h2 className="section-heading">MY SKILLS</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <SkillCard 
            key={skill.id} 
            name={skill.name} 
            level={skill.level} 
          />
        ))}
      </div>
    </section>
  )
}

