import * as THREE from 'three';

export const getPivotBRight = () => {
  let pivot_B_right = new THREE.Object3D();
  pivot_B_right.name = 'pivot_B_right';
  pivot_B_right.add(side_B_right, pivot_top_B_right, pivot_bottom_B_right);
  pivot_B_right.position.set(valueA, 0, -2.5);
  rotateObject(pivot_B_right, 0, 180);

  return pivot_B_right;
};
