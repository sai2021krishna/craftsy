export const generateMdXl2XlClasses = (baseClass: string) => {
  let generatedClass = baseClass;
  if (baseClass) {
    generatedClass = `md:${baseClass} xl:${baseClass} 2xl:${baseClass}`;
  }
  return generatedClass;
};
