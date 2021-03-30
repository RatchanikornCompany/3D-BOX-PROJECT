import React, { Fragment } from 'react';

import Menu from './components/menu';

const Main = (props) => {
  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 col-12" style={{ padding: 0 }}>
            <div>
              <Menu />
            </div>
          </div>
          <div
            className="col-md-8 col-12"
            style={{ padding: 0, backgroundColor: '#404040' }}
          >
            {props.children}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Main;
