import {
    collection,
    doc,
    addDoc,
    getDocs,
    getDoc,
} from 'firebase/firestore';
import { db } from '../config/firebase';
import { type TestObject, type TestObjectData, TestType } from '../models/TestObject';
import { type Resource, type ResourceData} from '../models/ResourceObject'

// demo
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

// demo
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

// demo
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

// demo
// export function addSampleResource(): Promise<Resource> {
//   const sampleResourceData: ResourceData = {
//     name: "Sample Resource",
//     phone: "9876543210",
//     category: ServiceType.type1,
//     city: "Sample City",
//     state: "Sample State",
//     zip: 12345
//   };

//   return new Promise((resolve, reject) => {
//     addDoc(collection(db, 'resources'), sampleResourceData)
//       .then((docRef) => {
//         let sampleResource: Resource = {
//           ...sampleResourceData,
//           id: docRef.id
//         };
//         resolve(sampleResource);
//       })
//       .catch((e) => {
//         reject(e);
//       });
//   });
// }

// Function to add a resource
export function addResource(resourceData: ResourceData): Promise<string> {
  return new Promise((resolve, reject) => {
    addDoc(collection(db, 'resources'), resourceData)
      .then((docRef) => {
        resolve(docRef.id);
      })
      .catch((e) => {
        reject(e);
      });
  });
}