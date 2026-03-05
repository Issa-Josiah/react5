import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import TemplateSwitcher from "./components/TemplateSwitcher";
import LearningSection from "./components/LearningSection";

function App() {

  const [theme, setTheme] = useState("light");
  const [template, setTemplate] = useState("one");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>

      <Navbar toggleTheme={toggleTheme} theme={theme} />

      <TemplateSwitcher template={template} setTemplate={setTemplate} />

      <LearningSection />

    </div>
  );
}

export default App;