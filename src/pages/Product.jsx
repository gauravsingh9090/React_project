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

const Product=()=>{
    const [CatData,setCatData]=useState("")
    const [priceproduct,setPriceData]=useState("")
    const navigate = useNavigate();
    const [displayState, setDisplayState]= useState(true)
    const [mydata, setdata]=useState([]);
    const [mypricedata, setmypricedata]=useState([]);
    const dispatch=useDispatch()

    const loaddata=()=>{
        let api="http://localhost:3000/data?time=new";
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
        return(
            <>
            <Card hoverable style={{ width: 300, backgroundColor:"rgb(241, 241, 241)", margin:"20px 0px 0px 0px"}} 
            cover={<img onClick={()=>changePage(key.id)} alt="example" src={key.image} style={{width: 300, height: 200, margin:"0px"}}/>}>
              <Flex gap="4px 0" wrap>
    </Flex>
    <Meta title={key.name} description={key.description} />
    <h4  style={{color:"blue", fontSize:"14px"}}>  Brand : { key.brand} 

         {" "}  For - {key.category}
    </h4>
    <h4 style={{color:"red", fontSize:"16px"}}> Price : {key.price} </h4> 
    <Button variant="dark" style={{width:"250px"}} 
    onClick={()=>{addcart(key.id,key.name, key.category, key.brand, key.price, key.description, key.image)}}><FaCartShopping/>  Add To Cart</Button>
  </Card>
            </>
        )
    })
    




const ans1=mypricedata.map((key)=>{
    if (priceproduct==2000)
    {
        if (key.price>0 && key.price<2001 )
        {
            return(
            <>
            <Card hoverable style={{ width: 300, backgroundColor:"rgb(241, 241, 241)", margin:"50px 0px 0px 0px"}} 
            cover={<img onClick={()=>changePage(key.id)} alt="example" src={key.image} style={{width: 300, height: 200, margin:"0px"}}/>}>
              <Flex gap="4px 0" wrap>
    </Flex>
    <Meta title={key.name} description={key.description} />
    <h4  style={{color:"blue", fontSize:"14px"}}>  Brand : { key.brand} 

         {" "}  For - {key.category}
    </h4>
    <h4 style={{color:"red", fontSize:"16px"}}> Price : {key.price} </h4> 
    <Button variant="dark" style={{width:"250px"}} 
    onClick={()=>{addcart(key.id,key.name, key.category, key.brand, key.price, key.description, key.image)}}><FaCartShopping/>  Add To Cart</Button>
  </Card>

            </>
            )
        }        
    }

    if (priceproduct==4000)
        {
            if (key.price>2000 && key.price<4001 )
            {
                return(
                <>
                <Card hoverable style={{ width: 300, backgroundColor:"rgb(241, 241, 241)", margin:"50px 0px 0px 0px"}} 
                cover={<img onClick={()=>changePage(key.id)} alt="example" src={key.image} style={{width: 300, height: 200, margin:"0px"}}/>}>
                  <Flex gap="4px 0" wrap>
        </Flex>
        <Meta title={key.name} description={key.description} />
        <h4  style={{color:"blue", fontSize:"14px"}}>  Brand : { key.brand} 
    
             {" "}  For - {key.category}
        </h4>
        <h4 style={{color:"red", fontSize:"16px"}}> Price : {key.price} </h4> 
        <Button variant="dark" style={{width:"250px"}} 
        onClick={()=>{addcart(key.id,key.name, key.category, key.brand, key.price, key.description, key.image)}}><FaCartShopping/>  Add To Cart</Button>
      </Card>
    
                </>
                )
            }        
        }


        if (priceproduct==5000)
            {
                if (key.price>4000 && key.price<5001 )
                {
                    return(
                    <>
                    <Card hoverable style={{ width: 300, backgroundColor:"rgb(241, 241, 241)", margin:"50px 0px 0px 0px"}} 
                    cover={<img onClick={()=>changePage(key.id)} alt="example" src={key.image} style={{width: 300, height: 200, margin:"0px"}}/>}>
                      <Flex gap="4px 0" wrap>
            </Flex>
            <Meta title={key.name} description={key.description} />
            <h4  style={{color:"blue", fontSize:"14px"}}>  Brand : { key.brand} 
        
                 {" "}  For - {key.category}
            </h4>
            <h4 style={{color:"red", fontSize:"16px"}}> Price : {key.price} </h4> 
            <Button variant="dark" style={{width:"250px"}} 
            onClick={()=>{addcart(key.id,key.name, key.category, key.brand, key.price, key.description, key.image)}}><FaCartShopping/>  Add To Cart</Button>
          </Card>
        
                    </>
                    )
                }        
            }
            if (priceproduct==6000)
                {
                    if (key.price>5000)
                    {
                        return(
                        <>
                        <Card hoverable style={{ width: 300, backgroundColor:"rgb(241, 241, 241)", margin:"50px 0px 0px 0px"}} 
                        cover={<img onClick={()=>changePage(key.id)} alt="example" src={key.image} style={{width: 300, height: 200, margin:"0px"}}/>}>
                          <Flex gap="4px 0" wrap>
                </Flex>
                <Meta title={key.name} description={key.description} />
                <h4  style={{color:"blue", fontSize:"14px"}}>  Brand : { key.brand} 
            
                     {" "}  For - {key.category}
                </h4>
                <h4 style={{color:"red", fontSize:"16px"}}> Price : {key.price} </h4> 
                <Button variant="dark" style={{width:"250px"}} 
                onClick={()=>{addcart(key.id,key.name, key.category, key.brand, key.price, key.description, key.image)}}><FaCartShopping/>  Add To Cart</Button>
              </Card>
                        </>
                        )
                    }        
                }
})






    const handleSubCategory=()=>{
        let api=`http://localhost:3000/data?category=${CatData}`
        axios.get(api).then((res)=>{
            setdata(res.data)
        })
        setDisplayState(true);
    }

    const handleSubPrice=()=>{
        let api="http://localhost:3000/data";
        axios.get(api).then((res)=>{
            setmypricedata(res.data)
        })
        setDisplayState(false);
    }



    return(
        <>

    <div id="shoppage">
            <div style={{width:"550px", paddingLeft:"20px",paddingTop:"100px", backgroundColor:"rgb(253, 234, 238)"}}>       
             <div style={{fontFamily:"Bahnschrift SemiBold SemiConden", fontSize:"30px"}}> Search By Category </div>
              <div style={{fontSize:"18px",fontWeight:"bold"}}>
              <input type="radio" value="men" name="cat" onChange={(e)=>{setCatData(e.target.value)}} /> Mens 
              <br/>
              <input type="radio" value="women" name="cat"  onChange={(e)=>{setCatData(e.target.value)}} /> Womens
              <br/>
              <input type="radio" value="kids" name="cat"  onChange={(e)=>{setCatData(e.target.value)}} /> Kids
             <br/>
             </div>
             <Button size="sm" onClick={handleSubCategory}>Search</Button>
             <br/> <br/>
             <div style={{fontFamily:"Bahnschrift SemiBold SemiConden", fontSize:"30px"}}>Search By Price</div> 
             <div style={{fontSize:"18px",fontWeight:"bold"}}>
             <input type="radio" value="2000"  name="price"
             onChange={(e)=>{setPriceData(e.target.value)}}/> Rs 2000 & below
             <br/>
             <input type="radio" value="4000"  name="price"
             onChange={(e)=>{setPriceData(e.target.value)}} /> Rs 2000 - 4000
             <br/>
             <input type="radio" value="5000"  name="price" 
             onChange={(e)=>{setPriceData(e.target.value)}} /> Rs 4000 - 5000
             <br/>
             <input type="radio" value="6000"  name="price" 
             onChange={(e)=>{setPriceData(e.target.value)}} /> Rs 5000 & above
             <br/>
             </div>
             <Button size="sm" onClick={handleSubPrice}>Search</Button>
            </div>


        <div>  
            <div id='mainhead'>
            <h1 style={{margin:"0px 0px 0px 320px", fontFamily:"Comic Sans MS"}}>Our Premium Products</h1>
            </div>
            <div id='newlaunch'>
           
                {displayState?ans:ans1}
            </div>
        </div>
    </div>
        </>
    )
}

export default Product;