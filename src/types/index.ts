export interface PerfumeType {
    id: number;
    name: string;
    brand: string;
    price: number;
    description?: string;
    volume?: number; // in ml
}

export interface UserType {
    id: number;
    username: string;
    firstName?: string;
    lastName?: string;
}

export interface OrderType {
    id: number;
    userId: number;
    perfumeId: number;
    quantity: number;
    orderDate: Date;
}