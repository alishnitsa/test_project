import React from "react";
import ReactDOM from "react-dom";
import viewPass from "./viewPass";

import Submit from "./Submit.jsx";

import "./main.css";

const Form = () => (
  <form action="" className="form_group">
    <label>
      <input
        type="text"
        id="active"
        className="active"
        name="active"
        placeholder="Active"
      />
    </label>
    <label>
      <input
        type="password"
        id="typing"
        name="typing"
        placeholder="******"
        maxLength="16"
      />
    </label>
    <a href="#" className="view_psw" onClick={viewPass}>
      <svg
        width="16"
        height="12"
        viewBox="0 0 16 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 0.363636C4.36364 0.363636 1.25818 2.62545 0 5.81818C1.25818 9.01091 4.36364 11.2727 8 11.2727C11.6364 11.2727 14.7418 9.01091 16 5.81818C14.7418 2.62545 11.6364 0.363636 8 0.363636ZM8 9.45455C5.99273 9.45455 4.36364 7.82545 4.36364 5.81818C4.36364 3.81091 5.99273 2.18182 8 2.18182C10.0073 2.18182 11.6364 3.81091 11.6364 5.81818C11.6364 7.82545 10.0073 9.45455 8 9.45455ZM8 3.63636C6.79273 3.63636 5.81818 4.61091 5.81818 5.81818C5.81818 7.02545 6.79273 8 8 8C9.20727 8 10.1818 7.02545 10.1818 5.81818C10.1818 4.61091 9.20727 3.63636 8 3.63636Z"
          fill="#6979F8"
        />
      </svg>
    </a>
    <Submit />
  </form>
);

export default Form;
