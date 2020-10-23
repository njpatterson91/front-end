import { axiosWithAuth } from "../utilities/axiosWithAuth";
import React, { useState } from "react";

export default function DSMap() {
  const [toMap, setToMap] = useState([]);
  axiosWithAuth()
    .get("https://potluck-planner-api.herokuapp.com/api/potlucks")
    .then((res) => {
      setToMap(res.data);
    })
    .catch((err) => console.log(err));

  return (
    <div>
      {toMap.map((item) => (
        <p>{item.event_name}</p>
      ))}
    </div>
  );
}
