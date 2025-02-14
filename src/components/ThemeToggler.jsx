import "../css/themeToggler.css";
import "../css/themeColors/themeDefault.css";
import "../css/themeColors/themeDark.css";
import "../css/themeColors/themeGreen.css";
import "../css/themeColors/themePastel.css";
import "../css/themeColors/themeFabio.css";
import "../css/themeColors/themePsychedelic.css";
import { useDispatch, useSelector } from "react-redux";
import {setColorTheme} from "../redux/rootActions"

const ThemeToggler = () => {

  const dispatch = useDispatch();

  const colorTheme = useSelector(reducer => reducer.colorThemeReducer);
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches? "dark" : "light";

  const handleChange = (event) => {
    dispatch(setColorTheme(event.target.value));
  };

  return (
    <div className="theme-toggler">
      <label htmlFor="theme-selector">Color Theme</label>
      <select name="theme-selector" id="theme-selector" onChange={handleChange} value={colorTheme}>
        <optgroup label="Standard">
          <option value={systemTheme}>System</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </optgroup>
        <optgroup label="Custom">
          <option value="green">Green</option>
          <option value="pastel">Pastel</option>
          <option value="fabio">Fabio</option>
          <option value="psychedelic">Psychedelic</option>
        </optgroup>
      </select>
    </div>
  );
};

export default ThemeToggler;
