import * as THREE from 'three';

export const calVolume = (
  valueA,
  valueB,
  valueC,
  valueAModel,
  valueBModel,
  valueCModel,
  floor
  pivot_Glue_lid,
  pivot_A_back,
  pivot_top_B_left,
  pivot_bottom_B_left,
  pivot_B_left,
  pivot_top_B_right,
  pivot_bottom_B_right,
  pivot_B_right
) => {
  const scene = new THREE.Scene();

  const aModel = valueA;
  const bModel = valueB;
  const cModel = valueC;
  const Floor = 3;
  let calcArea;

  var Vs = (Math.abs(valueA - 5) * Math.abs(valueB - 5) * valueC) / 1000; // ค่าปริมาตรของกล่องลูกฟูก
  var Vn = (valueAModel * valueBModel * valueCModel) / 1000; // ค่าปริมาตรของกล่องที่จะบรรจุ

  var BCM = (Vs / Vn) | 0; // จำนวนกล่องที่สามารถบรรจุได้
  var BCMofFloor = (BCM / floor) | 0; // จำนวนกล่องที่สามารถบรรจุได้ในแต่ล่ะชั้น

  var numRow = 0;

  //*  นับจำนวน Row
  for (let i = 0; i <= valueA; i += Math.abs((valueA - 5) / BCMofFloor)) {
    numRow = numRow + 1;
  }

  //*  Area
  calcArea = BCMofFloor * floor * (numRow - 1);

  if (calcArea >= 1 && calcArea <= 500) {
    //*  Row
    var row = [];

    row.push(new THREE.Vector3(2.5, 0, -2.5));
    row.push(new THREE.Vector3(2.5, valueC, -2.5));

    var row_line = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(row),
      new THREE.LineDashedMaterial({
        color: '#ffff00',
        dashSize: 3,
        gapSize: 2,
      })
    );
    row_line.name = 'line_row';
    row_line.computeLineDistances();

    var line_row = new THREE.Line();
    line_row.add(row_line);

    for (let i = 0; i <= valueA; i += Math.abs((valueA - 5) / BCMofFloor)) {
      for (let k = 0; k <= valueB; k += Math.abs((valueB - 5) / BCMofFloor)) {
        var cloneRow = new THREE.Line();
        cloneRow.name = 'cloneRow';
        cloneRow.add(row_line.clone());
        cloneRow.position.set(i, 0, -k);
        scene.add(cloneRow);
      }
    }

    //*  Column
    var column = [];

    for (let i = 0; i <= valueA; i += Math.abs((valueA - 5) / BCMofFloor)) {
      column.push(new THREE.Vector3(i, 0, 0));
      column.push(new THREE.Vector3(i, 0, -valueB + 5));
      column.push(new THREE.Vector3(0, 0, -valueB + 5));
      column.push(new THREE.Vector3(0, 0, 0));
    }

    var column_line = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(column),
      new THREE.LineDashedMaterial({
        color: '#ffff00',
        dashSize: 3,
        gapSize: 2,
      })
    );
    column_line.name = 'line_column';
    column_line.computeLineDistances();

    var line_column = new THREE.Line();
    line_column.add();

    for (let j = 0; j <= valueC; j += valueC / floor) {
      var cloneColumn = new THREE.Line();
      cloneColumn.name = 'cloneColumn';
      cloneColumn.add(column_line.clone());
      cloneColumn.position.set(2.5, j, -2.5);
      scene.add(cloneColumn);
    }

    //*  Depth
    var depth = [];

    for (let i = 0; i <= valueB; i += Math.abs((valueB - 5) / BCMofFloor)) {
      depth.push(new THREE.Vector3(valueA - 5, 0, 0));
      depth.push(new THREE.Vector3(valueA - 5, 0, -i));
      depth.push(new THREE.Vector3(0, 0, -i));
      depth.push(new THREE.Vector3(0, 0, 0));
    }

    var depth_line = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(depth),
      new THREE.LineDashedMaterial({
        color: '#ffff00',
        dashSize: 3,
        gapSize: 2,
      })
    );
    depth_line.name = 'depth_line';
    depth_line.computeLineDistances();

    var line_depth = new THREE.Line();
    line_depth.add(depth_line);
    line_depth.name = 'line_depth';

    for (let j = 0; j <= valueC; j += valueC / floor) {
      var cloneDepth = new THREE.Line();
      cloneDepth.name = 'cloneDepth';
      cloneDepth.add(line_depth.clone());
      cloneDepth.position.set(2.5, j, -2.5);
      scene.add(cloneDepth);
    }

    // /* #region  //* pivot_A_front */

    // /* #region  //* pivot_A_top_front */

    // pivot_A_top_front.rotation.x = ((Math.PI / 180) * 91) / 2;

    // pivot_A_top_front.position.y = valueC - 2.5;

    // /* #endregion */

    // pivot_A_bottom_front.rotation.x = -(Math.PI / 180) * 89;

    // pivot_A_bottom_front.position.y = 2.5;
    // pivot_A_bottom_front.position.z = 0;

    // /* #endregion */
    // /* #region  //* pivot_A_back */

    // /* #region  //* pivot_A_top_back */

    // pivot_A_top_back.rotation.x = ((Math.PI / 180) * 91) / 2;

    // pivot_A_top_back.position.y = valueC - 2.5;
    // pivot_A_top_back.position.z = -2.5;

    // /* #endregion */

    // pivot_A_bottom_back.rotation.x = -(Math.PI / 180) * 89;

    // pivot_A_bottom_back.position.y = 2.5;
    // pivot_A_bottom_back.position.z = 0;

    // pivot_Glue_lid.rotation.y = (Math.PI / 180) * -90;

    // pivot_Glue_lid.position.x = -valueA + 2.5;
    // pivot_Glue_lid.position.z = -2.5;

    // pivot_A_back.rotation.y = -Math.PI / 2;

    // /* #endregion */
    // /* #region  //* pivot_B_left */

    // /* #region  //* pivot_top_B_left */

    // pivot_top_B_left.rotation.x = ((Math.PI / 180) * 89) / 2;

    // pivot_top_B_left.position.y = valueC - 2.5;
    // pivot_top_B_left.position.z = -2.5;

    // /* #endregion */

    // pivot_bottom_B_left.rotation.x = -(Math.PI / 180) * 91;

    // pivot_bottom_B_left.position.y = 2.5;
    // pivot_bottom_B_left.position.z = 0;

    // pivot_B_left.rotation.y = -Math.PI / 2;

    // /* #endregion */
    // /* #region  //* pivot_B_right */

    // /* #region  //* pivot_top_B_right */

    // pivot_top_B_right.rotation.x = (-(Math.PI / 180) * 89) / 2;

    // /* #endregion */

    // pivot_bottom_B_right.rotation.x = (Math.PI / 180) * 91;

    // pivot_B_right.rotation.y = -Math.PI / 2;

    // pivot_B_right.position.x = valueA - 2.5;
    // pivot_B_right.position.z = 0;

    // /* #endregion */
    // /* #region  //* removeObjects */
    // // scene.remove(line_all);
    // /* #endregion */

    // //*  model
    // /* #region  //* model */

    // //*  Plane
    // const modelShape = new THREE.Geometry();
    // modelShape.vertices.push(
    //   new THREE.Vector3(0, 0, 0), // 0
    //   new THREE.Vector3((valueA - 5) / BCMofFloor, 0, 0), // 1
    //   new THREE.Vector3(
    //     (valueA - 5) / BCMofFloor,
    //     0,
    //     (-valueB + 5) / (numRow - 1)
    //   ), // 2,
    //   new THREE.Vector3(0, 0, (-valueB + 5) / (numRow - 1)), // 3,

    //   new THREE.Vector3(
    //     (valueA - 5) / BCMofFloor,
    //     valueC / floor,
    //     (-valueB + 5) / (numRow - 1)
    //   ), // 4,
    //   new THREE.Vector3(0, valueC / floor, (-valueB + 5) / (numRow - 1)), // 5,
    //   new THREE.Vector3(0, valueC / floor, 0), // 6
    //   new THREE.Vector3((valueA - 5) / BCMofFloor, valueC / floor, 0) // 7
    // );

    // //*  Front Plane
    // let face = new THREE.Face3(0, 1, 6);
    // face.materialindex = 0;
    // modelShape.faces.push(face);
    // face = new THREE.Face3(6, 7, 1);
    // face.materialindex = 0;
    // modelShape.faces.push(face);

    // //*  Back Plane
    // face = new THREE.Face3(3, 2, 5);
    // face.materialindex = 1;
    // modelShape.faces.push(face);
    // face = new THREE.Face3(5, 4, 2);
    // face.materialindex = 1;
    // modelShape.faces.push(face);

    // //*  Top Plane
    // face = new THREE.Face3(0, 1, 3);
    // face.materialindex = 2;
    // modelShape.faces.push(face);
    // face = new THREE.Face3(3, 2, 1);
    // face.materialindex = 2;
    // modelShape.faces.push(face);

    // //*  Bottom Plane
    // face = new THREE.Face3(6, 7, 5);
    // face.materialindex = 3;
    // modelShape.faces.push(face);
    // face = new THREE.Face3(5, 4, 7);
    // face.materialindex = 3;
    // modelShape.faces.push(face);

    // //*  Left Plane
    // face = new THREE.Face3(0, 3, 6);
    // face.materialindex = 4;
    // modelShape.faces.push(face);
    // face = new THREE.Face3(6, 5, 3);
    // face.materialindex = 4;
    // modelShape.faces.push(face);

    // //*  Right Plane
    // face = new THREE.Face3(1, 2, 7);
    // face.materialindex = 5;
    // modelShape.faces.push(face);
    // face = new THREE.Face3(7, 4, 2);
    // face.materialindex = 5;
    // modelShape.faces.push(face);

    // //*  faceVertexUvs - ทำให้พื้นผิวสะท้อนแสง และเงา

    // //*  Front Plane
    // modelShape.faceVertexUvs[0].push([
    //   new THREE.Vector2(0, 0),
    //   new THREE.Vector2(1, 0),
    //   new THREE.Vector2(0, 1),
    // ]);
    // modelShape.faceVertexUvs[0].push([
    //   new THREE.Vector2(0, 1),
    //   new THREE.Vector2(1, 1),
    //   new THREE.Vector2(1, 0),
    // ]);

    // //*  Back Plane
    // modelShape.faceVertexUvs[0].push([
    //   new THREE.Vector2(0, 0),
    //   new THREE.Vector2(1, 0),
    //   new THREE.Vector2(0, 1),
    // ]);
    // modelShape.faceVertexUvs[0].push([
    //   new THREE.Vector2(0, 1),
    //   new THREE.Vector2(1, 1),
    //   new THREE.Vector2(1, 0),
    // ]);

    // //*  Top Plane
    // modelShape.faceVertexUvs[0].push([
    //   new THREE.Vector2(0, 0),
    //   new THREE.Vector2(0, 1),
    //   new THREE.Vector2(1, 0),
    // ]);
    // modelShape.faceVertexUvs[0].push([
    //   new THREE.Vector2(1, 0),
    //   new THREE.Vector2(1, 1),
    //   new THREE.Vector2(0, 1),
    // ]);

    // //*  Bottom Plane
    // modelShape.faceVertexUvs[0].push([
    //   new THREE.Vector2(0, 0),
    //   new THREE.Vector2(0, 1),
    //   new THREE.Vector2(1, 0),
    // ]);
    // modelShape.faceVertexUvs[0].push([
    //   new THREE.Vector2(1, 0),
    //   new THREE.Vector2(1, 1),
    //   new THREE.Vector2(0, 1),
    // ]);

    // //*  Left Plane
    // modelShape.faceVertexUvs[0].push([
    //   new THREE.Vector2(0, 0),
    //   new THREE.Vector2(1, 0),
    //   new THREE.Vector2(0, 1),
    // ]);
    // modelShape.faceVertexUvs[0].push([
    //   new THREE.Vector2(0, 1),
    //   new THREE.Vector2(1, 1),
    //   new THREE.Vector2(1, 0),
    // ]);

    // //*  Right Plane
    // modelShape.faceVertexUvs[0].push([
    //   new THREE.Vector2(0, 0),
    //   new THREE.Vector2(1, 0),
    //   new THREE.Vector2(0, 1),
    // ]);
    // modelShape.faceVertexUvs[0].push([
    //   new THREE.Vector2(0, 1),
    //   new THREE.Vector2(1, 1),
    //   new THREE.Vector2(1, 0),
    // ]);

    // modelShape.computeFaceNormals();

    // const material = new THREE.MeshPhongMaterial({
    //   side: THREE.DoubleSide,
    //   // map: new THREE.TextureLoader().load(img),
    // });

    // const model = new THREE.Mesh(modelShape, material);
    // model.name = 'model';
    // model.position.set(2.5, 0, -2.5);

    // for (
    //   let i = 0;
    //   i <= valueA - (valueA - 5) / BCMofFloor;
    //   i += Math.abs((valueA - 5) / BCMofFloor)
    // ) {
    //   for (
    //     let j = 0;
    //     j <= valueC - valueC / floor;
    //     j += Math.abs(valueC / floor)
    //   ) {
    //     for (
    //       let k = 0;
    //       k <= valueB - (valueB - 5) / (numRow - 1);
    //       k += Math.abs((valueB - 5) / (numRow - 1))
    //     ) {
    //       const cloneModel = new THREE.Object3D();
    //       cloneModel.name = 'cloneModel';
    //       cloneModel.add(model.clone());
    //       cloneModel.position.set(i, j, -k);
    //       scene.add(cloneModel);
    //     }
    //   }
    // }

    // /* #endregion */
  }

  // console.log(
  //   `
  //   Vs (ปริมาตรกล่อง) :                                       ${Vs} cm^3
  //   Vn (ปริมาตรสิ่งของ):                                       ${Vn} cm^3
  //   Floor :                                                 ${Floor} ชั้น

  //   BCM (จำนวนที่สามารถบรรจุ) :                                ${BCM} ชิ้น
  //   BCM of floor (จำนวนที่สามารถบรรจุแต่ล่ะชั้น) :                 ${BCMofFloor} ชิ้น
  //   BCM of Area : BCMofFloor[${BCMofFloor}] * Floor[${Floor}] * numRow[${
  //     numRow - 1
  //   }]      ${
  //     BCMofFloor * Floor * (numRow - 1)
  //   } ชิ้น   (จำนวนที่สามารถบรรจุ พื้นที่ จำนวนที่สามารถบรรจุแต่ละแถว x ชั้น x จำนวนแถว)
  //   `
  // );

  return calcArea;
};
