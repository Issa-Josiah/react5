function TemplateTwo() {

  const projects = [
    { id: 1, name: "Portfolio Website" },
    { id: 2, name: "React Dashboard" },
    { id: 3, name: "Todo App" }
  ];

  return (
    <div className="template-card">

      <h3>Template Two</h3>

      <h4>Projects</h4>

      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>

    </div>
  );
}

export default TemplateTwo;