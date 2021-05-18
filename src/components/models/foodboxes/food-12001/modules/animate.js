import gsap from 'gsap';

let tween;

export const foldBox = (
  pivot_Glue_lid,
  pivot_Glue_lid_edges,
  pivot_lr_lid_A_left,
  pivot_lr_lid_A_left_edges,
  pivot_lr_lid_A_right,
  pivot_lr_lid_A_right_edges,
  pivot_lid_A_top,
  pivot_lid_A_top_edges,
  pivot_lid_B_top_left,
  pivot_lid_B_top_left_edges,
  pivot_lid_B_top_right,
  pivot_lid_B_top_right_edges,
  pivot_Top,
  pivot_Top_edges,
  pivot_lid_B_bottom_left,
  pivot_lid_B_bottom_left_edges,
  pivot_lid_B_bottom_right,
  pivot_lid_B_bottom_right_edges,
  pivot_Bottom,
  pivot_Bottom_edges,
  pivot_Left,
  pivot_Left_edges,
  pivot_Right,
  pivot_Right_edges
) => {
  tween = gsap.timeline();
  tween.to(pivot_Glue_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Glue_lid.x = -(Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_Glue_lid_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Glue_lid_edges.x = -(Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_lid_A_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lr_lid_A_left.y = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_lid_A_left_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lr_lid_A_left_edges.y = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_lid_A_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lr_lid_A_right.y = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_lid_A_right_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lr_lid_A_right_edges.y = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_A_top.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lid_A_top.x = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_A_top_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lid_A_top_edges.x = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_top_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lid_B_top_left.y = -(Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_top_left_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lid_B_top_left_edges.y = -(Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_top_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lid_B_top_right.y = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_top_right_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lid_B_top_right_edges.y = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Top.x = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Top_edges.x = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_bottom_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lid_B_bottom_left.y = -(Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_bottom_left_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lid_B_bottom_left_edges.y = -(Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_bottom_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lid_B_bottom_right.y = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_bottom_right_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lid_B_bottom_right_edges.y = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom_edges.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Left.y = -(Math.PI / 180) * 92),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Left_edges.y = -(Math.PI / 180) * 92),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Right.y = (Math.PI / 180) * 92),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Right_edges.y = (Math.PI / 180) * 92),
  });
};

export const expandBox = (
  pivot_Glue_lid,
  pivot_Glue_lid_edges,
  pivot_lr_lid_A_left,
  pivot_lr_lid_A_left_edges,
  pivot_lr_lid_A_right,
  pivot_lr_lid_A_right_edges,
  pivot_lid_A_top,
  pivot_lid_A_top_edges,
  pivot_lid_B_top_left,
  pivot_lid_B_top_left_edges,
  pivot_lid_B_top_right,
  pivot_lid_B_top_right_edges,
  pivot_Top,
  pivot_Top_edges,
  pivot_lid_B_bottom_left,
  pivot_lid_B_bottom_left_edges,
  pivot_lid_B_bottom_right,
  pivot_lid_B_bottom_right_edges,
  pivot_Bottom,
  pivot_Bottom_edges,
  pivot_Left,
  pivot_Left_edges,
  pivot_Right,
  pivot_Right_edges
) => {
  tween = gsap.timeline();
  tween.to(pivot_Glue_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Glue_lid.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Glue_lid_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Glue_lid_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_lid_A_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lr_lid_A_left.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_lid_A_left_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lr_lid_A_left_edges.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_lid_A_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lr_lid_A_right.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_lid_A_right_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lr_lid_A_right_edges.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_A_top.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lid_A_top.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_A_top_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lid_A_top_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_top_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lid_B_top_left.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_top_left_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lid_B_top_left_edges.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_top_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lid_B_top_right.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_top_right_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lid_B_top_right_edges.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Top.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Top_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_bottom_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lid_B_bottom_left.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_bottom_left_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lid_B_bottom_left_edges.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_bottom_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lid_B_bottom_right.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_bottom_right_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lid_B_bottom_right_edges.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Left.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Left_edges.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Right.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Right_edges.y = 0),
  });
};
