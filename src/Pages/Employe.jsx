import Header from "../Components/Header/Header";
import { Link } from "react-router-dom"

function Employe() {
  return (
    <div>
      <Header linkContent={<Link to="/">Home</Link>}/>
    </div>
  )
}

export default Employe