import React from "react";
import { NavbarComponent } from "../components/navbar.component";
import { DashboardContainerComponent } from "../containers/dashboard.container.component";
import { Routes, Route } from "react-router-dom";
import { ProductsContainerComponent } from "../containers/products.container.component";
import { FooterComponent } from "../components/footer.component";
import ProductDetailsContainer from "../containers/product-detail.container.component";
import SessionCreationContainer from "../containers/session-creation.container.component";

export const BaseScreenComponent: React.FC<any> = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="min-w-full h-14 flex p-2">
          <NavbarComponent />
        </div>
        <div className="flex-1">
          <Routes>
            <Route path="/" element={null}>
              <Route index element={<DashboardContainerComponent />} />
              <Route path="products" element={null}>
                <Route index element={<ProductsContainerComponent />} />
                <Route path=":id" element={<ProductDetailsContainer />} />
              </Route>
              <Route path="session-creation" element={null}>
                <Route index element={<SessionCreationContainer />} />
              </Route>
              <Route path="*" element={<p>INVALID PATH</p>} />
            </Route>
          </Routes>
        </div>
        <div className="h-60 bg-kriviBlack">
          <FooterComponent />
        </div>
      </div>
    </>
  );
};
