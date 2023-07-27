import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQueries";
import Navbar from "./Components/Navbar";
import Landing from "./Components/Landing";
import { Skills } from "./Components/Skills";

function App() {
  const [selectedPages, setSelectedPage] = useState("home");
  const isAboveMediumScreens = useMediaQuery("(min-width : 1060px)");

  return (
    <div className="app bg-primary ">
      <Navbar selectedPage={selectedPages} setSelectedPage={setSelectedPage} />
      <Landing setSelectedPage={setSelectedPage} />
      <Skills />
    </div>
  );
}

export default App;
