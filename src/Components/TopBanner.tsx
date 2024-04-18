import { Box, Heading } from "grommet";
// import Banner from "../assets/BannerImg.jpg";

function TopBanner() {
    return (
        <Box>
            {/* <Heading>Aladdin Omar</Heading>
            <Image height='300px' src={Banner} fit="contain"/> */}
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
    )
}

export default TopBanner;