import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
// import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
// import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
// import AssignmentIcon from "@material-ui/icons/Assignment";
// import { Icon, InlineIcon } from "@iconify/react";
import ListAltIcon from "@material-ui/icons/ListAlt";
import { Link } from "react-router-dom";


export const mainListItems = (
  <div>
    {/* <Link to="/admin">
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon> 
        <ListItemText primary="Panel" />
      </ListItem>
    </Link> */}
    <Link to="/student/all">
      <ListItem button>
        <ListItemIcon>
        <PeopleIcon />
        </ListItemIcon>
        <ListItemText secondary="Usuarios" />
      </ListItem>
    </Link>
    <Link to="/admin/">
      <ListItem button>
        <ListItemIcon>
        <ListAltIcon />
        </ListItemIcon>
        <ListItemText secondary="Cohortes" />
      </ListItem>
    </Link>
    <Link to="/admin/">
      <ListItem button>
        <ListItemIcon>
          <ListAltIcon />
        </ListItemIcon>
        <ListItemText secondary="Modulos" />
      </ListItem>
    </Link>
    <Link to="/admin/">
      <ListItem button>
        <ListItemIcon>
          <ListAltIcon />
        </ListItemIcon>
        <ListItemText secondary="" />
      </ListItem>
    </Link>
    <Link to="/admin/">
      <ListItem button>
        <ListItemIcon>
          <ListAltIcon />
        </ListItemIcon>
        <ListItemText secondary="" />
      </ListItem>
    </Link>
    <a href="/">
      <ListItem button>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText secondary="Salir" />
      </ListItem>
    </a>
  </div>
);
