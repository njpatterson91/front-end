import React from "react";
import { Input, Button } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

export default function Chat() {
  return (
    <>
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
    </>
  );
}
