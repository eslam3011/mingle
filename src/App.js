import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { v4 as uuidv4 } from "uuid";
import Header from "./header";
import Input from "./Input";

const App = () => {
  useEffect(() => {
    const cookieName = "userId";
    let userId = Cookies.get(cookieName);

    if (!userId) {
      // Generate a new random ID using uuid
      userId = uuidv4();
      Cookies.set(cookieName, userId);
      console.log("New user ID created:", userId);
    } else {
      console.log("Existing user ID found:", userId);
    }
  }, []);

  return (
    <>
      
      <Input />
    </>
  );
};

export default App;
