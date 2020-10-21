import React, { useEffect, useState } from "react";
import Chat from "../components/Chat";
import Facilitator from "../components/Facilitator";
import ItemsImBringing from "../components/ItemsImBringing";
import Attendees from "../components/Attendees";
import ItemsToBring from "../components/ItemsToBring";
import NavBar from "../components/NavBar";
import { useRecoilState } from "recoil";
import {
  displayedPotluck,
  displayedPotluckGuests,
  orgID,
} from "../store/atoms";
import { useParams } from "react-router-dom";
import { axiosWithAuth } from "../utilities/axiosWithAuth";
import { PotluckViewStyle as CSSGrid } from "../css/styledDiv";

export default function PotluckView() {
  const params = useParams();
  const id = params.id;
  const [displayed, setDisplayed] = useRecoilState(displayedPotluck);
  const [guests, setGuests] = useRecoilState(displayedPotluckGuests);
  const [organizerID, setOrganizerID] = useRecoilState(orgID);

  useEffect(() => {
    axiosWithAuth()
      .get(`/potlucks/${id}`)
      .then((res) => {
        setDisplayed(res.data);
      })
      .catch((err) => console.log(err));
    axiosWithAuth()
      .get(`/potlucks/${id}/guests`)
      .then((res) => {
        setGuests(res.data);
        setOrganizerID(res.data[0].user_id);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <CSSGrid>
      <div class="grid-container">
        <NavBar />
        <Facilitator />
        <ItemsToBring />
        <ItemsImBringing />
        <Chat />
        <Attendees />
      </div>
    </CSSGrid>
  );
}
