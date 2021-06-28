import { useState } from "react";
import useMeasure from "react-use-measure";
import { useSpring, animated } from "@react-spring/web";

import styles from '../styles.module.css';

export default function Fill () {
  const [ref, { height, width } ] = useMeasure();
  const [open, toggle] = useState(false);
  const actions = {
    LtoR: { width : open ? width : 0 },
    TtoB: { height : open ? height : 0 },
  }
  // const randomProperty = (obj: object) => {
  //   const values = Object.values(obj)
  //   return values[Math.floor(Math.random() * values.length)]
  // };
  let props = useSpring(randomProperty(actions));
  

  return (
    <div className={styles.container} >
      <div ref={ref} className={styles.main} onClick={() => toggle(!open)}>
      <animated.div className={styles.fill} style={props}/>
      <animated.div className={styles.content}>{props.width.to((x: number) => x.toFixed(0)) || props.height.to((x: number) => x.toFixed(0))}</animated.div>
      </div>
    </div>
  )

}