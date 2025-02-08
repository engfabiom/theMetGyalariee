import { useSelector } from "react-redux";

import ThemeToggler from "./components/ThemeToggler";
import WebsiteHeader from "./components/WebsiteHeader";
import Search from "./components/Search";
import Footer from "./components/Footer";

const App = () => {
  const colorTheme = useSelector((reducer) => reducer.colorThemeReducer);

  return (
    <>
      <div id="app" className="app" data-theme={colorTheme}>
        <ThemeToggler />
        <WebsiteHeader />
        <Search />
        <Footer />
      </div>
    </>
  );
};

export default App;
