import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQueries";
import Navbar from "./Components/Navbar";
import Landing from "./Components/Landing";
import { Skills } from "./Components/Skills";
import { Projects } from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  const [selectedPages, setSelectedPage] = useState("home");
  const isAboveMediumScreens = useMediaQuery("(min-width : 1060px)");

  return (
    <div className="app bg-primary ">
      <Navbar selectedPage={selectedPages} setSelectedPage={setSelectedPage} />
      <Landing setSelectedPage={setSelectedPage} />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
