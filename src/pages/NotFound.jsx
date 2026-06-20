import {Link} from 'react-router-dom'
import { MoveLeft } from 'lucide-react'
const NotFound = () => {
  return (
  <div className="min-h-screen flex flex-col items-center justify-center ">
    <h1 className="text-2xl font-bold ">404</h1>
    <p> Page not found</p>
    <Link to="/" className=" flex  gap-2  items-center text-[#6e70f1] font-bold ">
     {<MoveLeft />}
        Back to dashboard
      </Link>

  </div>
   )
    
}

export default NotFound