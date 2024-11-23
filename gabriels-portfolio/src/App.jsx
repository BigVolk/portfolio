import FrontPage from "./pages/FrontPage"
import {Parallax, ParallaxLayer} from '@react-spring/parallax'
import meHappy from './images/meHappy.jpg'

function App() {

  return (
    <>
      <FrontPage></FrontPage>
      <Parallax pages = {3}>
        <ParallaxLayer
        offset={0}
        factor={2}
        style={{
          backgroundImage: `url(${meHappy})`,
          backgroundSize: 'cover',
          }}>
        </ParallaxLayer>
        <ParallaxLayer offset={2}>
          <h1>test</h1>
        </ParallaxLayer>
      </Parallax>
    </>

  )
}

export default App
