import React from "react";
import './Form.css'
import AccountIcon from'./images/account-icon.png';

const Form = () => {
   return(
      <div className="main-form-box">
         <div className="submain-form-box">
            <div className="account-icon">
               <img src={AccountIcon} alt="Account icon"/>
            </div>
         </div>
      </div>
   );
}

export default Form;