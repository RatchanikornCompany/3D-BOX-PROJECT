import * as THREE from 'three';

export const getInnerFlapTopBottomShape = (A, C) => {
  const inner_Flap_top_bottom_shape = new THREE.Shape();
  inner_Flap_top_bottom_shape.moveTo(0, 0);
  inner_Flap_top_bottom_shape.lineTo(0, Math.round(C * (9 / 40)));
  inner_Flap_top_bottom_shape.lineTo(
    Math.round(A * (5 / 200)),
    Math.round(C * (9 / 40))
  );
  inner_Flap_top_bottom_shape.lineTo(
    Math.round(A * (5 / 200)),
    Math.round(C * (14 / 40))
  );
  inner_Flap_top_bottom_shape.lineTo(
    Math.round(A * (195 / 200)),
    Math.round(C * (14 / 40))
  );
  inner_Flap_top_bottom_shape.lineTo(
    Math.round(A * (195 / 200)),
    Math.round(C * (9 / 40))
  );
  inner_Flap_top_bottom_shape.lineTo(A, Math.round(C * (9 / 40)));
  inner_Flap_top_bottom_shape.lineTo(A, 0);

  const inner_Flap_top_bottom = new THREE.ShapeGeometry(
    inner_Flap_top_bottom_shape
  );

  return inner_Flap_top_bottom;
};

export const getInnerFlapLeftRightShape = (B, C) => {
  const inner_Flap_left_right_shape = new THREE.Shape();
  inner_Flap_left_right_shape.moveTo(0, 0);
  inner_Flap_left_right_shape.lineTo(0, Math.round(C * (9 / 40)));
  inner_Flap_left_right_shape.lineTo(
    Math.round(B * (5 / 100)),
    Math.round(C * (9 / 40))
  );
  inner_Flap_left_right_shape.lineTo(
    Math.round(B * (5 / 100)),
    Math.round(C * (14 / 40))
  );
  inner_Flap_left_right_shape.lineTo(
    Math.round(B * (95 / 100)),
    Math.round(C * (14 / 40))
  );
  inner_Flap_left_right_shape.lineTo(
    Math.round(B * (95 / 100)),
    Math.round(C * (9 / 40))
  );
  inner_Flap_left_right_shape.lineTo(B, Math.round(C * (9 / 40)));
  inner_Flap_left_right_shape.lineTo(B, 0);

  const inner_Flap_left_right = new THREE.ShapeGeometry(
    inner_Flap_left_right_shape
  );

  return inner_Flap_left_right;
};

export const getDustFlapHalfTopShape = (C) => {
  const dust_flap_half_Top_shape = new THREE.Shape();
  dust_flap_half_Top_shape.moveTo(0, 0);
  dust_flap_half_Top_shape.lineTo(0, C);
  dust_flap_half_Top_shape.lineTo(
    Math.round(C * (35 / 40)),
    Math.round(C * (35 / 40))
  );

  const dust_flap_half_Top = new THREE.ShapeGeometry(dust_flap_half_Top_shape);

  return dust_flap_half_Top;
};

export const getDustFlapHalfBottomShape = (C) => {
  const dust_flap_half_Bottom_shape = new THREE.Shape();
  dust_flap_half_Bottom_shape.moveTo(0, 0);
  dust_flap_half_Bottom_shape.lineTo(
    Math.round(C * (35 / 40)),
    Math.round(C * (35 / 40))
  );
  dust_flap_half_Bottom_shape.lineTo(C, 0);

  const dust_flap_half_Bottom = new THREE.ShapeGeometry(
    dust_flap_half_Bottom_shape
  );

  return dust_flap_half_Bottom;
};

export const getPlaneASideShape = (A, B) => {
  const planeASideShape = new THREE.Shape();
  planeASideShape.moveTo(0, 0);
  planeASideShape.lineTo(0, B);
  planeASideShape.lineTo(A, B);
  planeASideShape.lineTo(A, 0);

  const planeASide = new THREE.ShapeGeometry(planeASideShape);

  return planeASide;
};

export const getPlaneBSideShape = (C, B) => {
  const planeBSideShape = new THREE.Shape();
  planeBSideShape.moveTo(0, 0);
  planeBSideShape.lineTo(0, B);
  planeBSideShape.lineTo(C, B);
  planeBSideShape.lineTo(C, 0);

  const planeBSide = new THREE.ShapeGeometry(planeBSideShape);

  return planeBSide;
};

export const getPlaneCSideShape = (A, C) => {
  const planeCSideShape = new THREE.Shape();
  planeCSideShape.moveTo(0, 0);
  planeCSideShape.lineTo(0, C);
  planeCSideShape.lineTo(A, C);
  planeCSideShape.lineTo(A, 0);

  const planeCSide = new THREE.ShapeGeometry(planeCSideShape);

  return planeCSide;
};
