import { Paragraph, Box, Heading, Image, Tabs, Tab, Grommet } from "grommet"
import Portrait from "../assets/Portrait 2024.jpg"

const tabTheme = {
    tabs: {
        extend: {
            fontSize: '50px',
        }
    },
    tab: {
        extend: {
            fontSize: '50px',
        },
        active: {
            color: 'red',
        },
        border: {
            color: "black",
            active: {
                side: 'bottom',
                size: 'small',
                color: 'red',
            }
        },
        color: 'black',
        margin: 'medium',
        pad: 'small',
    },
};

function About() {
    return (
        <Grommet theme={tabTheme}>
            <Box justify="around" pad={{ vertical: "large" }}>
                <Heading level={1} textAlign="center" alignSelf="center">
                    About Me
                </Heading>
                <Box
                    direction="column"
                    align="center"
                    justify="around"
                    responsive={true}
                >
                    <Box
                        style={{ height: 300, width: 300, minWidth: 300 }}
                        border={{ color: "black", size: "small" }}
                        margin={{ vertical: "small" }}
                        animation={["fadeIn", "slideDown"]}
                        responsive={true}
                    >
                        <Image
                            src={Portrait}
                            fit="cover"
                            alt="About Me Image"
                            style={{ width: "100%", height: "100%" }}
                        />
                    </Box>
                    <Tabs >
                        <Tab title="Currently...">
                            <Box
                                direction="column"
                                align="center"
                                justify="around">
                                <Paragraph
                                    responsive={true}
                                    size="xlarge"
                                    margin={{ vertical: "medium", horizontal: "xlarge" }}
                                    fill
                                >
                                    I am a web-developer and recent computer science graduate. I want to help businesses come to life with code and join a team that solves a relevant problem because I believe convenience is key to living a more enjoyable life.
                                </Paragraph>
                            </Box>
                        </Tab>
                        <Tab title="Previously...">
                            <Paragraph
                                responsive={true}
                                size="xlarge"
                                margin={{ vertical: "medium", horizontal: "xlarge" }}
                                fill
                            >
                                I was part of a software engineering immersive program called General Assembly, where I learned full stack web development using react frontend with nodeJS using express and MongoDB. From there I carried on to pursue a bachelors in computer science in CSI.
                            </Paragraph>
                        </Tab>
                        <Tab title="In the future...">
                            <Paragraph
                                responsive={true}
                                size="xlarge"
                                margin={{ vertical: "medium", horizontal: "xlarge" }}
                                fill
                            >
                                I would like to look for a team that is passionate about taking real world problems and solving them with code to bring a solution that will help many.
                            </Paragraph>
                        </Tab>
                    </Tabs>
                </Box>
            </Box>
        </Grommet>
    )
}

export default About;