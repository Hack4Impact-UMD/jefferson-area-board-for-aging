import {
    collection,
    doc,
    addDoc,
    getDocs,
    getDoc,
} from 'firebase/firestore';
import { db } from '../config/firebase';
import { type TestObject, type TestObjectData, TestType } from '../models/TestObject';
import { type Resource, type ResourceData, ServiceType} from '../models/ResourceObject'
import { type User, type UserData } from '../models/User';

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

// get data from resources database
export function getResourceObjects(): Promise<Resource[]> {
  const resourceCollectionRef = collection(db, 'resources');
  return new Promise((resolve, reject) => {
    getDocs(resourceCollectionRef).then((snapshot) => {
      const allResourceObjects: Resource[] = [];
      snapshot.docs.map((doc) => {
        let resourceObject: Resource = doc.data() as Resource;
        resourceObject.id = doc.id;
        allResourceObjects.push(resourceObject);
      });
      resolve(allResourceObjects);
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

export function getUsers(): Promise<User[]> {
  return new Promise((resolve, reject) => {
    getDocs(collection(db, 'users')).then((snapshot) => {
      const allUsers: User[] = [];
      snapshot.docs.map((doc) => {
        let user: User = doc.data() as User;
        user.id = doc.id;
        allUsers.push(user);
      });
      resolve(allUsers);
    }).catch((e) => {
      reject(e);
    });
  });
}

export function addSampleUser(): Promise<User> { 
  const userData: UserData = {
    address: "college park",
    admin: false,
    agency: "a1",
    email: "test@testemail.com",
    name: "a doe",
    phone: "12345678900",
    title: "dr."
  };
  
  return new Promise((resolve, reject) => {
    addDoc(collection(db, 'users'), userData)
      .then((docRef) => {
        let usr:User = userData as User;
        usr.id = docRef.id;
        resolve(usr);
      })
      .catch((e) => {
        reject(e);
      });
  });
}

export function addUser(userData: UserData): Promise<string> {
  return new Promise((resolve, reject) => {
    addDoc(collection(db, 'users'), userData)
      .then((docRef) => {
        resolve(docRef.id);
      })
      .catch((e) => {
        reject(e);
      });
  });
}