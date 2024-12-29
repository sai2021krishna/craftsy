import React from "react";
import "./App.css";
import { BaseScreenComponent } from "./screens/base/base.screen.component";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <React.StrictMode>
          <BaseScreenComponent />
        </React.StrictMode>
      </BrowserRouter>
    </>
  );
}

export default App;
