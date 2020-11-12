import * as actionTypes from "../actions/actionTypes";

const initialState = {
  allEmails: [],
  email: {},
  message: "",
};

const cohortReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.POST_EMAIL:
      return {
        ...state,
        allEmails: state.allEmails.concat(action.email),
      };
    case actionTypes.GET_EMAIL:
      return {
        ...state,
        allCohort: action.allCohort,
      };

    case actionTypes.PUT_EMAIL:
      return {
        ...state,
        allEmails: state.allEmails.map((email) => {
          if (email === action.email) {
            email = action.updateEmail;
          }
          return email;
        }),
      };
    case actionTypes.DELETE_EMAIL:
      return {
        ...state,
        messages: action.messages,
      };

    default:
      return state;
  }
};

export default cohortReducers;
