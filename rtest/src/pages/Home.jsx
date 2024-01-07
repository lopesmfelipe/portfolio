import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const Home = () => {
  const { data } = useQuery([""], () => {
    return axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });

  return (
    <h1> Home Page <p> {data?.fact} </p> </h1>
  );
};
