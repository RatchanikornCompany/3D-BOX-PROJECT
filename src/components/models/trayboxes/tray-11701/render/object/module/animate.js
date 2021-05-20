import gsap from 'gsap';

export const foldBox = (
  pivot_Top,
  pivot_group_A_top,
  pivot_lr_lid_A_top_left,
  pivot_lr_lid_A_top_right,
  pivot_dust_flap_Top_left,
  pivot_dust_flap_Top_right,
  pivot_lr_lid_A_top,
  pivot_dust_flap_lid_A_left,
  pivot_dust_flap_lid_A_right,
  pivot_Left,
  pivot_lid_B_left,
  pivot_Right,
  pivot_lid_B_right,
  pivot_Bottom,
  pivot_dust_flap_Bottom_left,
  pivot_dust_flap_Bottom_right,
  pivot_All
) => {
  let tween = gsap.timeline();
  tween.to(pivot_Top.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Top.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_group_A_top.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_group_A_top.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_lid_A_top_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lr_lid_A_top_left.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_lid_A_top_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lr_lid_A_top_right.y = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_dust_flap_Top_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_dust_flap_Top_left.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_dust_flap_Top_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_dust_flap_Top_right.y = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_lid_A_top.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lr_lid_A_top.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_dust_flap_lid_A_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_dust_flap_lid_A_left.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_dust_flap_lid_A_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_dust_flap_lid_A_right.y = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Left.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lid_B_left.y = (Math.PI / 180) * 180),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Right.y = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lid_B_right.y = -(Math.PI / 180) * 180),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_dust_flap_Bottom_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_dust_flap_Bottom_left.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_dust_flap_Bottom_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_dust_flap_Bottom_right.y = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_All.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_All.x = -Math.PI / 2),
  });
};

export const expandBox = (
  pivot_Top,
  pivot_group_A_top,
  pivot_lr_lid_A_top_left,
  pivot_lr_lid_A_top_right,
  pivot_dust_flap_Top_left,
  pivot_dust_flap_Top_right,
  pivot_lr_lid_A_top,
  pivot_dust_flap_lid_A_left,
  pivot_dust_flap_lid_A_right,
  pivot_Left,
  pivot_lid_B_left,
  pivot_Right,
  pivot_lid_B_right,
  pivot_Bottom,
  pivot_dust_flap_Bottom_left,
  pivot_dust_flap_Bottom_right,
  pivot_All
) => {
  let tween = gsap.timeline();
  tween.to(pivot_Top.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Top.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_group_A_top.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_group_A_top.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_lid_A_top_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lr_lid_A_top_left.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_lid_A_top_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lr_lid_A_top_right.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_dust_flap_Top_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_dust_flap_Top_left.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_dust_flap_Top_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_dust_flap_Top_right.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_lid_A_top.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lr_lid_A_top.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_dust_flap_lid_A_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_dust_flap_lid_A_left.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_dust_flap_lid_A_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_dust_flap_lid_A_right.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Left.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lid_B_left.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Right.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lid_B_right.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_dust_flap_Bottom_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_dust_flap_Bottom_left.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_dust_flap_Bottom_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_dust_flap_Bottom_right.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_All.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_All.x = 0),
  });
};
