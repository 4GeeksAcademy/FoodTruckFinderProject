
export function NavBar (){

return (
    <>

<ul>
  <Link to ="/">Home</Link>
  <Link to ="/Food">Food</Link>
  <Link to ="/Cart">Cart</Link>
  <Link to ="/About">About Us</Link>
</ul>
<Outlet />
</>
)
}