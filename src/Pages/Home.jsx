import Form from "../Components/Field/Form";
import Header from "../Components/Header/Header";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Header linkContent= {<Link to="/employe">View Current Employees</Link>}/>
      <Form/>
    </>
  );
}

export default Home;
