import { gsap } from 'gsap';

let tween;

export const foldBox = (
  A,
  B,
  C,
  pivot_A_back,
  pivot_B_Top_left,
  pivot_B_Top_right,
  pivot_B_Bottom_left,
  pivot_B_Bottom_right,
  pivot_B_top,
  pivot_B_bottom,
  pivot_B_left,
  pivot_B_right,
  pivot_B_Left_lid,
  pivot_B_Right_lid,
  pivot_A_Top_left,
  pivot_A_Top_right,
  pivot_A_top,
  pivot_A_Top_Lid_l,
  pivot_A_Top_Lid_r,
  pivot_A_Top_lid
) => {
  /*  #region  //* pivot_A_back */

  tween = gsap.timeline();
  tween.to(pivot_A_back.rotation, {
    duration: 4 / 10,
    ease: 'power4.in',
    x: (pivot_A_back.x = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_back.position, {
    duration: 4 / 10,
    ease: 'power4.in',
    y: (pivot_A_back.y = 2.5),
  });

  /*  #endregion */

  /*  #region  //* pivot_B_Top_left */

  tween = gsap.timeline();
  tween.to(pivot_B_Top_left.rotation, {
    duration: 6 / 10,
    ease: 'power4.in',
    y: (pivot_B_Top_left.y = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_Top_left.position, {
    duration: 6 / 10,
    ease: 'power4.in',
    x: (pivot_B_Top_left.x = 0.1),
  });

  /*  #endregion */
  /*  #region  //* pivot_B_Top_right */

  tween = gsap.timeline();
  tween.to(pivot_B_Top_right.rotation, {
    duration: 6 / 10,
    ease: 'power4.in',
    y: (pivot_B_Top_right.y = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_Top_right.position, {
    duration: 6 / 10,
    ease: 'power4.in',
    x: (pivot_B_Top_right.x = A - 2.6),
    z: (pivot_B_Top_right.z = -2.5),
  });

  /*  #endregion */
  /*  #region  //* pivot_B_Bottom_left */

  tween = gsap.timeline();
  tween.to(pivot_B_Bottom_left.rotation, {
    duration: 6 / 10,
    ease: 'power4.in',
    y: (pivot_B_Bottom_left.y = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_Bottom_left.position, {
    duration: 6 / 10,
    ease: 'power4.in',
    x: (pivot_B_Bottom_left.x = 2.6),
    z: (pivot_B_Bottom_left.z = -3.5),
  });

  /*  #endregion */
  /*  #region  //* pivot_B_Bottom_right */

  tween = gsap.timeline();
  tween.to(pivot_B_Bottom_right.rotation, {
    duration: 6 / 10,
    ease: 'power4.in',
    y: (pivot_B_Bottom_right.y = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_Bottom_right.position, {
    duration: 6 / 10,
    ease: 'power4.in',
    x: (pivot_B_Bottom_right.x = A - 0.1),
    z: (pivot_B_Bottom_right.z = -3.5),
  });

  /*  #endregion */

  /*  #region  //* pivot_B_top */

  tween = gsap.timeline();
  tween.to(pivot_B_top.rotation, {
    duration: 8 / 10,
    ease: 'power4.in',
    x: (pivot_B_top.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_top.position, {
    duration: 8 / 10,
    ease: 'power4.in',
    y: (pivot_B_top.y = B - 2.5),
    z: (pivot_B_top.z = -2.5),
  });

  /*  #endregion */
  /*  #region  //* pivot_B_bottom */

  tween = gsap.timeline();
  tween.to(pivot_B_bottom.rotation, {
    duration: 8 / 10,
    ease: 'power4.in',
    x: (pivot_B_bottom.x = Math.PI / 2),
  });

  // /*  #endregion */

  /*  #region  //* pivot_B_left */

  tween = gsap.timeline();
  tween.to(pivot_B_left.rotation, {
    duration: 10 / 10,
    ease: 'power4.in',
    y: (pivot_B_left.y = Math.PI / 2),
  });

  /*  #endregion */
  /*  #region  //* pivot_B_right */

  tween = gsap.timeline();
  tween.to(pivot_B_right.rotation, {
    duration: 10 / 10,
    ease: 'power4.in',
    y: (pivot_B_right.y = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_right.position, {
    duration: 10 / 10,
    ease: 'power4.in',
    x: (pivot_B_right.x = A - 2.5),
    z: (pivot_B_right.z = -2.5),
  });

  /*  #endregion */

  /*  #region  //* pivot_B_Left_lid */

  tween = gsap.timeline();
  tween.to(pivot_B_Left_lid.rotation, {
    duration: 12 / 10,
    ease: 'power4.in',
    y: (pivot_B_Left_lid.y = -Math.PI),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_Left_lid.position, {
    duration: 12 / 10,
    ease: 'power4.in',
    z: (pivot_B_Left_lid.z = 2.61),
  });

  /*  #endregion */
  /*  #region  //* pivot_B_Right_lid */

  tween = gsap.timeline();
  tween.to(pivot_B_Right_lid.rotation, {
    duration: 12 / 10,
    ease: 'power4.in',
    y: (pivot_B_Right_lid.y = -Math.PI),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_Right_lid.position, {
    duration: 12 / 10,
    ease: 'power4.in',
    z: (pivot_B_Right_lid.z = -2.39),
  });

  /*  #endregion */

  /*  #region  //* pivot_A_Top_left */

  tween = gsap.timeline();
  tween.to(pivot_A_Top_left.rotation, {
    duration: 18 / 10,
    ease: 'power4.in',
    y: (pivot_A_Top_left.y = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_Top_left.position, {
    duration: 18 / 10,
    ease: 'power4.in',
    x: (pivot_A_Top_left.x = 0.1),
  });

  /*  #endregion */
  /*  #region  //* pivot_A_Top_right */

  tween = gsap.timeline();
  tween.to(pivot_A_Top_right.rotation, {
    duration: 18 / 10,
    ease: 'power4.in',
    y: (pivot_A_Top_right.y = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_Top_right.position, {
    duration: 18 / 10,
    ease: 'power4.in',
    x: (pivot_A_Top_right.x = A - 2.5 - 0.1),
    z: (pivot_A_Top_right.z = -2.5),
  });

  /*  #endregion */

  /*  #region  //* pivot_A_top */

  tween = gsap.timeline();
  tween.to(pivot_A_top.rotation, {
    duration: 32 / 10,
    ease: 'power4.in',
    x: (pivot_A_top.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_top.position, {
    duration: 32 / 10,
    ease: 'power4.in',
    y: (pivot_A_top.y = C - 2.5),
    z: (pivot_A_top.z = -2.5),
  });

  /*  #endregion */

  /*  #region  //* pivot_A_Top_Lid_l */

  tween = gsap.timeline();
  tween.to(pivot_A_Top_Lid_l.rotation, {
    duration: 48 / 10,
    ease: 'power4.in',
    y: (pivot_A_Top_Lid_l.y = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_Top_Lid_l.position, {
    duration: 48 / 10,
    ease: 'power4.in',
    x: (pivot_A_Top_Lid_l.x = 0.1),
  });

  /*  #endregion */
  /*  #region  //* pivot_A_Top_Lid_r */

  tween = gsap.timeline();
  tween.to(pivot_A_Top_Lid_r.rotation, {
    duration: 48 / 10,
    ease: 'power4.in',
    y: (pivot_A_Top_Lid_r.y = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_Top_Lid_r.position, {
    duration: 48 / 10,
    ease: 'power4.in',
    x: (pivot_A_Top_Lid_r.x = A - 2.5 - 0.1),
  });

  /*  #endregion */

  /*  #region  //* pivot_A_Top_lid */

  tween = gsap.timeline();
  tween.to(pivot_A_Top_lid.rotation, {
    duration: 92 / 12,
    ease: 'power4.in',
    x: (pivot_A_Top_lid.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_Top_lid.position, {
    duration: 92 / 12,
    ease: 'power4.in',
    y: (pivot_A_Top_lid.y = B - 2.6),
    z: (pivot_A_Top_lid.z = -2.5),
  });

  /*  #endregion */
};

export const expandBox = (
  A,
  B,
  C,
  pivot_A_back,
  pivot_B_Top_left,
  pivot_B_Top_right,
  pivot_B_Bottom_left,
  pivot_B_Bottom_right,
  pivot_B_top,
  pivot_B_bottom,
  pivot_B_left,
  pivot_B_right,
  pivot_B_Left_lid,
  pivot_B_Right_lid,
  pivot_A_Top_left,
  pivot_A_Top_right,
  pivot_A_top,
  pivot_A_Top_Lid_l,
  pivot_A_Top_Lid_r,
  pivot_A_Top_lid
) => {
  /*  #region  //* pivot_A_Top_lid */

  tween = gsap.timeline();
  tween.to(pivot_A_Top_lid.rotation, {
    duration: 4 / 10,
    ease: 'power4.in',
    x: (pivot_A_Top_lid.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_Top_lid.position, {
    duration: 4,
    ease: 'power4.in',
    y: (pivot_A_Top_lid.y = B),
    z: (pivot_A_Top_lid.z = 0),
  });

  // /*  #endregion */

  /*  #region  //* pivot_A_Top_Lid_l */

  tween = gsap.timeline();
  tween.to(pivot_A_Top_Lid_l.rotation, {
    duration: 6 / 10,
    ease: 'power4.in',
    y: (pivot_A_Top_Lid_l.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_Top_Lid_l.position, {
    duration: 6 / 10,
    ease: 'power4.in',
    x: (pivot_A_Top_Lid_l.x = 1),
  });

  /*  #endregion */
  /*  #region  //* pivot_A_Top_Lid_r */

  tween = gsap.timeline();
  tween.to(pivot_A_Top_Lid_r.rotation, {
    duration: 6 / 10,
    ease: 'power4.in',
    y: (pivot_A_Top_Lid_r.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_Top_Lid_r.position, {
    duration: 6 / 10,
    ease: 'power4.in',
    x: (pivot_A_Top_Lid_r.x = A - 1),
  });

  /*  #endregion */

  /*  #region  //* pivot_A_top */

  tween = gsap.timeline();
  tween.to(pivot_A_top.rotation, {
    duration: 8 / 10,
    ease: 'power4.in',
    x: (pivot_A_top.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_top.position, {
    duration: 8 / 10,
    ease: 'power4.in',
    y: (pivot_A_top.y = C),
    z: (pivot_A_top.z = 0),
  });

  /*  #endregion */

  /*  #region  //* pivot_A_Top_left */

  tween = gsap.timeline();
  tween.to(pivot_A_Top_left.rotation, {
    duration: 10 / 10,
    ease: 'power4.in',
    y: (pivot_A_Top_left.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_Top_left.position, {
    duration: 10 / 10,
    ease: 'power4.in',
    x: (pivot_A_Top_left.x = 2),
  });

  /*  #endregion */
  /*  #region  //* pivot_A_Top_right */

  tween = gsap.timeline();
  tween.to(pivot_A_Top_right.rotation, {
    duration: 10 / 10,
    ease: 'power4.in',
    y: (pivot_A_Top_right.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_Top_right.position, {
    duration: 10 / 10,
    ease: 'power4.in',
    x: (pivot_A_Top_right.x = A - 2),
    z: (pivot_A_Top_right.z = 0),
  });

  /*  #endregion */

  /*  #region  //* pivot_B_Left_lid */

  tween = gsap.timeline();
  tween.to(pivot_B_Left_lid.rotation, {
    duration: 12 / 10,
    ease: 'power4.in',
    y: (pivot_B_Left_lid.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_Left_lid.position, {
    duration: 12 / 10,
    ease: 'power4.in',
    z: (pivot_B_Left_lid.z = 0),
  });

  /*  #endregion */
  /*  #region  //* pivot_B_Right_lid */

  tween = gsap.timeline();
  tween.to(pivot_B_Right_lid.rotation, {
    duration: 12 / 10,
    ease: 'power4.in',
    y: (pivot_B_Right_lid.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_Right_lid.position, {
    duration: 12 / 10,
    ease: 'power4.in',
    z: (pivot_B_Right_lid.z = 0),
  });

  /*  #endregion */

  /*  #region  //* pivot_B_left */

  tween = gsap.timeline();
  tween.to(pivot_B_left.rotation, {
    duration: 18 / 10,
    ease: 'power4.in',
    y: (pivot_B_left.y = 0),
  });

  /*  #endregion */
  /*  #region  //* pivot_B_right */

  tween = gsap.timeline();
  tween.to(pivot_B_right.rotation, {
    duration: 18 / 10,
    ease: 'power4.in',
    y: (pivot_B_right.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_right.position, {
    duration: 18 / 10,
    ease: 'power4.in',
    x: (pivot_B_right.x = A),
    z: (pivot_B_right.z = 0),
  });

  /*  #endregion */

  /*  #region  //* pivot_B_top */

  tween = gsap.timeline();
  tween.to(pivot_B_top.rotation, {
    duration: 32 / 10,
    ease: 'power4.in',
    x: (pivot_B_top.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_top.position, {
    duration: 32 / 10,
    ease: 'power4.in',
    y: (pivot_B_top.y = B),
    z: (pivot_B_top.z = 0),
  });

  /*  #endregion */
  /*  #region  //* pivot_B_bottom */

  tween = gsap.timeline();
  tween.to(pivot_B_bottom.rotation, {
    duration: 32 / 10,
    ease: 'power4.in',
    x: (pivot_B_bottom.x = Math.PI),
  });

  /*  #endregion */

  /*  #region  //* pivot_B_Top_left */

  tween = gsap.timeline();
  tween.to(pivot_B_Top_left.rotation, {
    duration: 48 / 10,
    ease: 'power4.in',
    y: (pivot_B_Top_left.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_Top_left.position, {
    duration: 48 / 10,
    ease: 'power4.in',
    x: (pivot_B_Top_left.x = 1),
  });

  /*  #endregion */
  /*  #region  //* pivot_B_Top_right */

  tween = gsap.timeline();
  tween.to(pivot_B_Top_right.rotation, {
    duration: 48 / 10,
    ease: 'power4.in',
    y: (pivot_B_Top_right.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_Top_right.position, {
    duration: 48 / 10,
    ease: 'power4.in',
    x: (pivot_B_Top_right.x = A - 1),
    z: (pivot_B_Top_right.z = 0),
  });

  /*  #endregion */
  /*  #region  //* pivot_B_Bottom_left */

  tween = gsap.timeline();
  tween.to(pivot_B_Bottom_left.rotation, {
    duration: 48 / 10,
    ease: 'power4.in',
    y: (pivot_B_Bottom_left.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_Bottom_left.position, {
    duration: 48 / 10,
    ease: 'power4.in',
    x: (pivot_B_Bottom_left.x = 1),
    z: (pivot_B_Bottom_left.z = -2.5),
  });

  /*  #endregion */
  /*  #region  //* pivot_B_Bottom_right */

  tween = gsap.timeline();
  tween.to(pivot_B_Bottom_right.rotation, {
    duration: 48 / 10,
    ease: 'power4.in',
    y: (pivot_B_Bottom_right.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_Bottom_right.position, {
    duration: 48 / 10,
    ease: 'power4.in',
    x: (pivot_B_Bottom_right.x = A - 1),
    z: (pivot_B_Bottom_right.z = 0),
  });

  /*  #endregion */

  /*  #region  //* pivot_A_back */

  tween = gsap.timeline();
  tween.to(pivot_A_back.rotation, {
    duration: 92 / 12,
    ease: 'power4.in',
    x: (pivot_A_back.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_back.position, {
    duration: 92 / 12,
    ease: 'power4.in',
    z: (pivot_A_back.z = 0),
  });

  /*  #endregion */
};
