import React from "react";
import "../css/potluckView.css";
import { Input, Button } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import styled from "styled-components";

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
  return (
    <CSSGrid>
      <div class="grid-container">
        <div class="NavBar"></div>
        <div class="Facilitator">
          <h2>UserName</h2>
          <img
            src={
              "https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1.jpg"
            }
            alt=""
          />
          <p>Date</p>
          <p>Time</p>
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
