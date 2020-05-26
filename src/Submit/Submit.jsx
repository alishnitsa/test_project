import React from "react";
import ReactDOM from "react-dom";
import { List } from "../List/List";

function Submit() {
  function Сomparison(e) {
    var login = document.getElementById("active").value;
    var password = document.getElementById("typing").value;
    if ((login == "test") & (password == "test")) {
      ReactDOM.render(<List />, document.getElementById("root"));
    } else alert("Неверно введены данные. Попробуйте снова");
  }

  return <input type="submit" value="ВОЙТИ" onClick={Сomparison} />;
}

export { Submit };
