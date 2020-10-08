import React, { Fragment } from "react";
import Menu from "./menu";
import THREEBOX from "./three";
import CARRYBOX from "./carrybox/carry"
import FOODBOX from "./foodbox/food"
import TRAYBOX from "./traybox/tray"
import TRAYSBOX from "./traybox/trays"
import SHIRTBOX from "./shirtbox/shirt"

const Control = () => {
  // Button
  const closeBox = (clb) => {
    console.log("Close");
    return SHIRTBOX.rotations1();
  };

  const openBox = (opb) => {
    console.log("Open");
    return SHIRTBOX.rotations2();
  };

  // Slider
  const sizeShape = (a, b, c) => {
    console.log(`${a} ${b} ${c}`);
    return SHIRTBOX.updateSize(a, b, c);
  };

  // showShape
  const showShape = () => {
    return SHIRTBOX.main();
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
