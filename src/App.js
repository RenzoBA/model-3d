import React from "react"

//Components
import RightInfo from "./components/RightInfo";
import LeftInfo from "./components/LeftInfo";
import Box from "./components/Box";

//Libraries
import Spline from '@splinetool/react-spline';
import { motion } from "framer-motion";

export default function App() {
  
  const [isOn, setIsOn] = React.useState(false);

  const toggleSwitch = () => setIsOn(prevState => !prevState);
  
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
  };

  const motionNavbar = {
    hidden: {
      opacity: 0,
      y: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
        type: "spring",
      }
    }
  };

  return (
    <div className="App">
      <nav>
        <motion.ul className="navbar" variants={motionNavbar} initial="hidden" animate="visible">
          <motion.img className="navbar-logo" src="" alt="logo" />
          <button className="navbar-button-pro">Pro</button>
          <button className="navbar-button">Planes</button>
          <button className="navbar-button">Regístrate</button>
          <div className="switch" value={isOn} onClick={toggleSwitch}>
            <motion.div className="handle" layout transition={{ type: "spring" }} />
          </div>
        </motion.ul>
      </nav>
      <div className="model3d">
        <Spline scene="https://draft.spline.design/vzcdvzAKvAIQbxiO/scene.spline" />
      </div>
      <section>
        <RightInfo
          imgSrc=""
          title="hola 1"
          text="text 1 text 1 text 1 text 1 text 1 text 1"
          />
        <LeftInfo
          imgSrc=""
          title="title 2"
          text="text 2 text 2 text 2 text 2 text 2 text 2"
          />
        <RightInfo
          imgSrc=""
          title="title 3"
          text="text 3 text 3 text 3 text 3 text 3 text 3"
        />
        <LeftInfo
          imgSrc=""
          title="title 4"
          text="text 4 text 4 text 4 text 4 text 4 text 4"
        />
      </section>
      <section className="boxes">
        <Box
          subtitle="Subtitle 1"
          text="text 1 text 1 text 1 text 1 text 1"
        />
        <Box
          subtitle="Subtitle 2"
          text="text 2 text 2 text 2 text 2 text 2"
        />
        <Box
          subtitle="Subtitle 3"
          text="text 3 text 3 text 3 text 3 text 3"
        />
        <Box
          subtitle="Subtitle 4"
          text="text 4 text 4 text 4 text 4 text 4"
        />
      </section>
      <footer>Esta página utiliza diversas tecnologías.</footer>
    </div>
  );
}