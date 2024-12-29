import FrontPage from "./pages/FrontPage"
import { Box, Typography } from "@mui/material"
import React, { useRef } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { TextSettings } from "./constanst"
import cat from "./assests/parachuting-cat.gif"
import cloud from "./assests/cloud.png"
import meHappy from './images/meHappy.jpg'
import justMe from './images/justMe.png'
import withoutMe from './images/withoutMe.png'


const generateFontSize = () => Math.random() * 50 + 20
const generateSpeed = () => Math.random() + 0.5
const generateDistanceFromLeft = () => Math.random() * 90
const generateOffset = () => Math.random() * 3 + 5

const expirenceStrings = ["Web", "React", "Networking", "C/C++", "Python", "Java", "Go", "Docker", "Git"]

function App() {
  const borderSpread = "18px"

  return (
    <div>
      <FrontPage></FrontPage>
      <Parallax pages={10}
        style={{ overflowX: 'hidden' }}
      >
        <ParallaxLayer
          offset={0}
          // speed={-0.5}
          factor={1}>
          <Box sx={{
            backgroundPosition: 'center',
            backgroundImage: `url(${withoutMe})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'auto 100%',
            width: '100%',
            height: '100%',
          }} />
          <ParallaxLayer
            speed={-0.2}
          >
            <Box sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Typography sx={{ fontSize: '100px', }}>
                Gabriel Bialik
              </Typography>
            </Box>
          </ParallaxLayer>
          <ParallaxLayer offset={0}
            // speed = {0.1}
            factor={1}>
            <Box sx={{
              backgroundPosition: 'center',
              backgroundImage: `url(${justMe})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'auto 100%',
              width: '100%',
              height: '100%',
            }} />
          </ParallaxLayer>
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
                alignContent: 'center',
                flexDirection: 'column',
                marginTop: '30px',
                boxShadow: `-2px 0px ${borderSpread} 20px orange`,
                height: `calc(100% - ${borderSpread} - ${borderSpread} - 30px)`,
                width: '100%',
                background: 'orange',
              }}>
              <Typography
                sx={Object.assign({}, TextSettings, { fontSize: '100px', margin: '20px 20px 0px' })}
              >
                למה לבחור בי?
              </Typography>
              <Box>
                <Typography
                  sx={Object.assign({}, TextSettings, { fontSize: '50px', margin: '20px' })}
                >
                  1. אני בעל ניסיון מקצועי של הרבה שנים.
                  <br />
                  זה לא שכנע אתכם? 😮
                  <br />
                  הנה חתול צונח! ✅
                </Typography>
              </Box>
            </Box>
          </Box>
        </ParallaxLayer>
        <ParallaxLayer offset={2} factor={2}>
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
            <img style={{ position: 'fixed', left: '50px' }} src={cloud} />
            <img style={{ position: 'fixed', right: '50px', top: '200px' }} src={cloud} />
            <img style={{ position: 'fixed', top: '450px', right: '400px' }} src={cloud} />
            <img style={{ position: 'fixed', top: '750px', left: '400px' }} src={cloud} />
            <img style={{ position: 'fixed', top: '950px', right: '200px' }} src={cloud} />
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
        <ParallaxLayer offset={5} factor={3}>
          <Box
            sx={{
              display: 'flex',
              width: "100%",
              background: 'green',
              height: '300vh',
              justifyContent: 'center',
            }}>
          </Box>
        </ParallaxLayer>

        {expirenceStrings.map( experience => {
          return (
            <ParallaxLayer offset={generateOffset()} speed={generateSpeed()}>
              <Box sx={{ display: 'flex', left: `${generateDistanceFromLeft()}vw`, position: 'fixed', backgroundColor: 'black' }}>
                <Typography sx={Object.assign({}, TextSettings, { direction: "ltr", fontSize: `${generateFontSize()}px` })}>{experience}</Typography>
              </Box>
            </ParallaxLayer>
          )
        })}
        <ParallaxLayer offset={5} sticky={{ start: 5, end: 7 }}>
          <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Typography sx={Object.assign({}, TextSettings, { fontSize: '100px', textAlign: 'center' })}>
              יש לי ניסיון רחב בנושאים הבאים:
            </Typography>
          </Box>
        </ParallaxLayer>

      </Parallax>
    </div >
  )
}

export default App
