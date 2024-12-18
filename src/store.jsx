import { configureStore } from "@reduxjs/toolkit";
import mydata from "./addtocartslice"
const store= configureStore({
    reducer:{
        addcart:mydata
    }
})

export default store;