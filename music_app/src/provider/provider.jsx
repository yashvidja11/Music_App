import React, { createContext, useState, useEffect } from 'react';

export const DataContext = createContext();

 const DataProvider = ({ children }) => {
 const [data, setData] = useState([]);
 const [ isLoading , setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true);
    setTimeout(async () => {
     
        
        try {
          const response = await fetch('https://saavn.me/modules?language=hindi,english');
          const data = await response.json();
          setData(data.data);
          console.log(data.data);
        setIsLoading(false)
        } catch (error) {
          console.error('Error fetching data:', error);
        }

      
    }, 1000);
  }, []);

  return (
    <DataContext.Provider value={{data , isLoading , setIsLoading}}>
      {children}
    </DataContext.Provider>
  );
};
export default DataProvider;
