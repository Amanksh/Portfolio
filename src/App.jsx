import { useState } from "react";
import useMediaQuery from "./hooks/useMediaQueries";
import Navbar from "./Components/Navbar";
import Landing from "./Components/Landing";

function App() {
  const [selectedPages, setSelectedPage] = useState("home");
  const isAboveMediumScreens = useMediaQuery("(min-width : 1060px)");

  return (
    <div className="app bg-primary ">
      <Navbar selectedPage={selectedPages} setSelectedPage={setSelectedPage} />
      <Landing setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
