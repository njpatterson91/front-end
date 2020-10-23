import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../utilities/axiosWithAuth";

export default function Get() {
  const [state, setState] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get("/potlucks")
      .then((res) => {
        setState(res.data);
      });
  }, []);
  return (
    <div>
      {state.map((item) => (
        <p>{item.event_name}</p>
      ))}
    </div>
  );
}
