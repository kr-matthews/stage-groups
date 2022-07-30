import Event from "./Events";

let data = [
  {}, // empty to start

  { event: Event.etu },

  { event: Event.esk, group: 1 },
  { event: Event.esk, group: 2 },

  { event: Event.e33, group: 1 },
  { event: Event.e33, group: 2 },
  { event: Event.e33, group: 3 },

  { event: Event.etb },

  { event: Event.elu },

  { event: Event.esq, group: 1 },
  { event: Event.esq, group: 2 }, // only on Sunday the 7th

  { event: Event.e3o, group: 1 },
  { event: Event.e3o, group: 2 },

  { event: Event.e33, round: 2, who: "14th to 26th" },
  { event: Event.e33, round: 2, who: "1st to 13th" },

  { event: Event.e55, group: 1 },
  { event: Event.e55, group: 2 },

  { event: Event.e3o, round: "Final", who: "Top 14" },

  { event: Event.esk, round: "Final", who: "Top 14" },

  { event: Event.esq, round: "Final", who: "Top 8" },

  { event: Event.e33, round: "Final", who: "Top 14" },

  { event: Event.eaw },

  {}, // empty to end day
];

// remove 2nd group of sq-1 (at index 10 above) for Saturday the 6th - this is a poor implementation!
new Date().getDate() % 2 === 0 && data.splice(10, 1);

export const groups = data;
