import React from 'react'
import {ProductConsumer} from "../context"
import styled from "styled-components"

export default function CartPage() {
    return (
        <>
           <ProductConsumer>
           {value=>{   
             const {cartOpen,cart,closeCart}=value;       
             return (
               <CartWrapper show={cartOpen} onClick={closeCart}>
              <p> Cart items</p>
               </CartWrapper>
             )
           }}
         </ProductConsumer>
        </>
    )
}



const CartWrapper=styled.div`
position:fixed;
top:60px;
right:0;
width:100%;
height:100%;
background:var(--mainGrey);
z-index:1;
border-left:3px solid var(--primaryColor);
transform: ${props => (props.show ? "translateX(0)" : "translateX(100%)")};
transition:var(--mainTransition);
@media (min-width:576px){
  width:20rem;
}
`