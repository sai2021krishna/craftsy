export type ScreenTypes = 'DASHBOARD' | 'PRODUCTS' | 'PRODUCTDETAILS' | 'CONTACTUS';

export type Screen = {
  activeScreen: ScreenTypes;
  setActiveScreen: (screenType: ScreenTypes) => void;
  resetScreen: () => void;
}

export type Categories = {

};

export type CategoryProducts = {

}

export type ProductDetails = {
  
}