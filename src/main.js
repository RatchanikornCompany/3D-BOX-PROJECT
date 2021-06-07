import React, { useState } from 'react';

import Menu from './components/menu';

import TUCKENDBOXES from './components/models/tuckendboxes/tuck-end-boxes';
import TUCKCENTBOXES from './components/models/tuckcentboxes/tuck-end-center-boxes';

import CREAMSINGLELOCK from './components/models/creamlockboxes/creamsinglelock/cream-single-lock';
import CREAMDUALLOCK from './components/models/creamlockboxes/creamduallock/cream-dual-lock';
import CREAMUPPERBOTTOMLOCK from './components/models/creamlockboxes/creamupperbottomlock/cream-upperbottom-lock';

import SHOPPINGBAGS from './components/models/shoppingbags/shopping-bags';

import SLIDEBOXES from './components/models/slideboxes/slide-boxes';

import SNAPBOXES from './components/models/snapboxes/snap-boxes';

import SNAPLOCKBOXES from './components/models/snaplockboxes/snaplockboxes';

import STAND11D02 from './components/models/standardboxes/stand-11d02';

import GLOVEBOXES from './components/models/gloveboxes/gloveboxs';

import FOODBOX12001 from './components/models/foodboxes/food-12001/food-12001';
import FOODBOX12007 from './components/models/foodboxes/food-12007/food-12007';
import FOODBOX12009 from './components/models/foodboxes/food-12009/food-12009';

import TRAYBOX11A05 from './components/models/trayboxes/tray-11a05/tray-11a05';
import TRAYBOX11701 from './components/models/trayboxes/tray-11701/tray-11701';
import TRAYBOX21701 from './components/models/trayboxes/tray-21701/tray-21701';
import TRAYBOX21B02 from './components/models/trayboxes/tray-21b02/tray-21b02';

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
