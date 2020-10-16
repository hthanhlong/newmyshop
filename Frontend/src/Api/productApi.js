import axiosClient from "./customAxios"

export const  productApi = {
     getProduct: (id) => {
         return axiosClient.get()
     }



}