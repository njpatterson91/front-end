import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import {
  displayedPotluck,
  displayedPotluckGuests,
  orgID,
} from "../store/atoms";
import { axiosWithAuth } from "../utilities/axiosWithAuth";
import { useHistory, useParams } from "react-router-dom";
export default function Facilitator() {
  const params = useParams();
  const id = params.id;
  const [displayed, setDisplayed] = useRecoilState(displayedPotluck);
  const [guests, setGuests] = useRecoilState(displayedPotluckGuests);
  const [isOrganizer, setIsOrganizer] = useState(false);
  const [organizerID, setOrganizerID] = useRecoilState(orgID);

  useEffect(() => {
    if (parseInt(window.localStorage.getItem("userID")) === organizerID) {
      setIsOrganizer(true);
    }
  }, [guests]);
  let history = useHistory();
  const deletePotluck = () => {
    axiosWithAuth().delete(`/potlucks/${id}`);
    history.push("/mypotlucks");
  };

  return (
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
      <br />
      <button
        disabled={!isOrganizer}
        onClick={() => {
          history.push(`/editpotluck/${id}`);
        }}
      >
        Edit Potluck
      </button>
    </div>
  );
}
