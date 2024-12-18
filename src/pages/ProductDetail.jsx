import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import loadingGIF from "../images/loading.gif"
import cycleIMG from "../images/cycle.gif"
import { addcartdata } from "../addtocartslice";
import { useDispatch } from "react-redux";
const ProductDetail = () => {

    const dispatch = useDispatch();
     
      const {id} = useParams();
      const [productDetail ,setProductDetails] = useState({});
     const [loading , setLoading] = useState(true);


     setTimeout(()=> {
           setLoading(false)
     },500)


     const loadData = () => {
           const API = `http://localhost:3000/data/?id=${id}`
           axios.get(API).then((res)=> {
               setProductDetails(res.data[0]);
               console.log(res.data[0])
           })
        }

        const addcart=(id, name, cate, brand, price, desc, img)=>{
            dispatch(addcartdata({id:id, name:name, category:cate, brand:brand, price:price,
              description:desc, image:img, qnty:1 }))
          }

    useEffect(()=>{
      loadData();
    } , [])

      if (loading) {
        return (
            <>
              <div style={{display:"flex" , justifyContent:"center" , alignItems:"center"}}>
                 <img  src={cycleIMG} alt="" />
                 <br />
                 <h3>Loading....</h3>
              </div>
            </>
        )
      }
      
      return (
        <div style={{display:"flex" , justifyContent:"center" , alignItems:"center" , gap:"20px" , padding:"50px"}}>
         <div>
            <img src={productDetail.image} alt="" />
         </div>
         <div>
            <h2>{productDetail.name}</h2>
            <h4> Price : <span style={{color:"green"}}>₹ {productDetail.price}</span></h4>
             <h4> For : <span style={{color:"blue"}}>{productDetail.category}</span></h4>
             <button style={{backgroundColor:"grey" , color:"black", fontWeight:"700" , borderRadius:"10px" , padding:"5px 10px"}} onClick={()=>addcart(productDetail.id,productDetail.name, productDetail.category, productDetail.brand, productDetail.price, productDetail.description, productDetail.image)}>Add To Cart </button>
         </div>
        </div>     
      )
}
export default ProductDetail;
