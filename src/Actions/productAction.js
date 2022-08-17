import axiosAPI from "../Helpers/axios"
import { productContants } from "./constants"

export const getAllProduct = (slug) => {
    return async dispatch => {

        dispatch({ type: productContants.GETALL_PRODUCT_REQUEST })

        const res = await axiosAPI.get("/product/getProduct")
        console.log(res.data.products);
        if (res.status === 200) {
            const { products, productByPrice } = res.data
            dispatch({ type: productContants.GETALL_PRODUCT_SUCCESS, payload: { products, productByPrice } })
        } else {
            dispatch({ type: productContants.GETALL_PRODUCT_FAIL })

        }

    }
} 