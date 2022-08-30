import app from "./app.js"
import {getFirestore, collection, addDoc} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js";


export async function subscriptionInClub(subscription){
    const db = getFirestore(app);
    const clubeDDCollection = collection(db, 'DandDClub');
    const docRef = await addDoc(clubeDDCollection, subscription);
    return docRef.id;
}