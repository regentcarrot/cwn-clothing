import SHOP_DATA from './shop.data';
import {updateCollections} from './shop.actions'

const INITIAL_STATE= {

collections: null,
isFetching: true,
errorMesssage: undefined

}

const shopReducer = (state= INITIAL_STATE, action)=> {
switch (action.type) {
case 'FETCH_COLLECTIONS_START': 
    return {
        ...state,
        isFetching: true
    }
case 'FETCH_COLLECTIONS_SUCCESS':
    return{
        ...state,
        isFetching: false,
        collections: action.payload

    }
case 'FETCH_COLLECTIONS_FAILURE':
    return {
        ...state,
        isFetching:false,
        erroMessage: action.payload
    }
default: 
return state;


}


}

export default shopReducer;