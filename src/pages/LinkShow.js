import axios from "axios";
import { useEffect, useState } from "react";
import {Link as ReactRouterLink, useParams} from "react-router-dom";
import LinkForm from "./LinkForm";

const LinkShow = () => {
  const [link, setLink] = useState({})
  const [loading, setLoading] = useState (true)
  const [editing, setEditing] = useState (false)

  const {id} = useParams()
  useEffect(()=> {
    getLink()
  }, [])

  // we can do axios calls and have state outside of out provider
  const getLink = async ()=>{
    // get => 'api/links/:id
   let res = await axios.get(`https://link-app-sp22.herokuapp.com/api/links/${id}`)
   setLink(res.data)
   setLoading(false)
  }
  if(loading) return <p>Loading</p>
  if(editing) return <LinkForm setEditing={setEditing} {...link}/>

  return (
    <div>
      <h1>LinkShow Page</h1>
      {JSON.stringify(link)}
      <br />
      <button onClick={()=> setEditing(true)}>Edit</button> - {' '}
      <ReactRouterLink to='/'>Back</ReactRouterLink>
    </div>
  )
}

export default LinkShow