import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import React from 'react';
import { Card } from 'antd';
import { FaCartShopping } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { addcartdata } from '../addtocartslice';
import { Flex, Tag } from 'antd';
import {useNavigate } from 'react-router-dom';

const { Meta } = Card;

const Sale=()=>{
    const navigate = useNavigate();
    const [mydata, setdata]=useState([]);
    const dispatch=useDispatch()

    const loaddata=()=>{
        let api="http://localhost:3000/data?offer=yes";
        axios.get(api).then((res)=>{
        setdata(res.data)
    })
    }
    useEffect(()=>{
        loaddata();
    },[])
   
    const changePage = (id) => {
        navigate(`/productdetail/${id}`);
   }

    const addcart=(id, name, cate, brand, price, desc, img)=>{
      dispatch(addcartdata({id:id, name:name, category:cate, brand:brand, price:price,
        description:desc, image:img, qnty:1 }))


    }



    const ans=mydata.map((key)=>{
        let offerPrice= (key.price-(key.price*key.discount/100)).toFixed(0);
        return(
            <>
            <Card hoverable style={{ width: 300, backgroundColor:"rgb(241, 241, 241)", margin:"20px 0px 0px 0px"}} 
            cover={<img onClick={()=>changePage(key.id)}     alt="example" src={key.image} style={{width: 300, height: 200, margin:"0px"}}/>}>
              <Flex gap="4px 0" wrap>
              <Tag color="#f50" style={{position:"relative" , top:"-210px" , right:"10px"}}>{key.time}</Tag>
    </Flex>
    <Meta title={key.name} description={key.description} />
    <h4  style={{color:"blue", fontSize:"14px"}}>  Brand : { key.brand} 

         {" "}  For - {key.category}
    </h4>
    <h5> <b>Offer:</b> <span style={{color:"blue"}}> {key.discount}% </span></h5>
    <h4 style={{color:"red", fontSize:"16px"}}>  Price : <span style={{textDecoration:"line-through", marginRight:"10px"}}>{key.price} </span> <span style={{color:"green", fontSize:"18px"}}> {parseInt(offerPrice)}</span></h4> 
    <Button variant="dark" style={{width:"250px"}} 
    onClick={()=>{addcart(key.id,key.name, key.category, key.brand, offerPrice, key.description, key.image)}}><FaCartShopping/>  Add To Cart</Button>
  </Card>
            </>
        )
    })

    return(
        <>

    <div id='mainhead'>
    <h1 style={{margin:"0px 0px 0px 550px" , fontFamily:"Comic Sans MS"}}>sale products</h1>
    </div>
    <div id='newlaunch'>
    {ans}
    </div>

        </>
    )
}

export default Sale;