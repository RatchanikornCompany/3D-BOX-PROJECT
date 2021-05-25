//* Action
const SET_A = 'Menu/SET_A';
const SET_B = 'Menu/SET_B';
const SET_C = 'Menu/SET_C';
const SET_R = 'Menu/SET_R';
const SET_O = 'Menu/SET_O';
const SET_G = 'Menu/SET_G';
const SET_G_SLOPE = 'Menu/SET_G_SLOPE';
const SET_A_MODEL = 'Menu/SET_A_MODEL';
const SET_B_MODEL = 'Menu/SET_B_MODEL';
const SET_C_MODEL = 'Menu/SET_C_MODEL';
const SET_FLOOR = 'Menu/FLOOR';
const SET_UNIT = 'Menu/SET_UNIT';
const SET_ANIMATE = 'Menu/SET_ANIMATE';
const SET_LINEAREA = 'Menu/SET_LINEAREA';

//* Initialize State
const initialState = {
  A: null,
  B: null,
  C: null,
  R: null,
  O: null,
  G: null,
  GSlope: null,
  AModel: null,
  BModel: null,
  CModel: null,
  floor: null,
  unit: 'mm',
  animate: false,
  lineArea: null,
};

//* Default Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_A:
      return {
        ...state,
        A: action.payload,
      };
    case SET_B:
      return {
        ...state,
        B: action.payload,
      };
    case SET_C:
      return {
        ...state,
        C: action.payload,
      };
    case SET_O:
      return {
        ...state,
        O: action.payload,
      };
    case SET_R:
      return {
        ...state,
        R: action.payload,
      };
    case SET_G:
      return {
        ...state,
        G: action.payload,
      };
    case SET_G_SLOPE:
      return {
        ...state,
        GSlope: action.payload,
      };
    case SET_A_MODEL:
      return {
        ...state,
        AModel: action.payload,
      };
    case SET_B_MODEL:
      return {
        ...state,
        BModel: action.payload,
      };
    case SET_C_MODEL:
      return {
        ...state,
        CModel: action.payload,
      };
    case SET_FLOOR:
      return {
        ...state,
        floor: action.payload,
      };
    case SET_UNIT:
      return {
        ...state,
        unit: action.payload,
      };
    case SET_ANIMATE:
      return {
        ...state,
        animate: action.payload,
      };
    case SET_LINEAREA:
      return {
        ...state,
        lineArea: action.payload,
      };
    default:
      return state;
  }
};

//* Action Creators
export const setA = (data) => {
  return async (dispatch) => {
    dispatch({
      type: SET_A,
      payload: data,
    });
  };
};
export const setB = (data) => {
  return async (dispatch) => {
    dispatch({
      type: SET_B,
      payload: data,
    });
  };
};
export const setC = (data) => {
  return async (dispatch) => {
    dispatch({
      type: SET_C,
      payload: data,
    });
  };
};
export const setO = (data) => {
  return async (dispatch) => {
    dispatch({
      type: SET_O,
      payload: data,
    });
  };
};
export const setR = (data) => {
  return async (dispatch) => {
    dispatch({
      type: SET_R,
      payload: data,
    });
  };
};
export const setG = (data) => {
  return async (dispatch) => {
    dispatch({
      type: SET_G,
      payload: data,
    });
  };
};
export const setGSlope = (data) => {
  return async (dispatch) => {
    dispatch({
      type: SET_G_SLOPE,
      payload: data,
    });
  };
};
export const setAModel = (data) => {
  return async (dispatch) => {
    dispatch({
      type: SET_A_MODEL,
      payload: data,
    });
  };
};
export const setBModel = (data) => {
  return async (dispatch) => {
    dispatch({
      type: SET_B_MODEL,
      payload: data,
    });
  };
};
export const setCModel = (data) => {
  return async (dispatch) => {
    dispatch({
      type: SET_C_MODEL,
      payload: data,
    });
  };
};
export const setFloor = (data) => {
  return async (dispatch) => {
    dispatch({
      type: SET_FLOOR,
      payload: data,
    });
  };
};
export const setUnit = (data) => {
  return async (dispatch) => {
    dispatch({
      type: SET_UNIT,
      payload: data,
    });
  };
};
export const setAnimate = (data) => {
  return async (dispatch) => {
    dispatch({
      type: SET_ANIMATE,
      payload: data,
    });
  };
};
export const setLineArea = (data) => {
  return async (dispatch) => {
    dispatch({
      type: SET_LINEAREA,
      payload: data,
    });
  };
};
