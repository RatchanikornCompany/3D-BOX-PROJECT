import * as THREE from 'three';

export const layoutArea = (
  valueA,
  valueB,
  valueC,
  floor,
  BCMofFloor,
  numRow,
  calcArea
) => {
  const row = [];
  const column = [];
  const depth = [];

  const lineLayoutRow = [];
  const lineLayoutColumn = [];
  const lineLayoutDepth = [];

  const getModelArea = [];

  if (calcArea >= 1 && calcArea <= 500) {
    //*  Row
    row.push(new THREE.Vector3(2.5, 0, -2.5));
    row.push(new THREE.Vector3(2.5, valueC, -2.5));

    const row_line = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(row),
      new THREE.LineDashedMaterial({
        color: '#ffff00',
        dashSize: 3,
        gapSize: 2,
      })
    );
    row_line.computeLineDistances();

    const line_row = new THREE.Line();
    line_row.add(row_line);

    for (let i = 0; i <= valueA; i += Math.abs((valueA - 5) / BCMofFloor)) {
      for (let k = 0; k <= valueB; k += Math.abs((valueB - 5) / BCMofFloor)) {
        const cloneRow = new THREE.Line();
        cloneRow.add(row_line.clone());
        cloneRow.position.set(i, 0, -k);
        lineLayoutRow.push(cloneRow);
      }
    }

    //*  Column
    for (let i = 0; i <= valueA; i += Math.abs((valueA - 5) / BCMofFloor)) {
      column.push(new THREE.Vector3(i, 0, 0));
      column.push(new THREE.Vector3(i, 0, -valueB + 5));
      column.push(new THREE.Vector3(0, 0, -valueB + 5));
      column.push(new THREE.Vector3(0, 0, 0));
    }

    const column_line = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(column),
      new THREE.LineDashedMaterial({
        color: '#ffff00',
        dashSize: 3,
        gapSize: 2,
      })
    );
    column_line.computeLineDistances();

    const line_column = new THREE.Line();
    line_column.add();

    for (let j = 0; j <= valueC; j += valueC / floor) {
      const cloneColumn = new THREE.Line();
      cloneColumn.add(column_line.clone());
      cloneColumn.position.set(2.5, j, -2.5);
      lineLayoutColumn.push(cloneColumn);
    }

    //*  Depth
    for (let i = 0; i <= valueB; i += Math.abs((valueB - 5) / BCMofFloor)) {
      depth.push(new THREE.Vector3(valueA - 5, 0, 0));
      depth.push(new THREE.Vector3(valueA - 5, 0, -i));
      depth.push(new THREE.Vector3(0, 0, -i));
      depth.push(new THREE.Vector3(0, 0, 0));
    }

    const depth_line = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(depth),
      new THREE.LineDashedMaterial({
        color: '#ffff00',
        dashSize: 3,
        gapSize: 2,
      })
    );
    depth_line.computeLineDistances();

    const line_depth = new THREE.Line();
    line_depth.add(depth_line);

    for (let j = 0; j <= valueC; j += valueC / floor) {
      const cloneDepth = new THREE.Line();
      cloneDepth.add(line_depth.clone());
      cloneDepth.position.set(2.5, j, -2.5);

      lineLayoutDepth.push(cloneDepth);
    }

    const modelShape = new THREE.Geometry();
    modelShape.vertices.push(
      new THREE.Vector3(0, 0, 0), // 0
      new THREE.Vector3((valueA - 5) / BCMofFloor, 0, 0), // 1
      new THREE.Vector3(
        (valueA - 5) / BCMofFloor,
        0,
        (-valueB + 5) / (numRow - 1)
      ), // 2,
      new THREE.Vector3(0, 0, (-valueB + 5) / (numRow - 1)), // 3,

      new THREE.Vector3(
        (valueA - 5) / BCMofFloor,
        valueC / floor,
        (-valueB + 5) / (numRow - 1)
      ), // 4,
      new THREE.Vector3(0, valueC / floor, (-valueB + 5) / (numRow - 1)), // 5,
      new THREE.Vector3(0, valueC / floor, 0), // 6
      new THREE.Vector3((valueA - 5) / BCMofFloor, valueC / floor, 0) // 7
    );

    //*  Front Plane
    let face = new THREE.Face3(0, 1, 6);
    face.materialindex = 0;
    modelShape.faces.push(face);
    face = new THREE.Face3(6, 7, 1);
    face.materialindex = 0;
    modelShape.faces.push(face);

    //*  Back Plane
    face = new THREE.Face3(3, 2, 5);
    face.materialindex = 1;
    modelShape.faces.push(face);
    face = new THREE.Face3(5, 4, 2);
    face.materialindex = 1;
    modelShape.faces.push(face);

    //*  Top Plane
    face = new THREE.Face3(0, 1, 3);
    face.materialindex = 2;
    modelShape.faces.push(face);
    face = new THREE.Face3(3, 2, 1);
    face.materialindex = 2;
    modelShape.faces.push(face);

    //*  Bottom Plane
    face = new THREE.Face3(6, 7, 5);
    face.materialindex = 3;
    modelShape.faces.push(face);
    face = new THREE.Face3(5, 4, 7);
    face.materialindex = 3;
    modelShape.faces.push(face);

    //*  Left Plane
    face = new THREE.Face3(0, 3, 6);
    face.materialindex = 4;
    modelShape.faces.push(face);
    face = new THREE.Face3(6, 5, 3);
    face.materialindex = 4;
    modelShape.faces.push(face);

    //*  Right Plane
    face = new THREE.Face3(1, 2, 7);
    face.materialindex = 5;
    modelShape.faces.push(face);
    face = new THREE.Face3(7, 4, 2);
    face.materialindex = 5;
    modelShape.faces.push(face);

    //*  faceVertexUvs - ทำให้พื้นผิวสะท้อนแสง และเงา

    //*  Front Plane
    modelShape.faceVertexUvs[0].push([
      new THREE.Vector2(0, 0),
      new THREE.Vector2(1, 0),
      new THREE.Vector2(0, 1),
    ]);
    modelShape.faceVertexUvs[0].push([
      new THREE.Vector2(0, 1),
      new THREE.Vector2(1, 1),
      new THREE.Vector2(1, 0),
    ]);

    //*  Back Plane
    modelShape.faceVertexUvs[0].push([
      new THREE.Vector2(0, 0),
      new THREE.Vector2(1, 0),
      new THREE.Vector2(0, 1),
    ]);
    modelShape.faceVertexUvs[0].push([
      new THREE.Vector2(0, 1),
      new THREE.Vector2(1, 1),
      new THREE.Vector2(1, 0),
    ]);

    //*  Top Plane
    modelShape.faceVertexUvs[0].push([
      new THREE.Vector2(0, 0),
      new THREE.Vector2(0, 1),
      new THREE.Vector2(1, 0),
    ]);
    modelShape.faceVertexUvs[0].push([
      new THREE.Vector2(1, 0),
      new THREE.Vector2(1, 1),
      new THREE.Vector2(0, 1),
    ]);

    //*  Bottom Plane
    modelShape.faceVertexUvs[0].push([
      new THREE.Vector2(0, 0),
      new THREE.Vector2(0, 1),
      new THREE.Vector2(1, 0),
    ]);
    modelShape.faceVertexUvs[0].push([
      new THREE.Vector2(1, 0),
      new THREE.Vector2(1, 1),
      new THREE.Vector2(0, 1),
    ]);

    //*  Left Plane
    modelShape.faceVertexUvs[0].push([
      new THREE.Vector2(0, 0),
      new THREE.Vector2(1, 0),
      new THREE.Vector2(0, 1),
    ]);
    modelShape.faceVertexUvs[0].push([
      new THREE.Vector2(0, 1),
      new THREE.Vector2(1, 1),
      new THREE.Vector2(1, 0),
    ]);

    //*  Right Plane
    modelShape.faceVertexUvs[0].push([
      new THREE.Vector2(0, 0),
      new THREE.Vector2(1, 0),
      new THREE.Vector2(0, 1),
    ]);
    modelShape.faceVertexUvs[0].push([
      new THREE.Vector2(0, 1),
      new THREE.Vector2(1, 1),
      new THREE.Vector2(1, 0),
    ]);

    modelShape.computeFaceNormals();

    const material = new THREE.MeshPhongMaterial({
      side: THREE.DoubleSide,
      // map: new THREE.TextureLoader().load(img),
    });

    const model = new THREE.Mesh(modelShape, material);
    model.name = 'model';
    model.position.set(2.5, 0, -2.5);

    for (
      var i = 0;
      i <= valueA - (valueA - 5) / BCMofFloor;
      i += Math.abs(((valueA - 5) | 0) / BCMofFloor)
    ) {
      for (
        var j = 0;
        j <= valueC - valueC / floor;
        j += Math.abs((valueC / floor) | 0)
      ) {
        for (
          var k = 0;
          k <= valueB - (valueB - 5) / (numRow - 1);
          k += Math.abs(((valueB - 5) / (numRow - 1)) | 0)
        ) {
          const cloneModel = new THREE.Object3D();
          cloneModel.name = 'cloneModel';
          cloneModel.add(model.clone());
          cloneModel.position.set(i, j, -k);

          getModelArea.push(cloneModel);
        }
      }
    }
  }

  const lineLayoutGroup = new THREE.Group();
  lineLayoutGroup.add(
    ...lineLayoutRow,
    ...lineLayoutColumn,
    ...lineLayoutDepth,
    ...getModelArea
  );

  return lineLayoutGroup;
};
