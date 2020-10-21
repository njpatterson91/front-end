import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { itemsToBring } from "../store/atoms";
import { useParams } from "react-router-dom";
import { axiosWithAuth } from "../utilities/axiosWithAuth";

export default function ItemsToBring() {
  const params = useParams();
  const id = params.id;
  const [itemsToMap, setItemsToMap] = useRecoilState(itemsToBring);
  const [counter, setCounter] = useState(0);
  const returnToMain = {
    user_id: window.localStorage.getItem("userID"),
  };
  useEffect(() => {
    axiosWithAuth()
      .get(`potlucks/${id}/items`)
      .then((res) => {
        setItemsToMap(res.data);
        console.log("items list", res.data);
      })
      .catch((err) => console.log(err));
  }, [counter]);
  return (
    <>
      <div class="ItemsToBringHeader">
        <h3>Items To Bring</h3>
      </div>
      <div class="ItemsToBring">
        {itemsToMap.map((item) => {
          if (item.assigned_to_user_id === 9000) {
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
                  Claim
                </button>
              </>
            );
          }
        })}
      </div>
    </>
  );
}
