import { Box, Grommet, Heading, Image, Card, CardHeader, CardBody, CardFooter, Button } from 'grommet'
import joujou from "./assets/joujou.jpg"
import { Domain, Github } from 'grommet-icons';

function App() {

  const projArr = [{ name: 'project1', image: joujou }, { name: 'project2', image: joujou }, { name: 'project3', image: joujou }, { name: 'project4', image: joujou }];

  const theme = {
    global: {
      colors: {
        brand: 'red',
        focus: 'white',
      },
      font: {
        family: 'Rajdhani',
        size: '18px',
        height: '20px',
      },
      background: {
        image: joujou,
        size: 'cover',
        position: 'center',
      },
    }
  }

  return (
    <Grommet theme={theme} full>
      <Box>
        <Heading level={1} textAlign="center" alignSelf="center">Aladdin Omar Portfolio</Heading>
      </Box>
      <Box direction='row' justify='center' alignContent={'around'} align={'center'} flex={true} gap={"large"}>
        {projArr.map((proj, i) => {
          return (
            <Card key={i} style={{ padding: 10 }}>
              <CardHeader alignSelf="center">
                {proj.name}
              </CardHeader>
              <CardBody>
                <Image src={proj.image} fit='contain' style={{ height: 200, width: 300 }} />
              </CardBody>
              <CardFooter pad={{ horizontal: "small" }} style={{ padding: 5 }}>
                <Box width='full' direction='row' gap="large" justify='center' alignContent='center'>
                  <Button style={{ border: "solid red 2px", borderRadius: 50, padding: 3, transition: 'background-color 0.3s ease' }} hoverIndicator={{ background: 'red', elevation: "medium" }}
                    icon={
                      <Box hoverIndicator='white' round='full'>
                        <Github style={{ width: 70, height: 30, transition: 'color 0.3s ease' }} color='black' />
                      </Box>
                    }
                  />
                  <Button style={{ border: "solid red 2px", borderRadius: 50, padding: 3 }} icon={<Domain style={{ width: 70, height: 30 }} color='black' />} />
                </Box>
              </CardFooter>
            </Card>
          )
        })}
      </Box>
    </Grommet>
  )
}

export default App
