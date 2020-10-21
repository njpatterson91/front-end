import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { displayedPotluck } from "../store/atoms";
import { useHistory, useParams } from "react-router-dom";
import { axiosWithAuth } from "../utilities/axiosWithAuth";
import { CreatePotluck as CSSGrid } from "../css/styledDiv";
import NavBar from "../components/NavBar";

export default function CreatePotluck(props) {
  const [edit, setEdit] = useRecoilState(displayedPotluck);
  const params = useParams();
  const id = params.id;
  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setEdit({
      ...edit,
      [name]: value,
    });
  };

  let history = useHistory();

  const submitPotluck = () => {
    axiosWithAuth()
      .put(`/potlucks/${id}`, edit)
      .then((res) => {
        console.log(res.data);
        history.push(`/view/${id}`);
      })
      .catch((err) => console.log(err));
  };
  return (
    <CSSGrid>
      <div class="grid-container">
        <NavBar />
        <div class="CreatePotluckHeader">
          <h3>Enter Potluck Name</h3>
          <input
            type="text"
            name="event_name"
            value={edit.event_name}
            onChange={changeHandler}
          />
        </div>
        <div class="Date">
          <p>Date</p>
          <input
            type="date"
            name="event_date"
            value={edit.event_date}
            onChange={changeHandler}
          />
        </div>
        <div class="Location">
          <p>Location</p>
          <input
            type="text"
            name="event_address"
            value={edit.event_address}
            onChange={changeHandler}
          />
        </div>
        <div class="Time">
          <p>Time</p>
          <input
            type="time"
            name="event_time"
            value={edit.event_time}
            onChange={changeHandler}
          />
        </div>
        <div class="NeededItemsHeader">
          <h3>Items Needed</h3>
        </div>
        <div class="ItemList"></div>
        <div class="AddItem">
          <button onClick={submitPotluck}>Submit</button>
        </div>
      </div>
    </CSSGrid>
  );
}
