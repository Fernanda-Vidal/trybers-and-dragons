import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(public fighter: Fighter, public environmental: SimpleFighter[]) {
    super(fighter);
  }

  battleEnds(): boolean {
    if (this.fighter.lifePoints !== -1
      && this.environmental
        .some((char) => char.lifePoints !== -1)) return false;
    return true;
  }

  fight(): number {
    while (!this.battleEnds()) {
      this.environmental.forEach((char) => {
        this.fighter.attack(char);
        char.attack(this.fighter);
      });
    }
    return super.fight();
  }
}