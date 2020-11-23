import { Link } from "react-router-dom";
// import {logoutUser} from '..Redux/u';
// import "./Components/app.css";
// import img1 from "./img/pexels-photo-392018.jpeg"
// import {Carousel} from 'react-bootstrap';
import "./Student.css";
import img2 from "../utils/imghomeworks.jpg";
import img3 from "../utils/calendar.jpeg";
import img4 from "../utils/class.jpeg";
import pairp from "../utils/pairp.jpg";
import coding from "../utils/coding.jpeg";
import meeting from "../utils/meeting.jpg";
import calif from "../utils/calif.jpg";
//  import "./prueba.css"
import Footer from "../../Componentes/Footer.jsx";
import Carrusel from "../Carrusel.jsx";
import Stepper from "../../Componentes/Stepper/Stepper";

const Student = () => {
  // const usuario = useSelector(store => store.user.user)
  // const dispatch = useDispatch()

  //  useEffect(()=> {
  //   if (!usuario.id) {
  //       history.push("/")
  //   }

  //  },[usuario]);

  return (
    <div class="root">
      {/* <div style ={{backgroundColor: "grey",marginTop: "0rem"}}>
    <h6: Juan Perez        cohorte: 6         modulo: 2</h6>
    </div>>YO
    <div style ={{marginTop: "-0.5rem"}}> */}
      <Carrusel />
      {/* </div> */}

      <div className="container">
        <Stepper />

        {/* <div className= "contenedor">
    <div class="modulos">
          <ul class="progressbar">
          <div> 

            <div className="meta"> MIS METAS »</div>
            <i class="fas fa-arrow-alt-circle-right"></i></div>
           
        
           <div> <li class="active">PREP COURSE</li></div>
           <div> <li class="active">MODULO I</li></div>
            <div><li class="active">MODULO II</li></div>
            <div> <li class="active">MODULO III</li></div>
            <div> <li class="active">MODULO IV</li></div>
            <div> <li class="active">HENRY LABS</li></div>
            <div> <li class="active">PROYECTO FINAL</li></div>
          </ul>
      </div> */}
        {/* </div> */}
      </div>

      <div className="algo">
        {/* <h1 style= {{textAlign: "center", marginTop: "35px", fontFamily: "fantasy"}}></h1>  */}
        <div className="conten_taks">
          <div class="category-box">
            <img key={img3} src={img3} alt="" />
            <div class="content">
              <div>
                <h2>Calendario</h2>
                <Link className="link">INGRESAR</Link>
              </div>
            </div>
          </div>
          <div class="category-box">
            <img key={img4} src={img4} alt="" />
            <div class="content">
              <div>
                <h2>Acceso a clase</h2>
              </div>
              <Link className="link">INGRESAR</Link>
            </div>
          </div>

          <div class="category-box">
            <img key={img2} src={img2} alt="" />
            <div class="content">
              <div>
                <h2>Homeworks</h2>
              </div>

              <Link className="link">INGRESAR</Link>
            </div>
          </div>
        </div>
        <div className="conten_taks">
          <div class="category-box">
            <img key={coding} src={coding} alt="" />
            <div class="content">
              <div>
                <h2>Clases grabadas</h2>
              </div>

              <Link className="link" to="/clases">
                INGRESAR
              </Link>
            </div>
          </div>
          <div class="category-box">
            <img key={meeting} src={meeting} alt="" />
            <div class="content">
              <div>
                <h2>Stand Up</h2>
              </div>

              <Link className="link">INGRESAR</Link>
            </div>
          </div>
          <div class="category-box">
            <img key={pairp} src={pairp} alt="" />
            <div class="content">
              <div>
                <h2>Pair Programming</h2>
              </div>

              <Link className="link">INGRESAR</Link>
            </div>
          </div>
        </div>
        {/* <div style={{ marginLeft: "50px"}} >   */}
        <div className="conten_taks">
          <div class="category-box">
            <img key={calif} src={calif} alt="" />
            <div class="content">
              <div>
                <h2>Calificaciones</h2>
              </div>

              <Link className="link">INGRESAR</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Student;
