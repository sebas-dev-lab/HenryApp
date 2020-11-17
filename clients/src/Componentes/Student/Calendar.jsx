/* import events from "./eventos" */
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
/* import './style.css'; */
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect, useState} from 'react'
import {getAllEvents} from '../../redux/actions/calendarActions';

const localizer = momentLocalizer(moment);

function Calendario(props) {
   const event = useSelector(store => store.calendar)
   const dispatch = useDispatch();
   console.log('evento aqui--->', event)

   useEffect( () => {   
    dispatch(getAllEvents())    
  }, []) 

    return (
      <div>
        <p>
          Henry Bootcamp events
        </p>
        <div style={{ height: '500pt'}}>
          <Calendar
            events={{
              name: 'React',
              event
            }}
            startAccessor="start"
            endAccessor="end"
            defaultDate={moment().toDate()}
            localizer={localizer}
          />
        </div>
      </div>
    );
  }


export default Calendario