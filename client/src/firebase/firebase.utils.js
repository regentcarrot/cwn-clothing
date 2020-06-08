import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCvxXL5ZUrD-Rsd6EbjsgcWiyRVWW9cbt0",
    authDomain: "psshop-d0af7.firebaseapp.com",
    databaseURL: "https://psshop-d0af7.firebaseio.com",
    projectId: "psshop-d0af7",
    storageBucket: "psshop-d0af7.appspot.com",
    messagingSenderId: "587538148768",
    appId: "1:587538148768:web:a5150e2fed3ea2517908c5",
    measurementId: "G-KMJYW27M5D"
  };

  export const createUserProfileDocument= async(userAuth, additionalData)=>{

if(!userAuth) return;

const userRef= firestore.doc(`users/${userAuth.uid}`)

const snapShot= await userRef.get();

console.log(snapShot)

if (!snapShot.exists) {

    const {email, displayName}= userAuth;
    const createdAt= new Date();

try {
    await userRef.set({
        displayName,
        email, 
        createdAt,
        ...additionalData
    })
}     
catch(error){console.log('error ceating user', error.message)}

}

return userRef;
  }

  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd)=> {

const collectionRef= firestore.collection(collectionKey);

console.log(collectionRef)

const batch= firestore.batch();
objectsToAdd.forEach(obj=> {
const newDocRef= collectionRef.doc();
batch.set(newDocRef, obj)


})

return await batch.commit()
  }

 export const convertCollectionSnapshotToMap=(collections )=> {

const transformedCollection = collections.docs.map(doc=> {

    
 
   

      const {title, items}= doc.data(); 
      
    return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
    }
  
  
  
})

console.log(transformedCollection)
const filterTC= transformedCollection.filter((collections)=> collections.items.length>0);
console.log(filterTC)

return filterTC.reduce((accumulator, currentCollection)=> {

   accumulator[currentCollection.title.toLowerCase()]= currentCollection;

   return accumulator

}, {})
console.log(transformedCollection)


  }


  export const adminCollection= (collections)=> {

    const transform= collections.docs.map(doc=> {

      const things= doc.data().items

      // const {title, items}= doc.data(); 
  

      // return {title, 
      // items}
   
      return things
  
  })


  const flat = transform.reduce((total, amount) => {
    return total.concat(amount);
  }, []);

  return flat
  console.log(transform)

  }
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore= firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoogle=()=> auth.signInWithPopup(provider);


  export default firebase;