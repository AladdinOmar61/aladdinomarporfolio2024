import './App.css'
import {Grommet} from 'grommet'

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
};

function App() {

  return (
    <Grommet theme={theme}>
      <p>Aladdin Portfolio</p>
    </Grommet>
  )
}

export default App
