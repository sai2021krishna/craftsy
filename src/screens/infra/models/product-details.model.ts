export type ProductData = {
    category: string;
    container?: string;
    description: string;
    name: string;
    price: string;
    scent?: string;
    scented?: string;
}

export type ProductInfo = {
    id: number;
    name: string;
    pictures: string[];
    altText: string;
    isSaleActive: boolean;
    listPrice: string;
    salePrice: string;
    description: string;
    linkedProductsId?: number[] | string[];
}