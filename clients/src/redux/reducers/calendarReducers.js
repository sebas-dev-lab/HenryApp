import * as actionTypes from "../actions/actionTypes";

const initialState = {

    allEvents:[]
};


    allEvents:[{
        id:1,
        title:"Clase Bootstrap",                     
        start:new Date(2020, 11-1, 19, 9, 0), 
        end:new Date(2020, 11-1, 19, 10, 45), 
        allDay:false
    },
    {
        id:2,
        title:"PP",                     
        start:new Date(2020, 11-1, 19, 15, 0), 
        end:new Date(2020, 11-1, 19, 16, 30), 
        allDay:false
    },
    {
        id:3,
        title:"Repaso",                     
        start:new Date(2020, 11-1, 28, 10, 30), 
        end:new Date(2020, 11-1, 28, 12, 30),  
        allDay:false
    },
    {
        id:4,
        title:"CheckPoint",                     
        start:new Date(2020, 11-1, 29, 9, 0), 
        end:new Date(2020, 11-1, 29, 18, 30), 
        allDay:false
    }]
};

/* {
    id:7,
    title:"evento",                     
    start:new Date(2020, 3, 16, 10, 45), 
    end:new Date(2020, 3, 16, 10, 45), 
    allDay:true
} */



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

            allEvents: state.allEvents.push({
                id:action._id,
                title:action.title,                     
                start:new Date(action.year, action.month-1, action.day, action.hour, action.minute), 
                end:new Date(action.endYear, action.endMonth-1, action.endDay, action.endHour, action.endMinute), 
                allDay:action.allDay
            }),

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