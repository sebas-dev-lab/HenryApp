import * as actionTypes from "../actions/actionTypes";

const initialState = {
  alumnsCohort: []
};

const alumnsCohortReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ALUMN_COHORT_GLOBAL:
      return {
        ...state,
        alumnsCohort: action.payload,
      };
    default:
      return state;
  }
};

export default alumnsCohortReducer;