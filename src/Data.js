import Event from "./Events";

const data = [
  {}, // empty to start

  { event: Event.etu },

  { event: Event.e33, group: 1 },
  { event: Event.e33, group: 2 },
  { event: Event.e33, group: 3 },
  { event: Event.e33, group: 4 },
  { event: Event.e33, group: 5 },

  { event: Event.e22, group: 1 },
  { event: Event.e22, group: 2 },
  { event: Event.e22, group: 3 },
  { event: Event.e22, group: 4 },

  { event: Event.epy, group: 1 },
  { event: Event.epy, group: 2 },

  { event: Event.e44, group: 1 },
  { event: Event.e44, group: 2 },
  { event: Event.e44, group: 3 },

  { event: Event.elu },

  { event: Event.eme, who: "All" },

  { event: Event.esk, group: 1 },
  { event: Event.esk, group: 2 },

  { event: Event.e55, group: 1 },
  { event: Event.e55, group: 2 },

  { event: Event.e33, round: 2, who: "33rd to 48th" },
  { event: Event.e33, round: 2, who: "17th to 32nd" },
  { event: Event.e33, round: 2, who: "1st to 16th" },

  { event: Event.e3o, group: 1 },
  { event: Event.e3o, group: 2 },

  { event: Event.e66, who: "All" },

  { event: Event.e77, who: "All" },

  { event: Event.e22, round: "Final", who: "Top 12" },

  { event: Event.esq, who: "All" },

  { event: Event.e44, round: "Final", who: "Top 12" },

  { event: Event.e3o, round: "Final", who: "Top 12" },

  { event: Event.e3b, who: "All" },

  { event: Event.e33, round: "Final", who: "Top 12" },

  { event: Event.eaw },

  {}, // empty to end day
];

export const groups = data;
