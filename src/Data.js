import Event from "./Events";

export const groups = [
  // Thursday
  [{}, {}, {}, {}, {}], // empty to start day
  [{ event: Event.e22, group: 1 }, { event: Event.e22, group: 1 }, {}, {}, {}],
  [{ event: Event.e22, group: 2 }, { event: Event.e22, group: 2 }, {}, {}, {}],
  [{ event: Event.e22, group: 3 }, { event: Event.e22, group: 3 }, {}, {}, {}],
  [{ event: Event.esq, group: 1 }, { event: Event.e22, group: 1 }, {}, {}, {}],
  [{}, {}, {}, {}, {}], // empty to end day

  // Friday
];
