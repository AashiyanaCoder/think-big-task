import { PRODUCT_LIST } from '../type'

const initialState = {
    productList: [],
}

const listingpartReducer = (state = initialState, action) => {
    switch (action.type) {

        case PRODUCT_LIST:
            return {
                ...state,
                productList: action.payload,
                error: null,
            };
        default:
            return state;

    }
}
export default listingpartReducer;