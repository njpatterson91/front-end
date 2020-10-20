import { atom } from "recoil";

export const createPotluck = atom({
  key: "createPotluck",
  default: {
    event_name: "",
    event_description: "",
    event_address: "",
    event_date: "",
    event_time: "",
  },
});
