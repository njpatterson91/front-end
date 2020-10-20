import React from "react";
import "../css/potluckView.css";
import { Input, Button } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

export default function PotluckView() {
  return (
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
  );
}
