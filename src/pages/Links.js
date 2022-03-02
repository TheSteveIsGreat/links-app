import { useContext } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { DataContext } from "../providers/DataProvider";

const Links = () => {
  let {links, getLinks, addLink, updateLink, deleteLink} = useContext(DataContext)

  const renderLinks = () => {
    return links.map((link) => {
      return (
        <div
          key={link.id}
          style={{margin: '20px', padding: '20px', border: '1px dashed red'}}
          >
            <h1>{link.title}</h1>
            <a href={link.url} target="_blank">{link.title}</a>
            <p>{link.description}</p>
            <p>{link.username}</p>

            <button onClick={()=> deleteLink(link.id)}>Delete</button> - {' '}
            <ReactRouterLink to={`links/${link.id}`}>Show</ReactRouterLink> - {' '}
            <ReactRouterLink to={`links/${link.id}/edit`}>Edit</ReactRouterLink>
          </div>
      )
    })
  }

  return (
    <div>
      <h1>Links Page</h1>

      <button onClick={getLinks}>Get Links</button> - {' '}

      <button onClick={()=> addLink({username: 'jamesy', title: 'from Steve'})}
      >
        Add Links
      </button> - {' '}

      {/* <ReactRouterLink to='links/1'>Show</ReactRouterLink> - {' '} */}
      <ReactRouterLink to='links/new'>New Link</ReactRouterLink>
      <code>
        {renderLinks()}
      </code>
    </div>
  )
}

export default Links