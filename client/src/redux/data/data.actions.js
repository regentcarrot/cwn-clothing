import {firestore, adminCollection} from '../../firebase/firebase.utils'
import {v4 as uuidv4 }from 'uuid';

export const addCollection=item=> ({
type: 'ADD_COLLECTION',
payload: item


})

export const deleteCollection=item=> (

    {
type: 'DELETE_COLLECTION',
payload: item

})


export const editCollection=(id, updates)=> (

    {
type: 'EDIT_COLLECTION',
id,
updates

})

export const fetchCategory=item=> ({
    type: 'FETCH_CATEGORY',
    payload: item
    
    
    })


export const addItemSuccess= (item)=> {
return dispatch => {

const collectionRef= firestore.collection('collections')
const {category,id=uuidv4(), imageUrl, name, price, size, inventory } = item;
const myItem = {category,id, imageUrl, name, price, size, inventory };

collectionRef.add(
    
    {title:category,
    items: [{
        id, reff:'pending', imageUrl,name,price,size,inventory
    }]


}).then((docRef)=>{

    var washingtonRef = firestore.collection("collections").doc(`${docRef.id}`); 
    
    washingtonRef.set(
        {
title:category,
items: [{id, reff:docRef.id,imageUrl,name,price,size,inventory, title:category}] }

).then(()=>dispatch(addCollection(myItem)))


    

})
}

}


export const addField= (item)=> {
    return dispatch => {

        const db= firestore.collection('collections');
        
        const {category, id=uuidv4(), imageUrl, name, price, size, inventory } = item;

       
db.get()
.then((snapshot)=>{

 

    const collectionsMap=  adminCollection(snapshot)

    const getCat= collectionsMap.filter((collectionItem)=>collectionItem.title===category);
    const myRef= getCat[0].reff

    console.log(myRef)

    const collectionRef= firestore.collection('collections').doc(`${myRef}`)
    collectionRef.get().then(snapshot => { 

        const {title, items}= snapshot.data();

        collectionRef.set(
            {
title:category,
items: [...items, {id,imageUrl,name,price,size,inventory, title:category, reff:myRef, }] }

).then((docRef)=>{
    const itemData= {category, id, imageUrl, name, price, size, inventory, reff:myRef}
   dispatch(addCollection(itemData));
 
})



       })

})
        // const test = firestore.collection('collections')

    //    test.get()
    //     .then((snapshot)=>{
        
    //       snapshot.forEach(doc=> {
        
        
    //         console.log(doc.id)
    //         })

    //     })

    // const collectionRef= firestore.collection('collections')
    
   {/* const collectionRef= firestore.collection('collections').doc('9U2fsA2ptGeIqI8p0owO');
    

    collectionRef.get().then(snapshot => { 

    const {title, items}= snapshot.data();*/}
      
// const colId= collectionRef.doc();
     {/*   collectionRef.set(
             {
title:category,
items: [...items, {id,imageUrl,name,price,size,inventory }] }

).then((docRef)=>{
    dispatch(addCollection(item));
    // console.log(docRef.id)
})



        })*/}


    }
   
    }


    //fetch data

    export const fetchDataStart = ()=>({
        type: 'FETCH_DATA_START',
        
        })
        
        
        export const fetchDataSuccess = (collectionsMap)=>({
            type: 'FETCH_DATA_SUCCESS',
            payload: collectionsMap
            
            })
        
        export const fetchDataFailure = (errorMessage)=>({
                type: 'FETCH_DATA_FAILURE',
                payload: errorMessage
                
                })
        


    export const fetchCategorySuccess=()=> {

return (dispatch)=> {
const db= firestore.collection('collections');
dispatch(fetchDataStart());
db.get()
.then((snapshot)=>{

 

    const collectionsMap=  adminCollection(snapshot)

    dispatch(fetchDataSuccess(collectionsMap))

    
 


 

console.log(collectionsMap)

    
}).catch(error=> dispatch(fetchDataFailure(error.message)))
}
}

export const deleteCollectionSuccess=(id,reff)=> {

 return (dispatch)=> {
// const {id, imageUrl, name, price, size, reff, inventory, uuid, title}= item
    // const {category,id, imageUrl, name, price, size, inventory} = item;
    const db= firestore.collection('collections').doc(`${reff}`);
    db.get()
    .then((snapshot)=>{
    
        console.log(snapshot.data())
     db.update({

    items:snapshot.data().items.filter(item=>item.id!==id)

     }).then(()=>
     dispatch(deleteCollection(id))) 
    //  db.get().then((snapshot2)=>{

    //     const {title, items}= snapshot2.data();

    //     db.set({
    //         title,
    //         items: [...items, dummy]

//         })
// console.log(snapshot2.data())
    //  })
     
      
    //  console.log(snapshot)
    
        // console.log (doc.id, " => ", doc.data())
      
    
        // const collection = snapshot.docs.map(doc=> {
    
        //     const items= doc.id.data(); 
        
        //     return items
               
            
        
        // })
    
        // console.log(items)
        
    })




 }
}
    


export const updateCollectionSuccess=(updates)=> {

    return (dispatch)=> {


   const { id, reff, imageUrl, name, price, size, inventory, title }= updates


 
       const db= firestore.collection('collections').doc(`${reff}`);
       db.get()
       .then((snapshot)=>{
       
        console.log(snapshot.data())
        dispatch(editCollection(id, updates))
        db.update({
   
       items:snapshot.data().items.filter(item=>item.id!==id)
   
        }).then(()=>
        dispatch(editCollection(id, updates))) 
        db.get().then((snapshot2)=>{
   
           const {title, items}= snapshot2.data();
   
           db.set({
               title,
               items: [...items, updates]
   
           })
   console.log(snapshot2.data())
        })
        
           
       })
   
   
   
   
    }
   }
    

   export const updateInventorySuccess=(updates)=> {

    return (dispatch)=> {


   const {id, imageUrl, name, price, size, inventory, quantity, title, reff}= updates

   const updatedInventory= (inventory-quantity);
 
       const db= firestore.collection('collections').doc(`${reff}`);
       db.get()
       .then((snapshot)=>{
       
        console.log(snapshot.data())
        // dispatch(editCollection(id, updates))
        db.update({
   
       items:snapshot.data().items.filter(item=>item.id!==id)
   
        }).then(()=>
        dispatch(editCollection(id, updates))) 
        db.get().then((snapshot2)=>{
   
           const {title, items}= snapshot2.data();
   
           db.set({
               title,
               items: [...items, {id, imageUrl, name, price, size, inventory:updatedInventory, title,  reff}]
   
           })
   console.log(snapshot2.data())
        })
        
           
       })
   
   
   
   
    }
   }
    

   export const addOrderSuccess= (product)=> {

return (dispatch, getState)=> {

    const userId = getState().user.currentUser.id;

    const checkoutProduct = product.map((productItem)=>{
        const tempInfo= {time:new Date(), userId}
        const {id, imageUrl, name, price, size, quantity, title, reff}= productItem;
        
        return {...{id, imageUrl, name, price, size, quantity, title, reff},...tempInfo}
        
        })

    // const {id, imageUrl, name, price, size, quantity, title, uuid, reff}= productItem;

    const db= firestore.collection('orders');
    const dbDoc= db.doc(`${userId}`)

    dbDoc.get().then((documentSnapshot)=>{
        if(!documentSnapshot.exists) {
        
            db.doc(`${userId}`).set({
        
                items: checkoutProduct
              })
        console.log(checkoutProduct)
        
            
        
         
        }else {
           
            const {items}= documentSnapshot.data();
            db.doc(`${userId}`).set({
        
                items: [...items, ...checkoutProduct]
              })
        
        }
        
        })


    






}





   }

 