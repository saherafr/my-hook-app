import { useEffect, useState } from 'react';

const MultipleReturnsBasics = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => { 
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return (
      <div>
        <h2>Loading...</h2>;
      </div>
    );
  }
  return <h2>Multiple Returns Basics</h2>;
};
export default MultipleReturnsBasics;
