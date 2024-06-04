import { Paragraph, Box, Heading, Image } from "grommet"
import aboutMeImg from "../assets/AboutMeImg.jpg"

function About() {
    return (
        <Box justify="around" pad={{ vertical: "large" }}>
            <Heading level={1} textAlign="center" alignSelf="center">
                About Me
            </Heading>
            <Box
                direction="column"
                align="center"
                justify="around"
            >
                <Box
                    style={{ height: 300, width: 300, minWidth: 300 }}
                    border={{ color: "black", size: "small" }}
                    margin={{ vertical: "small" }}
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
                    margin={{ vertical: "medium", horizontal: "xlarge" }}
                    fill
                >
                    I am a web-developer and recent computer science graduate. I want to help businesses come to life with code and join a team that solves a relevant problem because convenience is key to enjoying life. I want this world to be a happy and comfortable place to live in and I believe these problems we solve will contribute greatly to my goal…and I just genuinely love to code, it feels like a fun puzzle solving game to me.
                </Paragraph>
                <Paragraph
                    responsive={true}
                    size="xlarge"
                    margin={{ vertical: "medium", horizontal: "xlarge" }}
                    fill
                >
                    Previously, I was part of a software engineering immersive program called General Assembly, where I learned full stack web development using react frontend with nodeJS using express and MongoDB. From there I carried on to pursue a bachelors in computer science in CSI. In the future, I would like to look for a team that is passionate about taking real world problems and solving them with code to bring a solution that will help many.
                </Paragraph>
            </Box>
        </Box>
    )
}

export default About;