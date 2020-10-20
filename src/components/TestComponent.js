import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { createPotluck } from "../store/atoms";
import { useParams } from "react-router-dom";
import { axiosWithAuth } from "../utilities/axiosWithAuth";

export default function Test() {
  const params = useParams();
  const id = params.id;
  const [test, setTest] = useRecoilState(createPotluck);
  useEffect(() => {
    axiosWithAuth()
      .get(`/potlucks/${id}`)
      .then((res) => {
        setTest(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>{test.event_name}</h1>
      <h1>{test.event_address}</h1>
      <h1>{test.event_date}</h1>
      <h1>{test.event_time}</h1>
    </div>
  );
}
