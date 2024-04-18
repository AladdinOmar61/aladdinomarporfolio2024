import { Footer, Heading, Text, Box } from "grommet";

function Contact() {
    return (
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
    )
}

export default Contact;