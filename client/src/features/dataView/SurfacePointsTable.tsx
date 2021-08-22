import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { DataGrid } from "@material-ui/data-grid";
import { useGetSurfacePoints } from "./gempyDataApi";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dataGrid: {
      width: "100%",
      height: "650px",
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
    field: "Formation",
    headerName: "Formation",
    type: "string",
    flex: 1,
    editable: true,
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

export default function SurfPointTable() {
  const classes = useStyles();
  const { data, error } = useGetSurfacePoints();
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  const rows = data.map((p) => ({
    id: p.idx,
    X: p.x,
    Y: p.y,
    Z: p.z,
    Formation: p.formation,
  }));
  return (
    <DataGrid
      className={classes.dataGrid}
      rows={rows}
      columns={columns}
      pageSize={10}
      checkboxSelection
      disableSelectionOnClick
    />
  );
}
