import { useDispatch, useSelector } from "react-redux";
import Table from 'react-bootstrap/Table';
import { Button } from "react-bootstrap";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { qntyinc } from "../addtocartslice";
import { qntydec } from "../addtocartslice";
import { deleteitem } from "../addtocartslice";
import { useState } from "react";
import cycleIMG from "../images/cycle.gif"
import { useNavigate } from "react-router-dom"
const Cart=()=>{
    const data=useSelector((state)=>state.addcart.cart)
    const dispath=useDispatch();
    const navigate = useNavigate()
    const [loading , setLoading ] = useState(true)
    console.log(data)

    const iteminc=(id)=>{
        dispath(qntyinc({id:id}))
    }
    const itemdec=(id)=>{
        dispath(qntydec({id:id}))
    }
    const itemdele=(id)=>{
        dispath(deleteitem({id:id}))
    }

    let sno=0;
  let grandTotal=0;
    const ans= data.map((key)=>{
        sno++;
        grandTotal+=key.price*key.qnty;
          return(
            <>
              <tr>
                <td> {sno} </td>
                <td> <img src={key.image} width="100" height="100" /> </td>
                <td>{key.name} </td>
                <td>{key.brand} </td>
                <td>{key.category} </td>
                <td style={{fontSize:"12px", width:"300px"}}>{key.description} </td>
                <td>{} </td>
                <th>
                <FaMinusCircle style={{cursor:"pointer"}} onClick={()=>{itemdec(key.id)}}/> 
                 <span style={{marginLeft:"5px", marginRight:"5px"}}> 
                    {key.qnty}   
                 </span>    
                <FaPlusCircle style={{cursor:"pointer"}} onClick={()=>{iteminc(key.id)}}/>
                 </th>
                <th> 
                    {key.price*key.qnty}
                    </th>
                <td>
                 <Button var="secondary" onClick={()=>{itemdele(key.id)}}> Delete</Button>    
                 </td>
              </tr>
            </>
          )
    })

    setTimeout(()=> {
         setLoading(false)
    } , 800)

  
  if (loading) {
     return (
       <div style={{display:'flex' , justifyContent:"center" , alignItems:'center'}}>
        <img src={cycleIMG} />
       </div>
     )
  }


    return(
        <>
         <h1> My Cart</h1>
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th> </th>
          <th>Product Name</th>
          <th>Brand</th>
          <th> Category </th>
          <th> Description</th>
          <th> Price</th>
          <th> Quantity</th>
          <th> Total </th>
          <td> </td>
        </tr>
      </thead>
      <tbody>
         {ans}

         <tr>
          <th>#</th>
          <th> </th>
          <th></th>
          <th></th>
          <th>  </th>
          <th> </th>
          <th></th>
          <th width="200" style={{color:"green", fontSize:"20px"}}> Grand Total:  </th>
          <th style={{color:"green", fontSize:"20px"}}> {grandTotal} </th>
          <td> </td>
        </tr>
      </tbody>
        </Table>
    <center style={{padding:"20px"}}>
        <button onClick={()=>navigate("/checkout")} style={{padding:"10px 20px" , borderRadius:"10px" , backgroundColor:"blue"  , fontWeight:"bold", color:'white'}}>Check OUT</button>
    </center>
        </>
    )
}

export default Cart;