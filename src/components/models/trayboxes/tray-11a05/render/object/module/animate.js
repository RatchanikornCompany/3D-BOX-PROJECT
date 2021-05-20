import gsap from 'gsap';

export const foldBox = (
  pivot_Back,
  pivot_Right,
  pivot_lid_B_right,
  pivot_Lock_right,
  pivot_Left,
  pivot_lid_B_left,
  pivot_Lock_left,
  pivot_Top,
  pivot_lr_lid_A_top_left,
  pivot_lr_lid_A_top_right,
  pivot_Bottom,
  pivot_lr_lid_A_bottom_left,
  pivot_lr_lid_A_bottom_right,
  pivot_Top_x,
  pivot_Back_x,
  pivot_B_bottom_lid,
  pivot_Front_lid,
  pivot_Glue_flap
) => {
  let tween = gsap.timeline();
  tween.to(pivot_Back.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Back.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Right.x = Math.PI / 2),
    y: (pivot_Right.y = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lid_B_right.y = (Math.PI / 180) * 178),
  });

  tween = gsap.timeline();
  tween.to(pivot_Lock_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Lock_right.y = -(Math.PI / 180) * 88),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Left.x = Math.PI / 2),
    y: (pivot_Left.y = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lid_B_left.y = -(Math.PI / 180) * 178),
  });

  tween = gsap.timeline();
  tween.to(pivot_Lock_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Lock_left.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Top.x = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_lid_A_top_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lr_lid_A_top_left.y = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_lid_A_top_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lr_lid_A_top_right.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom.x = Math.PI),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_lid_A_bottom_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lr_lid_A_bottom_left.y = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_lid_A_bottom_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lr_lid_A_bottom_right.y = (Math.PI / 180) * 90),
  });

  // ฝากล่อง

  tween = gsap.timeline();
  tween.to(pivot_Top_x.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Top_x.x = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_Back_x.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Back_x.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_Back_x.position, {
    duration: 6,
    ease: 'power4.in',
    x: (pivot_Back_x.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_bottom_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_B_bottom_lid.x = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_Front_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Front_lid.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_Glue_flap.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Glue_flap.x = Math.PI / 2),
  });
};

export const expandBox = (
  A,
  pivot_Back,
  pivot_Right,
  pivot_lid_B_right,
  pivot_Lock_right,
  pivot_Left,
  pivot_lid_B_left,
  pivot_Lock_left,
  pivot_Top,
  pivot_lr_lid_A_top_left,
  pivot_lr_lid_A_top_right,
  pivot_Bottom,
  pivot_lr_lid_A_bottom_left,
  pivot_lr_lid_A_bottom_right,
  pivot_Top_x,
  pivot_Back_x,
  pivot_B_bottom_lid,
  pivot_Front_lid,
  pivot_Glue_flap
) => {
  let tween = gsap.timeline();
  tween.to(pivot_Back.rotation, {
    duration: 14,
    ease: 'power4.in',
    x: (pivot_Back.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right.rotation, {
    duration: 14,
    ease: 'power4.in',
    x: (pivot_Right.x = 0),
    y: (pivot_Right.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_right.rotation, {
    duration: 14,
    ease: 'power4.in',
    y: (pivot_lid_B_right.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Lock_right.rotation, {
    duration: 14,
    ease: 'power4.in',
    y: (pivot_Lock_right.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left.rotation, {
    duration: 14,
    ease: 'power4.in',
    x: (pivot_Left.x = 0),
    y: (pivot_Left.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_left.rotation, {
    duration: 14,
    ease: 'power4.in',
    y: (pivot_lid_B_left.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Lock_left.rotation, {
    duration: 14,
    ease: 'power4.in',
    y: (pivot_Lock_left.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top.rotation, {
    duration: 14,
    ease: 'power4.in',
    x: (pivot_Top.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_lid_A_top_left.rotation, {
    duration: 14,
    ease: 'power4.in',
    y: (pivot_lr_lid_A_top_left.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_lid_A_top_right.rotation, {
    duration: 14,
    ease: 'power4.in',
    y: (pivot_lr_lid_A_top_right.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom.rotation, {
    duration: 14,
    ease: 'power4.in',
    x: (pivot_Bottom.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_lid_A_bottom_left.rotation, {
    duration: 14,
    ease: 'power4.in',
    y: (pivot_lr_lid_A_bottom_left.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_lid_A_bottom_right.rotation, {
    duration: 14,
    ease: 'power4.in',
    y: (pivot_lr_lid_A_bottom_right.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top_x.rotation, {
    duration: 14,
    ease: 'power4.in',
    x: (pivot_Top_x.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Back_x.rotation, {
    duration: 14,
    ease: 'power4.in',
    x: (pivot_Back_x.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_bottom_lid.rotation, {
    duration: 14,
    ease: 'power4.in',
    x: (pivot_B_bottom_lid.x = -Math.PI),
  });

  tween = gsap.timeline();
  tween.to(pivot_Front_lid.rotation, {
    duration: 14,
    ease: 'power4.in',
    x: (pivot_Front_lid.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Glue_flap.rotation, {
    duration: 14,
    ease: 'power4.in',
    x: (pivot_Glue_flap.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Back_x.position, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Back_x.x = -(A * 2) | 0),
  });

  /* #region  //* delModelCosmeticTube delay */

  //   setTimeout(() => {
  //     delModelCosmeticTube();
  //   }, 5000);

  /* #endregion */
};
