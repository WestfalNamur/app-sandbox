import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { DataGrid } from "@material-ui/data-grid";

import useSurfacePoints from "../../app/hooks/useGempyData";

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

export default function SurfPointTable() {
  const classes = useStyles();
  const { data, status } = useSurfacePoints();
  if (status === "error") return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  const rows = data.map((p) => ({
    id: p.idx,
    X: p.x,
    Y: p.y,
    Z: p.z,
  }));
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
