import React from "react";
import CartItem from "./CartItem";
import { ProductConsumer } from "../../context";

export default function CartList() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <ProductConsumer>
            {(value) => {
              const { cart, icrement, decremnet, removeItem } = value;
              if (cart.length === 0) {
                return (
                  <h1 className="text-title text-center my-5">
                    your cart is empty
                  </h1>
                );
              }
              return (
                <>
                  {cart.map((item) => (
                    <CartItem
                      key={item.id}
                      cartItem={item}
                      icrement={icrement}
                      decremnet={decremnet}
                      removeItem={removeItem}
                    ></CartItem>
                  ))}
                </>
              );
            }}
          </ProductConsumer>
        </div>
      </div>
    </div>
  );
}
