import { Outlet } from "react-router-dom";
import 'antd/dist/reset.css';
const Main = () => {
    return (
        <div>
           <Outlet></Outlet> 
        </div>
    );
};

export default Main;