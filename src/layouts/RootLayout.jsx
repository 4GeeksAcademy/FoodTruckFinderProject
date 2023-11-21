import { Link, Outlet } from "react-router-dom";

export function RootLayout() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Outlet />
      <footer>
        <p>Footer</p>
      </footer>
    </>
  );
}
