import axios from "axios";
import React, { useState } from "react";

// createContext HERE this doing a lot for
// create Context/Provider, get and set out data
export const DataContext = React.createContext();

const DataProvider = (props) => {
  const baseurl = 'https://link-app-sp22.herokuapp.com'
  const [links, setLinks] = useState([]);

  //GET
  const getLinks = async () => {
    try {
      let res = await axios.get(`${baseurl}/api/links`)
      console.log('res.data:', res.data)
      setLinks(res.data)
    } catch (err) {
      console.log(err)
      alert('Error occurred')
    }
  }

  //POST or Add
  const addLink = async (linkData) => {
    console.log('linkData:', linkData)
    try {
      let res = await axios.post(`${baseurl}/api/links`, linkData)
      console.log(res.data)
      setLinks([...links, res.data])
    } catch (err) {
      console.log(err)
      alert ('error occurred getting links')
    }
  }

  //PUT or Update
  const updateLink = async (linkData) => {
    try {
      let res = await axios.put(`${baseurl}/api/links/${linkData.id}`, linkData)
      setLinks(links.map((l) => (l.id === res.data.id ? res.data : l)))
    } catch (err) {
      console.log(err)
      alert('Error occurred updating links')
    }
  }

  //DELETE or Destroy
  const deleteLink = async (id) => {
    try {
      let res = await axios.delete(`${baseurl}/api/links/${id}`)
      setLinks(links.filter((l) => l.id !== id))
      console.log('Link Deleted')
    } catch (err) {
      console.log(err)
      alert('Error occurred deleting links')
    }
  }

  // create an object that will be 'global state'
  const dataProviderThing = {
   links,
   setLinks,
   getLinks,
   addLink,
   updateLink,
   deleteLink,
};
  // return the provider which will wrap my all app
  return (
    <DataContext.Provider value={dataProviderThing}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;
