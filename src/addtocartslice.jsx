import { createSlice } from "@reduxjs/toolkit";
import { message } from 'antd';
const addtocart=createSlice({
    name:"addcart",
    initialState:{
        cart:[]
    },
    reducers:{
        addcartdata:(state,action)=>
        {
            const mycart= state.cart.filter((key)=>{
                if(key.id==action.payload.id)
                {
                    return true;

                }
            })
            if(mycart.length>=1)
            {
                message.warning("This Product Aleready Added!!!")
            }
            else
            {
                state.cart.push(action.payload)
                console.log(action.payload)
            }
        },
        qntyinc:(state, action)=>
        {
            for(var i=0; i<state.cart.length; i++)
            {
                if(state.cart[i].id==action.payload.id)
                {
                    state.cart[i].qnty++;
                }
            }
        },
        qntydec:(state,action)=>
        {
            for(var i=0; i<state.cart.length; i++)
            {
                if(state.cart[i].id==action.payload.id)
                {
                    if(state.cart[i].qnty<=0)
                    {
                        state.cart=state.cart.filter((key)=>key.id!=action.payload.id)
                    }
                    else
                    {
                        state.cart[i].qnty--;
                    }
                }
            }
        },
        deleteitem:(state,action)=>{
            state.cart=state.cart.filter((key)=>key.id!=action.payload.id)
        }

    }
})

export default addtocart.reducer;
export const {addcartdata,qntyinc,qntydec,deleteitem} =addtocart.actions;