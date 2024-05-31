import { Box, Heading } from "grommet";
import Banner from "../assets/BannerImg.jpg";

function TopBanner() {
    return (
        <Box>
            <Box height='30vh' style={{
                backgroundImage: `url(${Banner})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                opacity: 0.7
            }}>
                <Heading
                    level={1}
                    style={{ fontSize: 100, lineHeight: 1}}
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