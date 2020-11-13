import React, { useEffect } from "react";
import { Link } from 'react-router-dom'
import { BrowserRouter, Route} from 'react-router-dom'
import  {useDispatch, useSelector} from "react-redux"; 
// import {logoutUser} from '..Redux/u'
// import {Provider} from "react-alert";
// import "./Components/app.css";
// import img1 from "./img/pexels-photo-392018.jpeg"
// import {Carousel} from 'react-bootstrap';
import './Student.css'
import img2 from '../../multimedia/imghomeworks.jpg'
import img3 from '../../multimedia/calendar.jpeg'
import img4 from '../../multimedia/class.jpeg'
import pairp from '../../multimedia/pairp.jpg'
import coding from '../../multimedia/coding.jpeg'
import meeting from '../../multimedia/meeting.jpg'
import calif from '../../multimedia/calif.jpg'
//  import "./prueba.css"




const Student = ({history}) => {

    // const usuario = useSelector(store => store.user.user)
    // const dispatch = useDispatch()

  //  useEffect(()=> {
  //   if (!usuario.id) {
  //       history.push("/")
  //   }

  //  },[usuario]);


    
    return (


      <div class="root">
        <div className= "container">
       
        
    <div className= "contenedor">
    <div class="modulos">
          <ul class="progressbar">
          <div> 
            <i class="fas fa-arrow-alt-circle-right">MIS METAS ►►</i></div>
         
        
           <div> <li class="active">PREP COURSE</li></div>
           <div> <li class="active">MODULO I</li></div>
            <div><li class="active">MODULO II</li></div>
            <div> <li class="active">MODULO III</li></div>
            <div> <li class="active">MODULO IV</li></div>
            <div> <li class="active">HENRY LABS</li></div>
            <div> <li class="active">PROYECTO FINAL</li></div>
          </ul>
      </div>
    </div>
    </div>
          
  <div>
       {/* <h1 style= {{textAlign: "center", marginTop: "35px", fontFamily: "fantasy"}}></h1>  */}
    <div style={{  alignItems: "center",height: "60px", marginTop: "20px", marginLeft: "20px", marginRight: "20px",  alignItems: "center", justifyContent: "space-around"}} > 
</div>           
<div className= "grid"> 
            <section class="section category">
          
        <div class="category-center container">
                  <div class= "category-box" >
              <img key= {img3} src={img3} alt="" />
              <div class="content">
                <div>
                  <h2>Calendario</h2>
                
                       <Link className= "link">INGRESAR</Link>
                  </div> 
                 
              </div>
              </div>
              <div class= "category-box" >
              <img key= {img4} src={img4} alt="" />
              <div class="content">
                <div>
                  <h2>Acceso a clase</h2>
                </div>
                <Link className= "link">INGRESAR</Link>
              </div>
              </div>
            
              <div class= "category-box" >
              <img key= {img2} src={img2} alt="" />
              <div class="content">
                <div>
                  <h2>Homeworks</h2>
                </div>
                
                <Link className= "link">INGRESAR</Link>
            
              </div>
              </div>
              
              <div class= "category-box" >
              <img key= {coding} src={coding} alt="" />
              <div class="content">
                <div>
                  <h2>Clases grabadas</h2>
                </div>
               
                
                <Link className= "link">INGRESAR</Link>
            
              </div>
              </div>
              <div class= "category-box" >
              <img key= {meeting} src={meeting} alt="" />
              <div class="content">
                <div>
                  <h2>Stand Up</h2>
                </div>
               
                
                <Link className= "link">INGRESAR</Link>
            
              </div>
              </div>
              <div class= "category-box" >
              <img key= {pairp} src={pairp} alt="" />
              <div class="content">
                <div>
                  <h2>Pair Programming</h2>
                </div>
               
               
                <Link className= "link">INGRESAR</Link>
            
        
              </div>
            </div>
             {/* <div style={{ marginLeft: "50px"}} >   */}
            <div class= "category-box" >
              <img key= {calif} src={calif} alt="" />
              <div class="content">
                <div>
                  <h2>Calificaciones</h2>
                </div>
                
                <Link className= "link">INGRESAR</Link>
              </div>
              </div>
              </div>
             
            </section>
        
            </div>
             </div>
            
            </div>
       
              
       
      
     
     
   
        
    )
}

export default Student;
