/** @jsx React.DOM */
import React, { useEffect, useState } from "react";



import { db } from "./firebase";
import { onValue, ref, get, getDatabase } from "firebase/database";

function services() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const query = ref(db, "services");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();

      if (snapshot.exists()) {
        Object.values(data).map((project) => {
          setProjects((projects) => [...projects, project]);
        })
      }
    })
  }, [])

  return (

    <div>
     <h1>Hello</h1>
   </div>
    
  )
};

export default services;