import ThemeToggler from "./components/ThemeToggler";
import useLocalStorage from "use-local-storage";
import WebsiteHeader from "./components/WebsiteHeader";

import Search from "./components/Search";

const App = () => {
  const themePreference = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  const [colorTheme, setColorTheme] = useLocalStorage("colorTheme",themePreference);

  return (
    <div id="app" className="app" data-theme={colorTheme}>
      <ThemeToggler colorTheme={colorTheme} setColorTheme={setColorTheme} systemTheme={themePreference}/>
      <WebsiteHeader />
      <Search />
    </div>
  );
};

export default App;
