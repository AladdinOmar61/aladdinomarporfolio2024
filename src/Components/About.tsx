import { Paragraph, Box, Heading, Image } from "grommet"
import aboutMeImg from "../assets/AboutMeImg.jpg"

function About() {
    return (
        <Box justify="around" pad={{vertical: "large"}}>
            <Heading level={1} textAlign="center" alignSelf="center">
                About Me
            </Heading>
            <Box
                direction="column"
                align="center"
                justify="around"
            >
                <Box
                    style={{ height: 300, width: 300, minWidth: 300}}
                    border={{ color: "black", size: "small" }}
                    margin={{vertical: "small"}}
                    animation={["fadeIn", "slideDown"]}
                >
                    <Image
                        src={aboutMeImg}
                        fit="cover"
                        alt="About Me Image"
                        style={{ width: "100%", height: "100%" }}
                    />
                </Box>
                <Paragraph
                    responsive={true}
                    size="xlarge"
                    margin={{vertical: "medium", horizontal: "xlarge"}}
                    fill
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
                    size="xlarge"
                    margin={{vertical: "medium", horizontal: "xlarge"}}
                    fill
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
    )
}

export default About;