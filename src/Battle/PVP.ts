import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(public char1: Fighter, public char2: Fighter) {
    super(char1);
  }

  fight(): number {
    this.char1.attack(this.char2);
    this.char2.attack(this.char1);
    return super.fight();
  }
}