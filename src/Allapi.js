import commonAPI from "./commonAPI"
import SERVER_URL from "./SERVER_URL"


export const registerUserAPI=async(reqBody)=>{
    return await commonAPI('POST',`${SERVER_URL}/register`,reqBody)
}
export const loginUserAPI=async(reqBody)=>{
    return await commonAPI('POST',`${SERVER_URL}/login`,reqBody)
}
export const addProductAPI=async(reqBody,reqHeader)=>{
    return await commonAPI('POST',`${SERVER_URL}/add-product`,reqBody,reqHeader)
 
}
export const getProductAPI=async(searchKey)=>{
    return await commonAPI('GET',`${SERVER_URL}/get-product?search=${searchKey}`,{})
 
}
export const getOneProductAPI=async(id)=>{
    return await commonAPI('GET',`${SERVER_URL}/getOne-product/${id}`,{})
 
}
export const deleteProductAPI=async(id,reqHeader)=>{
    return await commonAPI('DELETE',`${SERVER_URL}/deleteProduct/${id}`,{},reqHeader)
 
}