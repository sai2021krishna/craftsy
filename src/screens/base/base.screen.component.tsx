import React from "react";
import { getAllCategories } from "../../services";
import { LoaderComponent } from "../components/loader.component";
import { NavbarComponent } from "../components/navbar.component";
import { DashboardContainerComponent } from "../containers/dashboard.container.component";
import { useKriviStore } from "../infra/store/store";

export const BaseScreenComponent: React.FC<any> = () => {
  const { activeScreen } = useKriviStore((state) => state.screenDetails);
  
  const { categories } = useKriviStore((state) => state.catDetails);
  const { setCategories } = useKriviStore.getState();

  const getAndSetCategories = async () => {
    const categoriesResponse = await getAllCategories();
    if (categoriesResponse.length) {
      setCategories(categoriesResponse);
    }
  };
  if (!categories.length) {
    console.log(categories.length)
    getAndSetCategories();
  }

  return (
    <>
      <div className="h-full">
        <NavbarComponent />
        {!categories.length ? <LoaderComponent />: activeScreen === "DASHBOARD" && <DashboardContainerComponent /> }
      </div>
    </>
  );
};
