import {
  Box,
  Grommet,
  Heading,
  Nav,
  Anchor,
  Paragraph,
  Footer,
  Text,
} from "grommet";
import joujou from "./assets/joujou.jpg";
import Projects from "./Projects";

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
      <Nav
        direction="row"
        justify="evenly"
        align="center"
        style={{
          width: "100%",
          height: 70,
          backgroundColor: "black",
          color: "white",
        }}
      >
        <Anchor size="xlarge">Projects</Anchor>
        <Anchor size="xlarge">About Me</Anchor>
      </Nav>
      <Box>
        <Box style={{ width: "100%", height: "25vh" }}>
          <Heading
            level={1}
            style={{ fontSize: 100 }}
            textAlign="center"
            alignSelf="center"
          >
            Aladdin Omar
          </Heading>
        </Box>
      </Box>
      <Projects />
      <Box pad="medium">
        <Box style={{ width: "100%", height: "500px" }}>
          <Heading level={1} textAlign="center" alignSelf="center">
            About Me
          </Heading>
          <Box
            direction="row-responsive"
            align="center"
            justify="around"
            flex="grow"
          >
            <Box
              style={{ height: 300, width: 300, border: "solid black 1px" }}
            ></Box>
            <Paragraph
              responsive={true}
              style={{ fontSize: 30, textAlign: "center" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Paragraph>
            <Paragraph
              responsive={true}
              style={{ fontSize: 30, textAlign: "center" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Paragraph>
          </Box>
        </Box>
      </Box>
      <Footer
        style={{ width: "100vw" }}
        background="#222222"
        pad="medium"
        justify="center"
        align="center"
        direction="column"
        gap="small"
      >
        <Heading>Contact Me</Heading>
        <Box
          direction="row"
          justify="evenly"
          align="center"
          style={{ width: "100vw" }}
        >
          <Text style={{ fontSize: 20 }}>Aladdin.Omar61@gmail.com</Text>
          <Text style={{ fontSize: 20 }}>+1 917 628 1184</Text>
        </Box>
      </Footer>
    </Grommet>
  );
}

export default App;
