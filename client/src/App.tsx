import { ReactElement } from "react";
import "./App.css";

import SurfPointTable from "./features/gempyData/SurfacePointTable";

const App = (): ReactElement => {
  return (
    <div className="App">
      <SurfPointTable />
    </div>
  );
};

export default App;
