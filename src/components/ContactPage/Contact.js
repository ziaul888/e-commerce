import React from "react";
import Title from "../Title";

function Contact() {
  return (
    <section className="py-5">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-5">
          <Title title="Contact us" />
          <form className="mt-5">
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                className="form-control"
                placeholder="bappy"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="@email"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                className="form-control"
                placeholder="import"
              />
            </div>
            <div className="form">
              <textarea
                name="message"
                className="form-control"
                rows="10"
                placeholder="hellow body"
              >
                {" "}
              </textarea>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
