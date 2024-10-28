import axios from "axios";

const apiKey = process.env.NEXT_PUBLIC_REST_API_KEY

const apiUrl = "http://localhost:1337"


export const axiosInstance = axios.create({
    baseURL: apiUrl,
    headers:{
        Authorization: `Bearer ${apiKey}`
    }
});
