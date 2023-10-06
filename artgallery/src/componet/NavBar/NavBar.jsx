import { Link } from "react-router-dom"


export const NavBar =()=> {

    const navStyle = {
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "#333", // Background color
        color: "#fff", // Text color
        padding: "10px", // Padding around links
      };
    
      const linkStyle = {
        textDecoration: "none", // Remove underline from links
        color: "#fff", // Text color for links
        fontSize: "18px", // Font size for links
        marginRight: "10px", // Spacing between links
      };
    return(
        <div style={navStyle}> 
            <Link to="/" style={linkStyle}>Home</Link>
            <Link to= "/product" style={linkStyle}>Gallery</Link>
            <Link to="/contact" style={linkStyle}>Contact</Link>
            <Link to= "/about"style={linkStyle}>About</Link>
        </div>
    )
}