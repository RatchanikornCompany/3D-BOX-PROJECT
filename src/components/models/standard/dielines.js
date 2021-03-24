import * as THREE from 'three';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const dielines = () => {
  const { valueA, valueB, valueC, valueO, valueG, valueGSlope } = useSelector(
    (state) => ({
      valueA: state.menuReducer.valueA,
      valueB: state.menuReducer.valueB,
      valueC: state.menuReducer.valueC,
      valueO: state.menuReducer.valueO,
      valueG: state.menuReducer.valueG,
      valueGSlope: state.menuReducer.valueGSlope,
    }),
    []
  );

  useEffect(() => {
    /* #region  //* Dielines */

    /* #region  //* side_A */

    /* #region  //* side_A_line */

    const side_A_line = [];
    side_A_line.push(new THREE.Vector2(0, 0));
    side_A_line.push(new THREE.Vector2(0, valueC));
    side_A_line.push(new THREE.Vector2(valueA, valueC));
    side_A_line.push(new THREE.Vector2(valueA, 0));
    side_A_line.push(new THREE.Vector2(0, 0));

    const side_A_Front_line = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(side_A_line),
      new THREE.LineDashedMaterial({
        color: '#45a033',
        dashSize: 3,
        gapSize: 2,
      })
    );
    side_A_Front_line.computeLineDistances();
    side_A_Front_line.name = 'side_A_Front_line';

    /* #endregion */
    /* #region  //* side_A_Line_back */

    const side_A_Line_back = [];
    side_A_Line_back.push(new THREE.Vector2(0, 0));
    side_A_Line_back.push(new THREE.Vector2(0, valueC));
    side_A_Line_back.push(new THREE.Vector2(Math.abs(valueA - 2.5), valueC));
    side_A_Line_back.push(new THREE.Vector2(Math.abs(valueA - 2.5), 0));
    side_A_Line_back.push(new THREE.Vector2(0, 0));

    const side_A_Back_line = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(side_A_Line_back),
      new THREE.LineDashedMaterial({
        color: '#45a033',
        dashSize: 3,
        gapSize: 2,
      })
    );
    side_A_Back_line.computeLineDistances();
    side_A_Back_line.name = 'side_A_Back_line';
    side_A_Back_line.position.x = -valueA - valueB + 2.5;

    /* #endregion */

    /* #endregion */
    /* #region  //* side_B */

    /* #region  //* side_B_upperline */

    /* #region  //* side_B_UpperUnder_line */

    const side_B_UpperUnder_line = [];
    side_B_UpperUnder_line.push(new THREE.Vector2(0, 0));
    side_B_UpperUnder_line.push(new THREE.Vector2(valueB, 0));

    const side_B_Left_upperline = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(side_B_UpperUnder_line),
      new THREE.LineDashedMaterial({
        color: '#45a033',
        dashSize: 3,
        gapSize: 2,
      })
    );
    side_B_Left_upperline.computeLineDistances();
    side_B_Left_upperline.name = 'side_B_Left_upperline';
    side_B_Left_upperline.position.set(-valueB, valueC, 0);

    /* #endregion */
    /* #region  //* side_B_Upper_R_line */

    const side_B_Upper_R_line = [];
    side_B_Upper_R_line.push(new THREE.Vector2(0, 0));
    side_B_Upper_R_line.push(new THREE.Vector2(valueB, 0));
    side_B_Upper_R_line.push(new THREE.Vector2(valueB, -valueC));

    const side_B_Right_upperline = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(side_B_Upper_R_line),
      new THREE.LineDashedMaterial({
        color: '#45a033',
        dashSize: 3,
        gapSize: 2,
      })
    );
    side_B_Right_upperline.computeLineDistances();
    side_B_Right_upperline.name = 'side_B_Right_upperline';
    side_B_Right_upperline.position.set(valueA, valueC, 0);

    /* #endregion */

    /* #endregion */
    /* #region  //* side_B_underline */

    /* #region  //* side_B_Left_underline */

    const side_B_Left_underline = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(side_B_UpperUnder_line),
      new THREE.LineDashedMaterial({
        color: '#45a033',
        dashSize: 3,
        gapSize: 2,
      })
    );
    side_B_Left_underline.computeLineDistances();
    side_B_Left_underline.name = 'side_B_Left_underline';
    side_B_Left_underline.position.x = -valueB;

    /* #endregion */
    /* #region  //* side_B_Right_underline */
    const side_B_Right_underline = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(side_B_UpperUnder_line),
      new THREE.LineDashedMaterial({
        color: '#45a033',
        dashSize: 3,
        gapSize: 2,
      })
    );
    side_B_Right_underline.computeLineDistances();
    side_B_Right_underline.name = 'side_B_Right_underline';
    side_B_Right_underline.position.x = valueA;
    /* #endregion */

    /* #endregion */

    /* #endregion */
    /* #region  //* line_all */

    const line_all = new THREE.Line();
    line_all.name = 'line_all';
    line_all.add(
      side_A_Front_line,
      side_A_Back_line,
      side_B_Left_upperline,
      side_B_Right_upperline,
      side_B_Left_underline,
      side_B_Right_underline
    );

    /* #endregion */

    /* #endregion */
  }, []); //? default side box set.
};

export default dielines;
