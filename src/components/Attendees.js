import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../utilities/axiosWithAuth";
import { useParams } from "react-router-dom";

export default function () {
  const params = useParams();
  const id = params.id;
  const [guests, setGuests] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get(`/potlucks/${id}/guests`)
      .then((res) => {
        setGuests(res.data);
      });
  }, []);

  return (
    <>
      <div class="AttendeesHeader">
        <h3>People Coming</h3>
      </div>
      <div class="Attendees" style={{ textAlign: "center" }}>
        {guests.map((item) => (
          <p>
            {item.first_name} {item.last_name}
          </p>
        ))}
      </div>
    </>
  );
}
