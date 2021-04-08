import React from "react";
import { ProductConsumer } from "../../context";

export default function CartTotal() {
  return (
    <div className="container">
      <div className="row">
        <ProductConsumer>
          {(value) => {
            const { clearCartItem, cartSubTotals, cartTotal, cartTax } = value;
            return (
              <div className="col  text-title text-center py-4">
                <button
                  className="btn btn-outline-danger text-capitalize mb-4 "
                  onClick={clearCartItem}
                >
                  clear cart
                </button>
                <h3> subTotal:{cartSubTotals}</h3>
                <h3>tax:{cartTax}</h3>
                <h3>total:{cartTotal} </h3>
              </div>
            );
          }}
        </ProductConsumer>
      </div>
    </div>
  );
}
