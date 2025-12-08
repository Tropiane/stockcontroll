export interface ProductInterface{
    name: string,
    description: string,
    price: number,
    cost: number,
    warehouseId: string,
    categoryId?: string,
    imageUrl?: string,
    variants?: []
}