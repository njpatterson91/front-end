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
  itemsToBring,
} from "../store/atoms";
import { useParams } from "react-router-dom";
import { axiosWithAuth } from "../utilities/axiosWithAuth";
import { PotluckViewStyle as CSSGrid } from "../css/styledDiv";

const initialValue = {
  assigned_to_user_id: window.localStorage.getItem("userID"),
  item_name: "",
};

export default function PotluckView() {
  const params = useParams();
  const id = params.id;
  const [displayed, setDisplayed] = useRecoilState(displayedPotluck);
  const [guests, setGuests] = useRecoilState(displayedPotluckGuests);
  const [organizerID, setOrganizerID] = useRecoilState(orgID);
  const [itemToAdd, setItemToAdd] = useState(initialValue);
  const [itemMap, setItemMap] = useRecoilState(itemsToBring);

  const addItem = (e) => {
    console.log("test");
    e.preventDefault();
    axiosWithAuth()
      .post(`/potlucks/${id}/items`, itemToAdd)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    setTimeout(() => {
      axiosWithAuth()
        .get(`potlucks/${id}/items`)
        .then((res) => {
          setItemMap(res.data);
          console.log("items list", res.data);
        })
        .catch((err) => console.log(err));
    }, 200);
  };
  const changeHandler = (e) => {
    console.log("test");
    const name = e.target.name;
    const value = e.target.value;
    setItemToAdd({
      ...itemToAdd,
      [name]: value,
    });
  };

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
    axiosWithAuth()
      .get(`potlucks/${id}/items`)
      .then((res) => {
        setItemMap(res.data);
        console.log("items list", res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <CSSGrid>
      <div class="grid-container">
        <NavBar />
        <Facilitator />
        <ItemsToBring />
        <div class="AddItem">
          <input
            type="text"
            name="item_name"
            value={itemToAdd.item_name}
            onChange={changeHandler}
          />
          <button onClick={addItem}>Add Item</button>
        </div>
        <ItemsImBringing />
        <Chat />
        <Attendees />
      </div>
    </CSSGrid>
  );
}
