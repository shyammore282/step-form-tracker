import { useState } from "react";
import "./style.css";

const FormValidation = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    validateInput(name, value);
  };

  const validateInput = (getName, getValue) => {
    switch (getName) {
      case "username":
        setError({
          ...error,
          username:
            getValue.length < 3 ? "user name must be at least 3 cahr" : "",
        });
        break;
      case "email":
        setError({
          ...error,
          email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(getValue)
            ? ""
            : "invalid email id",
        });
        break;
      case "password":
        setError({
          ...error,
          password:
            getValue.length < 5 ? "password must be greater then 5 cahr" : "",
        });
        break;

      default:
        break;
    }
  };

  // validation cheaking atfter the data or form submit
  // const handleFormSubmit = (e) => {
  //   const validateError = {};

  //   Object.keys(formData).forEach((dateItems) => {
  //     validateInput(dateItems, formData[dateItems]);
  //     if (error[dateItems]) {
  //       validateError[dateItems] = error[dateItems];
  //     }
  //   });

  //   setError((prevError) => ({ ...prevError, ...validateError }));

  //   if (Object.values(validateError).every((error) => error === "")) {
  //     console.log("no error found");
  //   } else {
  //     console.log("plese fixed the error");
  //   }
  //   e.preventDefault();
  // };
  // console.log(formData);
  return (
    <>
      <div className="container">
        <h2 className="title">Form Validation</h2>
        <form action="">
          <div className="input-wrapper">
            <label htmlFor="username">User Name :</label>
            <input
              className="text"
              type="text"
              name="username"
              id="username"
              value={formData.username}
              placeholder="Enter your username"
              onChange={handleFormChange}
            />
          </div>
          <span className="texterror">{error?.username}</span>
          <div className="input-wrapper">
            <label htmlFor="email">Email :</label>
            <input
              className="text"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              placeholder="Enter your email"
              onChange={handleFormChange}
            />
          </div>
          <span className="texterror">{error?.email}</span>
          <div className="input-wrapper">
            <label htmlFor="password">Password :</label>
            <input
              className="text"
              type="password"
              name="password"
              id="password"
              value={formData.password}
              placeholder="Enter your password"
              onChange={handleFormChange}
            />
          </div>
          <span className="texterror">{error?.password}</span>
          <div className="button-wrapper">
            <button className="formbutton" type="submit">
              submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormValidation;
