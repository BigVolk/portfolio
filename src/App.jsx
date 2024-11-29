import FrontPage from "./pages/FrontPage"
import { Box, Typography } from "@mui/material"
import React, { useRef } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import meHappy from './images/meHappy.jpg'
import { TextSettings } from "./constanst"
import cat from "./assests/parachuting-cat.gif"
import cloud from "./assests/cloud.png"

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
                boxShadow: `-2px 0px ${borderSpread} 20px orange`,
                height: `calc(100% - ${borderSpread} - ${borderSpread} - 30px)`,
                width: '100%',
                background: 'orange',
              }}>
              <Typography
                sx={Object.assign({}, TextSettings, { fontSize: '100px' })}
              >
                למה לבחור בי?
              </Typography>
            </Box>
          </Box>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          factor={2}
        >
          <Box
            sx={{
              height: "300vh",
              width: '100%',
              backgroundImage: "linear-gradient(	#87CEEB, 	#59889c)"
            }}>

          </Box>
        </ParallaxLayer>
        <ParallaxLayer offset={3}>
          <Box
            sx={{
              width: "100%",
              height: '100vh',
            }}>
            <img style={{position: 'fixed', left: '50px'}} src={cloud} />
            <img style={{position: 'fixed', right: '50px', top: '200px'}} src={cloud} />
            <img style={{position: 'fixed', top: '450px', right: '400px'}} src={cloud} />
            <img style={{position: 'fixed', top: '750px', left: '400px'}} src={cloud} />
            <img style={{position: 'fixed', top: '950px', right: '200px'}} src={cloud} />
          </Box>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 2, end: 4.25 }}>
          <Box sx={
            {
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: "100%",
            }
          }>
            <img src={cat} />
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
    </div >
  )
}

export default App
