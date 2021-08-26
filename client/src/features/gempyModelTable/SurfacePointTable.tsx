import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { DataGrid } from "@material-ui/data-grid";
import { ReactElement } from "react";
import { SurfacePoint } from "../../types";

import { useGetSurfacePointsQuery } from "./gempyTabularDataApi";

const useStyles = makeStyles((_theme: Theme) =>
  createStyles({
    dataGrid: {
      width: "100%",
      height: "650px",
    },
  })
);

const columns = [
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
    field: "XUc",
    headerName: "XUc",
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
    field: "YUc",
    headerName: "YUc",
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
  {
    field: "ZUc",
    headerName: "ZUc",
    type: "number",
    flex: 1,
    editable: true,
  },
];

interface RowPoint {
  id: string;
  X: number;
  XUc: number;
  Y: number;
  YUc: number;
  Z: number;
  ZUc: number;
  Formation: string;
}

function genRowData(surfacePoints: SurfacePoint[]): RowPoint[] {
  return surfacePoints.map((sp) => ({
    id: sp.idx,
    X: sp.x,
    XUc: sp.x_uc,
    Y: sp.y,
    YUc: sp.y_uc,
    Z: sp.z,
    ZUc: sp.z_uc,
    Formation: sp.formation,
  }));
}

const SurfPointTable = (): ReactElement => {
  const classes = useStyles();
  const { data, error } = useGetSurfacePointsQuery();

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  const rows = genRowData(data);

  return (
    <DataGrid
      className={classes.dataGrid}
      rows={rows}
      columns={columns}
      pageSize={10}
      disableSelectionOnClick
    />
  );
};

export default SurfPointTable;
