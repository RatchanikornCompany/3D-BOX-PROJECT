import React, { Fragment } from "react";
import Menu from "./menu";
import THREEBOX from "./three";
import CARRYBOX from "./carrybox/carry"
import FOODBOX from "./foodbox/food"
import TRAYBOX from "./traybox/tray"
import TRAYSBOX from "./traybox/trays"
import SHIRTBOX from "./shirtbox/shirt"
import UNTITLEDBOX from "./untitledbox/untitled"

const Control = () => {
  // Button
  const closeBox = (clb) => {
    console.log("Close");
    return UNTITLEDBOX.rotations1();
  };

  const openBox = (opb) => {
    console.log("Open");
    return UNTITLEDBOX.rotations2();
  };

  // Slider
  const sizeShape = (a, b, c) => {
    console.log(`${a} ${b} ${c}`);
    return UNTITLEDBOX.updateSize(a, b, c);
  };

  // showShape
  const showShape = () => {
    return UNTITLEDBOX.main();
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
