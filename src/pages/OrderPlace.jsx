import cycleIMG from "../images/cycle.gif"
import { useNavigate } from "react-router-dom";
import { message } from "antd";

const OrderPlace = () => {
 
     const navigate = useNavigate();

     setTimeout(()=> {
        message.success("Order is Placed ")
        navigate("/")
     } , 1500)



     return (
         <div style={{display:"flex" , justifyContent:"center" , alignItems:"center" , width:"98vw" , height:"80vh"}}>

          <img src={cycleIMG} alt="" />

         
         </div>
     )
}
export default OrderPlace;