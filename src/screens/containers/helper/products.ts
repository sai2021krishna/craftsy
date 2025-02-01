import { ProductInfo } from "../../infra/models/product-details.model";

export const products: ProductInfo[] = [
    {
      id: 1,
      name: "Lights will Guide You Home",
      description: `A scented candle inspired by Coldplay's Fix you.
              \n
              100% Soy wax.
              \n
              Hand-poured with Love.`,
      listPrice: "700.00",
      salePrice: "650.00",
      isSaleActive: true,
      pictures: ['coldplay-candle.jpeg'],
      altText: ''
    },
    {
      id: 2,
      name: "Espresso Short",
      description: `A scented candle inspired by Sabrina Crapenter.
              <br />
              100% Soy wax.
              <br />
              Hand-poured with Love.`,
      listPrice: "635.00",
      salePrice: "585.00",
      isSaleActive: true,
      pictures: ['espresso-short.jpeg'],
      altText: ''
    },
    {
      id: 3,
      name: "Sunny Blossom",
      description: `Warmth of sun in the shape of a blossom.
              <br />
              100% Soy wax candle.
              <br />
              Hand-poured with Love in cinnamon vanilla fragrance.`,
      listPrice: "585.00",
      salePrice: "550.00",
      isSaleActive: true,
      pictures: ['sunny-blossom.jpeg'],
      altText: ''
    },
    {
      id: 4,
      name: "Woodland Blues",
      description: `A scented soy wax candle poured with love in a hand crafted wooden doe.`,
      listPrice: "800.00",
      salePrice: "750.00",
      isSaleActive: true,
      linkedProductsId: [9],
      pictures: ['woodland-blues.jpeg'],
      altText: ''
    },
    {
      id: 5,
      name: "Cinnamon Coffee",
      description: `Cinnamon Coffee in a hand crafted wooden doe.`,
      listPrice: "700.00",
      salePrice: "650.00",
      isSaleActive: true,
      pictures: ['cinnamon-coffee.jpeg'],
      altText: ''
    },
    {
      id: 6,
      name: "Baby Shower Package",
      description: `Package for baby shower`,
      listPrice: "1300.00",
      salePrice: "1200.00",
      isSaleActive: true,
      linkedProductsId: [7,8],
      pictures: ['baby-shower-package.jpeg'],
      altText: ''
    },
    {
      id: 7,
      name: "Baby Shower - Boy",
      description: `Baby Shower Boy`,
      listPrice: "700.00",
      salePrice: "650.00",
      isSaleActive: true,
      linkedProductsId: [6,8],
      pictures: ['baby-shower-blue.jpeg'],
      altText: ''
    },
    {
      id: 8,
      name: "Baby Shower - Girl",
      description: `Baby Shower Girl`,
      listPrice: "700.00",
      salePrice: "650.00",
      isSaleActive: true,
      linkedProductsId: [6,7],
      pictures: ['baby-shower-pink.jpeg'],
      altText: ''
    },
    {
      id: 9,
      name: "Woodland love",
      description: `A scented soy wax candle poured with love in a hand crafted wooden doe.`,
      listPrice: "800.00",
      salePrice: "750.00",
      isSaleActive: true,
      linkedProductsId: [4],
      pictures: ['woodland-blues-love.jpeg'],
      altText: ''
    },
    {
      id: 10,
      name: "Krivi's love package",
      description: `krivi's love package`,
      listPrice: "1600.00",
      salePrice: "1499.00",
      linkedProductsId: [11,12,13],
      isSaleActive: true,
      pictures: ['love-package.jpeg'],
      altText: ''
    },
    {
      id: 11,
      name: "Lovers Bar",
      description: `love pillar candle`,
      listPrice: "600.00",
      salePrice: "550.00",
      isSaleActive: true,
      linkedProductsId: [10,12,13],
      pictures: ['love-pillar.jpeg'],
      altText: ''
    },
    {
      id: 12,
      name: "Kisses in a Jar",
      description: `Kisses in a Jar`,
      listPrice: "700.00",
      salePrice: "650.00",
      isSaleActive: true,
      linkedProductsId: [10,11,13],
      pictures: ['kisses-in-a-jar.jpeg'],
      altText: ''
    },
    {
      id: 13,
      name: "Heart canvas",
      description: `Heart canvas`,
      listPrice: "300.00",
      salePrice: "250.00",
      isSaleActive: true,
      linkedProductsId: [10,11,12],
      pictures: ['tissue-heart-canvas.jpeg','heart-canvas.jpeg','heart-canvas-packaging.jpeg'],
      altText: ''
    },
    {
      id: 14,
      name: "Mithai platter",
      description: `Mithai platter`,
      listPrice: "700.00",
      salePrice: "650.00",
      isSaleActive: true,
      pictures: ['mithai-platter.jpeg','mitha-platter-2.jpeg'],
      altText: ''
    },
  ];