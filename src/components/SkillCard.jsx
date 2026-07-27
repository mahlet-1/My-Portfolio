export default function SkillCard(props) {
  return (
    <div className="skill-card">
      <h3>{props.name}</h3>
      <p>Level: {props.level}</p>
    </div>
  )
}