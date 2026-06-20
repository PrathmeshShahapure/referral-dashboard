import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
  Cookies.remove("jwt_token");
  navigate("/login");
};
  return (
    <nav className="max-w-6xl mx-auto px-4 flex items-center justify-between py-4 bg-white top-0 sticky"> 
     <Link to="/" className="text-[#6e70f1] font-bold text-lg">
        Go Business
      </Link>
      <div className="flex gap-4 items-center">
         <Link to="/" className="bg-[#5a5cff]  text-base p-2 rounded text-white">
       Try for Free
      </Link>
      <button
        onClick={handleLogout}
        className="ml-auto  px-4 py-2 rounded border-2 border-red-500 hover:cursor-pointer"
      >
        Logout
      </button>
       </div>
    </nav>
  )
}

export default Navbar