import gsap from 'gsap';

let tween;

export const foldBox = (
  pivot_Back,
  pivot_Glue_lid,
  pivot_Left_lid,
  pivot_Left_lid_d,
  pivot_Group_left,
  pivot_Right_lid,
  pivot_Right_lid_d,
  pivot_Group_right,
  pivot_Group_top_back,
  pivot_Top_back_lid,
  pivot_Top,
  pivot_Top_front_lid,
  pivot_Group_bottom_front,
  pivot_Bottom_front_lid,
  pivot_Bottom_front_lid_d,
  pivot_Group_bottom_back,
  pivot_Bottom_back_lid,
  pivot_Bottom_back_lid_d
) => {
  tween = gsap.timeline();
  tween.to(pivot_Back.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Back.y = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_Glue_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Glue_lid.y = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_lid.rotation, {
    duration: 6,
    ease: 'power4.in',
    x: (pivot_Left_lid.x = -(Math.PI / 180) * 30),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_lid_d.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Left_lid_d.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_Group_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Group_left.y = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_lid.rotation, {
    duration: 6,
    ease: 'power4.in',
    x: (pivot_Right_lid.x = (Math.PI / 180) * -30),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_lid_d.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Right_lid_d.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_Group_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Group_right.y = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_Group_top_back.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Group_top_back.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top_back_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Top_back_lid.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Top.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top_front_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Top_front_lid.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_Group_bottom_front.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Group_bottom_front.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_front_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom_front_lid.x = (Math.PI / 180) * -1),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_front_lid_d.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom_front_lid_d.x = (Math.PI / 180) * 45),
  });

  tween = gsap.timeline();
  tween.to(pivot_Group_bottom_back.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Group_bottom_back.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_back_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom_back_lid.x = (Math.PI / 180) * -1),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_back_lid_d.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom_back_lid_d.x = (Math.PI / 180) * 45),
  });
};

export const expandBox = (
  pivot_Back,
  pivot_Glue_lid,
  pivot_Left_lid,
  pivot_Left_lid_d,
  pivot_Group_left,
  pivot_Right_lid,
  pivot_Right_lid_d,
  pivot_Group_right,
  pivot_Group_top_back,
  pivot_Top_back_lid,
  pivot_Top,
  pivot_Top_front_lid,
  pivot_Group_bottom_front,
  pivot_Bottom_front_lid,
  pivot_Bottom_front_lid_d,
  pivot_Group_bottom_back,
  pivot_Bottom_back_lid,
  pivot_Bottom_back_lid_d
) => {
  tween = gsap.timeline();
  tween.to(pivot_Back.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Back.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Glue_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Glue_lid.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_lid.rotation, {
    duration: 6,
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
  tween.to(pivot_Group_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Group_left.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_lid.rotation, {
    duration: 6,
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
  tween.to(pivot_Group_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Group_right.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Group_top_back.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Group_top_back.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top_back_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Top_back_lid.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Top.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top_front_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Top_front_lid.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Group_bottom_front.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Group_bottom_front.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_front_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom_front_lid.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_front_lid_d.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom_front_lid_d.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Group_bottom_back.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Group_bottom_back.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_back_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom_back_lid.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_back_lid_d.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom_back_lid_d.x = 0),
  });
};
