import { Box, Typography } from "@mui/material"
import React, { useRef, useState, useEffect } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { TextSettings } from "../../constanst"
import cat from "../../assests/parachuting-cat.gif"
import cloud from "../../assests/cloud.png"
import meHappy from '../../images/meHappy.jpg'
import justMe from '../../images/justMe.png'
import withoutMe from '../../images/withoutMe.png'


const generateFontSize = () => Math.random() * 50 + 20
const generateSpeed = () => Math.random() * 1.5 + 0.5
const generateDistanceFromLeft = () => Math.random() * window.innerWidth
const generateOffset = () => Math.random() * 2 + 5

const expirenceStrings = ["Web", "React", "Networking", "C/C++", "Python", "Java", "Go", "Docker", "Git", "Big Data", "OpenShift"]


const ScrollParalax = () => {
    const borderSpread = "18px"

    return (
        <>
            <Parallax
                pages={10}
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
                <ParallaxLayer offset={5} factor={2}>
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


                {/* complete bullshit goes here */}

                {/* אני יכול לחשב אורך של הטקסט, אחר כך אני יכול להעמיר את זה לאחוזים ולהוריד את זה מהאחוז המרחק משמאל */}

                {expirenceStrings.map(experience => {

                    const fontSize = generateFontSize()
                    const elementWidth = experience.length * fontSize * 0.5
                    const distanceFromLeft = `${Math.abs(generateDistanceFromLeft() - elementWidth)}px`

                    console.log(`${experience}\ndistanceFromLeft: ${distanceFromLeft}\nfontSize: ${fontSize}\nscreen width: ${window.innerWidth}\nelementWidth: ${elementWidth}`)

                    return (
                        <ParallaxLayer offset={generateOffset()} speed={generateSpeed()}>
                            <Box sx={{ margin: '100px', width: '100vw' }}>
                                <Box sx={{ display: 'flex', left: distanceFromLeft, position: 'fixed', backgroundColor: 'black' }}>
                                    <Typography sx={Object.assign({}, TextSettings, { direction: "ltr", fontSize: `${fontSize}px` })}>{experience}</Typography>
                                </Box>
                            </Box>
                        </ParallaxLayer>
                    )
                })}


                {/* end of random bullshit experiment */}


                {/* {expirenceStrings.map(experience => {

          let distanceFromLeft = generateDistanceFromLeft()
          const fontSizeInPX = generateFontSize()

          if (distanceFromLeft >= 50) {
            distanceFromLeft = `${distanceFromLeft}% - ${fontSizeInPX * experience.length}px`
          }
          else {
            distanceFromLeft = `${distanceFromLeft}%`
          }

          console.log(`${experience}\ndistanceFromLeft: ${distanceFromLeft}\nFontSize: ${fontSizeInPX}px`)
          return (

            <ParallaxLayer offset={generateOffset()} speed={generateSpeed()}>
              <Box sx={{ display: 'flex', left: distanceFromLeft, position: 'fixed', backgroundColor: 'black' }}>
                <Typography sx={Object.assign({}, TextSettings, { direction: "ltr", fontSize: `${fontSizeInPX}px` })}>{experience}</Typography>
              </Box>
            </ParallaxLayer>
          )
        })} */}
                <ParallaxLayer offset={5} sticky={{ start: 5, end: 6 }}>
                    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography sx={Object.assign({}, TextSettings, { fontSize: '100px', textAlign: 'center' })}>
                            יש לי ניסיון
                        </Typography>
                        <Typography sx={Object.assign({}, TextSettings, { fontSize: '100px', textAlign: 'center', letterSpacing: `50px` })}>
                            רחב
                        </Typography>
                        <Typography sx={Object.assign({}, TextSettings, { fontSize: '100px', textAlign: 'center' })}>
                            בנושאים הבאים:
                        </Typography>
                    </Box>
                </ParallaxLayer>
            </Parallax>
        </>
    )

}

export default ScrollParalax