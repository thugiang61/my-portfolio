import { collection, addDoc } from "firebase/firestore";
import { database as db } from "@/firebase/config";
const CONTACTS_COLLECTION = "contacts";

async function addMessage(newData) {
  await addDoc(collection(db, CONTACTS_COLLECTION), newData);
}

export { addMessage };
