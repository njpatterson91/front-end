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

export const loginValues = atom({
  key: "loginValues",
  default: {
    username: "",
    password: "",
  },
});
export const displayedPotluck = atom({
  key: "displayedPotluck",
  default: {},
});
export const displayedPotluckGuests = atom({
  key: "displayedPotluckGuests",
  default: {},
});

export const orgID = atom({
  key: "orgID",
  default: 0,
});

export const myPotlucksState = atom({
  key: "myPotlucksState",
  default: [],
});

export const itemsToBring = atom({
  key: "itemsToBring",
  default: [],
});

export const itemsImResFor = atom({
  key: "itemsImResFor",
  default: [],
});

export const listOfLucks = atom({
  key: "listOfLucks",
  default: [],
});
