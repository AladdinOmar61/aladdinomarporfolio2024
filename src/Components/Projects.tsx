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
  Text,
} from "grommet";
import { Domain, Github } from "grommet-icons";
import joujou from "../assets/joujou.jpg";
import easymeets from "../assets/Easymeets-Web-Image.png";

const projArr = [
  { name: "Easymeets", image: easymeets },
  { name: "project2", image: joujou },
  { name: "project3", image: joujou },
  { name: "project4", image: joujou },
];

function Projects() {
  return (
    <Box pad="medium" background="#FF3333">
      <Heading level={1} textAlign="center" alignSelf="center">
        My Projects
      </Heading>
      <Box justify="center" direction="row">
        <Grid columns="medium" gap="large" pad={{ bottom: "large" }} align="center" justify="center" justifyContent="center">
          {projArr.map((proj, i) => {

            return (
              <Card
                key={i}
                background="white"
                width={'medium'}
                height={'medium'}
                fill={"horizontal"}
              >
                <CardHeader alignSelf="center">
                  <Text size="large">{proj.name}</Text>
                </CardHeader>
                <CardBody margin="xsmall" border={{color: 'black'}} round>
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
    </Box>
  );
}

export default Projects;
