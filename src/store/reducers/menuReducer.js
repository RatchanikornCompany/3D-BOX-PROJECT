//? Action
const SET_A = 'Menu/SET_A';
const SET_B = 'Menu/SET_B';
const SET_C = 'Menu/SET_C';
const SET_L = 'Menu/SET_L';
const SET_G = 'Menu/SET_G';
const SET_G_SLOPE = 'Menu/SET_G_SLOPE';
const SET_P = 'Menu/SET_P';
const SET_P_SLOPE = 'Menu/SET_P_SLOPE';
const SET_F = 'Menu/SET_F';
const SET_UNIT = 'Menu/SET_UNIT';
const SET_RADIUS = 'Menu/SET_RADIUS';
const SET_LOCKHEIGHT_FIX = 'Menu/SET_LOCKHEIGHT_FIX';
const SET_SLPET = 'Menu/SET_P_SLOPE';
const SET_SLOPED = 'Menu/SET_SLOPED';
const SET_HAND_FIX = 'Menu/SET_HAND_FIX';
const SET_LONGHANDFIX = 'Menu/SET_LONGHANDFIX';

//? Initialize State
const initialState = {
  A: null,
  B: null,
  C: null,
  L: null,
  G: null,
  GSlope: null,
  P: null,
  PSlope: null,
  F: null,
  unit: 'mm',
  Radius: null,
  LockHeight_fix: null,
  Slopet: null,
  Sloped: null,
  Hand_fix: null,
  Longhand_fix: null,
};

//? Default Reducer
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
    case SET_L:
      return {
        ...state,
        L: action.payload,
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
    case SET_P:
      return {
        ...state,
        P: action.payload,
      };
    case SET_P_SLOPE:
      return {
        ...state,
        PSlope: action.payload,
      };
    case SET_F:
      return {
        ...state,
        F: action.payload,
      };
    case SET_UNIT:
      return {
        ...state,
        unit: action.payload,
      };
    case SET_RADIUS:
      return {
        ...state,
        Radius: action.payload,
      };
    case SET_LOCKHEIGHT_FIX:
      return {
        ...state,
        LockHeight_fix: action.payload,
      };
    case SET_SLPET:
      return {
        ...state,
        Slopet: action.payload,
      };
    case SET_SLOPED:
      return {
        ...state,
        Sloped: action.payload,
      };
    case SET_HAND_FIX:
      return {
        ...state,
        Hand_fix: action.payload,
      };
    case SET_LONGHANDFIX:
      return {
        ...state,
        Longhand_fix: action.payload,
      };

    default:
      return state;
  }
};

//? Action Creators
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

export const setL = (data) => {
  return async (dispatch) => {
    dispatch({
      type: SET_L,
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

export const setP = (data) => {
  return async (dispatch) => {
    dispatch({
      type: SET_P,
      payload: data,
    });
  };
};

export const setPSlope = (data) => {
  return async (dispatch) => {
    dispatch({
      type: SET_P_SLOPE,
      payload: data,
    });
  };
};

export const setF = (data) => {
  return async (dispatch) => {
    dispatch({
      type: SET_F,
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

export const setRadius = (data) => {
  return async (dispatch) => {
    dispatch({
      type: SET_RADIUS,
      payload: data,
    });
  };
};

export const setLockHeight_fix = (data) => {
  return async (dispatch) => {
    dispatch({
      type: SET_LOCKHEIGHT_FIX,
      payload: data,
    });
  };
};

export const setSlopet = (data) => {
  return async (dispatch) => {
    dispatch({
      type: SET_SLPET,
      payload: data,
    });
  };
};

export const setSloped = (data) => {
  return async (dispatch) => {
    dispatch({
      type: SET_SLOPED,
      payload: data,
    });
  };
};

export const setHand_fix = (data) => {
  return async (dispatch) => {
    dispatch({
      type: SET_HAND_FIX,
      payload: data,
    });
  };
};

export const setLonghand_fix = (data) => {
  return async (dispatch) => {
    dispatch({
      type: SET_LONGHANDFIX,
      payload: data,
    });
  };
};
