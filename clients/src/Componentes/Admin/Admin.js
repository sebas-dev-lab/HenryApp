import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../Admin/Admin.css";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
//-----------Lista Panel
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import PeopleIcon from "@material-ui/icons/People";
import RemoveRedEyeIcon from "@material-ui/icons/RemoveRedEye";
import ListAltIcon from "@material-ui/icons/ListAlt";
import MailIcon from "@material-ui/icons/Mail";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";
//-------------Componentes
import Alumnos from "./alumnosCRUD/logic";
import Cohortes from "./CohortPanel/cohortePanel";
import Email from "./email/Email";
import Calenadmin from "./calenadmin/calenadmin";

import Module from "../modulo/NewModule";
import AlumnosXCohorte from "./alumnosCRUD/alumnosXcohorte";
import Instructor from "./instructor/Instructor";
import { logout, verifySession } from "../../redux/actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 5,
    marginTop: -16, // keep right padding when drawer close
    backgroundColor: "#FFFF00",
  },
  toolbarIcon: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "0 px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function AdminPanel({ user }) {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("usuarios");
  const [cohortFilter, setCohortFilter] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleDrawer = () => {
    setOpen(!open);
  };

  const setActive = (tab) => {
    setActiveTab(tab);
  };

  const logOut = () => {
    dispatch(logout(history));
  };

  const showStudentsByCohort = (cohorte) => {
    setActiveTab("usuariosXCohorte");
    setCohortFilter(cohorte);
  };

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  useEffect(() => {}, [cohortFilter]);

  return (
    <>
      <Navbar user={user} />

      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="absolute"
          className={clsx(classes.appBar, open && classes.appBarShift)}
        ></AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawer}>
              {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            <div>
              <div class="slideout-sidebar">
                <ListItem button onClick={() => showStudentsByCohort(null)}>
                  <ListItemIcon className="iconsAdmin">
                    <PeopleIcon />
                  </ListItemIcon>
                  <ListItemText secondary="USUARIOS" />
                </ListItem>

                <ListItem button onClick={() => setActive("cohortes")}>
                  <ListItemIcon className="iconsAdmin">
                    <RemoveRedEyeIcon />
                  </ListItemIcon>
                  <ListItemText secondary="COHORTES" />
                </ListItem>

                <ListItem button onClick={() => setActive("calenadmin")}>
                  <ListItemIcon className="iconsAdmin">
                    <ListAltIcon />
                  </ListItemIcon>
                  <ListItemText secondary="CALENDARIO" />
                </ListItem>
                <ListItem button onClick={() => setActive("email")}>
                  <ListItemIcon className="iconsAdmin">
                    <MailIcon />
                  </ListItemIcon>
                  <ListItemText secondary="EMAIL" />
                </ListItem>
                <ListItem button onClick={() => setActive("module")}>
                  <ListItemIcon className="iconsAdmin">
                    <LibraryBooksIcon />
                  </ListItemIcon>
                  <ListItemText secondary="MODULE" />
                </ListItem>

                <ListItem button onClick={() => setActive("instructor")}>
                  <ListItemIcon className="iconsAdmin">
                    <RemoveRedEyeIcon />
                  </ListItemIcon>
                  <ListItemText secondary="INSTRUCTOR" />
                </ListItem>

                <ListItem button onClick={() => logOut()}>
                  <ListItemIcon className="iconsAdmin">
                    <ExitToAppIcon />
                  </ListItemIcon>
                  <ListItemText secondary="SALIR" />
                </ListItem>
              </div>
            </div>
          </List>
          <Divider />
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            {activeTab === "usuarios" && <Alumnos />}
            {activeTab === "usuariosXCohorte" && (
              <AlumnosXCohorte cohortFilter={cohortFilter} />
            )}

            {activeTab === "cohortes" && (
              <Cohortes showStudents={showStudentsByCohort} />
            )}
            {activeTab === "calenadmin" && <Calenadmin />}
            {activeTab === "email" && <Email />}
            {activeTab === "module" && <Module />}
            {activeTab === "instructor" && <Instructor />}
          </Container>
        </main>
      </div>
      <Footer />
    </>
  );
}
