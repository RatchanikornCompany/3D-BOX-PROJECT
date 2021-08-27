import React, { useState } from 'react';

import Menu from './components/menu';

import TUCK_END_BOXES_MAIN from './components/boxes/tuckendboxes/main';

const Main = () => {
  const [boxIndex, setBoxIndex] = useState(0);
  const dataComponent = [
    <TUCK_END_BOXES_MAIN />,
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
