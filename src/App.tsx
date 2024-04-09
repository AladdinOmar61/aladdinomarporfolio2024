import { Box, Heading, Image } from 'grommet'
import joujou from "./assets/joujou.jpg"

function App() {

  const gridSize = {height: 200, width: 300}

  //TODO: make a grommet theme of red/white
  
  //TODO: continue working on grid, need at least two more projects 
  //for portfolio.
  return (
    <>
    <Heading level={1} style={{textAlign: 'center'}}>Aladdin Omar Portfolio</Heading>
    <Box direction='row' justify='center' alignContent={'around'} align={'center'} flex={true} gap={"small"}>
      <Box style={{border: 'solid black 1px'}} background="brand" gridArea="main">
        <Image src={joujou} style={gridSize}/>
      </Box>

      <Box style={gridSize} background="light-5" gridArea="main">
        Sidebar
      </Box>

      <Box style={gridSize} background="light-2" gridArea="main">
        Main
      </Box>

      <Box style={gridSize} background="dark-2" gridArea="main">
        Footer
      </Box>
    </Box>
    </>
  )
}

export default App
