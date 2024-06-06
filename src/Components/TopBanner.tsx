import { Box, Heading, ResponsiveContext } from "grommet";
import Banner from "../assets/City Bg Banner.png";
import React from "react";

function TopBanner() {

    const size = React.useContext(ResponsiveContext)

    return (
        <Box>
            <Box height='30vh' style={{
                backgroundImage: `url(${Banner})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}>
                {size === 'small' ? (
                    <Heading
                        level={1}
                        style={{ fontSize: 70, lineHeight: 1, color: "white" }}
                        textAlign="center"
                        alignSelf="center"

                    >
                        Aladdin Omar
                    </Heading>
                ) : ( <Heading
                    level={1}
                    style={{ fontSize: 100, lineHeight: 1, color: "white" }}
                    textAlign="center"
                    alignSelf="center"
                >
                    Aladdin Omar
                </Heading>)}
            </Box>
        </Box>
    )
}

export default TopBanner;