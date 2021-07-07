import { 
    GET_DATA_PRODUCTS_ONE_BEGIN,
    GET_DATA_PRODUCTS_ONE_SUCCESS,
    GET_DATA_PRODUCTS_ONE_FAIL
} from '../helpers/actionTypes'

const initialState = {
    loading: false,
    error: null,
    products: []
}

const productsDataOne = (state = initialState, action) => {
    const { type, payload, error } = action;
    switch(type) {
        default:
            return {
                ...state
            };

        case GET_DATA_PRODUCTS_ONE_BEGIN:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case GET_DATA_PRODUCTS_ONE_SUCCESS:
            return {
                ...state,
                error: null,
                products: payload
            };
        case GET_DATA_PRODUCTS_ONE_FAIL:
            return {
                ...state,
                loading: false,
                error: error,
                products: []
            }
    }
}

export default productsDataOne;