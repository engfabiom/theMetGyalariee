import "../css/themeToggler.css";
import "../css/themeColors/themeDark.css";
import "../css/themeColors/themeDefault.css";
import "../css/themeColors/themePsyco.css"; 


const ThemeToggler = ({ setIsDarkTheme, isDarkTheme }) => {
    return (
      <div className="theme-toggler">
        <label htmlFor="checkbox" >
          <input
            type="checkbox"
            id="checkbox"
            onChange={() => setIsDarkTheme((prev) => !prev)}
            checked={isDarkTheme}
          />
          {isDarkTheme ? "Psycho" : "Light"}
          <span></span>
        </label>
      </div>
    );
  };
  
  export default ThemeToggler;