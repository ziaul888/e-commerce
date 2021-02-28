import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import singleProductBcg from "../images/singleProductBcg.jpeg";
import { ProductConsumer } from "../context";

export default function SingleProductPage() {
  return (
    <>
      <Hero img={singleProductBcg} title="single product" />
      <ProductConsumer>
        {(value) => {
          const { singleProduct, addToCart, loading } = value;

          if (loading) {
            console.log("hello loading");
            return <h1>product loading</h1>;
          }
          const {
            company,
            price,
            title,
            description,
            id,
            image,
          } = singleProduct;
          return (
            <section className="py-5">
              <div className="container">
                <div className="row">
                  <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                    <img
                      src={`../${image}`} //src={iamge}
                      alt="img"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                    <h5 className="text-title mb-4">model:{title}</h5>
                    <h5 className="text-capitalize text-muted mb-4">
                      company:{company}
                    </h5>
                    <h5 className="text-main text-capitalize mb-4">
                      {" "}
                      price:${price}
                    </h5>
                    <p className="text-capitalize text-title mt-3">
                      some info about product:
                    </p>
                    <p>{description}</p>
                    <button
                      type="button"
                      className="main-link"
                      style={{ margin: "0.75rem" }}
                      onClick={() => addToCart(id)}
                    >
                      add To cart
                    </button>
                    <Link
                      to="/product"
                      className="main-link"
                      style={{ margin: "0.75rem" }}
                    >
                      back to product
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          );
        }}
      </ProductConsumer>
    </>
  );
}
