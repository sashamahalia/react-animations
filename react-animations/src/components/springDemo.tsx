import { useSpring, animated } from 'react-spring';

function SpringDemo() {
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });

  return <animated.div style={props}>I will fade in</animated.div>

}

export default SpringDemo