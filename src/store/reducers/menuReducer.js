//? Action
const SET_A = 'Menu/SET_A'
const SET_B = 'Menu/SET_B'
const SET_C = 'Menu/SET_C'
const SET_F = 'Menu/SET_F'
const SET_P = 'Menu/SET_P'
const SET_G = 'Menu/SET_G'
const SET_G_SLOPE = 'Menu/SET_G_SLOPE'
const SET_UNIT = 'Menu/SET_UNIT'

//? Initialize State
const initialState = {
  A: null,
  B: null,
  C: null,
  F: null,
  P: null,
  G: null,
  GSlope: null,
  unit: 'mm',
}

//? Default Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_A:
      return {
        ...state,
        A: action.payload,
      }
    case SET_B:
      return {
        ...state,
        B: action.payload,
      }
    case SET_C:
      return {
        ...state,
        C: action.payload,
      }
    case SET_F:
      return {
        ...state,
        F: action.payload,
      }
    case SET_P:
      return {
        ...state,
        P: action.payload,
      }
    case SET_G:
      return {
        ...state,
        G: action.payload,
      }
    case SET_G_SLOPE:
      return {
        ...state,
        GSlope: action.payload,
      }
    case SET_UNIT:
      return {
        ...state,
        unit: action.payload,
      }
    default:
      return state
  }
}

//? Action Creators
export const setA = (data) => {
  return async (dispatch) => {
    dispatch({
      type: SET_A,
      payload: data,
    })
  }
}

export const setB = (data) => {
  return async (dispatch) => {
    dispatch({
      type: SET_B,
      payload: data,
    })
  }
}

export const setC = (data) => {
  return async (dispatch) => {
    dispatch({
      type: SET_C,
      payload: data,
    })
  }
}

export const setF = (data) => {
  return async (dispatch) => {
    dispatch({
      type: SET_F,
      payload: data,
    })
  }
}

export const setP = (data) => {
  return async (dispatch) => {
    dispatch({
      type: SET_P,
      payload: data,
    })
  }
}

export const setG = (data) => {
  return async (dispatch) => {
    dispatch({
      type: SET_G,
      payload: data,
    })
  }
}
export const setGSlope = (data) => {
  return async (dispatch) => {
    dispatch({
      type: SET_G_SLOPE,
      payload: data,
    })
  }
}

export const setUnit = (data) => {
  return async (dispatch) => {
    dispatch({
      type: SET_UNIT,
      payload: data,
    })
  }
}
