import axios from 'axios';
import {
    GET_DATA_PRODUCTS_ONE_BEGIN,
    GET_DATA_PRODUCTS_ONE_SUCCESS,
    GET_DATA_PRODUCTS_ONE_FAIL
} from '../helpers/actionTypes';

export const getDataProductsOne = () => dispatch => {


    dispatch({
        type: GET_DATA_PRODUCTS_ONE_BEGIN,
        loading: true,
        error: null
    })
    axios
    .get('https://screening.moduit.id/frontend/web/question/one', {
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then((res) =>
        dispatch({
            type: GET_DATA_PRODUCTS_ONE_SUCCESS,
            loading: false,
            payload: res.data,
            error: null
        })
    )
    .catch((err) =>
        dispatch({
            type: GET_DATA_PRODUCTS_ONE_FAIL,
            loading: false,
            error: err
        })
    )
}