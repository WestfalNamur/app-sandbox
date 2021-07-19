import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { DataGrid } from "@material-ui/data-grid";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dataGrid: {
      width: "100%",
      height: "100%",
    },
  })
);

const columns = [
  {
    field: "id",
    headerName: "ID",
    type: "number",
    width: 100,
    editable: false,
  },
  {
    field: "X",
    headerName: "X",
    type: "number",
    flex: 1,
    editable: true,
  },
  {
    field: "Y",
    headerName: "Y",
    type: "number",
    flex: 1,
    editable: true,
  },
  {
    field: "Z",
    headerName: "Z",
    type: "number",
    flex: 1,
    editable: true,
  },
];

const rows = [
  { id: 1, X: 42, Y: 24, Z: 12 },
  { id: 2, X: 42, Y: 24, Z: 12 },
  { id: 3, X: 42, Y: 24, Z: 12 },
  { id: 4, X: 42, Y: 24, Z: 12 },
  { id: 5, X: 42, Y: 24, Z: 12 },
  { id: 6, X: 42, Y: 24, Z: 12 },
  { id: 7, X: 42, Y: 24, Z: 12 },
  { id: 8, X: 42, Y: 24, Z: 12 },
  { id: 9, X: 42, Y: 24, Z: 12 },
];

export default function SurfPointTable() {
  const classes = useStyles();
  return (
    <DataGrid
      className={classes.dataGrid}
      rows={rows}
      columns={columns}
      pageSize={25}
      checkboxSelection
      disableSelectionOnClick
      disableColumnResize={true}
    />
  );
}
