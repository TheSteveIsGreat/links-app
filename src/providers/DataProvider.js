import axios from "axios";
import React, { useState } from "react";

// createContext HERE this doing a lot for
// create Context/Provider, get and set out data
export const DataContext = React.createContext();

const DataProvider = (props) => {
  const baseurl = 'https://link-app-sp22.herokuapp.com'
  const [links, setLinks] = useState([]);
  const [foods, setFoods] = useState ([])

  const getFoods = () => {

  }

  const addFood = async (food) => {
    console.log('food:', food)
    try {
      let res = await axios.post('http://localhost:3001/api/foods', food)
      console.log(res)
    } catch (err) {
      console.log(err)
      alert ('error occurred')
    }
  }

  // create an object that will be 'global state'
  const dataProviderThing = {
    links,
    setLinks,


};
  // return the provider which will wrap my all app
  return (
    <DataContext.Provider value={dataProviderThing}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;
