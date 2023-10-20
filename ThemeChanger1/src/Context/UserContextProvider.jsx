import React from "react";
import UserContext from "./UserContext";

const UserContextProvider=({Children})=>{
  const[user , SetUser]=React.useState(null)
 return(
  <UserContext.Provider value={{user , SetUser}}>
  {Children}
  </UserContext.Provider>
 )
}
export  default UserContextProvider