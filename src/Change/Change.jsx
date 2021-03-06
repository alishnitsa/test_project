import React from "react";
import { closeChange } from "../scripts/openOrCloseChange";

import "../css/change.css";

class Change extends React.Component {
  constructor(props) {
    super(props);
    this.wrapper = React.createRef();
    this.openChange = this.openChange.bind(this);
    this.closeChange = this.closeChange.bind(this);
  }

  openChange() {
    this.wrapper.current.style.display = "flex";
  }

  closeChange() {
    this.wrapper.current.style.display = "none";
  }

  render() {
    return (
      <div className="change_wrapper">
        <div className="change">
          <div className="change_title">Иванов Иван</div>
          <div className="path" onClick={closeChange}>
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.8859 1.11411C20.0668 0.295297 18.7391 0.295297 17.9201 1.11411L11.0131 8.02105L4.10619 1.11411C3.28319 0.319229 1.975 0.330596 1.16593 1.13966C0.356871 1.94872 0.345503 3.25692 1.14038 4.07992L8.04733 10.9869L1.14038 17.8938C0.595133 18.4204 0.37646 19.2003 0.56841 19.9336C0.760361 20.6669 1.33306 21.2396 2.0664 21.4316C2.79973 21.6235 3.57958 21.4049 4.10619 20.8596L11.0131 13.9527L17.9201 20.8596C18.7431 21.6545 20.0513 21.6431 20.8603 20.8341C21.6694 20.025 21.6808 18.7168 20.8859 17.8938L13.9789 10.9869L20.8859 4.07992C21.7047 3.26086 21.7047 1.93317 20.8859 1.11411Z"
                fill="#6979F8"
              />
            </svg>
          </div>
          <div className="line"></div>
          <form className="change_form">
            <input type="text" className="fname" />
            <input type="text" className="name" />
            <input type="text" className="mname" />
            <select
              name="change_dropDown"
              id="change_dropDown"
              defaultValue="active"
            >
              <option value="paused">Приостановлен</option>
              <option value="active">Подписка активна</option>
              <option value="blocked">Заблокирован</option>
            </select>
            <input type="button" value="Сохранить" onClick={closeChange} />
          </form>
        </div>
      </div>
    );
  }
}

// const Change = () => (
//   <div className="change_wrapper">
//     <div className="change">
//       <div className="change_title">Иванов Иван</div>
//       <div className="path" onClick={closeChange}>
//         <svg
//           width="22"
//           height="22"
//           viewBox="0 0 22 22"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M20.8859 1.11411C20.0668 0.295297 18.7391 0.295297 17.9201 1.11411L11.0131 8.02105L4.10619 1.11411C3.28319 0.319229 1.975 0.330596 1.16593 1.13966C0.356871 1.94872 0.345503 3.25692 1.14038 4.07992L8.04733 10.9869L1.14038 17.8938C0.595133 18.4204 0.37646 19.2003 0.56841 19.9336C0.760361 20.6669 1.33306 21.2396 2.0664 21.4316C2.79973 21.6235 3.57958 21.4049 4.10619 20.8596L11.0131 13.9527L17.9201 20.8596C18.7431 21.6545 20.0513 21.6431 20.8603 20.8341C21.6694 20.025 21.6808 18.7168 20.8859 17.8938L13.9789 10.9869L20.8859 4.07992C21.7047 3.26086 21.7047 1.93317 20.8859 1.11411Z"
//             fill="#6979F8"
//           />
//         </svg>
//       </div>
//       <div className="line"></div>
//       <form className="change_form">
//         <input type="text" className="fname" />
//         <input type="text" className="name" />
//         <input type="text" className="mname" />
//         <select
//           name="change_dropDown"
//           id="change_dropDown"
//           defaultValue="active"
//         >
//           <option value="paused">Приостановлен</option>
//           <option value="active">Подписка активна</option>
//           <option value="blocked">Заблокирован</option>
//         </select>
//         <input type="button" value="Сохранить" onClick={closeChange} />
//       </form>
//     </div>
//   </div>
// );

export { Change };
