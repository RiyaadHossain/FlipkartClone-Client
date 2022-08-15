import axiosAPI from "../Helpers/axios";
import { categoryContants } from "./constants";

export const getAllCategory = () => {
    return async dispatch => {
        dispatch({ type: categoryContants.GETALLCATE_REQUEST })
        const res = await axiosAPI.get("category/getCategory")
        if (res.status === 200) {
            dispatch({
                type: categoryContants.GETALLCATE_SUCCESS,
                payload: { message: res.data.categoryList }
            })
        } else {
            dispatch({
                type: categoryContants.GETALLCATE_FAIL,
                payload: { error: res.data.error }
            })
        }
    }
}

export const addCategory = (formData) => {
    return async dispatch => {
        dispatch({ type: categoryContants.ADDCATE_REQUEST })

        const res = await axiosAPI.post("category/addCategory", formData)

        if (res.status === 201) {
            dispatch({ type: categoryContants.ADDCATE_SUCCESS, payload: { category: res.data.category } })
        } else {
            dispatch({ type: categoryContants.ADDCATE_FAIL, payload: { error: res.data.error } })
        }

    }
}