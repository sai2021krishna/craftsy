import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BaseScreenComponent } from "./screens/base/base.screen.component";

function App() {
  return (
    <>
      <React.StrictMode>
        <BaseScreenComponent />
      </React.StrictMode>
    </>
  );
}

export default App;
