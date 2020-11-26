import * as actionTypes from "../actions/actionTypes";

const initialState = {
  alumnsCohort: [],
  alumnsGrupo:[],
};

const alumnsCohortReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ALUMN_COHORT_GLOBAL:
      return {
        ...state,
        alumnsCohort: action.payload,
      };
    case actionTypes.ALUMN_GRUPO_GLOBAL:
      return {
        ...state,
        alumnsGrupo: action.payload,
      };
    default:
      return state;
  }
};

export default alumnsCohortReducer;