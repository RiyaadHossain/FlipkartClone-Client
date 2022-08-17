import { productContants } from "../Actions/constants";

const initialState = {}

const productReducer = (state = initialState, action) => {

    switch (action.type) {

        case productContants.GETALL_PRODUCT_SUCCESS:
            const { products, productByPrice } = action.payload
            state = { ...state, products, productByPrice }
            break;

        default:
            break;
    }

    return state
}

export default productReducer