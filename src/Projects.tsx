import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Grid,
  Heading,
  Image,
  ResponsiveContext,
} from "grommet";
import React from "react";
import { Domain, Github } from "grommet-icons";
import joujou from "./assets/joujou.jpg";

const projArr = [
  { name: "project1", image: joujou },
  { name: "project2", image: joujou },
  { name: "project3", image: joujou },
  { name: "project4", image: joujou },
];

function Projects() {
  const size = React.useContext(ResponsiveContext);
  console.log(size);

  return (
    <Box pad="medium" background="#FF4444">
      <Heading level={1} textAlign="center" alignSelf="center">
        My Projects
      </Heading>
      <Grid columns="medium" gap="large" pad={{ bottom: "large" }}>
        {projArr.map((proj, i) => {
          // let cardSize;
          // switch (size) {
          //   case "medium":
          //     cardSize = "medium";
          //     break;
          //   case "large":
          //     cardSize = "large";
          //     break;
          //   case "xlarge":
          //     cardSize = "xlarge";
          //     break;
          // }

          return (
            <Card
              key={i}
              background="white"
              width={'medium'}
              height={'medium'}
              fill={"horizontal"}
            >
              <CardHeader alignSelf="center">{proj.name}</CardHeader>
              <CardBody>
                <Image src={proj.image} fit="contain" />
              </CardBody>
              <CardFooter pad="small">
                <Box
                  width="full"
                  direction="row"
                  gap="large"
                  justify="center"
                  alignContent="center"
                >
                  <Button
                    style={{
                      border: "solid red 2px",
                      borderRadius: 50,
                      padding: 3,
                      transition: "background-color 0.3s ease",
                    }}
                    hoverIndicator={{
                      background: "red",
                      elevation: "medium",
                    }}
                    icon={
                      <Box hoverIndicator="white" round="full">
                        <Github
                          style={{
                            width: 80,
                            height: 35,
                            transition: "color 0.3s ease",
                          }}
                          color="black"
                        />
                      </Box>
                    }
                  />
                  <Button
                    style={{
                      border: "solid red 2px",
                      borderRadius: 50,
                      padding: 3,
                      transition: "background-color 0.3s ease",
                    }}
                    hoverIndicator={{
                      background: "red",
                      elevation: "medium",
                    }}
                    icon={
                      <Domain style={{ width: 80, height: 35 }} color="black" />
                    }
                  />
                </Box>
              </CardFooter>
            </Card>
          );
        })}
      </Grid>
    </Box>
  );
}

export default Projects;
