import gsap from 'gsap';

let tween;

export const foldBox = (
  pivot_Right,
  pivot_lid_B_right,
  pivot_lr_lid_B_right,
  pivot_lid_B_right_top,
  pivot_lid_B_right_bottom,
  pivot_inside_flap_right,
  pivot_Left,
  pivot_lid_B_left,
  pivot_lr_lid_B_left,
  pivot_lid_B_left_top,
  pivot_lid_B_left_bottom,
  pivot_inside_flap_left,
  pivot_Top,
  pivot_lid_A_top,
  pivot_lr_A_top_left,
  pivot_lr_A_top_right,
  pivot_lr_lid_A_top,
  pivot_glue_flap_top,
  pivot_dust_flap_top_left,
  pivot_dust_flap_top_right,
  pivot_Bottom,
  pivot_lid_A_bottom,
  pivot_lr_A_bottom_left,
  pivot_lr_A_bottom_right,
  pivot_lr_lid_A_bottom,
  pivot_glue_flap_bottom,
  pivot_dust_flap_bottom_left,
  pivot_dust_flap_bottom_right,
  pivot_All,
  pivot_Right_edges,
  pivot_lid_B_right_edges,
  pivot_lr_lid_B_right_edges,
  pivot_lid_B_right_top_edges,
  pivot_lid_B_right_bottom_edges,
  pivot_inside_flap_right_edges,
  pivot_Left_edges,
  pivot_lid_B_left_edges,
  pivot_lr_lid_B_left_edges,
  pivot_lid_B_left_top_edges,
  pivot_lid_B_left_bottom_edges,
  pivot_inside_flap_left_edges,
  pivot_Top_edges,
  pivot_lid_A_top_edges,
  pivot_lr_A_top_left_edges,
  pivot_lr_A_top_right_edges,
  pivot_lr_lid_A_top_edges,
  pivot_glue_flap_top_edges,
  pivot_dust_flap_top_left_edges,
  pivot_dust_flap_top_right_edges,
  pivot_Bottom_edges,
  pivot_lid_A_bottom_edges,
  pivot_lr_A_bottom_left_edges,
  pivot_lr_A_bottom_right_edges,
  pivot_lr_lid_A_bottom_edges,
  pivot_glue_flap_bottom_edges,
  pivot_dust_flap_bottom_left_edges,
  pivot_dust_flap_bottom_right_edges,
  pivot_All_edges
  // getPivotTopFlap,
  // getPivotGlueFlap,
  // getPivotFrontFlap,
  // getPivotBBottomLid,
  // getPivotBackFlap,
  // getPivotTopFlapEdges,
  // getPivotGlueFlapEdges,
  // getPivotFrontFlapEdges,
  // getPivotBBottomLidEdges,
  // getPivotBackFlapEdges
) => {
  // ชิ้นงาน
  tween = gsap.timeline();
  tween.to(pivot_Right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Right.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lid_B_right.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_lid_B_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lr_lid_B_right.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_right_top.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lid_B_right_top.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_right_bottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lid_B_right_bottom.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_inside_flap_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_inside_flap_right.y = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Left.y = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lid_B_left.y = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_lid_B_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lr_lid_B_left.y = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_left_top.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lid_B_left_top.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_left_bottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lid_B_left_bottom.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_inside_flap_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_inside_flap_left.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Top.x = (-Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_A_top.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lid_A_top.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_A_top_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lr_A_top_left.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_A_top_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lr_A_top_right.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_lid_A_top.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lr_lid_A_top.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_glue_flap_top.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_glue_flap_top.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_dust_flap_top_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_dust_flap_top_left.y = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_dust_flap_top_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_dust_flap_top_right.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_A_bottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lid_A_bottom.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_A_bottom_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lr_A_bottom_left.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_A_bottom_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lr_A_bottom_right.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_lid_A_bottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lr_lid_A_bottom.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_glue_flap_bottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_glue_flap_bottom.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_dust_flap_bottom_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_dust_flap_bottom_left.y = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_dust_flap_bottom_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_dust_flap_bottom_right.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_All.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_All.y = -Math.PI / 2),
    z: (pivot_All.z = Math.PI / 2),
  });

  //TODO

  // tween = gsap.timeline();
  // tween.to(getPivotFrontFlap.rotation, {
  //   duration: 10,
  //   ease: 'power4.in',
  //   x: (getPivotFrontFlap.x = Math.PI / 2),
  // });

  // tween = gsap.timeline();
  // tween.to(getPivotBackFlap.rotation, {
  //   duration: 10,
  //   ease: 'power4.in',
  //   y: (getPivotBackFlap.y = -Math.PI / 2),
  // });

  // tween = gsap.timeline();
  // tween.to(getPivotBackFlap.position, {
  //   duration: 10,
  //   ease: 'power4.in',
  //   y: (getPivotBackFlap.y = 0),
  // });

  // tween = gsap.timeline();
  // tween.to(getPivotBBottomLid.rotation, {
  //   duration: 10,
  //   ease: 'power4.in',
  //   x: (getPivotBBottomLid.x = -Math.PI / 2),
  // });

  // tween = gsap.timeline();
  // tween.to(getPivotBBottomLid.rotation, {
  //   duration: 10,
  //   ease: 'power4.in',
  //   x: (getPivotBBottomLid.x = -Math.PI / 2),
  // });

  // tween = gsap.timeline();
  // tween.to(getPivotTopFlap.rotation, {
  //   duration: 10,
  //   ease: 'power4.in',
  //   x: (getPivotTopFlap.x = -Math.PI / 2),
  // });

  // tween = gsap.timeline();
  // tween.to(getPivotGlueFlap.rotation, {
  //   duration: 10,
  //   ease: 'power4.in',
  //   x: (getPivotGlueFlap.x = Math.PI / 2),
  // });

  // เส้น
  tween = gsap.timeline();
  tween.to(pivot_Right_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Right_edges.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_right_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lid_B_right_edges.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_lid_B_right_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lr_lid_B_right_edges.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_right_top_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lid_B_right_top_edges.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_right_bottom_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lid_B_right_bottom_edges.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_inside_flap_right_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_inside_flap_right_edges.y = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Left_edges.y = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_left_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lid_B_left_edges.y = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_lid_B_left_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lr_lid_B_left_edges.y = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_left_top_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lid_B_left_top_edges.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_left_bottom_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lid_B_left_bottom_edges.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_inside_flap_left_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_inside_flap_left_edges.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Top_edges.x = (-Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_A_top_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lid_A_top_edges.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_A_top_left_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lr_A_top_left_edges.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_A_top_right_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lr_A_top_right_edges.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_lid_A_top_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lr_lid_A_top_edges.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_glue_flap_top_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_glue_flap_top_edges.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_dust_flap_top_left_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_dust_flap_top_left_edges.y = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_dust_flap_top_right_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_dust_flap_top_right_edges.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom_edges.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_A_bottom_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lid_A_bottom_edges.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_A_bottom_left_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lr_A_bottom_left_edges.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_A_bottom_right_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lr_A_bottom_right_edges.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_lid_A_bottom_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lr_lid_A_bottom_edges.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_glue_flap_bottom_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_glue_flap_bottom_edges.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_dust_flap_bottom_left_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_dust_flap_bottom_left_edges.y = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_dust_flap_bottom_right_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_dust_flap_bottom_right_edges.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_All_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_All_edges.y = -Math.PI / 2),
    z: (pivot_All_edges.z = Math.PI / 2),
  });

  //TODO

  // tween = gsap.timeline();
  // tween.to(getPivotFrontFlapEdges.rotation, {
  //   duration: 10,
  //   ease: 'power4.in',
  //   x: (getPivotFrontFlapEdges.x = Math.PI / 2),
  // });

  // tween = gsap.timeline();
  // tween.to(getPivotBackFlapEdges.rotation, {
  //   duration: 10,
  //   ease: 'power4.in',
  //   y: (getPivotBackFlapEdges.y = -Math.PI / 2),
  // });

  // tween = gsap.timeline();
  // tween.to(getPivotBackFlapEdges.position, {
  //   duration: 10,
  //   ease: 'power4.in',
  //   y: (getPivotBackFlapEdges.y = 0),
  // });

  // tween = gsap.timeline();
  // tween.to(getPivotBBottomLidEdges.rotation, {
  //   duration: 10,
  //   ease: 'power4.in',
  //   x: (getPivotBBottomLidEdges.x = -Math.PI / 2),
  // });

  // tween = gsap.timeline();
  // tween.to(getPivotTopFlapEdges.rotation, {
  //   duration: 10,
  //   ease: 'power4.in',
  //   x: (getPivotTopFlapEdges.x = -Math.PI / 2),
  // });

  // tween = gsap.timeline();
  // tween.to(getPivotGlueFlapEdges.rotation, {
  //   duration: 10,
  //   ease: 'power4.in',
  //   x: (getPivotGlueFlapEdges.x = Math.PI / 2),
  // });
};

export const expandBox = (
  B,
  C,
  pivot_Right,
  pivot_lid_B_right,
  pivot_lr_lid_B_right,
  pivot_lid_B_right_top,
  pivot_lid_B_right_bottom,
  pivot_inside_flap_right,
  pivot_Left,
  pivot_lid_B_left,
  pivot_lr_lid_B_left,
  pivot_lid_B_left_top,
  pivot_lid_B_left_bottom,
  pivot_inside_flap_left,
  pivot_Top,
  pivot_lid_A_top,
  pivot_lr_A_top_left,
  pivot_lr_A_top_right,
  pivot_lr_lid_A_top,
  pivot_glue_flap_top,
  pivot_dust_flap_top_left,
  pivot_dust_flap_top_right,
  pivot_Bottom,
  pivot_lid_A_bottom,
  pivot_lr_A_bottom_left,
  pivot_lr_A_bottom_right,
  pivot_lr_lid_A_bottom,
  pivot_glue_flap_bottom,
  pivot_dust_flap_bottom_left,
  pivot_dust_flap_bottom_right,
  pivot_All,
  pivot_Right_edges,
  pivot_lid_B_right_edges,
  pivot_lr_lid_B_right_edges,
  pivot_lid_B_right_top_edges,
  pivot_lid_B_right_bottom_edges,
  pivot_inside_flap_right_edges,
  pivot_Left_edges,
  pivot_lid_B_left_edges,
  pivot_lr_lid_B_left_edges,
  pivot_lid_B_left_top_edges,
  pivot_lid_B_left_bottom_edges,
  pivot_inside_flap_left_edges,
  pivot_Top_edges,
  pivot_lid_A_top_edges,
  pivot_lr_A_top_left_edges,
  pivot_lr_A_top_right_edges,
  pivot_lr_lid_A_top_edges,
  pivot_glue_flap_top_edges,
  pivot_dust_flap_top_left_edges,
  pivot_dust_flap_top_right_edges,
  pivot_Bottom_edges,
  pivot_lid_A_bottom_edges,
  pivot_lr_A_bottom_left_edges,
  pivot_lr_A_bottom_right_edges,
  pivot_lr_lid_A_bottom_edges,
  pivot_glue_flap_bottom_edges,
  pivot_dust_flap_bottom_left_edges,
  pivot_dust_flap_bottom_right_edges,
  pivot_All_edges
  // getPivotTopFlap,
  // getPivotGlueFlap,
  // getPivotFrontFlap,
  // getPivotBBottomLid,
  // getPivotBackFlap,
  // getPivotTopFlapEdges,
  // getPivotGlueFlapEdges,
  // getPivotFrontFlapEdges,
  // getPivotBBottomLidEdges,
  // getPivotBackFlapEdges
) => {
  // ชิ้นงาน
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
  tween.to(pivot_lr_lid_B_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lr_lid_B_right.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_right_top.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lid_B_right_top.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_right_bottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lid_B_right_bottom.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_inside_flap_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_inside_flap_right.y = 0),
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
  tween.to(pivot_lr_lid_B_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lr_lid_B_left.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_left_top.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lid_B_left_top.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_left_bottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lid_B_left_bottom.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_inside_flap_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_inside_flap_left.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Top.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_A_top.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lid_A_top.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_A_top_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lr_A_top_left.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_A_top_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lr_A_top_right.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_lid_A_top.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lr_lid_A_top.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_glue_flap_top.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_glue_flap_top.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_dust_flap_top_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_dust_flap_top_left.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_dust_flap_top_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_dust_flap_top_right.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_A_bottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lid_A_bottom.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_A_bottom_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lr_A_bottom_left.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_A_bottom_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lr_A_bottom_right.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_lid_A_bottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lr_lid_A_bottom.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_glue_flap_bottom.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_glue_flap_bottom.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_dust_flap_bottom_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_dust_flap_bottom_left.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_dust_flap_bottom_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_dust_flap_bottom_right.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_All.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_All.y = 0),
    z: (pivot_All.z = 0),
  });

  //TODO

  // tween = gsap.timeline();
  // tween.to(getPivotBackFlap.rotation, {
  //   duration: 5,
  //   ease: 'power4.in',
  //   y: (getPivotBackFlap.y = 0),
  // });

  // tween = gsap.timeline();
  // tween.to(getPivotBackFlap.position, {
  //   duration: 5,
  //   ease: 'power4.in',
  //   y: (getPivotBackFlap.y = ((B + C) * 2) | 0),
  // });

  // tween = gsap.timeline();
  // tween.to(getPivotGlueFlap.rotation, {
  //   duration: 5,
  //   ease: 'power4.in',
  //   x: (getPivotGlueFlap.x = 0),
  // });

  // tween = gsap.timeline();
  // tween.to(getPivotFrontFlap.rotation, {
  //   duration: 5,
  //   ease: 'power4.in',
  //   x: (getPivotFrontFlap.x = 0),
  // });

  // tween = gsap.timeline();
  // tween.to(getPivotTopFlap.rotation, {
  //   duration: 5,
  //   ease: 'power4.in',
  //   x: (getPivotTopFlap.x = 0),
  // });

  // tween = gsap.timeline();
  // tween.to(getPivotBBottomLid.rotation, {
  //   duration: 5,
  //   ease: 'power4.in',
  //   x: (getPivotBBottomLid.x = -Math.PI),
  // });

  // เส้น
  tween = gsap.timeline();
  tween.to(pivot_Right_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Right_edges.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_right_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lid_B_right_edges.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_lid_B_right_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lr_lid_B_right_edges.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_right_top_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lid_B_right_top_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_right_bottom_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lid_B_right_bottom_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_inside_flap_right_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_inside_flap_right_edges.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Left_edges.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_left_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lid_B_left_edges.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_lid_B_left_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_lr_lid_B_left_edges.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_left_top_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lid_B_left_top_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_B_left_bottom_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lid_B_left_bottom_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_inside_flap_left_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_inside_flap_left_edges.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Top_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_A_top_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lid_A_top_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_A_top_left_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lr_A_top_left_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_A_top_right_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lr_A_top_right_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_lid_A_top_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lr_lid_A_top_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_glue_flap_top_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_glue_flap_top_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_dust_flap_top_left_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_dust_flap_top_left_edges.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_dust_flap_top_right_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_dust_flap_top_right_edges.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lid_A_bottom_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lid_A_bottom_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_A_bottom_left_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lr_A_bottom_left_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_A_bottom_right_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lr_A_bottom_right_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lr_lid_A_bottom_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_lr_lid_A_bottom_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_glue_flap_bottom_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_glue_flap_bottom_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_dust_flap_bottom_left_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_dust_flap_bottom_left_edges.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_dust_flap_bottom_right_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_dust_flap_bottom_right_edges.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_All_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_All_edges.y = 0),
    z: (pivot_All_edges.z = 0),
  });

  //TODO

  // tween = gsap.timeline();
  // tween.to(getPivotBackFlapEdges.rotation, {
  //   duration: 5,
  //   ease: 'power4.in',
  //   y: (getPivotBackFlapEdges.y = 0),
  // });

  // tween = gsap.timeline();
  // tween.to(getPivotBackFlapEdges.position, {
  //   duration: 5,
  //   ease: 'power4.in',
  //   y: (getPivotBackFlapEdges.y = ((B + C) * 2) | 0),
  // });

  // tween = gsap.timeline();
  // tween.to(getPivotGlueFlapEdges.rotation, {
  //   duration: 5,
  //   ease: 'power4.in',
  //   x: (getPivotGlueFlapEdges.x = 0),
  // });

  // tween = gsap.timeline();
  // tween.to(getPivotFrontFlapEdges.rotation, {
  //   duration: 5,
  //   ease: 'power4.in',
  //   x: (getPivotFrontFlapEdges.x = 0),
  // });

  // tween = gsap.timeline();
  // tween.to(getPivotTopFlapEdges.rotation, {
  //   duration: 5,
  //   ease: 'power4.in',
  //   x: (getPivotTopFlapEdges.x = 0),
  // });

  // tween = gsap.timeline();
  // tween.to(getPivotBBottomLidEdges.rotation, {
  //   duration: 5,
  //   ease: 'power4.in',
  //   x: (getPivotBBottomLidEdges.x = -Math.PI),
  // });
};
