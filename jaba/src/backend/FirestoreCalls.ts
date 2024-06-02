// import {
//   collection,
//   doc,
//   addDoc,
//   deleteDoc,
//   getDocs,
//   getDoc,
//   updateDoc,
//   query,
//   where,
//   runTransaction,
// } from 'firebase/firestore';
// import { db } from '../config/firebase';

// export function basicGetter(): Promise<any[]> {
//   // Add collectionName here
//   const collectionName = ''
//   const collectionRef = collection(db, collectionName);
//   return new Promise((resolve, reject) => {
//     getDocs(collectionRef)
//       .then((snapshot:any) => {
//         const allDocuments:any = [];
//         const documents = snapshot.docs.map((doc:any) => {
//           const document = doc.data();
//           const newStudent = { ...document, id: doc.id };
//           allDocuments.push(newStudent);
//         });
//         resolve(allDocuments);
//       })
//       .catch((error:any) => {
//         reject(error);
//       });
//   });
// }

// export function filteredGetter(): Promise<any[]> {
//   // Add collectionName here
//   const collectionName = ''
//   const collectionRef = query(
//     collection(db, collectionName),
//     /* Toss in conditions here*/
//     where('type', '!=', 'ADMIN'),
//   );
//   return new Promise((resolve, reject) => {
//     getDocs(collectionRef)
//       .then((snapshot:any) => {
//         const allDocuments:any = [];
//         const documents = snapshot.docs.map((doc:any) => {
//           const document = doc.data();
//           const newStudent = { ...document, id: doc.id };
//           allDocuments.push(newStudent);
//         });
//         resolve(allDocuments);
//       })
//       .catch((error:any) => {
//         reject(error);
//       });
//   });
// }

// export function basicSetter(docToAdd:any): Promise<any> {
//   return new Promise((resolve, reject) => {
//     // Add collectionName here
//     const collectionName = ''
//     addDoc(collection(db, collectionName), docToAdd)
//       .then((docRef:any) => {
//         // return id of document added
//         resolve(docRef.id);
//       })
//       .catch((error:any) => {
//         reject(error);
//       });
//   });
// }

// export function basicDeleter(id: string): Promise<void> {
//   return new Promise((resolve, reject) => {
//     // Add collectionName here
//     const collectionName = ''
//     deleteDoc(doc(db, collectionName, id))
//       .then(() => {
//         resolve();
//       })
//       .catch((error:any) => {
//         reject(error);
//       });
//   });
// }

// export function basicUpdater(newDocument: any, id: string): Promise<void> {
//   return new Promise((resolve, reject) => {
//     if (id === '' || !id) {
//       reject(new Error('Invalid id'));
//       return;
//     }
//     /* Add collection name here */
//     const collectionName = ''
//     const collectionRef = doc(db, collectionName, id);
//     updateDoc(collectionRef, { ...newDocument })
//       .then(() => {
//         resolve();
//       })
//       .catch((error:any) => {
//         reject(error);
//       });
//   });
// }

import {
  QueryFilterConstraint,
  addDoc,
  and,
  collection,
  getDocs,
  or,
  query,
  where,
} from "firebase/firestore";
import { db } from "../config/firebase";
import {
  ResourceSearchParam,
  type Resource,
  type ResourceData,
} from "../types/ResourceObject";
import { type User } from "../types/User";

// Get data from resources database
export function getResourceObjects(): Promise<Resource[]> {
  const resourceCollectionRef = collection(db, "resources");
  return new Promise((resolve, reject) => {
    getDocs(resourceCollectionRef)
      .then((snapshot) => {
        const allResourceObjects: Resource[] = [];
        snapshot.docs.map((doc) => {
          let resourceObject: Resource = doc.data() as Resource;
          resourceObject.id = doc.id;
          allResourceObjects.push(resourceObject);
        });
        resolve(allResourceObjects);
      })
      .catch((e) => {
        reject(e);
      });
  });
}

// Function to add a resource
export function addResourceObject(
  resourceData: ResourceData,
  user: string
): Promise<string> {
  return new Promise((resolve, reject) => {
    getUserByAuthId(user)
      .then((user) =>
        addDoc(collection(db, "resources"), {
          ...resourceData,
          lastEditUser: user[0].name,
          lastEditTime: new Date().toLocaleString("en-US", {
            timeZone: "America/New_York",
          }),
          creationDate: new Date().toLocaleString("en-US", {
            timeZone: "America/New_York",
          }),
        })
          .then((docRef) => {
            resolve(docRef.id);
          })
          .catch((e) => {
            reject(e);
          })
      )
      .catch((e) => reject(e));
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
//
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

export function getUsers(): Promise<User[]> {
  return new Promise((resolve, reject) => {
    getDocs(collection(db, "Users"))
      .then((snapshot) => {
        const allUsers: User[] = [];
        snapshot.docs.map((doc) => {
          let user: User = doc.data() as User;
          user.id = doc.id;
          allUsers.push(user);
        });
        resolve(allUsers);
      })
      .catch((e) => {
        reject(e);
      });
  });
}

export function getUserByAuthId(auth_id: string): Promise<User[]> {
  return new Promise((resolve, reject) => {
    getDocs(query(collection(db, "Users"), where("auth_id", "==", auth_id)))
      .then((snapshot) => {
        const allUsers: User[] = [];
        snapshot.docs.map((doc) => {
          let user: User = doc.data() as User;
          user.id = doc.id;
          allUsers.push(user);
        });
        resolve(allUsers);
      })
      .catch((e) => {
        reject(e);
      });
  });
}

export function getResourcesFromSearch(
  searchParams: ResourceSearchParam
): Promise<Resource[]> {
  return new Promise((resolve, reject) => {
    let queries: QueryFilterConstraint[] = [];
    // add query constraints to firestore query depending on searchParams
    if (searchParams.primaryCategory != "")
      queries.push(
        where("primaryCategory", "==", searchParams.primaryCategory)
      );

    if (searchParams.secondaryCategory != "")
      queries.push(where("subCategory", "==", searchParams.secondaryCategory));

    if (searchParams.includeNationalServices == "no") {
      queries.push(where("nationalResource", "==", false));
    }
    // Handles location constraints
    if (searchParams.zipCode != "") {
      if (searchParams.includeNationalServices == "yes") {
        queries.push(
          or(
            where("nationalResource", "==", true),
            where("zips", "array-contains", searchParams.zipCode)
          )
        );
      } else {
        queries.push(where("zips", "array-contains", searchParams.zipCode));
      }
    } else if (searchParams.state != "" && searchParams.county != "") {
      if (searchParams.includeNationalServices == "yes") {
        queries.push(
          or(
            where("nationalResource", "==", true),
            or(
              where(`states.${searchParams.state}`, "==", []),
              where(
                `states.${searchParams.state}`,
                "array-contains",
                searchParams.county
              )
            )
          )
        );
      } else {
        queries.push(
          or(
            where(`states.${searchParams.state}`, "==", []),
            where(
              `states.${searchParams.state}`,
              "array-contains",
              searchParams.county
            )
          )
        );
      }
    } else if (searchParams.planningDistrict != "") {
      if (searchParams.includeNationalServices == "yes") {
        queries.push(
          or(
            where("nationalResource", "==", true),
            where(
              "planningDistricts",
              "array-contains",
              searchParams.planningDistrict
            )
          )
        );
      } else {
        queries.push(
          where(
            "planningDistricts",
            "array-contains",
            searchParams.planningDistrict
          )
        );
      }
    }

    let functionInput = null;
    if (queries.length == 0) {
      functionInput = collection(db, "resources");
    } else {
      functionInput = functionInput = query(
        collection(db, "resources"),
        and(...queries)
      );
    }

    getDocs(functionInput)
      .then((snapshot) => {
        let resourceObjects: Resource[] = [];
        snapshot.docs.map((doc) => {
          let resourceObject: Resource = doc.data() as Resource;
          resourceObject.id = doc.id;
          resourceObjects.push(resourceObject);
        });

        // filter by remaining parameters not done by backend
        if (searchParams.inputField.trim() !== "")
          resourceObjects = resourceObjects.filter((resource) => {
            return resource.name
              .toLowerCase()
              .includes(searchParams.inputField.trim().toLowerCase());
          });

        if (searchParams.state !== "")
          resourceObjects = resourceObjects.filter((resource) => {
            return (
              searchParams.state in resource.states || resource.nationalResource
            );
          });

        resolve(resourceObjects);
      })
      .catch((e) => {
        reject(e);
      });
  });
}
