import {
    collection,
    doc,
    addDoc,
    getDocs,
    getDoc,
} from 'firebase/firestore';
import { db } from '../config/firebase';
import { type TestObject, type TestObjectData, TestType } from '../models/TestObject';
import { type TestUser, type TestUserData } from '../models/TestUser';

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

export function getTestUsers(): Promise<TestUser[]> {
  const testCollectionRef = collection(db, 'users');
  return new Promise((resolve, reject) => {
    getDocs(testCollectionRef).then((snapshot) => {
      const allTestUsers: TestUser[] = [];
      snapshot.docs.map((doc) => {
        let testUser: TestUser = doc.data() as TestUser;
        testUser.id = doc.id;
        allTestUsers.push(testUser);
      });
      resolve(allTestUsers);
    }).catch((e) => {
      reject(e);
    });
  });
}

export function addSampleTestUser(): Promise<TestUser> { 
  const testUserData: TestUserData = {
    address: "",
    admin: false,
    agency: "",
    email: "test@testemail.com",
    name: "a doe",
    phone: "12345678900",
    title: ""
  };
  
  return new Promise((resolve, reject) => {
    addDoc(collection(db, 'users'), testUserData)
      .then((docRef) => {
        let testUsr:TestUser = testUserData as TestUser;
        testUsr.id = docRef.id;
        resolve(testUsr);
      })
      .catch((e) => {
        reject(e);
      });
  });
}

export function addUser(testUserData: TestUserData): Promise<string> {
  return new Promise((resolve, reject) => {
    
    addDoc(collection(db, 'users'), testUserData)
      .then((docRef) => {
        resolve(docRef.id);
      })
      .catch((e) => {
        reject(e);
      });
  });
}