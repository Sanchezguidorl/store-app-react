import { useEffect, useState } from "react";
import { ErrorNetwork } from "../errors/Errors";
import axios from "axios";
export const useGetProducts=()=>{

    const [productsData, setProductsData]= useState(null);
    const [loading, setLoading]= useState(true);
    const [error, setError]= useState(null);
useEffect(()=>{
const getProducts=async()=>{
    try {
        const response = await axios.get(
          "https://fakestoreapi.com/products"
        );
        if (!response.status=== 200) {
          throw new Error('Error al obtener los productos');
        }
        setProductsData(response.data);
        setLoading(false)
      } catch (error) {
        setError(<ErrorNetwork/>)
        setLoading(false)
      }
}
getProducts()
},[])

        return {loading, productsData, error};

}

export const usePagination=(data, currentPage,category)=>{
  let pages=[];
  let products='';

if(data){
  if(category && category!=='All'){
    data= data.filter((product)=> category.includes(product.category))
  }
  const pageLimit= 8;
  const firstIndex= (currentPage-1)*pageLimit;
  const endIndex= firstIndex+pageLimit;
  const pagesLength=Math.floor(data.length/pageLimit + (data.length%pageLimit===0 ? 0 : 1));
  pages= Array.from({length:pagesLength}, (_, index)=> index+1);
  products=data.slice(firstIndex,endIndex);
}
return {products, pages};
}