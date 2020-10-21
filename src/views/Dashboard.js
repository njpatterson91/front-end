import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { listOfLucks } from "../store/atoms";
import NavBar from "../components/NavBar";
import { axiosWithAuth } from "../utilities/axiosWithAuth";
import { useHistory } from "react-router";

export default function Dashboard() {
  const [theLucks, setTheLucks] = useRecoilState(listOfLucks);
  const toSend = {
    username: window.localStorage.getItem("username"),
  };
  useEffect(() => {
    axiosWithAuth()
      .get(`https://potluck-planner-api.herokuapp.com/api/potlucks`)
      .then((res) => {
        setTheLucks(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
    axiosWithAuth()
      .get(`/users/${window.localStorage.getItem("userID")}`)
      .then((res) => {
        console.log("this be me", res.data);
        window.localStorage.setItem("username", res.data.username);
      })
      .catch((err) => console.log(err));
  }, []);
  const history = useHistory();
  return (
    <div>
      <NavBar />
      <div
        style={{
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "space-evenly",
        }}
      >
        {theLucks.map((item) => (
          <div
            style={{
              border: "1px solid black",
              maxWidth: "25%",
              minWidth: "25%",
              textAlign: "center",
              margin: "3%",
              backgroundColor: "grey",
              borderRadius: "10px",
            }}
          >
            <h2>{item.event_name}</h2>
            <p>Address: {item.event_address}</p>
            <p>Date: {item.event_date}</p>
            <p>Time: {item.event_time}</p>
            <button
              onClick={() => {
                console.log(toSend);
                axiosWithAuth()
                  .post(`/potlucks/${item.id}/guests`, toSend)
                  .then((res) => console.log(res.data))
                  .catch((err) => console.log(err));

                history.push(`/view/${item.id}`);
              }}
            >
              Join Potluck
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// /api/potlucks/:id
