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
  pivot_Bottom_back_lid_d,
  pivot_Back_edges,
  pivot_Glue_lid_edges,
  pivot_Left_lid_edges,
  pivot_Left_lid_d_edges,
  pivot_Group_left_edges,
  pivot_Right_lid_edges,
  pivot_Right_lid_d_edges,
  pivot_Group_right_edges,
  pivot_Group_top_back_edges,
  pivot_Top_back_lid_edges,
  pivot_Top_edges,
  pivot_Top_front_lid_edges,
  pivot_Group_bottom_front_edges,
  pivot_Bottom_front_lid_edges,
  pivot_Bottom_front_lid_d_edges,
  pivot_Group_bottom_back_edges,
  pivot_Bottom_back_lid_edges,
  pivot_Bottom_back_lid_d_edges
) => {
  /* #region  //* จุดหมุน */

  /* #region  //* pivot_Back */

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

  /* #endregion */
  /* #region  //* pivot_Group_left */

  /* #region  //* pivot_Left_lid */

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

  /* #endregion */

  tween = gsap.timeline();
  tween.to(pivot_Group_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Group_left.y = -Math.PI / 2),
  });

  /* #endregion */
  /* #region  //* pivot_Group_right */

  /* #region  //* pivot_Right_lid */

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

  /* #endregion */

  tween = gsap.timeline();
  tween.to(pivot_Group_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Group_right.y = Math.PI / 2),
  });

  /* #endregion */
  /* #region  //* pivot_Top */

  /* #region  //* pivot_Group_top_back */

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

  /* #endregion */
  /* #region  //* pivot_Group_top_front */

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

  /* #endregion */

  /* #endregion */
  /* #region  //* pivot_Bottom */

  /* #region  //* pivot_Group_bottom_front */

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

  /* #endregion */
  /* #region  //* pivot_Group_bottom_back */

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

  /* #endregion */

  /* #endregion */

  /* #endregion */
  /* #region  //* จุดหมุน - แบบมีเส้น */

  /* #region  //* pivot_Back */

  tween = gsap.timeline();
  tween.to(pivot_Back_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Back_edges.y = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_Glue_lid_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Glue_lid_edges.y = -(Math.PI / 180) * 90),
  });

  /* #endregion */
  /* #region  //* pivot_Group_left */

  /* #region  //* pivot_Left_lid */

  tween = gsap.timeline();
  tween.to(pivot_Left_lid_edges.rotation, {
    duration: 6,
    ease: 'power4.in',
    x: (pivot_Left_lid_edges.x = -(Math.PI / 180) * 30),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_lid_d_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Left_lid_d_edges.x = (Math.PI / 180) * 91),
  });

  /* #endregion */

  tween = gsap.timeline();
  tween.to(pivot_Group_left_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Group_left_edges.y = -Math.PI / 2),
  });

  /* #endregion */
  /* #region  //* pivot_Group_right */

  /* #region  //* pivot_Right_lid */

  tween = gsap.timeline();
  tween.to(pivot_Right_lid_edges.rotation, {
    duration: 6,
    ease: 'power4.in',
    x: (pivot_Right_lid_edges.x = (Math.PI / 180) * -30),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_lid_d_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Right_lid_d_edges.x = (Math.PI / 180) * 91),
  });

  /* #endregion */

  tween = gsap.timeline();
  tween.to(pivot_Group_right_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Group_right_edges.y = Math.PI / 2),
  });

  /* #endregion */
  /* #region  //* pivot_Top */

  /* #region  //* pivot_Group_top_back */

  tween = gsap.timeline();
  tween.to(pivot_Group_top_back_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Group_top_back_edges.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top_back_lid_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Top_back_lid_edges.x = Math.PI / 2),
  });

  /* #endregion */
  /* #region  //* pivot_Group_top_front */

  tween = gsap.timeline();
  tween.to(pivot_Top_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Top_edges.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top_front_lid_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Top_front_lid_edges.x = Math.PI / 2),
  });

  /* #endregion */

  /* #endregion */
  /* #region  //* pivot_Bottom */

  /* #region  //* pivot_Group_bottom_front */

  tween = gsap.timeline();
  tween.to(pivot_Group_bottom_front_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Group_bottom_front_edges.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_front_lid_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom_front_lid_edges.x = (Math.PI / 180) * -1),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_front_lid_d_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom_front_lid_d_edges.x = (Math.PI / 180) * 45),
  });

  /* #endregion */
  /* #region  //* pivot_Group_bottom_back */

  tween = gsap.timeline();
  tween.to(pivot_Group_bottom_back_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Group_bottom_back_edges.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_back_lid_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom_back_lid_edges.x = (Math.PI / 180) * -1),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_back_lid_d_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom_back_lid_d_edges.x = (Math.PI / 180) * 45),
  });

  /* #endregion */

  /* #endregion */

  /* #endregion */
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
  pivot_Bottom_back_lid_d,
  pivot_Back_edges,
  pivot_Glue_lid_edges,
  pivot_Left_lid_edges,
  pivot_Left_lid_d_edges,
  pivot_Group_left_edges,
  pivot_Right_lid_edges,
  pivot_Right_lid_d_edges,
  pivot_Group_right_edges,
  pivot_Group_top_back_edges,
  pivot_Top_back_lid_edges,
  pivot_Top_edges,
  pivot_Top_front_lid_edges,
  pivot_Group_bottom_front_edges,
  pivot_Bottom_front_lid_edges,
  pivot_Bottom_front_lid_d_edges,
  pivot_Group_bottom_back_edges,
  pivot_Bottom_back_lid_edges,
  pivot_Bottom_back_lid_d_edges
) => {
  /* #region  //* จุดหมุน */

  /* #region  //* pivot_Back */

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

  /* #endregion */
  /* #region  //* pivot_Group_left */

  /* #region  //* pivot_Left_lid */

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

  /* #endregion */

  tween = gsap.timeline();
  tween.to(pivot_Group_left.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Group_left.y = 0),
  });

  /* #endregion */
  /* #region  //* pivot_Group_right */

  /* #region  //* pivot_Right_lid */

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

  /* #endregion */

  tween = gsap.timeline();
  tween.to(pivot_Group_right.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Group_right.y = 0),
  });

  /* #endregion */
  /* #region  //* pivot_Top */

  /* #region  //* pivot_Group_top_back */

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

  /* #endregion */
  /* #region  //* pivot_Group_top_front */

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

  /* #endregion */

  /* #endregion */
  /* #region  //* pivot_Bottom */

  /* #region  //* pivot_Group_bottom_front */

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

  /* #endregion */
  /* #region  //* pivot_Group_bottom_back */

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

  /* #endregion */

  /* #endregion */

  /* #endregion */
  /* #region  //* จุดหมุน - แบบมีเส้น */

  /* #region  //* pivot_Back */

  tween = gsap.timeline();
  tween.to(pivot_Back_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Back_edges.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Glue_lid_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Glue_lid_edges.y = 0),
  });

  /* #endregion */
  /* #region  //* pivot_Group_left */

  /* #region  //* pivot_Left_lid */

  tween = gsap.timeline();
  tween.to(pivot_Left_lid_edges.rotation, {
    duration: 6,
    ease: 'power4.in',
    x: (pivot_Left_lid_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_lid_d_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Left_lid_d_edges.x = 0),
  });

  /* #endregion */

  tween = gsap.timeline();
  tween.to(pivot_Group_left_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Group_left_edges.y = 0),
  });

  /* #endregion */
  /* #region  //* pivot_Group_right */

  /* #region  //* pivot_Right_lid */

  tween = gsap.timeline();
  tween.to(pivot_Right_lid_edges.rotation, {
    duration: 6,
    ease: 'power4.in',
    x: (pivot_Right_lid_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_lid_d_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Right_lid_d_edges.x = 0),
  });

  /* #endregion */

  tween = gsap.timeline();
  tween.to(pivot_Group_right_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    y: (pivot_Group_right_edges.y = 0),
  });

  /* #endregion */
  /* #region  //* pivot_Top */

  /* #region  //* pivot_Group_top_back */

  tween = gsap.timeline();
  tween.to(pivot_Group_top_back_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Group_top_back_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top_back_lid_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Top_back_lid_edges.x = 0),
  });

  /* #endregion */
  /* #region  //* pivot_Group_top_front */

  tween = gsap.timeline();
  tween.to(pivot_Top_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Top_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top_front_lid_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Top_front_lid_edges.x = 0),
  });

  /* #endregion */

  /* #endregion */
  /* #region  //* pivot_Bottom */

  /* #region  //* pivot_Group_bottom_front */

  tween = gsap.timeline();
  tween.to(pivot_Group_bottom_front_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Group_bottom_front_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_front_lid_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom_front_lid_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_front_lid_d_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom_front_lid_d_edges.x = 0),
  });

  /* #endregion */
  /* #region  //* pivot_Group_bottom_back */

  tween = gsap.timeline();
  tween.to(pivot_Group_bottom_back_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Group_bottom_back_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_back_lid_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom_back_lid_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_back_lid_d_edges.rotation, {
    duration: 5,
    ease: 'power4.in',
    x: (pivot_Bottom_back_lid_d_edges.x = 0),
  });

  /* #endregion */

  /* #endregion */

  /* #endregion */
};
