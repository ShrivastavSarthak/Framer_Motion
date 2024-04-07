import { motion, useScroll } from "framer-motion";
import "./App.css";
import Box1 from "./components/Box1/Box1";
import Box2 from "./components/Box2/Box2";
import Box3 from "./components/Box3/Box3";
import Box4 from "./components/Box4/Box4";
import Box5 from "./components/Box5/Box5";

function App() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <div className="App">
      <motion.div style={{
        scaleX:scrollYProgress,
        position:"fixed",
        top:0,
        left:0,
        height: "5px",
        backgroundColor:"red",
        transformOrigin:"left-center"

      }}/>
        <Box1 />
        <Box2 />
        <Box3 />
        <Box4 />
        <Box5 />
      </div>
    </>
  );
}

export default App;
