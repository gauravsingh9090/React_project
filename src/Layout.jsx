import { Outlet } from "react-router-dom";
import Topnavbar from "./components/Topnavbar";
import Footer from "./components/Footer";
const Layout=()=>{
    return(
        <>
        <Topnavbar/>
        <Outlet/>
        <Footer/>
        </>
    )
}
export default Layout;