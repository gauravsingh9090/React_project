import cycel1 from "../images/cycle1.jpg"
import cycel2 from "../images/cycle2.jpg"
import cycel3 from "../images/cycle3.jpg"

const Services=()=>{
    return(
        <>
        <div style={{overflowX:"hidden"}}>
            <img src="./image/service.webp" alt="" style={{width:"1510px"}}/>
        </div>
        <div>
           <div style={{margin:"70px 0px 70px 250px"}}>
            <div style={{textAlign:"center", width:"1000px", color:"gray"}}> The idea of Neeman’s came to life while addressing the problem statement of ‘Why can’t there be one shoe for everything?’. So, we went to work creating minimal designs that are multi-use and fit effortlessly into everyday lives. But we didn’t just stop there, for we wanted to deliver fashion that is both comfortable and responsible, good for you & the planet. 5 years and over a million pairs sold later, Neeman’s is now largely regarded as the brand that is revolutionizing footwear trends in the country and encouraging Indians to Change The Norm with what they buy & wear.</div>
           </div>
           <div style={{display:"flex", width:"1100px", margin:"50px 0px 0px 200px", padding:"50px", backgroundColor:"rgb(253, 234, 238)"}}>
            <div >
                <video src="./image/service.mp4" controls loop autoplay style={{width:"450px"}}></video>
            </div>
            <div style={{width:"600px", margin:"380px 0px 0px 50px"}}> 
                <div style={{textAlign:"start", fontFamily:"Comic Sans MS", fontSize:"20px"}}> <b> There's comfort & then there's Neeman's comfort!</b></div> <br />
                <div style={{textAlign:"start"}}>‘I only wear Neeman’s now!’, say a lot of our customers. At Neeman’s, we design our products to be your comfort zone every day. This is why 90% of our customers rate us 4.5* for comfort and 1 in every 4 customers own more than a pair.</div>
            </div>
           </div>
           <div style={{margin:"70px 0px 70px 330px"}}>
            <div style={{textAlign:"center", width:"900px", fontSize:"40px", fontFamily:"Bahnschrift SemiBold SemiConden"}} > <b> Always on trend for you!</b></div>
            <div style={{textAlign:"center", width:"900px", color:"gray"}}>‘Hey, where did you get those shoes from?’ is a question our consumers are getting used to answering, quite proudly. At Neeman’s, we are committed to upping your fashion quotient by aligning our designs with the trends of today, so you look and feel good.</div>
           </div>
        </div>
        <div style={{ backgroundColor:"rgb(253, 234, 238)",paddingBottom:"20px"}}>
            <div>
            <div style={{textAlign:"center", width:"900px", fontSize:"40px", fontFamily:"Bahnschrift SemiBold SemiConden", margin:"0px 0px 0px 330px", paddingTop:"20px"}} > <b> Your conscious dose of fashion</b></div>
            <div style={{display:"flex", margin:"10px 0px 0px 150px"}}>
                 <img src={cycel1} style={{margin:"10px"}} alt="" />
                 <img src={cycel2} style={{margin:"10px"}} />
                 <img src={cycel3} style={{margin:"10px"}}/>
            </div>
        </div>
        </div>
        <div style={{margin:"70px 0px 70px 330px"}}>
            <div style={{textAlign:"center", width:"900px", fontSize:"40px", fontFamily:"Bahnschrift SemiBold SemiConden"}} > <b> Embracing Responsibility</b></div>
            <div style={{textAlign:"center", width:"900px", color:"gray"}}>As a brand, we are constantly striving to be that Indian fashion brand you will admire, be proud of and recommend happily to friends & family. This is why, as far as possible, we go the extra mile to make sure our product materials, processes, and everything else have responsibility written all over it.</div>
        </div>
        <div style={{margin:"70px 0px 70px 330px"}}>
            <div style={{textAlign:"center", width:"900px", fontSize:"40px", fontFamily:"Bahnschrift SemiBold SemiConden"}} > <b> Comfort & Price that fit perfectly!</b></div>
            <div style={{textAlign:"center", width:"900px", color:"gray"}}>We are making comfortable & responsible fashion accessible to all at optimum price points and encouraging India to buy & try our products, with our customer-friendly 7-day return & exchange policy.</div>
        </div>
        </>
    )
}

export default Services;