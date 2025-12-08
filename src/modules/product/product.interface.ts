export interface ProductInterface{
    _id?: string,
    name: string,
    description: string,
    price: number,
    cost: number,
    warehouseId: string,
    categoryId?: string,
    imageUrl?: string,
    variants?: []
}