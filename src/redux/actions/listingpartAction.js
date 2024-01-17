import axios from "axios";
import { PRODUCT_LIST } from "../type";

export const listingpartAction = (searchQuery) => {
    return (dispatch) => {
        return axios.get(`https://fakestoreapi.com/products`)
            .then((res) => {
                if (res?.status === 200) {
                    dispatch({
                        type: PRODUCT_LIST,
                        payload: res.data,
                    });
                }
            })
            .catch((error) => {
                console.error("Error from listingpartAction:", error);
                dispatch({
                    type: PRODUCT_LIST,
                    payload: null,
                });
            });
    };
};

