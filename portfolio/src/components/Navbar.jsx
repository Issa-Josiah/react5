function Navbar({toggleTheme, theme}) {

  return (
    <nav className="navbar">

      <h2>My React Portfolio</h2>

      <button className="theme-btn" onClick={toggleTheme}>
        {theme === "light" ? "Dark Mode " : "Light Mode "}
      </button>

    </nav>
  );
}

export default Navbar;