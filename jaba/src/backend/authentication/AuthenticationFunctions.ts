import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, deleteUser } from "firebase/auth";


const auth = getAuth();
const user = auth.currentUser;
const listOfUsers = [];


export function createUser(email: string, password: string){
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    console.log("You have successfully created an account! ");
    const user = userCredential.user;
    listOfUsers.push(user);
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    // ..
  })





}


export function signInUser( email:string, password:string){
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => { 
    const user = userCredential.user;
    console.log("you have successfully signed in!");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("Your Email/Password is incorrect!");
    console.group(errorCode)
  });

}






export function removeAUser(user: any){

  deleteUser(user).then(() => {
    console.log("successfully deleted user");
  }).catch((error) => {
    // An error ocurred
    // ...
  });

}









  