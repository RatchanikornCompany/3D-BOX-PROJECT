import gsap from 'gsap';

let tween;

export const foldBox = () => {
  // pivot_Left
  tween = gsap.timeline();
  tween.to(pivot_Left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Left.y = -(Math.PI / 180) * 90),
  });

  // pivot_lid_B_left
  tween = gsap.timeline();
  tween.to(pivot_lid_B_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lid_B_left.y = -(Math.PI / 180) * 180),
  });

  // pivot_dust_flap_Left_top
  tween = gsap.timeline();
  tween.to(pivot_dust_flap_Left_top.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_dust_flap_Left_top.x = -(Math.PI / 180) * 90),
  });

  // pivot_dust_flap_Left_bottom
  tween = gsap.timeline();
  tween.to(pivot_dust_flap_Left_bottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_dust_flap_Left_bottom.x = (Math.PI / 180) * 90),
  });

  // pivot_inner_Flap_left
  tween = gsap.timeline();
  tween.to(pivot_inner_Flap_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_inner_Flap_left.y = (Math.PI / 180) * 90),
  });

  // pivot_Right
  tween = gsap.timeline();
  tween.to(pivot_Right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Right.y = (Math.PI / 180) * 90),
  });

  // pivot_lid_B_right
  tween = gsap.timeline();
  tween.to(pivot_lid_B_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lid_B_right.y = (Math.PI / 180) * 180),
  });

  // pivot_dust_flap_Right_top
  tween = gsap.timeline();
  tween.to(pivot_dust_flap_Right_top.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_dust_flap_Right_top.x = -(Math.PI / 180) * 90),
  });

  // pivot_dust_flap_Right_bottom
  tween = gsap.timeline();
  tween.to(pivot_dust_flap_Right_bottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_dust_flap_Right_bottom.x = (Math.PI / 180) * 90),
  });

  // pivot_inner_Flap_right
  tween = gsap.timeline();
  tween.to(pivot_inner_Flap_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_inner_Flap_right.y = -(Math.PI / 180) * 90),
  });

  // pivot_Top
  tween = gsap.timeline();
  tween.to(pivot_Top.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Top.x = -(Math.PI / 180) * 90),
  });

  // pivot_lid_A_top
  tween = gsap.timeline();
  tween.to(pivot_lid_A_top.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lid_A_top.x = -(Math.PI / 180) * 180),
  });

  // pivot_dust_flap_Top_left
  tween = gsap.timeline();
  tween.to(pivot_dust_flap_Top_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_dust_flap_Top_left.y = -(Math.PI / 180) * 180),
  });

  // pivot_dust_flap_Top_right
  tween = gsap.timeline();
  tween.to(pivot_dust_flap_Top_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_dust_flap_Top_right.y = (Math.PI / 180) * 180),
  });

  // pivot_inner_Flap_top
  tween = gsap.timeline();
  tween.to(pivot_inner_Flap_top.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_inner_Flap_top.x = (Math.PI / 180) * 90),
  });

  // pivot_Bottom
  tween = gsap.timeline();
  tween.to(pivot_Bottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom.x = (Math.PI / 180) * 90),
  });

  // pivot_lid_A_bottom
  tween = gsap.timeline();
  tween.to(pivot_lid_A_bottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lid_A_bottom.x = (Math.PI / 180) * 180),
  });

  // pivot_dust_flap_Bottom_left
  tween = gsap.timeline();
  tween.to(pivot_dust_flap_Bottom_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_dust_flap_Bottom_left.y = -(Math.PI / 180) * 180),
  });

  // pivot_dust_flap_Bottom_right
  tween = gsap.timeline();
  tween.to(pivot_dust_flap_Bottom_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_dust_flap_Bottom_right.y = (Math.PI / 180) * 180),
  });

  //  pivot_inner_Flap_bottom
  tween = gsap.timeline();
  tween.to(pivot_inner_Flap_bottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_inner_Flap_bottom.x = -(Math.PI / 180) * 90),
  });
};

export const expandBox = () => {
  // pivot_Left
  tween = gsap.timeline();
  tween.to(pivot_Left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Left.y = 0),
  });

  // pivot_lid_B_left
  tween = gsap.timeline();
  tween.to(pivot_lid_B_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lid_B_left.y = 0),
  });

  // pivot_dust_flap_Left_top
  tween = gsap.timeline();
  tween.to(pivot_dust_flap_Left_top.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_dust_flap_Left_top.x = 0),
  });

  // pivot_dust_flap_Left_bottom
  tween = gsap.timeline();
  tween.to(pivot_dust_flap_Left_bottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_dust_flap_Left_bottom.x = 0),
  });

  // pivot_inner_Flap_left
  tween = gsap.timeline();
  tween.to(pivot_inner_Flap_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_inner_Flap_left.y = 0),
  });

  // pivot_Right
  tween = gsap.timeline();
  tween.to(pivot_Right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Right.y = 0),
  });

  // pivot_lid_B_right
  tween = gsap.timeline();
  tween.to(pivot_lid_B_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lid_B_right.y = 0),
  });

  // pivot_dust_flap_Right_top
  tween = gsap.timeline();
  tween.to(pivot_dust_flap_Right_top.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_dust_flap_Right_top.x = 0),
  });

  // pivot_dust_flap_Right_bottom
  tween = gsap.timeline();
  tween.to(pivot_dust_flap_Right_bottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_dust_flap_Right_bottom.x = 0),
  });

  // pivot_inner_Flap_right
  tween = gsap.timeline();
  tween.to(pivot_inner_Flap_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_inner_Flap_right.y = 0),
  });

  // pivot_Top
  tween = gsap.timeline();
  tween.to(pivot_Top.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Top.x = 0),
  });

  // pivot_lid_A_top
  tween = gsap.timeline();
  tween.to(pivot_lid_A_top.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lid_A_top.x = 0),
  });

  // pivot_dust_flap_Top_left
  tween = gsap.timeline();
  tween.to(pivot_dust_flap_Top_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_dust_flap_Top_left.y = 0),
  });

  // pivot_dust_flap_Top_right
  tween = gsap.timeline();
  tween.to(pivot_dust_flap_Top_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_dust_flap_Top_right.y = 0),
  });

  // pivot_inner_Flap_top
  tween = gsap.timeline();
  tween.to(pivot_inner_Flap_top.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_inner_Flap_top.x = 0),
  });

  // pivot_Bottom
  tween = gsap.timeline();
  tween.to(pivot_Bottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom.x = 0),
  });

  // pivot_lid_A_bottom
  tween = gsap.timeline();
  tween.to(pivot_lid_A_bottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lid_A_bottom.x = 0),
  });

  // pivot_dust_flap_Bottom_left
  tween = gsap.timeline();
  tween.to(pivot_dust_flap_Bottom_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_dust_flap_Bottom_left.y = 0),
  });

  // pivot_dust_flap_Bottom_right
  tween = gsap.timeline();
  tween.to(pivot_dust_flap_Bottom_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_dust_flap_Bottom_right.y = 0),
  });

  //  pivot_inner_Flap_bottom
  tween = gsap.timeline();
  tween.to(pivot_inner_Flap_bottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_inner_Flap_bottom.x = 0),
  });
};
