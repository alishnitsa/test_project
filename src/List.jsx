import React from "react";
import Loader from "./Loader";
import Modal from "./Modal";
import Change from "./Change";

import Person from "./Person";
import navScript from "./navScript";

import "./list.css";

const List = () => (
  <div className="list_desktop">
    <Change />
    <Modal />
    <nav className="navigation" onClick={navScript}>
      <a href="#" className="link active">
        Все
      </a>
      <a href="#" className="link">
        Заблокированные
      </a>
      <a href="#" className="link">
        Активные
      </a>
    </nav>
    <div className="container">
      <Person
        fname="Иванов"
        name="Иван"
        mname="Иванович"
        balance="1234.467890"
        date="10"
      />
      <Person
        fname="Иванов"
        name="Иван"
        mname="Иванович"
        balance="1234.467890"
        date="10"
      />
      <Person
        fname="Иванов"
        name="Иван"
        mname="Иванович"
        balance="1234.467890"
        date="10"
      />{" "}
      <Person
        fname="Иванов"
        name="Иван"
        mname="Иванович"
        balance="1234.467890"
        date="10"
      />{" "}
      <Person
        fname="Иванов"
        name="Иван"
        mname="Иванович"
        balance="1234.467890"
        date="10"
      />{" "}
      <Person
        fname="Иванов"
        name="Иван"
        mname="Иванович"
        balance="1234.467890"
        date="10"
      />{" "}
      <Person
        fname="Иванов"
        name="Иван"
        mname="Иванович"
        balance="1234.467890"
        date="10"
      />{" "}
      <Person
        fname="Иванов"
        name="Иван"
        mname="Иванович"
        balance="1234.467890"
        date="10"
      />{" "}
      <Person
        fname="Иванов"
        name="Иван"
        mname="Иванович"
        balance="1234.467890"
        date="10"
      />
      <Person
        fname="Иванов"
        name="Иван"
        mname="Иванович"
        balance="1234.467890"
        date="10"
      />
    </div>
    <div className="gradient"></div>
  </div>
);

export default List;
