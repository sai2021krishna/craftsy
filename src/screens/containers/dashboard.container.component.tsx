import { CategoryComponent } from "../components/category.component";
import { useKriviStore } from "../infra/store/store";

export const DashboardContainerComponent = () => {
  const { toggleLoaderActive } = useKriviStore.getState();
  const { categories } = useKriviStore((state) => state.catDetails);

  return (
    <>
      {categories.length && (
        <div className="p-5 h-full w-full">
          {categories.map((category) => {
            return (
              <div className="h-1/2 mb-5">
                <CategoryComponent
                  imageName={category.data.imgName}
                  categoryTitle={category.data.name}
                  categoryDescription={category.data.description}
                />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};
