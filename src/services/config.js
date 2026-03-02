
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, getDoc, collection, doc, addDoc, where, query } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "coderhouse-react-2.firebaseapp.com",
  projectId: "coderhouse-react-2",
  storageBucket: "coderhouse-react-2.firebasestorage.app",
  messagingSenderId: "756100255936",
  appId: "1:756100255936:web:c96c51c846f21a21ab1d25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

async function subirProductos() {
  
  try {

    for (const item of items){
      await addDoc(collection(db, "productos"), item);
    }
  }
  catch(error){
    throw new Error("Error, no se pudieron subir los archivos:");
  }

}

export async function getAllProducts(){

  const querySnapshot = await getDocs(collection(db, "productos"));

  const productos = querySnapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id
  }))

  return productos;

}

export async function getProductsByCategory(category){

  const querySnapshot = await getDocs(query(collection(db, "productos"), where("category", "==", category)));

  const productos = querySnapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id
  }))

  return productos;
    
}

export async function getSingleProduct(id){

  const querySnapshot = await getDoc(doc(db, "productos", id.toString()));

  if (querySnapshot.exists()) {

    return {
      id: querySnapshot.id,
      ...querySnapshot.data()
    };
  } else {
    throw new Error("El Producto No Existe");
  }

}

export async function addNewOrder(order){

  return addDoc(collection(db, "ordenes"), order);

}

//Cargando Categorias:

import imgMuebles from "../assets/muebles.svg"
import imgMesas from "../assets/mesas.svg"
import imgLamparas from "../assets/lamparas-1.svg"
import imgAdornos from "../assets/adornos.svg"

const categoryImages = {
  muebles: imgMuebles,
  mesas: imgMesas,
  lamparas: imgLamparas,
  adornos: imgAdornos
}

export async function getCategories(){

  const querySnapshot = await getDocs(collection(db, "categorias"));

  const categorias = querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
    img: categoryImages[doc.data().name]
  }))

  return categorias;

}