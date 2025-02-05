import "../css/themeToggler.css";
import "../css/themeColors/themeDark.css";
import "../css/themeColors/themePsychedelic.css";
import "../css/themeColors/themeFabio.css";
import "../css/themeColors/themeOriane.css";

const ThemeToggler = ({ colorTheme, setColorTheme, systemTheme }) => {
  const handleChange = (event) => {
    // console.log(event.target.value);
    setColorTheme(event.target.value);
  };

  return (
    <div className="theme-toggler">
      <label htmlFor="theme-selector">Theme</label>
      <select name="theme-selector" id="theme-selector" onChange={handleChange}>
        <optgroup label="Standard">
          <option value={systemTheme}>System</option>
          <option value="light" selected={colorTheme === "light"}>Light</option>
          <option value="dark" selected={colorTheme === "dark"}>Dark</option>
        </optgroup>
        <optgroup label="Custom">
          <option value="oriane" selected={colorTheme === "Oriane"}>Oriane</option>
          <option value="fabio" selected={colorTheme === "Fabio"}>Fabio</option>
          <option value="psychedelic" selected={colorTheme === "psychedelic"}>Psychedelic</option>
        </optgroup>
      </select>
    </div>
  );
};

export default ThemeToggler;
