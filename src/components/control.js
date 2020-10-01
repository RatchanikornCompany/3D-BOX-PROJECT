import React, { Fragment } from "react";
import Menu from "./menu";
// import THREEBOX from "./three";
import CARRYBOX from "./carrybox/carry"
import FOODBOX from "./foodbox/food"

const Control = () => {
  // Button
  // const closeBox = (clb) => {
  //   console.log("Close");
  //   return THREEBOX.rotations1();
  // };

  // const openBox = (opb) => {
  //   console.log("Open");
  //   return THREEBOX.rotations2();
  // };

  // Slider
  const sizeShape = (a, b, c) => {
    // console.log(`${a} ${b} ${c}`);
    // return THREEBOX.updateSize(a, b, c);
    return FOODBOX.updateSize(a, b, c);
  };

  // showShape
  const showShape = () => {
    // return THREEBOX.main();
    return FOODBOX.main();
  };

  return (
    <Fragment>
      {showShape()}
      <Menu
        // clb={closeBox} 
        // opb={openBox} 
        size={sizeShape} />
    </Fragment>
  );
};

export default Control;
