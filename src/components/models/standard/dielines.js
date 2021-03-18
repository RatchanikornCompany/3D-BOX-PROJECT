import * as THREE from 'three';

const dielines = () => {
  const side_A_line = [];
  const side_A_Line_back = [];
  const side_B_UpperUnder_line = [];
  const side_B_Upper_R_line = [];

  side_A_line.push(new THREE.Vector2(0, 0));
  side_A_line.push(new THREE.Vector2(0, C));
  side_A_line.push(new THREE.Vector2(A, C));
  side_A_line.push(new THREE.Vector2(A, 0));
  side_A_line.push(new THREE.Vector2(0, 0));

  side_A_Line_back.push(new THREE.Vector2(0, 0));
  side_A_Line_back.push(new THREE.Vector2(0, C));
  side_A_Line_back.push(new THREE.Vector2(Math.abs(A - 2.5), C));
  side_A_Line_back.push(new THREE.Vector2(Math.abs(A - 2.5), 0));
  side_A_Line_back.push(new THREE.Vector2(0, 0));

  side_B_UpperUnder_line.push(new THREE.Vector2(0, 0));
  side_B_UpperUnder_line.push(new THREE.Vector2(B, 0));

  side_B_Upper_R_line.push(new THREE.Vector2(0, 0));
  side_B_Upper_R_line.push(new THREE.Vector2(B, 0));
  side_B_Upper_R_line.push(new THREE.Vector2(B, -C));

  /* #region  //* side_A_line */

  side_A_Front_line = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(side_A_line),
    new THREE.LineDashedMaterial({
      color: '#45a033',
      dashSize: 3,
      gapSize: 2,
    })
  );
  side_A_Front_line.computeLineDistances();
  side_A_Front_line.name = 'side_A_Front_line';

  side_A_Back_line = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(side_A_Line_back),
    new THREE.LineDashedMaterial({
      color: '#45a033',
      dashSize: 3,
      gapSize: 2,
    })
  );
  side_A_Back_line.computeLineDistances();
  side_A_Back_line.name = 'side_A_Back_line';
  side_A_Back_line.position.x = -A - B + 2.5;

  /* #endregion */
  /* #region  //* side_B_line */

  /* #region  //* side_B_upperline */

  side_B_Left_upperline = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(side_B_UpperUnder_line),
    new THREE.LineDashedMaterial({
      color: '#45a033',
      dashSize: 3,
      gapSize: 2,
    })
  );
  side_B_Left_upperline.computeLineDistances();
  side_B_Left_upperline.name = 'side_B_Left_upperline';
  side_B_Left_upperline.position.set(-B, C, 0);

  side_B_Right_upperline = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(side_B_Upper_R_line),
    new THREE.LineDashedMaterial({
      color: '#45a033',
      dashSize: 3,
      gapSize: 2,
    })
  );
  side_B_Right_upperline.computeLineDistances();
  side_B_Right_upperline.name = 'side_B_Right_upperline';
  side_B_Right_upperline.position.set(A, C, 0);

  /* #endregion */
  /* #region  //* side_B_underline */

  side_B_Left_underline = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(side_B_UpperUnder_line),
    new THREE.LineDashedMaterial({
      color: '#45a033',
      dashSize: 3,
      gapSize: 2,
    })
  );
  side_B_Left_underline.computeLineDistances();
  side_B_Left_underline.name = 'side_B_Left_underline';
  side_B_Left_underline.position.x = -B;

  side_B_Right_underline = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(side_B_UpperUnder_line),
    new THREE.LineDashedMaterial({
      color: '#45a033',
      dashSize: 3,
      gapSize: 2,
    })
  );
  side_B_Right_underline.computeLineDistances();
  side_B_Right_underline.name = 'side_B_Right_underline';
  side_B_Right_underline.position.x = A;

  /* #endregion */

  /* #endregion */
  /* #region  //* line_all */

  line_all = new THREE.Line();
  line_all.name = 'line_all';
  line_all.add(
    side_A_Front_line,
    side_A_Back_line,
    side_B_Left_upperline,
    side_B_Right_upperline,
    side_B_Left_underline,
    side_B_Right_underline
  );
  // scene.add(line_all);

  /* #endregion */
};

export default dielines;
