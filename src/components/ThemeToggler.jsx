import "../css/themeToggler.css";

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
          {isDarkTheme ? "Dark" : "Light"} Theme
          <span></span>
        </label>
      </div>
    );
  };
  
  export default ThemeToggler;