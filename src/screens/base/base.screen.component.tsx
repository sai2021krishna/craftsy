import React from "react";
import { NavbarComponent } from "../components/navbar.component";
import { HamburgerComponent } from "../components/hamburger.component";
import { FooterComponent } from "../components/footer.component";
import { DashboardContainerComponent } from "../containers/dashboard.container.component";

export const BaseScreenComponent = () => {
  const data = "";

  return (
    <>
      <div className="h-full">
        <NavbarComponent />
        <DashboardContainerComponent />
      </div>
    </>
  );
};
