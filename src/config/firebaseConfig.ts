import {initializeApp, cert} from "firebase-admin/app"
import {getFirestore} from "firebase-admin/firestore"
import {getAuth} from "firebase-admin/auth"

const app = initializeApp({
  credential: cert("service-account.json")
})
const db = getFirestore()
const auth = getAuth(app)

export default {db: db, auth: auth}