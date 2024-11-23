import FrontPage from "./pages/FrontPage"
import { Box } from "@mui/material"
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import meHappy from './images/meHappy.jpg'

function App() {

  const borderSpread = "18px"
  return (
    <div>
      <FrontPage></FrontPage>
      <Parallax pages={3}
        style={{ overflowX: 'hidden' }}
      >
        <ParallaxLayer
          speed={0.5}
          offset={0}
          factor={1.8}>
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
          <Box
          sx={
            {
              height: `100%`,
              width: '100%',
              display: 'flex',
              alignContent: 'center',
              alignItems: 'center'
            }
          }>
            <Box
              sx={{
                boxShadow: `-2px 0px ${borderSpread} 20px orange`,
                height: `calc(100% - ${borderSpread} - ${borderSpread} - 30px)`,
                width: '100%',
                background: 'orange',
              }}>

            </Box>
          </Box>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default App
