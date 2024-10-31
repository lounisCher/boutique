import { axiosInstance } from "./apiClient"
import { Products } from "./apiProducts";

interface Data{
    data:{
        username:string | null,
        email:string | undefined,
        products:(string | undefined)[],
    }
}


interface CartData{
    data: {
        id: number;
        documentId: string;
        username: string | null;
        email: string | undefined;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        products: [
            p:Products,
        ];
      }[];
}

const addToCart=(data:Data)=>axiosInstance.post('/api/carts', data)

const getUserCartItems=(email:string | undefined)=>axiosInstance.get<CartData>(`/api/carts?populate[products][populate]=banner&filter[email][$eq]=${email}`);

const deleteCartItem=(id:string)=>axiosInstance.delete(`/api/carts/${id}`)


export default{
    addToCart,
    getUserCartItems,
    deleteCartItem
}