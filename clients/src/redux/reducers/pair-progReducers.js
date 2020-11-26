import * as actionTypes from "../actions/actionTypes";

const initialState = {
  allPairs: [],
  pair: {},
};

const pairReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.POST_PP:
      return {
        ...state,
        allPairs: state.allPairs.concat(action.payload),
      };
    case actionTypes.GET_ALL_PAIRS:
      return {
        ...state,
        allPairs: action.payload,
      };

      

    default:
      return state;
  }
};

export default pairReducers;
