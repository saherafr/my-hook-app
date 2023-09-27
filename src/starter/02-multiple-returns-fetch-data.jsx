import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading]=useState(true);
  const [isError, setIsError]=useState(false);
  const [user, setUser]=useState(null);

  useEffect(()=>{
    const fetchUser =async()=>{
    try
      {
      const response = await fetch(url);
      const user = await response.json();
      setUser(user);
    }
  
  catch(error){
    setIsError(true);
    console.log(error);
  }
  setIsLoading(false);
};
fetchUser();
  },[]);
  if(isLoading){
    return <h2>Loading...</h2>
  }
  if(isError){

    return <h2>Theres an Error...</h2>
  }
  return <h2>Fetch Data </h2>;
};
export default MultipleReturnsFetchData;
