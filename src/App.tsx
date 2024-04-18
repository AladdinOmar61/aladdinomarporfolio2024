import {
  Grommet,
} from "grommet";
import joujou from "./assets/joujou.jpg";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Contact from "./Components/Contact";
import TopBanner from "./Components/TopBanner";
import NavBar from "./Components/NavBar";

function App() {
  const theme = {
    global: {
      colors: {
        brand: "#FFFFFF",
        focus: "#FF0000",
      },
      font: {
        family: "Rajdhani",
        size: "18px",
        height: "20px",
      },
      background: {
        image: joujou,
        size: "cover",
        position: "center",
      },
    },
  };

  return (
    <Grommet theme={theme} full style={{ minHeight: "100vh" }}>
      <NavBar />
      <TopBanner />
      <Projects />
      <About />
      <Contact />
    </Grommet>
  );
}

export default App;
