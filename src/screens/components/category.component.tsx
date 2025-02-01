import { ImageComponent } from "./image.component";

export const CategoryComponent = (props: any) => {
  const { imageName, categoryTitle, categoryDescription } = props;
  return (
    <div className="h-full w-full md:flex xl:flex 2xl:flex bg-kriviSecondary cursor:auto borders-none rounded-xl active:text-krivyBlack active:-translate-y-1 active:scale-120 md:hover:text-krivyBlack xl:hover:text-krivyBlack 2xl:hover:text-krivyBlack md:hover:-translate-y-1 xl:hover:-translate-y-1 2xl:hover:-translate-y-1 md:hover:scale-120 xl:hover:scale-120 2xl:hover:scale-120 duration-500">
      <div
        className={`h-1/2  md:h-full xl:h-full 2xl:h-full md:w-1/2 xl:w-1/2 2xl:w-1/2 flex justify-center items-center p-2`}
      >
        <ImageComponent
          src={imageName}
          classes="h-full w-full object-center mix-blend-darken border-none rounded-xl"
          altText={`${imageName}`}
        />
      </div>
      <div className="h-1/2 md:h-full xl:h-full 2xl:h-full md:w-1/2 xl:w-1/2 2xl:w-1/2 p-5 m-auto">
        <p className="text-kriviContrast text-6xl md:text-9xl xl:text-9xl 2xl:text-9xl font-kriviMPlus1PFont flex justify-center md:justify-start xl:justify-start 2xl:justify-start">
          {categoryTitle ?? "Category Title"}
        </p>
        <p className="text-kriviContrast text-2xl md:text-5xl xl:text-5xl 2xl:text-5xl font-kriviTangerineFont flex justify-center text-center md:justify-end xl:justify-end 2xl:justify-end">
          {categoryDescription ?? "This is a Category Description"}
        </p>
      </div>
    </div>
  );
};
