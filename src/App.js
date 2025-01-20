import React, { useState, useEffect } from "react";

import ThemeToggler from "./components/ThemeToggler";
import useLocalStorage from "use-local-storage";

import { useSelector, useDispatch } from "react-redux";
import { theMetGetAllObjects, theMetGetDepartments } from "./redux/theMet/actions";

import Search from "./components/Search";

console.clear();

const App = () => {
  const themePreference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDarkTheme, setIsDarkTheme] = useLocalStorage("isDarkTheme",themePreference);

  const { allObjects } = useSelector(rootReducer => rootReducer.theMetReducer.allObjectsReducer);
  const { departments } = useSelector(rootReducer => rootReducer.theMetReducer.departmentsReducer);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(theMetGetAllObjects());
    dispatch(theMetGetDepartments());
  }, []);

  console.log(allObjects, departments);

  return (
    <div id="app" className="app" data-theme={isDarkTheme ? "dark" : "light"}>
      <h1>MetExp : The Met Explorer</h1>
      <ThemeToggler setIsDarkTheme={setIsDarkTheme} isDarkTheme={isDarkTheme} />
      <Search />
    </div>
  );
};

export default App;
