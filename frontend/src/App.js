import React from "react";
import { AgGridReact } from "ag-grid-react";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import Pagination from "./components/Pagination";
import useGetNames from "./hooks/useGetNames";
import { colDefs, defaultColDef } from "./constants";

import "@coreui/coreui/dist/css/coreui.min.css";

ModuleRegistry.registerModules([AllCommunityModule]);

function App() {
  const [rowData, paginationData, getNames] = useGetNames();

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        defaultColDef={defaultColDef}
      />
      <Pagination paginationData={paginationData} getNames={getNames} />
    </div>
  );
}

export default App;
