import {
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Image,
    Text,
} from "grommet";
import { Domain, Github } from "grommet-icons";
import joujou from "../assets/joujou.jpg";
import peterpan from "../assets/Peterpan.png";
import easymeets from "../assets/Easymeets-Web-Image.png";
// import { useState } from "react";

const projArr = [
    { name: "JOUJOU", image: joujou, website: "https://joujou.com", showDesc: false },
    { name: "Peter Pan's", image: peterpan, website: "http://peterpan.surge.sh", github: "https://github.com/AladdinOmar61/peter-pan", showDesc: false },
    { name: "Easymeets", image: easymeets, website: "https://easymeetsweb.netlify.app", github: "https://github.com/AladdinOmar61/easymeetsweb", showDesc: false }
];

function ProjectCard() {
    // const [showDesc, setShowDesc] = useState(false);
    return (
        <>
            {
                projArr.map((proj, i) => {

                    return (
                        <Card
                            key={i}
                            background="white"
                            width={'medium'}
                            height={'medium'}
                            fill={"horizontal"}
                            // onMouseEnter={() => { setShowDesc(true) }}
                            // onMouseLeave={() => { setShowDesc(false) }}
                        >
                            <CardHeader alignSelf="center">
                                <Text size="large">{proj.name}</Text>
                            </CardHeader>
                            <CardBody margin="xsmall" border={{ color: 'black' }} round>
                                <Image style={{ borderRadius: '7%' }} src={proj.image} fit="contain" />
                                {/* {showDesc && <Text>{proj.name}</Text>} */}
                            </CardBody>
                            <CardFooter pad="small">
                                <Box
                                    width="full"
                                    direction="row"
                                    gap="large"
                                    justify="center"
                                    alignContent="center"
                                >
                                    {proj.github &&
                                        <Button
                                            onClick={() => window.open(proj.github, "_blank")}
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
                                        />}
                                    <Button
                                        onClick={() => window.open(proj.website, "_blank")}
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
                })
            }
        </>);
}

export default ProjectCard;