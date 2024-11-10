export type ProductData = {
    category: string;
    container?: string;
    description: string;
    name: string;
    price: string;
    scent?: string;
    scented?: string;
}

export type Product = {
    id: string;
    data: ProductData;
}