import Event from "./Events";

export const groups = [
  {}, // empty to start

  { event: Event.etu },

  { event: Event.esk, group: 1 },
  { event: Event.esk, group: 2 },

  { event: Event.e33, group: 1 },
  { event: Event.e33, group: 2 },

  { event: Event.etb },

  { event: Event.elu },

  { event: Event.esq, group: 1 },
  { event: Event.esq, group: 2 },

  { event: Event.eaw },

  {}, // empty to end day
];
