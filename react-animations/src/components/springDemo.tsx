import { useState } from "react";
import { useSpring, animated } from 'react-spring';

function SpringDemo() {
  const fadeIn = { to: { opacity: 1 }, from: { opacity: 0 } }
  const fadeOut = { to: { opacity: 0 }, from: { opacity: 1 } }
  const [open, toggle] = useState(false);
  const props = useSpring(open ? fadeIn: fadeOut);


  return (
  <div onClick={() => toggle(!open)}>
    <animated.div style={props}>I will fade in</animated.div> 
  </div>

  )}

export default SpringDemo