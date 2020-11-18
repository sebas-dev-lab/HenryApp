import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal(props) {
  const {edit, nameRow} = props
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [Name,setName]=useState('')
  const [Fecha,setFecha]=useState('')

  

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

 

  return (
    <div >
       <Button variant="contained" color="primary" size="small" onClick={handleOpen}>
        editar cohorte
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
         
         <form className={classes.root} noValidate autoComplete="off" style={{backgroundColor:"white",display:"flex",
    flexDirection:"column",width:"400px",position:"relative",left:"35%",top:"30%",}} >
      <div style={{margin:"25px auto"}}>
          <TextField id="outlined-basic" label="Nombre de cohorte" variant="outlined" style={{marginBottom:"10px"}} onChange={e=>{setName(e.target.value)}} />
          <TextField id="outlined-basic" label="fecha de inicio" variant="outlined" style={{marginBottom:"10px"}}  onChange={e=>{setFecha(e.target.value)}}/>
          <Button variant="contained" color="primary" onClick={()=>edit(nameRow,{name:Name,startDate:Fecha})}>
            Enviar
          </Button>

      </div>
    </form>

          
      </Modal>
    </div>
  );
}