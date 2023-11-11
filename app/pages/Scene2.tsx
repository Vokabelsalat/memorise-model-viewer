"use client";

/* Core */
import { useRef, useState, useEffect, createRef } from "react";
import React from "react";
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

export const Scene2 = () => {
  /* const dispatch = useDispatch()
  const count = useSelector(selectCount)
  const [incrementAmount, setIncrementAmount] = useState(2) */

  const modelViewer2 = createRef<HTMLElement>();
  

  return (
    <div style={{ width: "100%", height: "500px" }}>
      <Model glbSrc="scene-3.glb">
        <button
          className="Hotspot"
          slot="hotspot-1"
          data-position="-0.1997m 0.11766m 0.0056m"
          data-normal="-0.4421014m 0.04410423m 0.8958802m"
          data-orbit="3.711166deg 92.3035deg 0.04335197m"
          data-target="-0.1879433m 0.1157161m -0.01563221m"
          /* onClick={(e) => {
            annotationClicked(e.target);
          }} */
        >
          Hold Tight!
        </button>
        <button
          className="Hotspot"
          slot="hotspot-10"
          data-position="0.02610224m 0.01458751m -0.004978945m"
          data-normal="-0.602551m 0.7856147m -0.1405055m"
          data-orbit="-78.89725deg 77.17752deg 0.08451112m"
          data-target="0.02610223m 0.0145875m -0.004978945m"
          /* onClick={(e) => {
            annotationClicked(e.target);
          }} */
        >
          Treasure
        </button>
      </Model>
    </div>
  );
};
