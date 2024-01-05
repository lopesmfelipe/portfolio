import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const Home = () => {
  const { data, isLoading } = useQuery(["cat"], () => {
    return axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });

  if (isLoading) {
    return <h1> Loading...</h1>
  }

  return (
    <h1>
      Home Page <p>{data?.fact}</p>
    </h1>
  );
};
