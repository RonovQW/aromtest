export class Perfume {
    id: number;
    name: string;
    brand: string;
    price: number;

    constructor(id: number, name: string, brand: string, price: number) {
        this.id = id;
        this.name = name;
        this.brand = brand;
        this.price = price;
    }

    getDetails(): string {
        return `${this.name} by ${this.brand} costs $${this.price}`;
    }
}