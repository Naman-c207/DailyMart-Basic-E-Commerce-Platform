import { useEffect, useState } from "react";

const useFetch = (fetchFunction) => {  //usefetch is a custom hook that handles asynchronous data

  const [data, setData] = useState([]); // 2nd parameter in usestate is used to update the quantity as per need or context it is a seter
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

// fetchFUnction is been given to hook as form of input which gives data to useFetch
  // useState is holding the fetched data initialized as an empty array 

  useEffect(() => {

    const getData = async () => {

      try {

        setLoading(true);
        const result = await fetchFunction();
        setData(result);

      } 
      
      catch (err) {

        setError(err.message);
      } 
      
      finally {

        setLoading(false);
      }
    };


    getData();
    
  }, [fetchFunction]);

  return { data, loading, error };
};

export default useFetch;
