import { ResponsiveContext, Text } from "grommet";
import React from "react";
import {
  Image,
  // Card,
  // CardHeader,
  // CardBody,
  // CardFooter,
  Button,
  Box,
} from "grommet";

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
    <Box
      direction="row-responsive"
      justify="evenly"
      align="center"
      alignContent={"around"}
      flex={true}
      gap={"large"}
    >
      {projArr.map((proj, i) => {
        let cardSize;
        switch (size) {
          case "medium":
            cardSize = "medium";
            break;
          case "large":
            cardSize = "large";
            break;
          case "xlarge":
            cardSize = "xlarge";
            break;
        }

        return (
          // <Card key={i} background="white" width={cardSize} height={cardSize} fill={"horizontal"}>
          //   <CardHeader alignSelf="center">{proj.name}</CardHeader>
          //   <CardBody>
          //     <Image
          //       src={proj.image}
          //       fit="contain"
          //     />
          //   </CardBody>
          //   <CardFooter pad={{ horizontal: "small" }} style={{ padding: 5 }}>
          //     <Box
          //       width="full"
          //       direction="row"
          //       gap="large"
          //       justify="center"
          //       alignContent="center"
          //     >
          //       <Button
          //         style={{
          //           border: "solid red 2px",
          //           borderRadius: 50,
          //           padding: 3,
          //           transition: "background-color 0.3s ease",
          //         }}
          //         hoverIndicator={{
          //           background: "red",
          //           elevation: "medium",
          //         }}
          //         icon={
          //           <Box hoverIndicator="white" round="full">
          //             <Github
          //               style={{
          //                 width: 80,
          //                 height: 35,
          //                 transition: "color 0.3s ease",
          //               }}
          //               color="black"
          //             />
          //           </Box>
          //         }
          //       />
          //       <Button
          //         style={{
          //           border: "solid red 2px",
          //           borderRadius: 50,
          //           padding: 3,
          //         }}
          //         icon={
          //           <Domain style={{ width: 80, height: 35 }} color="black" />
          //         }
          //       />
          //     </Box>
          //   </CardFooter>
          // </Card>
          <Box
            key={i}
            direction="column"
            width={cardSize}
            height={cardSize}
            border={{ color: "black", size: "small" }}
            round={true}
            background={"light-1"}
          >
            <Text textAlign="center">{proj.name}</Text>
            <Box style={{ height: "100%" }}>
              <Image src={proj.image} fit="contain" />
            </Box>
            <Box style={{ height: "50%" }}>
              <Box direction="row" justify="evenly" gap="small" margin={{top: "medium"}}>
                <Button
                  icon={<Github />}
                  hoverIndicator={{ color: "red" }}
                  style={{ borderRadius: 50 }}
                />
                <Button
                  icon={<Domain />}
                  hoverIndicator={{ color: "red" }}
                  style={{ borderRadius: 50 }}
                />
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}

export default Projects;
