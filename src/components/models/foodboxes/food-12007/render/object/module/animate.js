import gsap from 'gsap';

let tween;

export const foldBox = (
  pivot_A_front_top,
  pivot_B_front_left,
  pivot_B_front_right,
  pivot_A_front,
  pivot_B_left_lid,
  pivot_B_left_lid_d,
  pivot_B_left,
  pivot_B_right_lid,
  pivot_B_right_lid_d,
  pivot_B_right,
  pivot_A_top,
  pivot_Lid_bottom_d,
  pivot_Lid_bottom,
  pivot_A_back
) => {
  /* #region  //* pivot_A_front */
  tween = gsap.timeline();
  tween.to(pivot_A_front_top.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_front_top.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_front_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_B_front_left.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_front_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_B_front_right.y = (Math.PI / 180) * -90),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_front.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_front.x = (Math.PI / 180) * 90),
  });
  /* #endregion */
  /* #region  //* pivot_B_left */
  tween = gsap.timeline();
  tween.to(pivot_B_left_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_B_left_lid.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_left_lid_d.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_B_left_lid_d.x = (Math.PI / 180) * -91),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_B_left.y = (Math.PI / 180) * 90),
  });
  /* #endregion */
  /* #region  //* pivot_B_right */
  tween = gsap.timeline();
  tween.to(pivot_B_right_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_B_right_lid.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_right_lid_d.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_B_right_lid_d.x = (Math.PI / 180) * -91),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_B_right.y = (Math.PI / 180) * -90),
  });
  /* #endregion */
  /* #region  //* pivot_A_back */
  tween = gsap.timeline();
  tween.to(pivot_A_top.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_top.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Lid_bottom_d.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Lid_bottom_d.x = (Math.PI / 180) * -180),
  });

  tween = gsap.timeline();
  tween.to(pivot_Lid_bottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Lid_bottom.x = (Math.PI / 180) * -90),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_back.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_back.x = (Math.PI / 180) * -90),
  });
  /* #endregion */
};

export const expandBox = (
  pivot_A_front_top,
  pivot_B_front_left,
  pivot_B_front_right,
  pivot_A_front,
  pivot_B_left_lid,
  pivot_B_left_lid_d,
  pivot_B_left,
  pivot_B_right_lid,
  pivot_B_right_lid_d,
  pivot_B_right,
  pivot_A_top,
  pivot_Lid_bottom_d,
  pivot_Lid_bottom,
  pivot_A_back
) => {
  /* #region  //* pivot_A_front */
  tween = gsap.timeline();
  tween.to(pivot_A_front_top.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_front_top.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_front_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_B_front_left.y = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_front_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_B_front_right.y = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_front.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_front.x = (Math.PI / 180) * 0),
  });
  /* #endregion */
  /* #region  //* pivot_B_left */
  tween = gsap.timeline();
  tween.to(pivot_B_left_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_B_left_lid.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_left_lid_d.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_B_left_lid_d.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_B_left.y = (Math.PI / 180) * 0),
  });
  /* #endregion */
  /* #region  //* pivot_B_right */
  tween = gsap.timeline();
  tween.to(pivot_B_right_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_B_right_lid.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_right_lid_d.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_B_right_lid_d.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_B_right.y = (Math.PI / 180) * 0),
  });
  /* #endregion */
  /* #region  //* pivot_A_back */
  tween = gsap.timeline();
  tween.to(pivot_A_top.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_top.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Lid_bottom_d.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Lid_bottom_d.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Lid_bottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Lid_bottom.x = (Math.PI / 180) * 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_back.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_A_back.x = (Math.PI / 180) * 0),
  });
  /* #endregion */
};
