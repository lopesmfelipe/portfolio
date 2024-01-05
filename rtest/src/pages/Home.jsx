import { useContext } from "react";
import { AppContext } from "../App";

export const Home = () => {
  const { username } = useContext(AppContext);
  return (
    <>
      <h1 className="homeText">HOME PAGE</h1>
      <h1> {username} </h1>;
    </>
  );
};
