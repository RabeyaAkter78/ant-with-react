import { Outlet } from "react-router-dom";
import "antd/dist/reset.css";
import NavBar from "../../Components/Shared/NavBar/NavBar";

const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
