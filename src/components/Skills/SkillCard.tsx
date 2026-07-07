import "./Skills.css";

type SkillCardProps = {
  title: string;
  items: string[];
};

function SkillCard({ title, items }: SkillCardProps) {
  return (
    <div className="skill-card">
      <h3>{title}</h3>

      <ul>
        {items.map((item) => (
          <li key={item}>✓ {item}</li>
        ))}
      </ul>
    </div>
  );
}

export default SkillCard;