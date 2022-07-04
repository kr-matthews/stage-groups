import i22 from "./icons/e_222.png";
import isq from "./icons/e_sq1.png";

export default class Event {
  static e22 = new Event("2x2x2", i22);
  static esq = new Event("Square-1", isq);

  constructor(name, icon) {
    this.name = name;
    this.icon = icon;
  }
}
