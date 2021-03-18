import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';

import Menu from './components/menu/menu';

import SNAPBOX from './components/models/snapbox/snaplock';
import SNAPBOX191 from './components/models/snapbox/snapBecf191';
import CARRYBOX from './components/models/carrybox/carry';
import FOODBOX1171 from './components/models/foodbox/foodBecf1171';
import FOODBOX1202 from './components/models/foodbox/foodBecf1202';
import FOODBOX1207 from './components/models/foodbox/foodBecf1207';
import TRAYBOX from './components/models/traybox/tray';
import TRAYBOX1171 from './components/models/traybox/trayBecf1171';
import SHIRTBOX from './components/models/shirtbox/shirt';
import THREEJSLOCKBOX from './components/models/threeJSlockbox/threeJSlock';
import THREEJSDUALLOCKBOX from './components/models/threeJSlockbox/threeJSDualLock';
import THREEJSUPPERLOWERLOCKBOX from './components/models/threeJSlockbox/threeJSUpperLowerLock';
import CARTOONBAG from './components/models/cartoonsbag/cartoons';
import GLOVEBOX from './components/models/glovebox/gloveBox';
import STAND11D02 from './components/models/standard/stand-11d02';
import TRAYBOX21701 from './components/models/traybox/trayBecf-21701';

let closeBox,
  openBox,
  showModel,
  delModel,
  sizeShape,
  checkVolume,
  returnIMG,
  returnUnit;

const Routes = () => {
  let { xRoute } = useParams();

  if (
    xRoute === 'carry' ||
    xRoute === 'food1171' ||
    xRoute === 'food1202' ||
    xRoute === 'food1207' ||
    xRoute === 'tray' ||
    xRoute === 'tray1171' ||
    xRoute === 'shirt' ||
    xRoute === 'threelock' ||
    xRoute === 'threeduallock' ||
    xRoute === 'threelockul' ||
    xRoute === 'cartoonbag' ||
    xRoute === 'snapbox' ||
    xRoute === 'snap191' ||
    xRoute === 'glovebox' ||
    xRoute === 'stand11d02' ||
    xRoute === 'tray21701'
  ) {
    let x = {
      carry: CARRYBOX,
      food1171: FOODBOX1171,
      food1202: FOODBOX1202,
      food1207: FOODBOX1207,
      tray: TRAYBOX,
      tray1171: TRAYBOX1171,
      shirt: SHIRTBOX,
      threelock: THREEJSLOCKBOX,
      threeduallock: THREEJSDUALLOCKBOX,
      threelockul: THREEJSUPPERLOWERLOCKBOX,
      cartoonbag: CARTOONBAG,
      snapbox: SNAPBOX,
      snap191: SNAPBOX191,
      glovebox: GLOVEBOX,
      stand11d02: STAND11D02,
      tray21701: TRAYBOX21701,
    }; //?  Variable x เพื่อเก็บค่า x ที่มีค่าตรงกับ useParams() = { xRoute } ที่รับค่ามาจาก Router Switch

    closeBox = () => {
      // console.log('พับกล่อง');
      return x[xRoute].rotations1();
    };

    openBox = () => {
      // console.log('กางกล่อง');
      return x[xRoute].rotations2();
    };

    showModel = () => {
      // console.log('เปิดโมเดล');
      return x[xRoute].modelCosmeticTube();
    };

    delModel = () => {
      // console.log('ลบโมเดล');
      return x[xRoute].delModelCosmeticTube();
    };

    checkVolume = () => {
      // console.log('คำนวณพื้นที่กล่อง');
      return x[xRoute].calVolume();
    };

    returnIMG = (value) => {
      // console.log('อัพโหลดรูปภาพ', value)
      return x[xRoute].saveIMG(value);
    };

    returnUnit = (value) => {
      // console.log('หน่วย', value);
      return x[xRoute].init(value);
    };

    sizeShape = (a, b, c, amodel, bmodel, cmodel, floor, o, r) => {
      // console.log(
      // `width : ${a} length : ${b} height : ${c} aModel : ${amodel}, bModel : ${bmodel}, cModel : ${cmodel}, floor : ${floor}, opacity : ${o} radian : ${r}`
      // );
      return x[xRoute].updateSize(a, b, c, amodel, bmodel, cmodel, floor, o, r);
    };

    return (
      <Fragment>
        {x[xRoute].init()}
        <Menu
          clb={closeBox}
          opb={openBox}
          shm={showModel}
          dlm={delModel}
          size={sizeShape}
          msg={checkVolume}
          imgURL={returnIMG}
          unitSent={returnUnit}
          radianSelect={xRoute}
        />
      </Fragment>
    );
  }
};

export default Routes;
