import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  NextOrObserver
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  QueryDocumentSnapshot
} from "firebase/firestore";
import { Category } from "../../store/categories/categories.types";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4nwKVPUjfbb7sOjUNAKnU5YECsgHv7Ow",
  authDomain: "crwn-db-55c53.firebaseapp.com",
  projectId: "crwn-db-55c53",
  storageBucket: "crwn-db-55c53.appspot.com",
  messagingSenderId: "289844784258",
  appId: "1:289844784258:web:4af654a2cf165a5fb7989b",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();

//Populate eStore items

export type ObjectToAdd = {
  title: string;
};
export const addCollectionAndDocuments = async <T extends ObjectToAdd>(
  collectionKey: string,
  objectsToAdd: T[]
): Promise<void> => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
};

export const getCategoriesAndDocuments = async (): Promise<Category[]> => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoriesArray = querySnapshot.docs.map(
    (docSnapshot) => docSnapshot.data() as Category
  );

  return categoriesArray;
};

//AUTH

//ad user to db after authentication/sing up

export type AdditionalInformation = {
  displayName?: string;
}

export type UserData = {
  createdAt: Date;
  displayName: string;
  email: string
}

export const createUserDocumentFromAuth = async (
  userAuth: User,
  additionalInformation = {}
): Promise<void | QueryDocumentSnapshot<UserData>> => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error);
    }
  }

  return userSnapshot as QueryDocumentSnapshot<UserData>;
};

//sign-in google
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

//sign-in email password
export const createAuthUserWithEmailAndPassword = async (email: string, password: string) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email: string, password: string) => {
  if (!email || !password) return;

  // try {
    return await signInWithEmailAndPassword(auth, email, password);
  // } catch (error) {
  //   if (error.code === "auth/wrong-password") alert("Wrong passsword ");
  //   else if (error.code === "auth/user-not-found") alert("Wrong passsword ");
  // }
};

//sign-out
export const signOutUser = async () => await signOut(auth);

//track auth state changes
export const onAuthStateChangedListener = (callback: NextOrObserver<User>) => {
  if (callback === null) return;
  onAuthStateChanged(auth, callback);
};

export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};
