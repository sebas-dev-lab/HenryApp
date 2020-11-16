import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { DataGrid } from "@material-ui/data-grid";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function Crud(props) {
  const { rows, columns } = props;

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} />
    </div>
  );
}

export default Crud;
