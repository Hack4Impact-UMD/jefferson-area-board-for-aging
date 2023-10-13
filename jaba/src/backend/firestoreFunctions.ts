import {
    collection,
    doc,
    addDoc,
    getDocs,
    getDoc,
} from 'firebase/firestore';
import { db } from '../config/firebase';
import { type TestObject, type TestObjectData, TestType } from '../models/TestObject';

export function getTestObjects(): Promise<TestObject[]> {
  const testCollectionRef = collection(db, 'testCollection');
  return new Promise((resolve, reject) => {
    getDocs(testCollectionRef).then((snapshot) => {
      const allTestObjects: TestObject[] = [];
      snapshot.docs.map((doc) => {
        let testObject: TestObject = doc.data() as TestObject;
        testObject.id = doc.id;
        allTestObjects.push(testObject);
      });
      resolve(allTestObjects);
    }).catch((e) => {
      reject(e);
    });
  });
}
  
export function getTestObject(id: string): Promise<TestObject> {
    return new Promise((resolve, reject) => {
      getDoc(doc(db, 'testCollection', id))
        .then((snapshot) => {
          if (snapshot.exists()) {
            resolve(snapshot.data() as TestObject);
          } else {
            reject(new Error('Test Object does not exist'));
          }
        })
        .catch((e) => {
          reject(e);
        });
    });
}
  
export function addTestObject(testObjectData: TestObjectData): Promise<string> {
    return new Promise((resolve, reject) => {
      
      addDoc(collection(db, 'testCollection'), testObjectData)
        .then((docRef) => {
          resolve(docRef.id);
        })
        .catch((e) => {
          reject(e);
        });
    });
}

export function addSampleTestObject(): Promise<TestObject> {
  const testObjData: TestObjectData = {
    testField1: "sampleVal",
    testField2: 10,
    testField3: true,
    testField4: TestType.type3,
  };

  return new Promise((resolve, reject) => {
    addDoc(collection(db, 'testCollection'), testObjData)
      .then((docRef) => {
        let testObj:TestObject = testObjData as TestObject;
        testObj.id = docRef.id;
        resolve(testObj);
      })
      .catch((e) => {
        reject(e);
      });
  });
}

/* TODO: 
  * double check input params
  * should i return anything?
  * adding users one at a time or via a list? 
  * should i create a User.ts file? what would that include?
  * should i include checks for the email address? (ends in .XXX; has an "@" symbol, has text before the "@")
  * what is promise?
  * make is similar to addSampleTestObject(): Promise<TestObject> ?
*/
export function addNewUser(emailAddress: string) { 
  const usersRef = collection(db, 'users');

  const userData = {
    email: emailAddress
  };
  
  addDoc(usersRef, userData);
}