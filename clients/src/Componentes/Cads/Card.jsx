import React from 'react';
import './Card-style.css'
// import calendar from '../utils/calendar.jpeg';

const Card= props => {
 
    return(
      <div className="card text-center">
       <div className= "overflow">
           <img src= {props.imgsrc} alt= "" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
          <h4 className="card-title">hola</h4>
          <p className="card-text text secondary">
                    hola
          </p>
          <a href= "#" className= "btn btn-outline-success"> </a>
      </div>
      </div>
    
    );

}

export default Card;