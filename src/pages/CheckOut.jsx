import { useNavigate } from "react-router-dom"
const CheckOut = () => {

     const navigate = useNavigate();
     return (
         <div style={{display:"flex" , justifyContent:"center" , alignItems:"center" , gap:"40px" , width:"100%"}}>
            <div style={{width:"500px" , padding:"30px"}}>
                <form style={{padding:"20px" , border:"2px solid brown" , backgroundColor:"pink" , borderRadius:"10px" , width:"100%"}}>
                    <label style={{padding:"20px"}}>First Name:</label >
                    <input type="text" name="firstName" required/>
                    <br/>
                    <label style={{padding:"20px"}}>Last Name:</label>
                    <input type="text" name="lastName" required/>
                    <br/>
                    <label style={{padding:"20px"}}>Address:</label>
                    <input type="text" name="address" required/>
                    <br/>
                    <label style={{padding:"20px"}}>City</label>
                    <input type="text" name="city" required/>
                    <br/>
                    <label style={{padding:"20px"}}>State</label>
                    <input type="text" name="state" required />
                    <br />
                    <label style={{padding:"20px"}}>Mobile Number</label>
                    <input type="text" name="mobileNumber" required/><hr />
                    <h3> Select Payment Method </h3>
                 <input type="radio" name="payment"/>
                 <label style={{fontWeight:"400" , fontSize:"1.2rem"}}>UPI Pay</label>
                 <br />
                 <input type="radio" name="payment"/>
                 <label style={{fontWeight:"400" , fontSize:"1.2rem"}}>Credit/Debit Card</label>
                 <br />
                 <input type="radio" name="payment"/>
                 <label style={{fontWeight:"400" , fontSize:"1.2rem"}}> Pay On Delivery </label>
                </form>
                <center style={{padding:"20px"}}><button onClick={()=>navigate('/orderplace')} style={{backgroundColor:"blue" , color:"white" , padding:"10px 20px" , borderRadius:"10px"}}> Place Order </button></center>
            </div>
         </div>
     )
}
export default CheckOut