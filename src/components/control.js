import React, { Fragment } from "react";
import Menu from "./menu";
import THREEBOX from "./three";
import CARRYBOX from "./carrybox/carry"
import FOODBOX from "./foodbox/food"
import TRAYBOX from "./traybox/tray"
import TRAYSBOX from "./traybox/trays"

const Control = () => {
  // Button
  const closeBox = (clb) => {
    console.log("Close");
    return FOODBOX.rotations1();
  };

  const openBox = (opb) => {
    console.log("Open");
    return FOODBOX.rotations2();
  };

  // Slider
  const sizeShape = (a, b, c) => {
    console.log(`${a} ${b} ${c}`);
    return FOODBOX.updateSize(a, b, c);
  };

  // showShape
  const showShape = () => {
    return FOODBOX.main();
  };

  return (
    <Fragment>
      {showShape()}
      <Menu
        clb={closeBox}
        opb={openBox}
        size={sizeShape} />
    </Fragment>
  );
};

export default Control;
