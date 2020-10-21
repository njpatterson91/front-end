import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { axiosWithAuth } from "../utilities/axiosWithAuth";
import { myPotlucksState } from "../store/atoms";
import { useHistory } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function Potlucks() {
  const [myPotlucks, setMyPotlucks] = useRecoilState(myPotlucksState);
  const history = useHistory();
  useEffect(() => {
    axiosWithAuth()
      .get(`/users/${window.localStorage.getItem("userID")}/potlucks`)
      .then((res) => {
        setMyPotlucks(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div style={{ textAlign: "center" }}>
      <NavBar />
      <h1>My Potlucks</h1>
      {myPotlucks.map((item) => (
        <div>
          <p>{item.event_name}</p>
          <button
            onClick={() => {
              history.push(`/view/${item.potluck_id}`);
            }}
          >
            View Potluck
          </button>
        </div>
      ))}
    </div>
  );
}
