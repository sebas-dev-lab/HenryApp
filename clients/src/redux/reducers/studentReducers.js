import * as actionTypes from "../actions/actionTypes";

const initialState = {
  allStudents: [],
  student: {},
  message: "",
};

const studentReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.POST_STUDENT:
      return {
        ...state,
        allStudent: state.allStudents.concat(action.newUser),
      };
    case actionTypes.GET_ALL_STUDENTS:
      console.log(action);

      return {
        ...state,
        allStudents: action.allStudents,
      };
    case actionTypes.GET_ONE_USER:
      return {
        ...state,
        admin: action.admin,
      };

    case actionTypes.PUT_STUDENT:
      return {
        ...state,
        allUsers: state.allUsers.map((user) => {
          if (user.code === action.code) {
            user = action.update;
          }
          return user;
        }),
      };
    default:
      return state;
  }
};

export default studentReducers;
