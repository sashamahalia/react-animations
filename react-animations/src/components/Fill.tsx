import { useState } from "react";
import useMeasure from "react-use-measure";
import { useSpring, animated } from "@react-spring/web";

import styles from '../styles.module.css';

export default function Fill () {
  const [open, toggle] = useState(false);
  const [ref, { width } ] = useMeasure();
  const props = useSpring({ width: open ? width : 0});

  return (
    <div className={styles.container}>
      <div ref={ref} className={styles.main}
    </div>
  )

}