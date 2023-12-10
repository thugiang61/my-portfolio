import { collection, addDoc } from "firebase/firestore";
import { database as db } from "@/firebase/config";
const CONTACTS_COLLECTION = "contacts";

async function addMessage(newData) {
  // console.log(newData);
  // return addDoc(collection(db, CONTACTS_COLLECTION), newData);
  // const docRef =
  await addDoc(collection(db, CONTACTS_COLLECTION), newData);
  // return docRef.id;
}

export { addMessage };
