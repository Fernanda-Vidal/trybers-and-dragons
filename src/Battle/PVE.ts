import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(public fighter: Fighter, public env: SimpleFighter[]) {
    super(fighter);
  }

  fight(): number {
    this.env.forEach((char) => {
      this.fighter.attack(char);
      char.attack(this.fighter);
    });
    return super.fight();
  }
}