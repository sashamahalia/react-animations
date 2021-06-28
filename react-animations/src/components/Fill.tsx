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

  return (
    <div className={styles.container} >
      <div ref={ref} className={styles.main} onClick={() => toggle(!open)}>
        <animated.div className={styles.fill} style={useSpring(actions.LtoR)}/>
        <animated.div className={styles.content}>{useSpring(actions.LtoR).width.to((x: number) => x.toFixed(0))}</animated.div>
      </div>
      <br></br>
      <div ref={ref} className={styles.main} onClick={() => toggle(!open)}>
        <animated.div className={styles.fill} style={useSpring(actions.TtoB)}/>
        <animated.div className={styles.content}>{useSpring(actions.TtoB).height.to((x: number) => x.toFixed(0))}</animated.div>
      </div>

    </div>
  )

}