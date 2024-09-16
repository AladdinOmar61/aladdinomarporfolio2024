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
import MadeByMama from "../assets/made_by_mama.png";
// import { useState } from "react";

const projArr = [
    { name: "JOUJOU", image: joujou, website: "https://joujou.com", showDesc: false },
    { name: "Made by Mama", image: MadeByMama, website: "https://madebymama.netlify.app", github: "https://github.com/AladdinOmar61/mona-store", showDesc: false },
    { name: "CSI API/Car Generator", github: "https://github.com/AladdinOmar61/csiAPI" },
    { name: "Lockit", github: "https://github.com/AladdinOmar61/Lockit" }
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
                                    {proj.website &&
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
                                        />}
                                </Box>
                            </CardFooter>
                        </Card>
                    );
                })
            }
        </>);
}

export default ProjectCard;