import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const Home = () => {
  const { data: catdata, isLoading, isError, refetch } = useQuery([""], () => {
    return axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });

  if (isError) {
    return <h1> Sorry, there was an error</h1>
  }

  if (isLoading) {
    return <h1> Loading...</h1>
  }

  return (
    <>
      <h1> Home Page <p> {catdata?.fact} </p> </h1>
      <button onClick={refetch}> Update Data</button>
    </>
  );
};
