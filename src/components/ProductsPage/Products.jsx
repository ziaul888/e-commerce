import React from "react";
import { ProductConsumer } from "../../context/Context";
import Title from "../Title";
import Product from "../Product";
export default function Products() {
  return (
    <ProductConsumer>
      {(value) => {
        const { filterProducts } = value;
        return (
          <section className="py-5">
            <div className="container">
              <Title center title="our products" />
              <div className="row py-5">
                {filterProducts.map((product) => {
                  return <Product key={product.id} product={product} />;
                })}
              </div>
            </div>
          </section>
        );
      }}
    </ProductConsumer>
  );
}
