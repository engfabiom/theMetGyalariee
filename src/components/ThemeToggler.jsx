import "../css/themeToggler.css";
import "../css/themeColors/themeDefault.css";
import "../css/themeColors/themeDark.css";
import "../css/themeColors/themeOriane.css";
import "../css/themeColors/themeFabio.css";
import "../css/themeColors/themePsychedelic.css";

const ThemeToggler = ({ colorTheme, setColorTheme, systemTheme }) => {
  const handleChange = (event) => {
    setColorTheme(event.target.value);
  };

  return (
    <div className="theme-toggler">
      <label htmlFor="theme-selector">Theme</label>
      <select name="theme-selector" id="theme-selector" onChange={handleChange} value={colorTheme}>
        <optgroup label="Standard">
          <option value={systemTheme}>System</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </optgroup>
        <optgroup label="Custom">
          <option value="oriane">Oriane</option>
          <option value="fabio">Fabio</option>
          <option value="psychedelic">Psychedelic</option>
        </optgroup>
      </select>
    </div>
  );
};

export default ThemeToggler;
