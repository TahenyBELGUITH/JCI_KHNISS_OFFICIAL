import React from "react";
import "./Add.css";
import addWave from "../../Images/Decor/addwWave.svg";
import addWaveBtm from "../../Images/Decor/addbtmwave.svg";

const Add = () => {
  return (
    <div id="add">
      <img src={addWave} />
      <h1 align="center">💙 Glade to see you among us 💙 </h1>
      <div className="container">
        <div className="inputs">
          <form>
            <label>EMAIL</label>
            <input type="email" placeholder="example@test.com" />
            <label>FIRST NAME</label>
            <input type="text" placeholder="Taheny" />
            <label>LAST NAME</label>
            <input type="text" placeholder="Belguith" />
            <label>DATE OF BIRTH</label>
            <input type="date" />
            <label>PLACE OF RESIDENCE</label>
            <input type="text" />
            <p>Please select your Profession :</p>
            <select name="profession" id="profession">
              <option value="">--Choose an option--</option>
              <option value="raised">RAISED</option>
              <option value="student">STUDENT</option>
              <option value="employee">EMPLOYEE</option>
              <option value="other">OTHER</option>
            </select>

            <button type="submit"> JOIN US </button>
          </form>
        </div>
      </div>
      <img src={addWaveBtm} className="add-wave-btm" />
    </div>
  );
};

export default Add;
