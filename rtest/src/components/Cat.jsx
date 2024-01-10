import { useGetCat } from "../components/useCatFact";

export const Cat = () => {
  const { data, isLoading, refetchData } = useGetCat();
  
  if (isLoading) {
    return <h1> LOADING...</h1>;
  } else {
    return (
      <div>
        <button onClick={refetchData}> refetch </button>
        <h1> {data?.fact} </h1>
      </div>
    );
  }
};
