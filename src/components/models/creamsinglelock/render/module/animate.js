import gsap from 'gsap';

let tween;

export const foldBox = (
  pivot_Right,
  pivot_Right_lid,
  pivot_Right_lid_d,
  pivot_Left,
  pivot_Left_lid,
  pivot_Left_lid_d,
  pivot_Front,
  pivot_Front_lid_d,
  pivot_Front_lid,
  pivot_Glue_lid,
  pivot_Top,
  pivot_Top_lid,
  pivot_Bottom,
  pivot_Bottom_left,
  pivot_Bottom_right,
  pivot_Bottom_lock,
  pivot_Lock_Bottom_lid
) => {
  tween = gsap.timeline();
  tween.to(pivot_Right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Right.y = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Right_lid.x = -(Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_lid_d.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Right_lid_d.x = (Math.PI / 180) * 99),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Left.y = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Left_lid.x = -(Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_lid_d.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Left_lid_d.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_Front.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Front.y = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_Front_lid_d.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Front_lid_d.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_Front_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Front_lid.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_Glue_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Glue_lid.y = -(Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Top.x = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Top_lid.x = -(Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom.x = (Math.PI / 180) * 178),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Bottom_left.y = (Math.PI / 180) * 87),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Bottom_right.y = -(Math.PI / 180) * 87),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_lock.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom_lock.x = -((Math.PI / 180) * 86)),
  });

  tween = gsap.timeline();
  tween.to(pivot_Lock_Bottom_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Lock_Bottom_lid.x = -(Math.PI / 180) * 88),
  });
};

export const expandBox = (
  pivot_Right,
  pivot_Right_lid,
  pivot_Right_lid_d,
  pivot_Left,
  pivot_Left_lid,
  pivot_Left_lid_d,
  pivot_Front,
  pivot_Front_lid_d,
  pivot_Front_lid,
  pivot_Glue_lid,
  pivot_Top,
  pivot_Top_lid,
  pivot_Bottom,
  pivot_Bottom_left,
  pivot_Bottom_right,
  pivot_Bottom_lock,
  pivot_Lock_Bottom_lid
) => {
  tween = gsap.timeline();
  tween.to(pivot_Right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Right.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Right_lid.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_lid_d.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Right_lid_d.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Left.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Left_lid.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_lid_d.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Left_lid_d.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Front.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Front.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Front_lid_d.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Front_lid_d.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Front_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Front_lid.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Glue_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Glue_lid.y = 0),
  });

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
  tween.to(pivot_Bottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Bottom_left.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Bottom_right.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_lock.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom_lock.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Lock_Bottom_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Lock_Bottom_lid.x = 0),
  });
};
