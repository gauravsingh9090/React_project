import { BrowserRouter , Routes , Route } from "react-router-dom";
import Layout from "./Layout"
import Home from "./pages/Home"
import New from "./pages/New"
import Services from "./pages/Services"
import Product from "./pages/Product";
import Sale from "./pages/Sales";
import Mensshoes from "./pages/Mensshoes"
import Womenshoes from "./pages/Womenshoes"
import MenSlippers from "./pages/MenSlippers"
import Womenslippers from "./pages/Womenslippers"
import Cart from "./pages/Cart"
import Kids from "./pages/Kids"
import ProductDetail from "./pages/ProductDetail";
import CheckOut from "./pages/CheckOut";
import OrderPlace from "./pages/OrderPlace";
const App = () => {
   return (
     <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                   <Route index element={<Home/>}/>
                   <Route path="home" element={<Home/>} />
                   <Route path="new" element={<New/>}/>
                   <Route path="services" element={<Services/>} />
                   <Route path="product" element={<Product/>} />
                   <Route path="sale" element={<Sale/>} />
                   <Route path="menshoes" element={<Mensshoes/>} />
                   <Route path="womenshoes" element={<Womenshoes/>} />
                   <Route path="menslippers" element={<MenSlippers/>} />
                   <Route path="womenslippers" element={<Womenslippers/>} />
                   <Route path="mycart" element={<Cart/>} />
                   <Route path="kids" element={<Kids/>} />
                   <Route path="/productdetail/:id" element={<ProductDetail/>} />
                   <Route path="/checkout" element={<CheckOut/>} />
                   <Route path="orderplace" element={<OrderPlace/>} />
                 </Route>
            </Routes>
        </BrowserRouter>
     </>
   )
}
export default App;