import { ReactElement } from "react";
import "./App.css";

import SurfPointTable from "./features/gempyData/SurfacePointTable";

const App = (): ReactElement => {
  return (
    <div className="App">
      <h1>Hello Jest!</h1>
      <SurfPointTable />
    </div>
  );
};

export default App;
