// Init Firebase to store analytics data
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDzM7n6BDTdeHq1Krp70UKifPU7nQjee0g",
  authDomain: "meltelytics.firebaseapp.com",
  projectId: "meltelytics",
  storageBucket: "meltelytics.appspot.com",
  messagingSenderId: "176282345590",
  appId: "1:176282345590:web:a624e80e2f94b9e0e0bf57"
};

const firebase_app = initializeApp(firebaseConfig);
const db = getFirestore(firebase_app);

const app = {
    id: "",
    views: 0,
    crashes: 0,
};

/**
 * 
 * @param {String} app_id
 */
export default function meltelytics(app_id) {
    app.id = app_id;
    return {
        async init() {
            await fetchDataFromFirebase(app_id);
        },

        viewed() {
            app.views++;
            save();
        },

        crashed() {
            app.crashes++;
            save();
        },
    };
}

async function save() {
    try {
        await setDoc(doc(db, "apps", app.id), app, { merge: true });
        console.log("Data saved to Firestore:", app);
    } catch (e) {
        console.error("Error saving data to Firestore:", e);
    }
}

async function fetchDataFromFirebase(app_id) {
    const docRef = doc(db, "apps", app_id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const data = docSnap.data();
        app.views = data.views;
        app.crashes = data.crashes;
    } else {
        console.log("No such document!");
    }
}
