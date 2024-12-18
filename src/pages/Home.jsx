import axios from 'axios';
import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import React from 'react';
import { Card } from 'antd';
import { FaCartShopping } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { addcartdata } from '../addtocartslice';
import { Flex, Tag } from 'antd';
import img1 from "../images/img1.png"
import img2 from "../images/img2.png"
import img3 from "../images/img3.png"
import img4 from "../images/img4.png"
import img5 from "../images/img5.png"
import img6 from "../images/img6.jpg"
import {useNavigate } from 'react-router-dom';


const { Meta } = Card;

const Home=()=>{
    const [mydata, setdata]=useState([]);
    const navigate = useNavigate();
    const dispatch=useDispatch()

    const loaddata=()=>{
        let api="http://localhost:3000/data";
        axios.get(api).then((res)=>{
        setdata(res.data)
    })
    }
    useEffect(()=>{
        loaddata();
    },[])


    const addcart=(id, name, cate, brand, price, desc, img)=>{
      dispatch(addcartdata({id:id, name:name, category:cate, brand:brand, price:price,
        description:desc, image:img, qnty:1 }))
    }

    const checktag = (time) => {
         if (time=="New") {
            return (
                <>
                    <Tag color="#f50" style={{padding:"2px" , width:"50px" , textAlign:"center" , position:"relative" , top:"-260px" , right:"12px"}}>{time}</Tag>
                </>
            )
         }
    }

    const changePage = (id) => {
         navigate(`/productdetail/${id}`);
    }



    const ans=mydata.map((key)=>{
        return(
            <>
            <Card hoverable style={{ width: 300, backgroundColor:"#D9D9D9", margin:"50px 0px 0px 0px"}} 
            cover={<img onClick={()=>changePage(key.id)} id='imagess' alt="example" src={key.image} style={{width: "300px", height: "250px", margin:"0px" , padding:"25px 25px"}}/>}>
              <Flex gap="4px 0" wrap>
                <div>

                    {checktag(key.time)}

                </div>
              
    </Flex>
    <Meta title={key.name} description={key.description} style={{padding:"4px"}} />
    <h4  style={{color:"blue", fontSize:"14px" , padding:'2px'}}>  Brand : { key.brand} 

         {" "}  For - {key.category}
    </h4>
    <h4 style={{color:"red", fontSize:"16px"}}> Price : {key.price} </h4> 
    <Button variant="dark" style={{width:"250px"}} 
    onClick={()=>{addcart(key.id,key.name, key.category, key.brand, key.price, key.description, key.image)}}><FaCartShopping/>  Add To Cart</Button>
  </Card>
            </>
        )
    })

    return(
        <>
        <Carousel>
      <Carousel.Item interval={2000}>
          <img src={img1} style={{width:"100%"}}/>
      </Carousel.Item>

      <Carousel.Item interval={2000}>
         <img src={img2} style={{width:"100%"}}/>
      </Carousel.Item>
     
      <Carousel.Item interval={2000}>
          <img src={img3} style={{width:"100%"}}/>
        </Carousel.Item>

        <Carousel.Item interval={2000}>
           <img src={img4} style={{width:"100%"}}/>
        </Carousel.Item>

     <Carousel.Item interval={2000}>
         <img src={img5} style={{width:"100%"}}/>
      </Carousel.Item>

      <Carousel.Item interval={2000}>
         <img src={img6} style={{width:"100%"}}/>
      </Carousel.Item>
         
         

     
    </Carousel>

    <div id='mainhead'>
    <h1>New Launches</h1>
    </div>
    <div id='newlaunch'>
    {ans}
    </div>
        </>
    )
}
export default Home;