import React, { useState } from 'react';

import Menu from './components/menu';

import TUCK_END_BOXES_MAIN from './components/boxes/tuckendboxes/main';
import TUCK_END_BOXES_COVER_MAIN from './components/boxes/tuckendboxescovercenter/main';
import BOXES_CASING_MAIN from './components/boxes/boxescasing/main';
import SNAP_LOCK_BOXES_MAIN from './components/boxes/snaplockboxes/main';
import SNAP_LOCK_BOXES_COVER_MAIN from './components/boxes/snaplockboxescovercenter/main';
import SPECIAL_BOXES_MAIN from './components/boxes/specialboxes/main';
import BENTO_BOXES_MAIN from './components/boxes/bentoboxes/main';

const Main = () => {
  const [boxIndex, setBoxIndex] = useState(0);
  const dataComponent = [
    <TUCK_END_BOXES_MAIN />,
    <TUCK_END_BOXES_COVER_MAIN />,
    <BOXES_CASING_MAIN />,
    <SNAP_LOCK_BOXES_MAIN />,
    <SNAP_LOCK_BOXES_COVER_MAIN />,
    <SPECIAL_BOXES_MAIN />,
    <BENTO_BOXES_MAIN />,
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
