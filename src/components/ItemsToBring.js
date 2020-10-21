import React from "react";
import { useRecoilState } from "recoil";
import { itemsToBring } from "../store/atoms";

export default function ItemsToBring() {
  const [itemsToMap, setItemsToMap] = useRecoilState(itemsToBring);
  return (
    <>
      <div class="ItemsToBringHeader">
        <h3>Items To Bring</h3>
      </div>
      <div class="ItemsToBring">
        {itemsToMap.map((item) => (
          <p>{item.item_name}</p>
        ))}
      </div>
    </>
  );
}
