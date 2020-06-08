import SHOP_DATA from '../shop/shop.data';
import Devs from '../../components/data'


const INITIAL_STATE={


dataCollections:null,
isFetching: true,
errorMesssage: undefined
//     {title:null, 
//     items: []}
// ],

// };
}

const dataReducer= (state=INITIAL_STATE,action)=> {

    switch(action.type) {
    case 'ADD_COLLECTION':
        return {...state,
                dataCollections: [...state.dataCollections,action.payload]};
    case 'DELETE_COLLECTION':
            return  {...state,
        dataCollections:state.dataCollections.filter((item)=> {return item.id!==action.payload })}; 
    case 'EDIT_COLLECTION':
            return {...state,
            dataCollections: state.dataCollections.map((item)=>{
    
            if(item.id===action.id) {
                return {...item,...action.updates}
    
            }else {
                return item;
            }
            })}
    case 'FETCH_DATA_START': 
        return {
            ...state,
            isFetching: true
        }
    case 'FETCH_DATA_SUCCESS':
        return {...state, 
            isFetching: false,
            dataCollections: action.payload};
    case 'FETCH_DATA_FAILURE':
            return {
                    ...state,
                    isFetching:false,
                    erroMessage: action.payload
                }
  
    default:
    return state;
    
    }
    
    
    
    };

    export default dataReducer;
