const cors = require("cors")({ origin: true });
const crypto = require("crypto");
const functions = require("firebase-functions");
const { onCall } = require("firebase-functions/v2/https");
const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();

/*
 * Creates a new user.
 * Takes an object as a parameter that should contain an email, name, and a role field.
 * This function can only be called by a user with admin status
 * Arguments: email: string, the user's email
 *            name: string, the user's name
 *            role: string, (Options: "ADMIN", "TEACHER")
 */

exports.createUser = onCall(
  { region: "us-east4", cors: true },
  async ({ auth, data }) => {
    return new Promise(async (resolve, reject) => {
      const authorization = admin.auth();
      if (
        // Validate parameters
        data.name &&
        data.role &&
        data.email &&
        auth &&
        auth.token &&
        auth.token.role.toLowerCase() == "admin"
      ) {
        const pass = crypto.randomBytes(32).toString("hex");
        await authorization
          .createUser({
            email: data.email,
            password: pass,
          })
          .then(async (userRecord) => {
            await authorization
              .setCustomUserClaims(userRecord.uid, {
                role: data.role.toUpperCase(),
              })
              .then(async () => {
                // Add to database if needed. Set the fields you want
                const collectionObject = {
                  auth_id: userRecord.uid,
                  email: data.email,
                  name: data.name,
                  role: data.role.toUpperCase(),
                };
                await db
                  .collection("Users")
                  .where("auth_id", "==", userRecord.uid)
                  .get()
                  .then(async (querySnapshot) => {
                    if (querySnapshot.docs.length == 0) {
                      await db
                        .collection("Users")
                        .add(collectionObject)
                        .then(async () => {
                          resolve({ reason: "Success", text: "Success" });
                        })
                        .catch((error) => {
                          reject(
                            new functions.https.HttpsError(
                              "unknown",
                              "Failed to add user to database"
                            )
                          );
                          functions.logger.error(
                            "unknown",
                            "Failed to add user to database"
                          );
                        });
                    } else {
                      // User already in database, so let's just update their fields
                      const doc = querySnapshot[0];
                      await doc.ref
                        .update({
                          email: data.email,
                          name: data.name,
                          role: data.role.toUpperCase(),
                        })
                        .then(async () => {
                          resolve({ reason: "Success", text: "Success" });
                        })
                        .catch((error) => {
                          reject(
                            new functions.https.HttpsError(
                              "unknown",
                              "Failed to add user to database"
                            )
                          );
                          functions.logger.error(
                            "Failed to add user to database"
                          );
                        });
                    }
                  })
                  .catch((error) => {
                    reject(
                      new functions.https.HttpsError(
                        "unknown",
                        "Unable to find user in the database. Make sure they exist."
                      )
                    );
                    functions.logger.error("Unable to find user in database");
                  });
              })
              .catch((error) => {
                reject(
                  new functions.https.HttpsError(
                    "unknown",
                    "Failed to set user's role"
                  )
                );
                functions.logger.error("Failed to set user role");
              });
          })
          .catch((error) => {
            reject(
              new functions.https.HttpsError(
                "unknown",
                "Failed to create user. Please make sure an account with that email doesn't already exist."
              )
            );
            functions.logger.error("Unable to create user account");
          });
      } else {
        reject(
          new functions.https.HttpsError(
            "unknown",
            "Only an admin user can create users. If you are an admin, make sure the email and name passed in are correct."
          )
        );
        functions.logger.error(
          "You do not have the correct permissions to run this"
        );
      }
    });
  }
);

/**
 * Deletes the user
 * Argument: firebase_id - the user's firebase_id
 */

exports.deleteUser = onCall(
  { region: "us-east4", cors: true },
  async ({ auth, data }) => {
    return new Promise(async (resolve, reject) => {
      const authorization = admin.auth();
      if (
        data.firebase_id != null &&
        auth &&
        auth.token &&
        auth.token.role.toLowerCase() == "admin"
      ) {
        await authorization
          .deleteUser(data.firebase_id)
          .then(async () => {
            const promises = [];
            await db
              .collection("Users")
              .where("auth_id", "==", data.firebase_id)
              .get()
              .then((querySnapshot) => {
                if (querySnapshot.docs.length == 0) {
                  reject(
                    new functions.https.HttpsError(
                      "unknown",
                      "Unable to find user with that firebase id in the database"
                    )
                  );
                  new functions.logger.error(
                    "unknown",
                    "Unable to find user with that firebase id in the database"
                  );
                } else {
                  querySnapshot.forEach((documentSnapshot) => {
                    promises.push(documentSnapshot.ref.delete());
                  });
                }
              })
              .catch((error) => {
                reject(new functions.https.HttpsError("unknown", `${error}`));
                functions.logger.error("unknown", `${error}`);
              });
            await Promise.all(promises)
              .then(() => {
                resolve({ reason: "Success", text: "Success" });
              })
              .catch((error) => {
                reject(new functions.https.HttpsError("unknown", `${error}`));
                functions.logger.error("unknown", `${error}`);
              });
          })
          .catch((error) => {
            reject(
              new functions.https.HttpsError(
                "unknown",
                "Unable to delete user."
              )
            );
            functions.logger.error("Unknown", "Unable to delete user.");
          });
      } else {
        reject(
          new functions.https.HttpsError(
            "unknown",
            "Only an admin user can delete users. If you are an admin, make sure the account exists."
          )
        );
        functions.logger.error(
          "unknown",
          "Only an admin user can delete users. If you are an admin, make sure the account exists."
        );
      }
    });
  }
);

/**
 * Let's a user delete themselves
 * Argument: firebase_id - the user's firebase_id
 */

exports.deleteSelf = onCall(
  { region: "us-east4", cors: true },
  async ({ auth, data }) => {
    return new Promise(async (resolve, reject) => {
      const authorization = admin.auth();
      if (
        data.firebase_id != null &&
        auth &&
        auth.uid &&
        auth.uid == data.firebase_id &&
        (auth.token.role.toLowerCase() == "admin" ||
          auth.token.role.toLowerCase() == "user")
      ) {
        const promises = [];
        await db
          .collection("Users")
          .where("auth_id", "==", data.firebase_id)
          .get()
          .then((querySnapshot) => {
            if (querySnapshot.docs.length == 0) {
              reject(
                new functions.https.HttpsError(
                  "unknown",
                  "Unable to find you in the database"
                )
              );
              new functions.logger.error(
                "unknown",
                "Unable to find you in the database"
              );
            } else {
              querySnapshot.forEach((documentSnapshot) => {
                promises.push(documentSnapshot.ref.delete());
              });
            }
          })
          .catch((error) => {
            reject(new functions.https.HttpsError("unknown", `${error}`));
            functions.logger.error("unknown", `${error}`);
          });
        await Promise.all(promises)
          .then(async () => {
            await authorization
              .deleteUser(data.firebase_id)
              .then(async () => {
                resolve();
              })
              .catch((error) => {
                reject(
                  new functions.https.HttpsError(
                    "unknown",
                    "Unable to delete user."
                  )
                );
                functions.logger.error("Unknown", "Unable to delete user.");
              });
          })
          .catch((error) => {
            reject(new functions.https.HttpsError("unknown", `${error}`));
            functions.logger.error("unknown", `${error}`);
          });
      } else {
        reject(
          new functions.https.HttpsError(
            "unknown",
            "Make sure you have the correct permissions to delete this account."
          )
        );
        functions.logger.error(
          "unknown",
          "Make sure you have the correct permissions to delete this account."
        );
      }
    });
  }
);
/**
 * Updates a user's email
 * Arguments: email - the user's current email
 *            newEmail - the user's new email
 * TODO: Update Error Codes
 */

exports.updateUserEmail = onCall(
  { region: "us-east4", cors: true },
  async ({ auth, data }) => {
    return new Promise(async (resolve, reject) => {
      const authorization = admin.auth();
      if (
        data.email != null &&
        data.newEmail != null &&
        auth &&
        auth.token &&
        auth.token.email.toLowerCase() == data.email.toLowerCase()
      ) {
        await authorization
          .updateUser(auth.uid, {
            email: data.newEmail,
          })
          .then(async () => {
            await db
              .collection("Users")
              .where("auth_id", "==", auth.uid)
              .get()
              .then(async (querySnapshot) => {
                if (querySnapshot.docs.length == 0) {
                  reject(
                    new functions.https.HttpsError(
                      "unknown",
                      "Unable to find user with that email in the database"
                    )
                  );
                  functions.logger.error(
                    "Unknown",
                    "Unable to find user with that email in the database"
                  );
                } else {
                  const promises = [];
                  querySnapshot.forEach((doc) => {
                    promises.push(doc.ref.update({ email: data.newEmail }));
                  });
                  await Promise.all(promises)
                    .then(() => {
                      resolve({
                        reason: "Success",
                        text: "Successfully changed email.",
                      });
                    })
                    .catch(() => {
                      reject(
                        new functions.https.HttpsError(
                          "unknown",
                          "Failed to change user's email within the database."
                        )
                      );
                      functions.logger.error(
                        "Unknown",
                        "Failed to change user's email within the database."
                      );
                    });
                }
              })
              .catch((error) => {
                reject(
                  new functions.https.HttpsError(
                    "unknown",
                    "Unable to find user with that email in the database"
                  )
                );
                functions.logger.error(
                  "Unknown",
                  "Unable to find user with that email in the database"
                );
              });
          })
          .catch((error) => {
            reject(
              new functions.https.HttpsError(
                "unknown",
                "Failed to change user's email."
              )
            );
            functions.logger.error("Unknown", "Failed to change user's email.");
          });
      } else {
        reject(
          new functions.https.HttpsError(
            "unknown",
            "You do not have the correct permissions to update email. If you think you do, please make sure the new email is not already in use."
          )
        );
        functions.logger.error(
          "unknown",
          "You do not have the correct permissions to update email. If you think you do, please make sure the new email is not already in use."
        );
      }
    });
  }
);

/**
 * Changes a user's role in both authorization and the database.
 * Takes an object as a parameter that should contain a firebase_id field and a role field.
 * This function can only be called by a user with admin status
 * Arguments: firebase_id - the id of the user
 *            role: the user's new role; string, (Options: "ADMIN", "TEACHER")
 */

exports.setUserRole = onCall(
  { region: "us-east4", cors: true },
  async ({ auth, data }) => {
    return new Promise(async (resolve, reject) => {
      const authorization = admin.auth();
      if (
        data.firebase_id != null &&
        data.role != null &&
        auth &&
        auth.token &&
        auth.token.role.toLowerCase() == "admin"
      ) {
        authorization
          .setCustomUserClaims(data.firebase_id, {
            role: data.role.toUpperCase(),
          })
          .then(async () => {
            await db
              .collection("Users")
              .where("auth_id", "==", data.firebase_id)
              .get()
              .then(async (querySnapshot) => {
                if (querySnapshot.docs.length == 0) {
                  reject(
                    new functions.https.HttpsError(
                      "unknown",
                      "Unable to find user with that firebase id in the database"
                    )
                  );
                  functions.logger.error(
                    "unknown",
                    "Unable to find user with that firebase id in the database"
                  );
                } else {
                  const promises = [];
                  querySnapshot.forEach((doc) => {
                    promises.push(
                      doc.ref.update({ role: data.role.toUpperCase() })
                    );
                  });
                  await Promise.all(promises)
                    .then(() => {
                      resolve();
                    })
                    .catch(() => {
                      reject(
                        new functions.https.HttpsError(
                          "unknown",
                          "Unable to update user role in database"
                        )
                      );
                      functions.logger.error(
                        "unknown",
                        "Unable to update user role in database"
                      );
                    });
                }
              })
              .catch((error) => {
                reject(
                  new functions.https.HttpsError(
                    "unknown",
                    "Unable to find user with that firebase id in the database"
                  )
                );
                functions.logger.error(
                  "unknown",
                  "Unable to find user with that firebase id in the database"
                );
              });
          })
          .catch((error) => {
            reject(
              new functions.https.HttpsError(
                "unknown",
                "Failed to change user role."
              )
            );
            functions.logger.error("Failed to change user role");
          });
      } else {
        reject(
          new functions.https.HttpsError(
            "unknown",
            "Only an admin user can change roles. If you are an admin, make sure the arguments passed into the function are correct."
          )
        );
        functions.logger.error(
          "unknown",
          "Only an admin user can change roles. If you are an admin, make sure the arguments passed into the function are correct."
        );
      }
    });
  }
);
