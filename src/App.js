import React from "react";
// TODO: import useFormik from formik library
// import './index.css';
import { useFormik } from "formik";

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      emailField: "",
      pswField: "",
    },
    onSubmit: (value) => {
      alert("Login Successful");
      console.log("form:", value);
    },
    validate: (values) => {
      let errors = {};
      if (
        !values.emailField.includes("@") &&
        !values.emailField.includes(".")
      ) {
        errors.emailField = "Email should be an email";
      }
      if (!values.emailField) {
        errors.emailField = "Field required";
      }
      if (!values.pswField) {
        errors.pswField = "Field required";
      }
      return errors;
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input
          id="emailField"
          name="emailField"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.emailField}
        />
        {formik.errors.emailField ? (
          <div id="emailError" style={{ color: "red" }}>
            {formik.errors.emailField}
          </div>
        ) : null}
        <div>Password</div>
        <input
          id="pswField"
          name="pswField"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.pswField}
        />
        {formik.errors.pswField ? (
          <div id="pswError" style={{ color: "red" }}>
            {formik.errors.pswField}
          </div>
        ) : null}
        <div>
          <button id="submitBtn" type="submit" name="submitBtn">
            Sumbit
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
