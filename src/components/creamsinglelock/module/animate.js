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
  pivot_Lock_Bottom_lid,
  getPivotRight,
  getPivotRightLid,
  getPivotRightLidD,
  getPivotLeft,
  getPivotLeftLid,
  getPivotLeftLidD,
  getPivotFront,
  getPivotFrontLidD,
  getPivotFrontLid,
  getPivotGlueLid,
  getPivotTop,
  getPivotTopLid,
  getPivotBottom,
  getPivotBottomLeft,
  getPivotBottomRight,
  getPivotBottomLock,
  getPivotLockBottomLid
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

  tween = gsap.timeline();
  tween.to(getPivotRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (getPivotRight.y = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(getPivotRightLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotRightLid.x = -(Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(getPivotRightLidD.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotRightLidD.x = (Math.PI / 180) * 99),
  });

  tween = gsap.timeline();
  tween.to(getPivotLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (getPivotLeft.y = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(getPivotLeftLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotLeftLid.x = -(Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(getPivotLeftLidD.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotLeftLidD.x = (Math.PI / 180) * 99),
  });

  tween = gsap.timeline();
  tween.to(getPivotFront.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (getPivotFront.y = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(getPivotFrontLidD.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotFrontLidD.x = (Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(getPivotFrontLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotFrontLid.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(getPivotGlueLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (getPivotGlueLid.y = -(Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(getPivotTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotTop.x = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(getPivotTopLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotTopLid.x = -(Math.PI / 180) * 91),
  });

  tween = gsap.timeline();
  tween.to(getPivotBottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotBottom.x = (Math.PI / 180) * 178),
  });

  tween = gsap.timeline();
  tween.to(getPivotBottomLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (getPivotBottomLeft.y = (Math.PI / 180) * 87),
  });

  tween = gsap.timeline();
  tween.to(getPivotBottomRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (getPivotBottomRight.y = -(Math.PI / 180) * 87),
  });

  tween = gsap.timeline();
  tween.to(getPivotBottomLock.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotBottomLock.x = -((Math.PI / 180) * 86)),
  });

  tween = gsap.timeline();
  tween.to(getPivotLockBottomLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotLockBottomLid.x = -(Math.PI / 180) * 88),
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
  pivot_Lock_Bottom_lid,
  getPivotRight,
  getPivotRightLid,
  getPivotRightLidD,
  getPivotLeft,
  getPivotLeftLid,
  getPivotLeftLidD,
  getPivotFront,
  getPivotFrontLidD,
  getPivotFrontLid,
  getPivotGlueLid,
  getPivotTop,
  getPivotTopLid,
  getPivotBottom,
  getPivotBottomLeft,
  getPivotBottomRight,
  getPivotBottomLock,
  getPivotLockBottomLid
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

  tween = gsap.timeline();
  tween.to(getPivotRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (getPivotRight.y = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotRightLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotRightLid.x = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotRightLidD.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotRightLidD.x = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (getPivotLeft.y = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotLeftLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotLeftLid.x = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotLeftLidD.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotLeftLidD.x = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotFront.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (getPivotFront.y = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotFrontLidD.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotFrontLidD.x = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotFrontLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotFrontLid.x = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotGlueLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (getPivotGlueLid.y = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotTop.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotTop.x = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotTopLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotTopLid.x = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotBottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotBottom.x = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotBottomLeft.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (getPivotBottomLeft.y = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotBottomRight.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (getPivotBottomRight.y = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotBottomLock.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotBottomLock.x = 0),
  });

  tween = gsap.timeline();
  tween.to(getPivotLockBottomLid.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (getPivotLockBottomLid.x = 0),
  });
};
