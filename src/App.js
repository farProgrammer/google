import React, { useState } from "react";

import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Routes } from "./components/Routes";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="dark:bg-green-900 bg-green-100 dark:text-green-200 black min-h-screen">
        <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
        <Routes />
        <Footer />
      </div>
    </div>
  );
};

export default App;
