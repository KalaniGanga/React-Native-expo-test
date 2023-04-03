import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../config/FirebaseConfig";

export const login = ({ email, password }) => {
  return new Promise((resolve, reject) => {
    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("Logged in with:", user.email);
          resolve(user);
        })
        .catch((error) => {
          reject(error.code);
        });
    } else {
      return reject(new Error(VALIDATION_ERROR));
    }
  });
};

export const logout = () => {
  return new Promise((resolve, reject) => {
    signOut(auth)
      .then(() => {
        resolve("success");
      })
      .catch((error) => {
        reject(error);
      });
  });
};
