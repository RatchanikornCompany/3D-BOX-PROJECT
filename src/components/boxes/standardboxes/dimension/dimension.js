import * as THREE from 'three';

import pictureAInput from '../../../../pictures/a.png';
import pictureBInput from '../../../../pictures/b.png';
import pictureCInput from '../../../../pictures/c.png';

export const standDimension = (A, B, C, G, unit) => {
  const label = A / 6;
  const defaultUnit = { mm: 1, cm: 10, in: 25.4 };

  //* Label

  const geometry = new THREE.PlaneBufferGeometry(label, label);
  const loader = new THREE.TextureLoader();

  const meshLabelA = new THREE.Mesh(
    geometry.clone(),
    new THREE.MeshBasicMaterial({ map: loader.load(pictureAInput) })
  );

  const meshLabelB = new THREE.Mesh(
    geometry.clone(),
    new THREE.MeshBasicMaterial({ map: loader.load(pictureBInput) })
  );

  const meshLabelC = new THREE.Mesh(
    geometry.clone(),
    new THREE.MeshBasicMaterial({ map: loader.load(pictureCInput) })
  );

  const lineMarkA = new THREE.Object3D();
  lineMarkA.position.set(-(A / 2) - B, C / 2 + label, 2);
  lineMarkA.add(meshLabelA);

  const lineMarkB = new THREE.Object3D();
  lineMarkB.position.set(-(B / 2), C / 2 + label, 2);
  lineMarkB.add(meshLabelB);

  const lineMarkC = new THREE.Object3D();
  lineMarkC.position.set((A - label * 2) / 2, C / 2, 2);
  lineMarkC.add(meshLabelC);

  //* Text

  const loaderTextA = new THREE.FontLoader();
  loaderTextA.load('./fonts/helvetiker_regular.typeface.json', function (font) {
    const color = 0x00000;
    const matLite = new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: 1,
      side: THREE.DoubleSide,
    });
    const message = `${
      unit === 'in'
        ? (A / defaultUnit[unit]).toFixed(2)
        : (A / defaultUnit[unit]).toFixed(1)
    } ${unit}`;
    const shapes = font.generateShapes(message, 20);
    const geometry = new THREE.ShapeBufferGeometry(shapes);
    geometry.computeBoundingBox();

    const xMid =
      -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);
    geometry.translate(xMid, 0, 0);

    const text = new THREE.Mesh(geometry, matLite);
    labelA.add(text);
  });

  const loaderTextB = new THREE.FontLoader();
  loaderTextB.load('./fonts/helvetiker_regular.typeface.json', function (font) {
    const color = 0x00000;
    const matLite = new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: 1,
      side: THREE.DoubleSide,
    });

    const message = `${
      unit === 'in'
        ? (B / defaultUnit[unit]).toFixed(2)
        : (B / defaultUnit[unit]).toFixed(1)
    } ${unit}`;
    const shapes = font.generateShapes(message, 20);
    const geometry = new THREE.ShapeBufferGeometry(shapes);
    geometry.computeBoundingBox();

    const xMid =
      -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);
    geometry.translate(xMid, 0, 0);

    const text = new THREE.Mesh(geometry, matLite);
    labelB.add(text);
  });

  const loaderTextC = new THREE.FontLoader();
  loaderTextC.load('./fonts/helvetiker_regular.typeface.json', function (font) {
    const color = 0x00000;
    const matLite = new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: 1,
      side: THREE.DoubleSide,
    });

    // Message
    const message = `${
      unit === 'in'
        ? (C / defaultUnit[unit]).toFixed(2)
        : (C / defaultUnit[unit]).toFixed(1)
    } ${unit}`;
    const shapes = font.generateShapes(message, 20);
    const geometry = new THREE.ShapeBufferGeometry(shapes);
    geometry.computeBoundingBox();

    const xMid =
      -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);
    geometry.translate(xMid, 0, 0);

    // Mesh
    const text = new THREE.Mesh(geometry, matLite);
    labelC.add(text);
  });

  const loaderTextWidth = new THREE.FontLoader();
  loaderTextWidth.load(
    './fonts/helvetiker_regular.typeface.json',
    function (font) {
      const color = 0x00000;
      const matLite = new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: 1,
        side: THREE.DoubleSide,
      });

      const message = `${
        unit === 'in'
          ? (A * 2 + B * 2 + G / defaultUnit[unit]).toFixed(2)
          : (A * 2 + B * 2 + G / defaultUnit[unit]).toFixed(1)
      } ${unit}`;
      const shapes = font.generateShapes(message, 20);
      const geometry = new THREE.ShapeBufferGeometry(shapes);
      geometry.computeBoundingBox();

      const xMid =
        -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);
      geometry.translate(xMid, 0, 0);

      const text = new THREE.Mesh(geometry, matLite);
      labelHeight.add(text);
    }
  );

  const loaderTextHeight = new THREE.FontLoader();
  loaderTextHeight.load(
    './fonts/helvetiker_regular.typeface.json',
    function (font) {
      const color = 0x00000;
      const matLite = new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: 1,
        side: THREE.DoubleSide,
      });

      const message = `${
        unit === 'in'
          ? (C + (125 * 2) / defaultUnit[unit]).toFixed(2)
          : (C + (125 * 2) / defaultUnit[unit]).toFixed(1)
      } ${unit}`;
      const shapes = font.generateShapes(message, 20);
      const geometry = new THREE.ShapeBufferGeometry(shapes);
      geometry.computeBoundingBox();

      const xMid =
        -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);
      geometry.translate(xMid, 0, 0);

      const text = new THREE.Mesh(geometry, matLite);
      labelWidth.add(text);
    }
  );

  const labelA = new THREE.Object3D();
  labelA.position.set(-A / 2 - B, C / 2 - 10, 2);

  const labelB = new THREE.Object3D();
  labelB.position.set(-B / 2, C / 2 - 10, 2);

  const labelC = new THREE.Object3D();
  labelC.position.set(A / 2 + 2 + label, C / 2 - 10, 2);

  const labelWidth = new THREE.Object3D();
  labelWidth.position.set(-A - B + 4 - G + 10 - C / 4 / 2, C / 2 - 10, 2);
  labelWidth.rotation.z = Math.PI / 2;

  const labelHeight = new THREE.Object3D();
  labelHeight.position.set(0, C + 125 + C / 4 / 2 - 10, 2);

  //* Pointer

  // Arrow Left
  const arrowLeft = (size) => {
    const scene = new THREE.Scene();

    const arrowHead = new THREE.Shape();
    arrowHead.moveTo(0, 0);
    arrowHead.lineTo(10, 5);
    arrowHead.lineTo(10, -5);
    arrowHead.lineTo(0, 0);
    const headMesh = new THREE.Mesh(
      new THREE.ShapeGeometry(arrowHead),
      new THREE.MeshBasicMaterial({ color: 0x00000 })
    );

    const arrowLine = [];
    arrowLine.push(new THREE.Vector3(10, 0));
    arrowLine.push(new THREE.Vector3(size, 0));
    const arrowMesh = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(arrowLine),
      new THREE.MeshBasicMaterial({ color: 0x00000 })
    );

    scene.add(headMesh, arrowMesh);
    return scene;
  };

  // Arrow Right
  const arrowRight = (size) => {
    const scene = new THREE.Scene();

    const arrowHead = new THREE.Shape();
    arrowHead.moveTo(0, 0);
    arrowHead.lineTo(-10, 5);
    arrowHead.lineTo(-10, -5);
    arrowHead.lineTo(0, 0);
    const headMesh = new THREE.Mesh(
      new THREE.ShapeGeometry(arrowHead),
      new THREE.MeshBasicMaterial({ color: 0x00000 })
    );

    const arrowLine = [];
    arrowLine.push(new THREE.Vector3(-10, 0));
    arrowLine.push(new THREE.Vector3(-size, 0));
    const arrowMesh = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(arrowLine),
      new THREE.MeshBasicMaterial({ color: 0x00000 })
    );

    scene.add(headMesh, arrowMesh);
    return scene;
  };

  // Arrow Top
  const arrowTop = (size) => {
    const scene = new THREE.Scene();

    const arrowHead = new THREE.Shape();
    arrowHead.moveTo(0, 0);
    arrowHead.lineTo(5, -10);
    arrowHead.lineTo(-5, -10);
    arrowHead.lineTo(0, 0);
    const headMesh = new THREE.Mesh(
      new THREE.ShapeGeometry(arrowHead),
      new THREE.MeshBasicMaterial({ color: 0x00000 })
    );

    const arrowLine = [];
    arrowLine.push(new THREE.Vector3(0, -10));
    arrowLine.push(new THREE.Vector3(0, -size));
    const arrowMesh = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(arrowLine),
      new THREE.MeshBasicMaterial({ color: 0x00000 })
    );

    scene.add(headMesh, arrowMesh);
    return scene;
  };

  // Arrow Down
  const arrowDown = (size) => {
    const scene = new THREE.Scene();

    const arrowHead = new THREE.Shape();
    arrowHead.moveTo(0, 0);
    arrowHead.lineTo(5, 10);
    arrowHead.lineTo(-5, 10);
    arrowHead.lineTo(0, 0);
    const headMesh = new THREE.Mesh(
      new THREE.ShapeGeometry(arrowHead),
      new THREE.MeshBasicMaterial({ color: 0x00000 })
    );

    const arrowLine = [];
    arrowLine.push(new THREE.Vector3(0, 10));
    arrowLine.push(new THREE.Vector3(0, size));
    const arrowMesh = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(arrowLine),
      new THREE.MeshBasicMaterial({ color: 0x00000 })
    );

    scene.add(headMesh, arrowMesh);
    return scene;
  };

  // Arrow Center
  const arrowC = (size) => {
    const scene = new THREE.Scene();

    const arrowLine = [];
    arrowLine.push(new THREE.Vector3(0, 0));
    arrowLine.push(new THREE.Vector3(-size, 0));
    const arrowMesh = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(arrowLine),
      new THREE.MeshBasicMaterial({ color: 0x000000 })
    );

    scene.add(arrowMesh);
    return scene;
  };

  const aArrowL = new THREE.Object3D();
  aArrowL.position.set(-A - B + 2, C / 2, 2);
  aArrowL.add(arrowLeft(A / 4)); //  <-- arrowLeft([ความยาวเส้น])

  const aArrowR = new THREE.Object3D();
  aArrowR.position.set(-(A / A) - B + 2, C / 2, 2);
  aArrowR.add(arrowRight(A / 4));

  const bArrowL = new THREE.Object3D();
  bArrowL.position.set(-B, C / 2, 2);
  bArrowL.add(arrowLeft(A / 2).clone());

  const bArrowR = new THREE.Object3D();
  bArrowR.position.set(-(B / B), C / 2, 2);
  bArrowR.add(arrowRight(A / 2));

  const cArrowT = new THREE.Object3D();
  cArrowT.position.set((A - 1) / 2, C, 2);
  cArrowT.add(arrowTop(A / 3).clone());

  const cArrowD = new THREE.Object3D();
  cArrowD.position.set((A - 1) / 2, 0, 2);
  cArrowD.add(arrowDown(A / 3).clone());

  const lineHeightT = new THREE.Object3D();
  lineHeightT.add(arrowC(C / 4).clone());
  lineHeightT.position.set(-A - B + 4 - G, C + 125, 2);

  const lineHeightD = new THREE.Object3D();
  lineHeightD.add(arrowC(C / 4).clone());
  lineHeightD.position.set(-A - B + 4 - G, -125, 2);

  const lineWidthL = new THREE.Object3D();
  lineWidthL.add(arrowC(C / 4).clone());
  lineWidthL.position.set(-A - B - G + 4, C + 125, 2);
  lineWidthL.rotation.z = -Math.PI / 2;

  const lineWidthR = new THREE.Object3D();
  lineWidthR.add(arrowC(C / 4).clone());
  lineWidthR.position.set(A + B, C + 125, 2);
  lineWidthR.rotation.z = -Math.PI / 2;

  const arrowHeightT = new THREE.Object3D();
  arrowHeightT.position.set(-A - B + 4 - G - C / 4 / 2, C + 125, 2);
  arrowHeightT.add(arrowTop(C / 1.5).clone());

  const arrowHeightD = new THREE.Object3D();
  arrowHeightD.position.set(-A - B + 4 - G - C / 4 / 2, -125, 2);
  arrowHeightD.add(arrowDown(C / 1.5).clone());

  const arrowWidthL = new THREE.Object3D();
  arrowWidthL.position.set(-A - B - G + 4, C + 125 + C / 4 / 2, 2);
  arrowWidthL.add(arrowLeft((A + B + G) / 1.25).clone());

  const arrowWidthR = new THREE.Object3D();
  arrowWidthR.position.set(A + B, C + 125 + C / 4 / 2, 2);
  arrowWidthR.add(arrowRight((A + B) / 1.25).clone());

  //* Group Scene */

  const geometryBoxGroup = new THREE.Object3D();
  geometryBoxGroup.add(
    lineMarkA,
    lineMarkB,
    lineMarkC,

    labelA,
    labelB,
    labelC,
    labelWidth,
    labelHeight,

    aArrowL,
    aArrowR,
    bArrowL,
    bArrowR,
    cArrowT,
    cArrowD,

    lineHeightT,
    lineHeightD,
    lineWidthL,
    lineWidthR,

    arrowHeightT,
    arrowHeightD,
    arrowWidthL,
    arrowWidthR
  );

  return geometryBoxGroup;
};
