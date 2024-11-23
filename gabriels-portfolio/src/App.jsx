import FrontPage from "./pages/FrontPage"
import { Box } from "@mui/material"
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import meHappy from './images/meHappy.jpg'

function App() {

  return (
    <div>
      <FrontPage></FrontPage>
      <div style={{width: '90vw'}}>
        <Parallax pages={3}
          style={{ overflowX: 'hidden' }}>
          <ParallaxLayer
            speed={1.5}
            offset={0}
            factor={1}>
            <Box sx={{
              backgroundPosition: 'center',
              backgroundImage: `url(${meHappy})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'auto 100%',
              width: '100%',
              height: '100%',
            }} />
          </ParallaxLayer>
          <ParallaxLayer offset={1}>
            <h1>test</h1>
          </ParallaxLayer>
        </Parallax>
      </div>
    </div>
  )
}

export default App
