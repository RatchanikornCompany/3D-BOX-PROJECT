import gsap from 'gsap';

let tween;

export const foldBox = (
  pivot_Top,
  pivot_Top_lid,
  pivot_group_A_front,
  pivot_Bottom_lid,
  pivot_group_A_back,
  pivot_Group_bottom,
  pivot_Glue_lid,
  pivot_lid_B_left,
  pivot_B_left,
  pivot_groub_B_left_d,
  pivot_lr_lid_B_left_d,
  pivot_lid_B_right,
  pivot_B_right,
  pivot_group_B_right_d,
  pivot_lr_lid_B_right_d
) => {
  tween = gsap.timeline();
  tween.to(pivot_Top.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Top.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Top_lid.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_group_A_front.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_group_A_front.x = -Math.PI / 1.9),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom_lid.x = -Math.PI / 2.7),
  });

  tween = gsap.timeline();
  tween.to(pivot_group_A_back.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_group_A_back.y = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_Group_bottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Group_bottom.x = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_Glue_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Glue_lid.y = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lid_B_left.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_B_left.y = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_groub_B_left_d.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_groub_B_left_d.x = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_lid_B_left_d.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lr_lid_B_left_d.y = -Math.PI / 2.7),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lid_B_right.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_B_right.y = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_group_B_right_d.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_group_B_right_d.x = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_lid_B_right_d.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lr_lid_B_right_d.y = Math.PI / 2.7),
  });
};

export const expandBox = (
  pivot_Top,
  pivot_Top_lid,
  pivot_group_A_front,
  pivot_Bottom_lid,
  pivot_group_A_back,
  pivot_Group_bottom,
  pivot_Glue_lid,
  pivot_lid_B_left,
  pivot_B_left,
  pivot_groub_B_left_d,
  pivot_lr_lid_B_left_d,
  pivot_lid_B_right,
  pivot_B_right,
  pivot_group_B_right_d,
  pivot_lr_lid_B_right_d
) => {
  tween = gsap.timeline();
  tween.to(pivot_Top.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Top.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Top_lid.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_group_A_front.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_group_A_front.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom_lid.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_group_A_back.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_group_A_back.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Group_bottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Group_bottom.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Glue_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Glue_lid.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lid_B_left.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_B_left.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_groub_B_left_d.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_groub_B_left_d.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_lid_B_left_d.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lr_lid_B_left_d.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lid_B_right.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_B_right.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_group_B_right_d.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_group_B_right_d.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_lid_B_right_d.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lr_lid_B_right_d.y = 0),
  });
};
