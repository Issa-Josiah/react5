import TemplateOne from "./TemplateOne";
import TemplateTwo from "./TemplateTwo";

function TemplateSwitcher({ template, setTemplate }) {

  return (
    <div className="template-section">

      <h2>Select Portfolio Template</h2>

      <button onClick={() => setTemplate("one")}>
        Template 1
      </button>

      <button onClick={() => setTemplate("two")}>
        Template 2
      </button>

      <div className="template-view">
        {template === "one" ? <TemplateOne /> : <TemplateTwo />}
      </div>

    </div>
  );
}

export default TemplateSwitcher;