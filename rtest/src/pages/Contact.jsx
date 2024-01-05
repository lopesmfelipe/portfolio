import { useContext } from "react";
import { AppContext } from "../App";

export const Contact = () => {
  const {username} = useContext(AppContext);
  
  return (
    <>
      <h1 className="contactText">CONTACT PAGE</h1>
      <h1> {username} </h1>
    </>
  ); 
};