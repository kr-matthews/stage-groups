import Event from "./Events";

export const groups = [
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

  { event: Event.e3o, group: 1 },
  { event: Event.e3o, group: 2 },

  { event: Event.e33, round: 2, who: "14th to 26th" },
  { event: Event.e33, round: 2, who: "1st to 13th" },

  { event: Event.e55, group: 1 },
  { event: Event.e55, group: 2 },

  { event: Event.e3o, round: 2, who: "Top 14" },

  { event: Event.esk, round: 2, who: "Top 14" },

  { event: Event.esq, round: 2, who: "Top 8" },

  { event: Event.e33, round: 2, who: "Top 14" },

  { event: Event.eaw },

  {}, // empty to end day
];
