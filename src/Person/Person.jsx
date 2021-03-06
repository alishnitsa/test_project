import React from "react";

import { openChange } from "../scripts/openOrCloseChange";
import { Change } from "../Change/Change";

// class Person extends React.Component {
//   constructor(props) {
//     super(props);
//     this.openChange = this.openChange.bind(this);
//   }

// }

const abbreviationName = (name) => name.replace(/(\S)\S*/, " $1.");

const rounding = (balance) => Number(balance).toFixed(1);

const Person = (props) => (
  <section className="person" onClick={openChange}>
    <div className="person_item">
      <div className="avatar"></div>
      <div className="person_name">
        <span className="fname">{props.fname}</span>
        <span className="name">&nbsp;{abbreviationName(props.name)}</span>
        <span className="mname">&nbsp;{abbreviationName(props.mname)}</span>
      </div>
      <div className="balance">Баланс: {rounding(props.balance)}</div>
    </div>
    <div className="person_item">
      {" "}
      <div className="date">Последнее изменение: {props.date} секунд назад</div>
      <div className="status">
        <select name="dropDown" id="dropDown">
          <option value="paused">Приостановлен</option>
          <option value="active" defaultValue>
            Подписка активна
          </option>
          <option value="blocked">Заблокирован</option>
        </select>
      </div>
    </div>
  </section>
);

export { Person };
