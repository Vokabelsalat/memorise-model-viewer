"use client";

/* Core */
import { useState } from "react";
import "@google/model-viewer";

/* Instruments */
import {
  counterSlice,
  useSelector,
  useDispatch,
  selectCount,
  incrementAsync,
  incrementIfOddAsync,
} from "@/lib/redux";
import styles from "./counter.module.css";
import Model from "../components/ModelViewer/Model";
import { Annotations } from "../components/ModelViewer/Annotations";

export const Scene1 = () => {
  /* const dispatch = useDispatch()
  const count = useSelector(selectCount)
  const [incrementAmount, setIncrementAmount] = useState(2) */

  return (
    <div style={{ width: "500px", height: "500px" }}>
      <Model glbSrc="scene-2.glb">
        <button
          className="Hotspot"
          slot="hotspot-1"
          data-position="206.35369317296357m 0m -17.66388201618429m"
          data-normal="0m 1m 2.220446049250313e-16m"
          data-visibility-attribute="visible"
        >
          <div className="HotspotAnnotation">Working Barrack - 56/57</div>
        </button>
        <button
          className="Hotspot"
          slot="hotspot-1"
          data-position="206.35369317296357m 0m -17.66388201618429m"
          data-normal="0m 1m 2.220446049250313e-16m"
          data-visibility-attribute="visible"
        >
          <div className="HotspotAnnotation">Working</div>
        </button>
      </Model>
    </div>
  );
};
