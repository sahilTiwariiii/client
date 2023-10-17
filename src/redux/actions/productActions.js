import *as actionTypes from '../constants/productConstants'
import axios from "axios"
export const getProducts = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`/products`);
        dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: error.response });
    }
};