import styled from "styled-components";

export const CreatePotluck = styled.div`
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
      ". NeededItemsHeader NeededItemsHeader NeededItemsHeader ."
      ". ItemList ItemList ItemList ."
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
    background-color: #1d3557;
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

export const PotluckViewStyle = styled.div`
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
      "Facilitator ItemsToBring ItemsToBring Chat Chat"
      ". AddItem AddItem Chat Chat"
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
    border-radius: 10px;
    text-align: center;
  }
  .Facilitator img {
    max-width: 35%;
    border-radius: 10px;
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
    text-align: center;
  }
  .AddItem {
    text-align: center;
    grid-area: AddItem;
    background-color: #1d3557;
  }

  .ItemsImBringingHeader {
    grid-area: ItemsImBringingHeader;
    background-color: #1d3557;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .ItemsImBringing {
    text-align: center;
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
    border-radius: 10px;
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
