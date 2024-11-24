import FrontPage from "./pages/FrontPage"
import { Box, Typography } from "@mui/material"
import React, { useRef } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import meHappy from './images/meHappy.jpg'
import { TextSettings } from "./constanst"
import cat from "./assests/parachuting-cat.gif"

function App() {
  const borderSpread = "18px"

  return (
    <div>
      <FrontPage ></FrontPage>
      <Parallax pages={6}
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
                display: 'flex',
                justifyContent: 'center',
                marginTop: '30px',
                marginBottom: '30px',
                boxShadow: `-2px 0px ${borderSpread} 20px orange`,
                height: `calc(100% - ${borderSpread} - ${borderSpread} - 30px)`,
                width: '100%',
                background: 'orange',
              }}>
                <Typography
                  sx={Object.assign({}, TextSettings, {fontSize: '100px'})}
                >
                  למה לבחור בי?
                </Typography>
            </Box>
          </Box>
        </ParallaxLayer>
        <ParallaxLayer sticky={{start: 2, end: 4}}>
          <Box sx={
            {
              height: '100vh',
              background: 'purple',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: "100%",
            }
          }>
              <img src={cat}/>
          </Box>
        </ParallaxLayer>
        <ParallaxLayer offset={5}> 
          <Box
          sx={{
            background: 'green',
            height: '100vh',
          }}>

          </Box>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default App
