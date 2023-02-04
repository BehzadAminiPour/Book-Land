import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
         <h2>This page cannot found</h2>
         <Link to="/">Go back to home page</Link>
        </div>
     );
}
 
export default NotFound;