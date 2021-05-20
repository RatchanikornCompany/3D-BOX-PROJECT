import { gsap } from 'gsap';

let tween;

export const foldBox = (
  A,
  C,
  pivot_A_top_front,
  pivot_A_bottom_front,
  pivot_A_top_back,
  pivot_A_bottom_back,
  pivot_Glue_lid,
  pivot_A_back,
  pivot_top_B_left,
  pivot_bottom_B_left,
  pivot_B_left,
  pivot_top_B_right,
  pivot_bottom_B_right,
  pivot_B_right
) => {
  /* #region  //* pivot_A_front */

  /* #region  //* pivot_A_top_front */

  tween = gsap.timeline();
  tween.to(pivot_A_top_front.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_top_front.x = ((Math.PI / 180) * 91) / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_top_front.position, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_A_top_front.y = C - 2.5),
  });

  /* #endregion */

  tween = gsap.timeline();
  tween.to(pivot_A_bottom_front.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_bottom_front.x = -(Math.PI / 180) * 89),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_bottom_front.position, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_A_bottom_front.y = 2.5),
    z: (pivot_A_bottom_front.z = 0),
  });

  /* #endregion */
  /* #region  //* pivot_A_back */

  /* #region  //* pivot_A_top_back */

  tween = gsap.timeline();
  tween.to(pivot_A_top_back.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_top_back.x = ((Math.PI / 180) * 91) / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_top_back.position, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_A_top_back.y = C - 2.5),
    z: (pivot_A_top_back.z = -2.5),
  });

  /* #endregion */

  tween = gsap.timeline();
  tween.to(pivot_A_bottom_back.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_bottom_back.x = -(Math.PI / 180) * 89),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_bottom_back.position, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_A_bottom_back.y = 2.5),
    z: (pivot_A_bottom_back.z = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Glue_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Glue_lid.y = (Math.PI / 180) * -90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Glue_lid.position, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Glue_lid.x = -A + 2.5),
    z: (pivot_Glue_lid.z = -2.5),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_back.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_A_back.y = -Math.PI / 2),
  });

  /* #endregion */
  /* #region  //* pivot_B_left */

  /* #region  //* pivot_top_B_left */

  tween = gsap.timeline();
  tween.to(pivot_top_B_left.rotation, {
    duration: 10,
    ease: 'power4.in',
    x: (pivot_top_B_left.x = ((Math.PI / 180) * 89) / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_top_B_left.position, {
    duration: 10,
    ease: 'power4.in',
    y: (pivot_top_B_left.y = C - 2.5),
    z: (pivot_top_B_left.z = -2.5),
  });

  /* #endregion */

  tween = gsap.timeline();
  tween.to(pivot_bottom_B_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_bottom_B_left.x = -(Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_bottom_B_left.position, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_bottom_B_left.y = 2.5),
    z: (pivot_bottom_B_left.z = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_B_left.y = -Math.PI / 2),
  });

  /* #endregion */
  /* #region  //* pivot_B_right */

  /* #region  //* pivot_top_B_right */

  tween = gsap.timeline();
  tween.to(pivot_top_B_right.rotation, {
    duration: 10,
    ease: 'power4.in',
    x: (pivot_top_B_right.x = (-(Math.PI / 180) * 89) / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_top_B_right.position, {
    duration: 10,
    ease: 'power4.in',
  });

  /* #endregion */

  tween = gsap.timeline();
  tween.to(pivot_bottom_B_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_bottom_B_right.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_B_right.y = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_right.position, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_B_right.x = A - 2.5),
    z: (pivot_B_right.z = 0),
  });

  /* #endregion */
};

export const expandBox = (
  A,
  C,
  pivot_A_top_front,
  pivot_A_bottom_front,
  pivot_A_top_back,
  pivot_A_bottom_back,
  pivot_Glue_lid,
  pivot_A_back,
  pivot_top_B_left,
  pivot_bottom_B_left,
  pivot_B_left,
  pivot_top_B_right,
  pivot_bottom_B_right,
  pivot_B_right
) => {
  /* #region  //* pivot_A_front */

  /* #region  //* pivot_A_top_front */

  tween = gsap.timeline();
  tween.to(pivot_A_top_front.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_top_front.x = 0),
  });

  /* #endregion */

  tween = gsap.timeline();
  tween.to(pivot_A_bottom_front.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_bottom_front.x = -Math.PI),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_bottom_front.position, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_A_bottom_front.y = 0),
    z: (pivot_A_bottom_front.z = -2.5),
  });

  /* #endregion */
  /* #region  //* pivot_A_back */

  /* #region  //* pivot_A_top_back */

  tween = gsap.timeline();
  tween.to(pivot_A_top_back.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_top_back.x = 0),
  });

  /* #endregion */

  tween = gsap.timeline();
  tween.to(pivot_A_bottom_back.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_bottom_back.x = -Math.PI),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_bottom_back.position, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_A_bottom_back.y = 0),
    z: (pivot_A_bottom_back.z = -2.5),
  });

  tween = gsap.timeline();
  tween.to(pivot_Glue_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Glue_lid.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Glue_lid.position, {
    duration: 5,
    ease: 'power4.in',
    z: (pivot_Glue_lid.z = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_back.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_A_back.y = 0),
  });

  /* #endregion */
  /* #region  //* pivot_B_left */

  /* #region  //* pivot_top_B_left */

  tween = gsap.timeline();
  tween.to(pivot_top_B_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_top_B_left.x = 0),
  });

  /* #endregion */

  tween = gsap.timeline();
  tween.to(pivot_bottom_B_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_bottom_B_left.x = -Math.PI),
  });

  tween = gsap.timeline();
  tween.to(pivot_bottom_B_left.position, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_bottom_B_left.y = 0),
    z: (pivot_bottom_B_left.z = -2.5),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_B_left.y = 0),
  });

  /* #endregion */
  /* #region  //* pivot_B_right */

  /* #region  //* pivot_top_B_right */

  tween = gsap.timeline();
  tween.to(pivot_top_B_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_top_B_right.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_top_B_right.position, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_top_B_right.y = C),
    z: (pivot_top_B_right.z = 0),
  });

  /* #endregion */

  tween = gsap.timeline();
  tween.to(pivot_bottom_B_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_bottom_B_right.x = Math.PI),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_B_right.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_right.position, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_B_right.x = A),
    z: (pivot_B_right.z = -2.5),
  });

  /* #endregion */
};
