import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Book Land</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" style={{ 
          color: 'white', 
          backgroundColor: ' #0A615C',
          borderRadius: '8px' 
        }}>New Book</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;