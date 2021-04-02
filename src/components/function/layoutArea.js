import * as THREE from 'three';

export const layoutArea = (
  valueA,
  valueB,
  valueC,
  floor,
  BCMofFloor,
  calcArea
) => {
  const row = [];
  const lineLayoutRow = [];
  const column = [];
  const lineLayoutColumn = [];
  const depth = [];
  const lineLayoutDepth = [];

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
  }

  const lineLayoutGroup = new THREE.Group();
  lineLayoutGroup.add(
    ...lineLayoutRow,
    ...lineLayoutColumn,
    ...lineLayoutDepth
  );

  return lineLayoutGroup;
};
