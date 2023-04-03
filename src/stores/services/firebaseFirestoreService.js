import { db } from "../../config/FirebaseConfig";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";

export const addStations = async (data) => {
  try {
    const docRef = await addDoc(collection(db, "stations"), {
      userId: data.userId,
      type: data.type,
      stationName: data.stationName,
      isDelete: data.isDelete,
      lat: data.lat,
      lon: data.lon,
    });
    console.log("Document written with ID: ", docRef.id);
    return docRef;
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
};

export const getAllStations = async (data) => {
  try {
    let stations = [];
    const getQuery = query(
      collection(db, "stations"),
      where("isDelete", "==", false)
    );
    const querySnapshot = await getDocs(getQuery);
    querySnapshot.forEach((doc) => {
      let dataObj = doc.data();
      dataObj.id = doc.id;
      stations = [...stations, dataObj];
    });
    return stations;
  } catch (e) {
    throw e;
  }
};

export const deleteStations = async (data) => {
  const ref = doc(db, "stations", data.id);
  updateDoc(ref, { isDelete: true })
    .then((docRef) => {
      return true;
    })
    .catch((error) => {
      throw error;
    });
};
