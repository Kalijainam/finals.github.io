// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import{ initializeApp} from 'firebase/app'
import{
    getFirestore,collection,onSnapshot,onSnapshotsInSync,
    addDoc,deleteDoc,doc,
    query,where
}from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBJW5RHvUSk633apI8Db-L9JMH3ohpyeWk",
    authDomain: "fir-testing-889be.firebaseapp.com",
    projectId: "fir-testing-889be",
    storageBucket: "fir-testing-889be.appspot.com",
    messagingSenderId: "255805015412",
    appId: "1:255805015412:web:a687dcf78c032473a4d821",
    measurementId: "G-04NHWSW3Q4"
  };

  // init firebase  app
  initializeApp(firebaseConfig)
  // init sevices
  const db=getFirestore()
  // collection ref
  const colRef = collection(db,'books')


//get real time collection data
onSnapshot(colRef,(snapshot)=>{
let books=[]
    snapshot.docs.forEach((doc)=>{
       books.push({...doc.data(), id: doc.id})
    })
    console.log(books)
})
   //adding documents
   const addBookForm=document.querySelector('.add')
   addBookForm.addEventListener('submit',(e) =>{
    e.preventDefault()

    addDoc(colRef,{
        title: addBookForm.title.value,
        author: addBookForm.author.value,
        username:addBookForm.username.value
    })
    .then(() => {
        addBookForm.reset()
    })
   })


   //deleting documents
   const deleteBookForm =document.querySelector('.delete')
   deleteBookForm.addEventListener('submit',(e)=>{
    e.preventDefault()

    const docRef=doc(db,'books',deleteBookForm.id.value)
    deleteDoc(docRef)
    .then(()=>{
        deleteBookForm.reset()
    })
   })
