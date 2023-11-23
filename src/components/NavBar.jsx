import { Link, Outlet } from "react-router-dom";

export function NavBar (){

    return(
        <>
            <nav>
            <Link to = "/">Home</Link>
            <Link to ="/Search">Search</Link>
            <Link to ="/Cart">Cart</Link>
            <Link to ="/Account">My Account</Link>
            <Link to ="/Feedback">Feedback</Link>
            <Link to ="/About">About Us</Link>
            </nav> 
            <Outlet/>           
          </>
    )
}