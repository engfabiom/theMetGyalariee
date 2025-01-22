import React, { useEffect } from "react";

import ThemeToggler from "./components/ThemeToggler";
import useLocalStorage from "use-local-storage";

import Search from "./components/Search";

const App = () => {
  const themePreference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDarkTheme, setIsDarkTheme] = useLocalStorage("isDarkTheme",themePreference);

  useEffect(() => {
  }, []);

  return (
    <div id="app" className="app" data-theme={isDarkTheme ? "dark" : "light"}>
      <h1>MetExp : The Met Explorer</h1>
      <ThemeToggler setIsDarkTheme={setIsDarkTheme} isDarkTheme={isDarkTheme} />
      <Search />
    </div>
  );
};

export default App;
