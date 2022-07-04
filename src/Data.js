import Event from "./Events";

export const groups = [
  [{}, {}, {}, {}, {}], // empty to start

  // Thursday
  [{ event: Event.ecl, group: 1 }, { event: Event.esq, group: 1 }, {}, {}, {}],
  [{ event: Event.ecl, group: 2 }, { event: Event.esq, group: 2 }, {}, {}, {}],
  [{ event: Event.ecl, group: 3 }, { event: Event.esq, group: 3 }, {}, {}, {}],
  [
    { event: Event.ecl, group: 4 },
    { event: Event.esq, group: 4 },
    {},
    {},
    { event: Event.e3m, attempt: 1 },
  ],
  [
    { event: Event.esq, group: 1 },
    { event: Event.esq, group: 5 },
    {},
    {},
    { event: Event.e3m, attempt: 1 },
  ],
  [
    { event: Event.esq, group: 2 },
    { event: Event.esq, group: 6 },
    {},
    {},
    { event: Event.e3m, attempt: 1 },
  ],
  [{}, {}, {}, {}, {}], // lunch
  [
    { event: Event.e66, group: 1 },
    { event: Event.e66, group: 1 },
    { event: Event.e66, group: 1 },
    { event: Event.e66, group: 1 },
    {},
  ],
  [
    { event: Event.e66, group: 2 },
    { event: Event.e66, group: 2 },
    { event: Event.e66, group: 2 },
    { event: Event.e66, group: 2 },
    {},
  ],
  [
    { event: Event.e77, group: 1 },
    { event: Event.e77, group: 1 },
    { event: Event.e77, group: 1 },
    { event: Event.e77, group: 1 },
    {},
  ],
  [
    { event: Event.e77, group: 2 },
    { event: Event.e77, group: 2 },
    { event: Event.e77, group: 2 },
    { event: Event.e77, group: 2 },
    {},
  ],
  [
    { event: Event.eme, group: 1 },
    { event: Event.eme, group: 1 },
    { event: Event.eme, group: 1 },
    { event: Event.eme, group: 1 },
    {},
  ],
  [
    { event: Event.eme, group: 2 },
    { event: Event.eme, group: 2 },
    { event: Event.eme, group: 2 },
    { event: Event.eme, group: 2 },
    {},
  ],
  [
    { event: Event.ecl, round: "Final" },
    { event: Event.ecl, round: "Final" },
    { event: Event.eme, group: 3 },
    { event: Event.eme, group: 3 },
    {},
  ],
  [
    { event: Event.e3b, group: 1 },
    { event: Event.e3b, group: 1 },
    { event: Event.e3b, group: 1 },
    { event: Event.e3b, group: 1 },
    {},
  ],
  [
    { event: Event.e3b, group: 2 },
    { event: Event.e3b, group: 2 },
    { event: Event.e3b, group: 2 },
    { event: Event.e3b, group: 2 },
    {},
  ],
  [
    { event: Event.esq, round: 2 },
    { event: Event.esq, round: 2 },
    { event: Event.esq, round: 2 },
    { event: Event.esq, round: 2 },
    {},
  ],
  [{}, {}, {}, {}, {}], // dinner
  [{}, {}, {}, {}, { event: Event.e3f, attempt: 1 }],
  [{}, {}, {}, {}, {}], // empty to end day

  // Friday
];
