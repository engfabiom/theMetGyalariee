import ThemeToggler from "./components/ThemeToggler";
import useLocalStorage from "use-local-storage";
import WebsiteHeader from "./components/WebsiteHeader";

import Search from "./components/Search";

const App = () => {
  const themePreference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDarkTheme, setIsDarkTheme] = useLocalStorage("isDarkTheme",themePreference);

  return (
    <div id="app" className="app" data-theme={isDarkTheme ? "dark" : "light"}>
      <ThemeToggler setIsDarkTheme={setIsDarkTheme} isDarkTheme={isDarkTheme} />
      <WebsiteHeader />
      <Search />
    </div>
  );
};

export default App;
