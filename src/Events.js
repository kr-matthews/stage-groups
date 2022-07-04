import i22 from "./icons/e_222.png";
import i33 from "./icons/e_333.png";
import i3o from "./icons/e_333oh.png";
import i3b from "./icons/e_333bf.png";
import i3m from "./icons/e_333mbf.png";
import i3f from "./icons/e_333fm.png";
import i44 from "./icons/e_444.png";
import i4b from "./icons/e_444bf.png";
import i55 from "./icons/e_555.png";
import i5b from "./icons/e_555bf.png";
import i66 from "./icons/e_666.png";
import i77 from "./icons/e_777.png";
import icl from "./icons/e_clock.png";
import ime from "./icons/e_minx.png";
import ipy from "./icons/e_pyram.png";
import isk from "./icons/e_skewb.png";
import isq from "./icons/e_sq1.png";

export default class Event {
  static e22 = new Event("2x2x2", i22);
  static e33 = new Event("3x3x3", i33);
  static e3o = new Event("3x3x3 One-Handed", i3o);
  static e3b = new Event("3x3x3 Blindfolded", i3b);
  static e3m = new Event("3x3x3 Multi-Blind", i3m);
  static e3f = new Event("3x3x3 Fewest Moves", i3f);
  static e44 = new Event("4x4x4", i44);
  static e4b = new Event("4x4x4 Blindfolded", i4b);
  static e55 = new Event("5x5x5", i55);
  static e5b = new Event("5x5x5 Blindfolded", i5b);
  static e66 = new Event("6x6x6", i66);
  static e77 = new Event("7x7x7", i77);
  static ecl = new Event("Clock", icl);
  static eme = new Event("Megaminx", ime);
  static epy = new Event("Pyraminx", ipy);
  static esk = new Event("Skewb", isk);
  static esq = new Event("Square-1", isq);

  constructor(name, icon) {
    this.name = name;
    this.icon = icon;
  }
}
