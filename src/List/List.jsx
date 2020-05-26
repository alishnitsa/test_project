import React from "react";
import { Modal } from "../Modal/Modal";
import { Change } from "../Change/Change";

import { Person } from "../Person/Person";

import "../css/list.css";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };

    this.navigation = React.createRef();
    this.navScript = this.navScript.bind(this);

    this.wrapper = React.createRef();
    this.openChange = this.openChange.bind(this);
    this.closeChange = this.closeChange.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 10000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  navScript(e) {
    let nav = this.navigation.current;
    for (let i = 0; i < nav.children.length; i++) {
      nav.children[i].classList.remove("active");
    }
    e.target.classList.add("active");
  }

  openChange() {
    this.wrapper.current.style.display = "flex";
  }

  closeChange() {
    this.wrapper.current.style.display = "none";
  }

  render() {
    return (
      <div className="list_desktop">
        <Change />
        <Modal />
        <nav
          className="navigation"
          ref={this.navigation}
          onClick={this.navScript}
        >
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
  }
}

export { List };
