import skill1 from '../assets/images/skills/skill1.png';
import skill2 from '../assets/images/skills/skill2.png';
import skill3 from '../assets/images/skills/skill3.png';

export default function SkillCardList() {
  return (
    <div className="skill-cardlist">
      <div className="card">
        <img src={skill1} alt="" />
        <h4>Identify the <span className="orange-text">Course</span></h4>
      </div>
      <div className="card">
        <img src={skill2} alt="" />
        <h4>Request a <span className="orange-text">Call</span> and <span className="orange-text">Register</span></h4>
      </div>
      <div className="card">
        <img src={skill3} alt="" />
        <h4><span className="orange-text">Customize</span> the Course adn Start <span className="orange-text">Learning</span></h4>
      </div>
    </div>
  );
}