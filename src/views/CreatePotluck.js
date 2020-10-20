import { render } from "@testing-library/react";
import React, { useEffect } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { createPotluck } from "../store/atoms";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utilities/axiosWithAuth";

const CSSGrid = styled.div`
  input {
    margin: 5% auto;
  }
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 10px 10px;
    grid-template-areas:
      "NavBar NavBar NavBar NavBar NavBar"
      ". CreatePotluckHeader CreatePotluckHeader CreatePotluckHeader ."
      ". Date Time Location ."
      ". Date Time Location ."
      ". NeededItemsHeader NeededItemsHeader NeededItemsHeader ."
      ". ItemList ItemList ItemList ."
      ". ItemList ItemList ItemList ."
      ". ItemList ItemList ItemList ."
      ". ItemList ItemList ItemList ."
      ". AddItem AddItem AddItem .";
    max-height: 100vh;
    min-height: 100vh;
    background-color: #457b9d;
  }

  .NavBar {
    grid-area: NavBar;
  }

  .CreatePotluckHeader {
    text-align: center;
    grid-area: CreatePotluckHeader;
    background-color: #1d3557;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .Date {
    text-align: center;
    grid-area: Date;
    background-color: #83aec9;
    margin: 0% 2%;
    margin-bottom: 1%;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  .Location {
    text-align: center;
    grid-area: Location;
    background-color: #83aec9;
    margin: 0% 2%;
    margin-bottom: 1%;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  .Time {
    text-align: center;
    grid-area: Time;
    background-color: #83aec9;
    margin: 0% 2%;
    margin-bottom: 1%;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  .NeededItemsHeader {
    grid-area: NeededItemsHeader;
    background-color: #1d3557;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .ItemList {
    grid-area: ItemList;
    background-color: #83aec9;
    margin: 0% 2%;
    margin-bottom: 1%;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  .AddItem {
    text-align: center;
    grid-area: AddItem;
    background-color: #285ca5;
    margin-bottom: 2%;
  }

  /* For presentation only, no need to copy the code below */
  p {
    text-align: center;
    border-bottom: 2px solid black;
    margin: 0 auto;
    font-size: 20px;
  }
`;

export default function CreatePotluck(props) {
  const [create, setCreate] = useRecoilState(createPotluck);
  const id = window.localStorage.getItem("userID");
  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCreate({
      ...create,
      [name]: value,
    });
    console.log(create);
  };

  useEffect(() => {
    console.log(create);
  }, [create]);

  let history = useHistory();

  const submitPotluck = () => {
    console.log(create);
    axiosWithAuth()
      .post(`/users/${id}/potlucks`, create)
      .then((res) => {
        console.log(res.data);
        history.push(`/view/${res.data.newPotluck.id}`);
      })
      .catch((err) => console.log(err));
  };
  return (
    <CSSGrid>
      <div class="grid-container">
        <div class="NavBar"></div>
        <div class="CreatePotluckHeader">
          <h3>Enter Potluck Name</h3>
          <input
            type="text"
            name="event_name"
            value={create.event_name}
            onChange={changeHandler}
          />
        </div>
        <div class="Date">
          <p>Date</p>
          <input
            type="date"
            name="event_date"
            value={create.event_date}
            onChange={changeHandler}
          />
        </div>
        <div class="Location">
          <p>Location</p>
          <input
            type="text"
            name="event_address"
            value={create.event_address}
            onChange={changeHandler}
          />
        </div>
        <div class="Time">
          <p>Time</p>
          <input
            type="time"
            name="event_time"
            value={create.event_time}
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
