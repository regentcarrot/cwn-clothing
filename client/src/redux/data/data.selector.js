import {createSelector} from 'reselect';

const selectData=state=> state.data;

export const selectDataCollections= createSelector(
[selectData], 
data=> data.dataCollections


)

export const selectDataForPreview = createSelector(
[selectDataCollections],
dataCollections=>
dataCollections ? dataCollections: [])
// console.log(Object.keys(SHOP_DATA))
// > Array ["hats", "sneakers", "jackets", "womens", "mens"]


export const dataToDelete= createSelector(
    [selectDataForPreview], 
    data=> data.map(item=> item.items)
    
    
    )

    export const dataToDeleteNested= createSelector(
        [dataToDelete], 
        data=> Object.keys(data).map(key=>data[key])
      
        
     
        )

        export const selectIsDataFetching= createSelector(
            [selectData],
            data=>data.isFetching
            
            )

    export const selectIsDataLoaded= createSelector(
        [selectData],
        data=>(!!data.dataCollections)
        
        )