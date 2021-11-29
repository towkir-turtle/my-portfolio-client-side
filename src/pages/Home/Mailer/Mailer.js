import React from "react";
import emailjs from "emailjs-com";

const Mailer = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f3eq7cd",
        "template_fnykhqx",
        e.target,
        "user_YrLJe3VgvZJvozA7zOSFr"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div style={{ padding: "50px 0", background: "#111a28" }}>
      <div className="container" style={{ width: "50%" }}>
        <h2
          style={{
            textAlign: "center",
            color: "#fff",
            marginTop: "20px",
          }}
        >
          Contact Form
        </h2>
        <form
          className="row"
          style={{ margin: "25px, 85px, 75px, 100px" }}
          onSubmit={sendEmail}
        >
          <lebel>Name</lebel>
          <input type="text" name="name" className="form-control" />

          <lebel>Email</lebel>
          <input
            type="email"
            name="user_email"
            className="form-control"
            id=""
          />

          <lebel>Message</lebel>
          <textarea name="message" className="form-control" rows="4" />
          <input
            style={{ marginTop: "30px" }}
            type="submit"
            className="form-control btn btn-primary"
            value="Send"
          />
        </form>
      </div>
    </div>
  );
};

export default Mailer;
