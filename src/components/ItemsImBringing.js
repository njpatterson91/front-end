import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { itemsToBring } from "../store/atoms";
import { useParams } from "react-router-dom";
import { axiosWithAuth } from "../utilities/axiosWithAuth";

export default function () {
  const params = useParams();
  const id = params.id;
  const [myItems, setMyItems] = useRecoilState(itemsToBring);
  const [counter, setCounter] = useState(0);
  const returnToMain = {
    user_id: 9000,
  };

  useEffect(() => {
    axiosWithAuth()
      .get(`potlucks/${id}/items`)
      .then((res) => {
        setMyItems(res.data);
        console.log("items list", res.data);
      })
      .catch((err) => console.log(err));
  }, [counter]);
  return (
    <>
      <div class="ItemsImBringingHeader">
        <h3>Im Bringing</h3>
      </div>
      <div class="ItemsImBringing">
        {myItems.map((item) => {
          if (
            item.assigned_to_user_id ===
            parseInt(window.localStorage.getItem("userID"))
          ) {
            return (
              <>
                <p style={{ display: "inline" }}>{item.item_name}</p>
                <button
                  onClick={() => {
                    console.log(item.id);
                    console.log(id);
                    axiosWithAuth()
                      .put(
                        `https://potluck-planner-api.herokuapp.com/api/potlucks/${id}/items/${item.id}`,
                        returnToMain
                      )
                      .then((res) => {
                        console.log(res);
                        setCounter(counter + 1);
                      })
                      .catch((err) => console.log(err));
                  }}
                >
                  Remove
                </button>
                <br />
              </>
            );
          }
        })}
      </div>
    </>
  );
}
