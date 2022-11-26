export interface IProductCard{
    id: Number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: IRating,
    inStock: boolean,
    qty: number
}

 export interface IRating{
    rate: number,
    count: number
}

export enum ICategoty{
    MEN = 'men',
    WOMAN = 'woman',
    JEWELRY = 'jewelry'
}