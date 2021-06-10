import React, { useState } from 'react';

import Menu from './components/menu';

import TUCKENDBOXES from './components/boxes/tuckendboxes/tuckendboxes/tuckEndBoxesMain';
import TUCKCENTBOXES from './components/boxes/tuckendboxes/tuckcentboxes/tuckEndCenterBoxesMain';

import CREAMSINGLELOCK from './components/boxes/creamlockboxes/creamsinglelock/creamSingleLockMain';
import CREAMDUALLOCK from './components/boxes/creamlockboxes/creamduallock/creamDualLockMain';
import CREAMUPPERBOTTOMLOCK from './components/boxes/creamlockboxes/creamupperbottomlock/creamUpperBottomLockMain';

import SHOPPINGBAGS from './components/boxes/shoppingbags/shoppingBagsMain';

import SLIDEBOXES from './components/boxes/slideboxes/slideBoxesMain';

import SNAPBOXES from './components/boxes/snapboxes/snapBoxesMain';

import SNAPLOCKBOXES from './components/boxes/snaplockboxes/snapLockBoxesMain';

import STAND11D02 from './components/boxes/standardboxes/stand11d02BoxesMain';

import GLOVEBOXES from './components/boxes/gloveboxes/gloveBoxesMain';

import FOODBOX12001 from './components/boxes/foodboxes/food-12001/food12001BoxesMain';
import FOODBOX12007 from './components/boxes/foodboxes/food-12007/food12007BoxesMain';
import FOODBOX12009 from './components/boxes/foodboxes/food-12009/food12009BoxesMain';

import TRAYBOX11A05 from './components/boxes/trayboxes/tray-11a05/tray11a05BoxesMain';
import TRAYBOX11701 from './components/boxes/trayboxes/tray-11701/tray11701BoxesMain';
import TRAYBOX21701 from './components/boxes/trayboxes/tray-21701/tray21701BoxesMain';
import TRAYBOX21B02 from './components/boxes/trayboxes/tray-21b02/tray21b02BoxesMain';

const Main = () => {
  const [boxIndex, setBoxIndex] = useState(4);
  const dataComponent = [
    <TUCKENDBOXES />,
    <TUCKCENTBOXES />,
    <CREAMSINGLELOCK />,
    <CREAMDUALLOCK />,
    <CREAMUPPERBOTTOMLOCK />,
    <SHOPPINGBAGS />,
    <SLIDEBOXES />,
    <SNAPBOXES />,
    <SNAPLOCKBOXES />,
    <STAND11D02 />,
    <GLOVEBOXES />,
    <FOODBOX12001 />,
    <FOODBOX12007 />,
    <FOODBOX12009 />,
    <TRAYBOX11A05 />,
    <TRAYBOX11701 />,
    <TRAYBOX21701 />,
    <TRAYBOX21B02 />,
  ];

  const callBackPosition = (index) => {
    setBoxIndex(index);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 col-12" style={{ padding: 0 }}>
            <div>
              <Menu sendCallBackPosition={callBackPosition} />
            </div>
          </div>
          <div className="col-md-8 col-12" style={{ padding: 0 }}>
            {dataComponent[boxIndex]}
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
