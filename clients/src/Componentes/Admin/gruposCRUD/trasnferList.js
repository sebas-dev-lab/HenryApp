import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { update_Cohort } from "../../../redux/actions/adminActions";
import { getAllStudents } from "../../../redux/actions/studentActions";



const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
  },
  paper: {
    width: 200,
    height: 230,
    overflow: "auto",
  },
  button: {
    margin: theme.spacing(0.5, 0),
  },
}));

function not(a, b) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a, b) {
  return a.filter((value) => b.indexOf(value) !== -1);
}

export default function TransferList(props) {
  const dispatch = useDispatch();
  const { nameRow, users } = props;
  const classes = useStyles();
  const alumnos = useSelector(store=>store.cohort.cohort)





  const [checked, setChecked] = useState([]);
  const [left, setLeft] = useState([]);
  const [right, setRight] = useState([]);
  const [nAlum, setNAlum] =useState([]) 
  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const tranducirAlumno= async()=>{
    return alumnos.map(alum=>{return {name:alum.name,
    code:alum.code}})
  }


  useEffect(() => {
  tranducirAlumno().then((res)=>{
    console.log(res)
    setLeft(res)})
  }, []);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    }

    setChecked(newChecked);
  };

  const handleAllRight = () => {
    setRight(right.concat(left));
    setLeft([]);
  };

  const handleAllLeft = () => {
    setLeft(left.concat(right));
    setRight([]);
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };



//aca abajo es donde tiene que venir el codigo para agregar a grupo 


  const agregarACohorte = (nameCode) => {
    dispatch(update_Cohort(nameCode, nameRow));
  };

  const enviarAlumnos = () => {
    right.map((alumno) => {
      agregarACohorte(alumno.code);
    });
  };

  

  const customList = (items) => (
    <Paper className={classes.paper}>
      <List dense component="div" role="list">
        {items.length > 0 &&
          items.map((value) => {
            const labelId = `transfer-list-item-${value.code}-label`;

            return (
              <ListItem
                key={value.code}
                role="listitem"
                button
                onClick={handleToggle(value.code)}
              >
                <ListItemIcon>
                  <Checkbox
                    checked={checked.indexOf(value.code) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={` ${value.name}`} />
              </ListItem>
            );
          })}
        <ListItem />
      </List>
    </Paper>
  );

  return (
    <Grid
      container
      spacing={2}
      justify="center"
      alignItems="center"
      className={classes.root}
      style={{ backgroundColor: "white", width: "60%", marginTop: "15%" }}
    >
      
      <Grid item>{customList(left)}</Grid>
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={handleAllRight}
            disabled={left.length === 0}
            aria-label="move all right"
          >
            ≫
          </Button>
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={handleCheckedRight}
            
            aria-label="move selected right"
          >
            &gt;
          </Button>
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={handleCheckedLeft}
            disabled={rightChecked.length === 0}
            aria-label="move selected left"
          >
            &lt;
          </Button>
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={handleAllLeft}
            
            aria-label="move all left"
          >
            ≪
          </Button>
        </Grid>
      </Grid>
      <Grid item>{customList(right)}</Grid>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={enviarAlumnos}
        aria-label="mostrar"
      >
        Agregar Alumnos
      </Button>
    </Grid>
  );
}
