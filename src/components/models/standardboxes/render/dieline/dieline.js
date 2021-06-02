import * as THREE from 'three';

export const standDielines = (A, B, C) => {
  /* #region  //* sideA */

  /* #region  //* sideALine */

  const sideALine = [];
  sideALine.push(new THREE.Vector2(0, 0));
  sideALine.push(new THREE.Vector2(0, C));
  sideALine.push(new THREE.Vector2(A, C));
  sideALine.push(new THREE.Vector2(A, 0));
  sideALine.push(new THREE.Vector2(0, 0));

  const sideAFrontLine = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(sideALine),
    new THREE.LineDashedMaterial({
      color: '#45a033',
      dashSize: 3,
      gapSize: 2,
    })
  );
  sideAFrontLine.computeLineDistances();

  /* #endregion */
  /* #region  //* sideALineBack */

  const sideALineBack = [];
  sideALineBack.push(new THREE.Vector2(0, 0));
  sideALineBack.push(new THREE.Vector2(0, C));
  sideALineBack.push(new THREE.Vector2(Math.abs(A - 2.5), C));
  sideALineBack.push(new THREE.Vector2(Math.abs(A - 2.5), 0));
  sideALineBack.push(new THREE.Vector2(0, 0));

  const sideABackLine = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(sideALineBack),
    new THREE.LineDashedMaterial({
      color: '#45a033',
      dashSize: 3,
      gapSize: 2,
    })
  );
  sideABackLine.computeLineDistances();
  sideABackLine.position.x = -A - B + 2.5;

  /* #endregion */

  /* #endregion */
  /* #region  //* sideB */

  /* #region  //* sideBUpperline */

  /* #region  //* sideBUpperUnderLine */

  const sideBUpperUnderLine = [];
  sideBUpperUnderLine.push(new THREE.Vector2(0, 0));
  sideBUpperUnderLine.push(new THREE.Vector2(B, 0));

  const sideBLeftUpperline = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(sideBUpperUnderLine),
    new THREE.LineDashedMaterial({
      color: '#45a033',
      dashSize: 3,
      gapSize: 2,
    })
  );
  sideBLeftUpperline.computeLineDistances();
  sideBLeftUpperline.position.set(-B, C, 0);

  /* #endregion */
  /* #region  //* sideBUpperRLine */

  const sideBUpperRLine = [];
  sideBUpperRLine.push(new THREE.Vector2(0, 0));
  sideBUpperRLine.push(new THREE.Vector2(B, 0));
  sideBUpperRLine.push(new THREE.Vector2(B, -C));

  const sideBRightUpperline = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(sideBUpperRLine),
    new THREE.LineDashedMaterial({
      color: '#45a033',
      dashSize: 3,
      gapSize: 2,
    })
  );
  sideBRightUpperline.computeLineDistances();
  sideBRightUpperline.position.set(A, C, 0);

  /* #endregion */

  /* #endregion */
  /* #region  //* sideBUnderline */

  /* #region  //* sideBLeftUnderline */

  const sideBLeftUnderline = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(sideBUpperUnderLine),
    new THREE.LineDashedMaterial({
      color: '#45a033',
      dashSize: 3,
      gapSize: 2,
    })
  );
  sideBLeftUnderline.computeLineDistances();
  sideBLeftUnderline.position.x = -B;

  /* #endregion */
  /* #region  //* sideBRightUnderline */
  const sideBRightUnderline = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(sideBUpperUnderLine),
    new THREE.LineDashedMaterial({
      color: '#45a033',
      dashSize: 3,
      gapSize: 2,
    })
  );
  sideBRightUnderline.computeLineDistances();
  sideBRightUnderline.position.x = A;
  /* #endregion */

  /* #endregion */

  /* #endregion */
  /* #region  //* lineAll */

  const lineAll = new THREE.Line();
  lineAll.add(
    sideAFrontLine,
    sideABackLine,
    sideBLeftUpperline,
    sideBRightUpperline,
    sideBLeftUnderline,
    sideBRightUnderline
  );

  /* #endregion */

  return lineAll;
};
