import React, { useEffect, useState } from "react";
import "../css/potluckView.css";
import { Input, Button } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { displayedPotluck, displayedPotluckGuests } from "../store/atoms";
import { useParams } from "react-router-dom";
import { axiosWithAuth } from "../utilities/axiosWithAuth";
import { useHistory } from "react-router-dom";

const CSSGrid = styled.div`
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 10px 10px;
    grid-template-areas:
      "NavBar NavBar NavBar NavBar NavBar"
      "Facilitator ItemsToBringHeader ItemsToBringHeader ChatHeader ChatHeader"
      "Facilitator ItemsToBring ItemsToBring Chat Chat"
      "Facilitator ItemsToBring ItemsToBring Chat Chat"
      ". ItemsToBring ItemsToBring Chat Chat"
      ". ItemsToBring ItemsToBring Chat Chat"
      "AttendeesHeader ItemsImBringingHeader ItemsImBringingHeader Chat Chat"
      "Attendees ItemsImBringing ItemsImBringing Chat Chat"
      "Attendees ItemsImBringing ItemsImBringing ChatInput ChatInput"
      "Attendees ItemsImBringing ItemsImBringing . .";
    max-height: 100vh;
    min-height: 100vh;
    background-color: #457b9d;
  }
  h3 {
    font-size: 30px;
    color: #f1faee;
    text-align: center;
  }

  .NavBar {
    grid-area: NavBar;
    background-color: #1d3557;
  }

  .Facilitator {
    grid-area: Facilitator;
    background-color: #a8dadc;
  }
  .Facilitator img {
    max-width: 35%;
    margin-left: 30%;
  }

  .ItemsToBringHeader {
    grid-area: ItemsToBringHeader;
    background-color: #1d3557;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .ItemsToBring {
    grid-area: ItemsToBring;
    background-color: #f1faee;
    margin: 0% 2%;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  .ItemsImBringingHeader {
    grid-area: ItemsImBringingHeader;
    background-color: #1d3557;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .ItemsImBringing {
    grid-area: ItemsImBringing;
    background-color: #f1faee;
    margin: 0% 2%;
    margin-bottom: 1%;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  .ChatHeader {
    grid-area: ChatHeader;
    background-color: #1d3557;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .Chat {
    grid-area: Chat;
    background-color: #f1faee;
    margin: 0% 2%;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  .ChatInput {
    grid-area: ChatInput;
    background-color: #285ca5;
  }

  .AttendeesHeader {
    grid-area: AttendeesHeader;
    background-color: #1d3557;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .Attendees {
    grid-area: Attendees;
    background-color: #f1faee;
    margin: 0% 4%;
    margin-bottom: 2%;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

export default function PotluckView() {
  const params = useParams();
  const id = params.id;
  const [displayed, setDisplayed] = useRecoilState(displayedPotluck);
  const [guests, setGuests] = useRecoilState(displayedPotluckGuests);
  const [isOrganizer, setIsOrganizer] = useState(false);
  const [organizerID, setOrganizerID] = useState(0);

  useEffect(() => {
    axiosWithAuth()
      .get(`/potlucks/${id}`)
      .then((res) => {
        setDisplayed(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
    axiosWithAuth()
      .get(`/potlucks/${id}/guests`)
      .then((res) => {
        setGuests(res.data);
        setOrganizerID(res.data[0].user_id);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    if (parseInt(window.localStorage.getItem("userID")) === organizerID) {
      setIsOrganizer(true);
    }
  }, [guests]);
  let history = useHistory();
  const deletePotluck = () => {
    axiosWithAuth().delete(`/potlucks/${id}`);
    history.push("/dashboard");
  };
  return (
    <CSSGrid>
      <div class="grid-container">
        <div class="NavBar"></div>
        <div class="Facilitator">
          <h2>{displayed.event_name}</h2>
          <img
            src={
              "https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1.jpg"
            }
            alt=""
          />
          <p>Date: {displayed.event_date}</p>
          <p>Time: {displayed.event_time}</p>
          <p>Location: {displayed.event_address}</p>
          <button disabled={!isOrganizer} onClick={deletePotluck}>
            Delete Potluck
          </button>
        </div>
        <div class="ItemsToBringHeader">
          <h3>Items To Bring</h3>
        </div>
        <div class="ItemsToBring"></div>
        <div class="ItemsImBringingHeader">
          <h3>Im Bringing</h3>
        </div>
        <div class="ItemsImBringing"></div>
        <div class="ChatHeader">
          <h3>Chat</h3>
        </div>
        <div class="Chat"></div>
        <div class="ChatInput">
          <Input
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            width="80%"
            placeholder="   Type to chat"
            style={{
              backgroundColor: "#f1faee",
              width: "80%",
              margin: "3%",
            }}
          />
          <Button style={{ backgroundColor: "white" }}>
            <SendIcon />
            Send
          </Button>
        </div>
        <div class="AttendeesHeader">
          <h3>People Coming</h3>
        </div>
        <div class="Attendees"></div>
      </div>
    </CSSGrid>
  );
}
