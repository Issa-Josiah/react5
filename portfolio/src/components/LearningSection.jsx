import ContactForm from "./ContactForm";

function LearningSection() {

  const topics = [
    "React Lists",
    "Keys in React",
    "Forms",
    "Textarea",
    "Select Dropdown",
    "Checkbox",
    "Radio Buttons",
    "useState Hook"
  ];

  return (
    <div className="learning">

      <h2>What I Learned in React</h2>

      <ul>
        {topics.map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </ul>

      <ContactForm />

    </div>
  );
}

export default LearningSection;