function TemplateOne() {

  const skills = ["React", "JavaScript", "HTML", "CSS"];

  return (
    <div className="template-card">

      <h3>Template One</h3>
      <p>Frontend Developer</p>

      <h4>Skills</h4>

      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

    </div>
  );
}

export default TemplateOne;