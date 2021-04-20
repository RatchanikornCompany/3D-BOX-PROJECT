import gsap from 'gsap';

let tween;

export const foldBox = (
  pivot_Bottom_lid,
  pivot_Group_bottom,
  pivot_lid_B_left,
  pivot_lid_B_left_d,
  pivot_B_left,
  pivot_Top_lid,
  pivot_Top,
  pivot_glue_Lid,
  pivot_A_back,
  pivot_lid_B_right,
  pivot_lid_B_right_d,
  pivot_B_right,
  getPivotBottomLid,
  getPivotGroupBottom,
  getPivotLidBLeft,
  getPivotLidBLeftD,
  getPivotBLeft,
  getPivotTopLid,
  getPivotTop,
  getPivotGlueLid,
  getPivotABack,
  getPivotLidBRight,
  getPivotLidBRightD,
  getPivotBRight
) => {
  tween = gsap.timeline();
  tween.to(pivot_Bottom_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom_lid.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_Group_bottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Group_bottom.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lid_B_left.x = -(Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_left_d.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lid_B_left_d.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_B_left.y = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Top_lid.x = -(Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Top.x = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_glue_Lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_glue_Lid.y = -(Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_back.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_A_back.y = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lid_B_right.x = -(Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_right_d.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lid_B_right_d.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_B_right.y = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(getPivotBottomLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotBottomLid.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(getPivotGroupBottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotGroupBottom.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(getPivotLidBLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotLidBLeft.x = -(Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(getPivotLidBLeftD.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotLidBLeftD.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(getPivotBLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (getPivotBLeft.y = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(getPivotTopLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotTopLid.x = -(Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(getPivotTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotTop.x = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(getPivotGlueLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (getPivotGlueLid.y = -(Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(getPivotABack.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (getPivotABack.y = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(getPivotLidBRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotLidBRight.x = -(Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(getPivotLidBRightD.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotLidBRightD.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(getPivotBRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (getPivotBRight.y = Math.PI / 2),
  });
};

export const expandBox = (
  pivot_Bottom_lid,
  pivot_Group_bottom,
  pivot_lid_B_left,
  pivot_lid_B_left_d,
  pivot_B_left,
  pivot_Top_lid,
  pivot_Top,
  pivot_glue_Lid,
  pivot_A_back,
  pivot_lid_B_right,
  pivot_lid_B_right_d,
  pivot_B_right,
  getPivotBottomLid,
  getPivotGroupBottom,
  getPivotLidBLeft,
  getPivotLidBLeftD,
  getPivotBLeft,
  getPivotTopLid,
  getPivotTop,
  getPivotGlueLid,
  getPivotABack,
  getPivotLidBRight,
  getPivotLidBRightD,
  getPivotBRight
) => {
  tween = gsap.timeline();
  tween.to(pivot_Bottom_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom_lid.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Group_bottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Group_bottom.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lid_B_left.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_left_d.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lid_B_left_d.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_B_left.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top_lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Top_lid.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Top.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_glue_Lid.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_glue_Lid.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_back.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_A_back.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lid_B_right.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_right_d.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lid_B_right_d.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_B_right.y = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotBottomLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotBottomLid.x = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotGroupBottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotGroupBottom.x = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotLidBLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotLidBLeft.x = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotLidBLeftD.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotLidBLeftD.x = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotBLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (getPivotBLeft.y = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotTopLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotTopLid.x = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotTop.x = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotGlueLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (getPivotGlueLid.y = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotABack.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (getPivotABack.y = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotLidBRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotLidBRight.x = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotLidBRightD.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotLidBRightD.x = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotBRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (getPivotBRight.y = 0),
  });
};
