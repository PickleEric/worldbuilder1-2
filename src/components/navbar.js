import * as React from "react"
import { Link } from "gatsby"

//Array of pages

const pageLinks = [
    {
      text: "Page 2",
      url: "page-2",
      badge: false,
      description:
        "A simple example of linking to another page within a Gatsby site",
    },
    { text: "TypeScript", url: "using-typescript" },
    { text: "Server Side Rendering", url: "using-ssr" },
    { text: "Deferred Static Generation", url: "using-dsg" },
  ]
//Fuction to display array 
const Navbar = () => {
    return (
      <nav>
        <ul>
          {pageLinks.map((link) => (
            <li key={link.url}>
              <Link to={link.url}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    )
  }

  export default Navbar