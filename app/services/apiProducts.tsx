import { axiosInstance } from "./apiClient"

 interface BannerImage {
    id: number;
    name: string;
    url: string;
    formats: {
        thumbnail: {
            url: string;
        };
        small?: {
            url: string;
        };
    };
}

 interface DescriptionChild {
    type: string;
    text: string;
}

 interface Description {
    type: string;
    children: DescriptionChild[];
}

export interface Products {
    id: number;
    title: string;
    description: Description[];
    price: number;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    banner : BannerImage[];
    category?: string | null;
    instantDelivery?: boolean | null;
    whatsIncluded?: string | null;
}
export interface ProductList{
    data: Products[],
}
export interface ProductResponse {
    data: Products;
}

const getLatestProduct = () =>  axiosInstance.get<ProductList>('/api/products?populate=*');

const getProductById=(id: string)=> axiosInstance.get<ProductResponse>(`/api/products/${id}?populate=*`);

const getProductByCategory=(category: string)=>axiosInstance.get<ProductList>(`/api/products?filters[category][$eq]=${category}&populate=*`)


export default {
    getLatestProduct,
    getProductById,
    getProductByCategory
}