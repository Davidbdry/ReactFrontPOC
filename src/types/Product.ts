export interface Product {
    id: number;
    slug: string;
    name: string;
    description: string;
    variants: string[]; // 🔥 Teraz to tablica URL-i, a nie pełne obiekty!
    images: Image[];
}

// 🔹 Nowy interfejs dla szczegółów wariantu
export interface ProductVariantDetails {
    id: number;
    price: number;
    code: string;
}

export interface Image {
    id: number;
    path: string;
}
