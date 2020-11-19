import * as actionTypes from "../actions/actionTypes";

const initialState = {
    allEvents:[]
};

const calendarReducers = (state=initialState, action) => {
    
    switch (action.type) {
        case actionTypes.CREATE_EVENT:
          return {
            ...state,
            state: state.push({
                id:action.id,
                title:action.title, 
                start:new Date(action.start), 
                end:new Date(action.end), 
                allDay:action.allDay
            })
          };
          case actionTypes.GET_ALL_EVENTS:
      return {
        ...state,
        allEvents: action.allEvents,
        
      };
          default:
      return state;
}
}

export default calendarReducers;