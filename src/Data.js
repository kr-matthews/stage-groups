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
    { event: Event.esq, group: 5 },
    { event: Event.esq, group: 5 },
    {},
    {},
    { event: Event.e3m, attempt: 1 },
  ],
  [
    { event: Event.esq, group: 6 },
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

  [{ event: Event.e44, group: 1 }, { event: Event.e44, group: 1 }, {}, {}, {}],
  [
    { event: Event.e44, group: 2 },
    { event: Event.e44, group: 2 },
    {},
    {},
    { event: Event.e3f, attempt: 1 },
  ],
  [
    { event: Event.e44, group: 3 },
    { event: Event.e44, group: 3 },
    {},
    {},
    { event: Event.e3f, attempt: 1 },
  ],
  [
    { event: Event.e44, group: 4 },
    { event: Event.e44, group: 4 },
    {},
    {},
    { event: Event.e3f, attempt: 1 },
  ],
  [
    { event: Event.e44, group: 5 },
    { event: Event.e44, group: 5 },
    { event: Event.e44, group: 1 },
    {},
    {},
  ],
  [
    { event: Event.e44, group: 6 },
    { event: Event.e44, group: 6 },
    { event: Event.e44, group: 2 },
    { event: Event.e44, group: 1 },
    {},
  ],

  [{}, {}, {}, {}, {}], // lunch

  [
    { event: Event.e55, group: 1 },
    { event: Event.e55, group: 1 },
    { event: Event.e55, group: 1 },
    { event: Event.e55, group: 1 },
    {},
  ],
  [
    { event: Event.e55, group: 2 },
    { event: Event.e55, group: 2 },
    { event: Event.e55, group: 2 },
    {},
    {},
  ],
  [
    { event: Event.e55, group: 3 },
    { event: Event.e55, group: 3 },
    {},
    {},
    { event: Event.e5b, group: 1 },
  ],
  [
    { event: Event.e55, group: 4 },
    { event: Event.e55, group: 4 },
    {},
    {},
    { event: Event.e5b, group: "1 & 2" },
  ],
  [
    { event: Event.e3o, group: 1 },
    { event: Event.e3o, group: 1 },
    {},
    {},
    { event: Event.e5b, group: 2 },
  ],
  [{ event: Event.e3o, group: 2 }, { event: Event.e3o, group: 2 }, {}, {}, {}],
  [
    { event: Event.e3o, group: 3 },
    { event: Event.e3o, group: 3 },
    { event: Event.e3o, group: 1 },
    {},
    {},
  ],
  [
    { event: Event.e3o, group: 4 },
    { event: Event.e3o, group: 4 },
    { event: Event.e3o, group: 2 },
    {},
    {},
  ],
  [
    { event: Event.e3o, group: 5 },
    { event: Event.e3o, group: 5 },
    { event: Event.e3o, group: 3 },
    { event: Event.e3o, group: 1 },
    {},
  ],
  [
    { event: Event.eme, round: 2 },
    { event: Event.eme, round: 2 },
    { event: Event.eme, round: 2 },
    { event: Event.eme, round: 2 },
    {},
  ],
  [
    { event: Event.e66, round: "Final" },
    { event: Event.e66, round: "Final" },
    {},
    {},
    {},
  ],
  [
    { event: Event.e77, round: "Final" },
    { event: Event.e77, round: "Final" },
    {},
    {},
    {},
  ],
  [
    { event: Event.e3b, round: 2 },
    { event: Event.e3b, round: 2 },
    { event: Event.e3b, round: 2 },
    { event: Event.e3b, round: 2 },
    {},
  ],
  [{}, {}, {}, {}, {}], // empty to end day

  // Saturday

  [
    { event: Event.e22, group: 1 },
    { event: Event.e22, group: 1 },
    {},
    {},
    { event: Event.e3f, attempt: 3 },
  ],
  [
    { event: Event.e22, group: 2 },
    { event: Event.e22, group: 2 },
    {},
    {},
    { event: Event.e3f, attempt: 3 },
  ],
  [
    { event: Event.e22, group: 3 },
    { event: Event.e22, group: 3 },
    {},
    {},
    { event: Event.e3f, attempt: 3 },
  ],
  [
    { event: Event.e22, group: 4 },
    { event: Event.e22, group: 4 },
    {},
    {},
    { event: Event.e3f, attempt: 3 },
  ],
  [
    { event: Event.e22, group: 5 },
    { event: Event.e22, group: 5 },
    {},
    {},
    { event: Event.e3f, attempt: 3 },
  ],
  [{ event: Event.e22, group: 6 }, { event: Event.e22, group: 6 }, {}, {}, {}],
  [{ event: Event.e22, group: 7 }, { event: Event.e22, group: 7 }, {}, {}, {}],
  [
    { event: Event.e22, group: 8 },
    { event: Event.e22, group: 8 },
    { event: Event.e22, group: 1 },
    {},
    {},
  ],
  [
    { event: Event.e22, group: 9 },
    { event: Event.e22, group: 9 },
    { event: Event.e22, group: 2 },
    {},
    {},
  ],
  [
    { event: Event.e22, group: 10 },
    { event: Event.e22, group: 10 },
    { event: Event.e22, group: 3 },
    { event: Event.e22, group: 1 },
    {},
  ],

  [{}, {}, {}, {}, {}], // lunch

  // !!!

  [{}, {}, {}, {}, {}], // empty to end day

  // Sunday

  // !!!

  [{}, {}, {}, {}, {}], // lunch

  // !!!

  [{}, {}, {}, {}, {}], // empty to end day
];
