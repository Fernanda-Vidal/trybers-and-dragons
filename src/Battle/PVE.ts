import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(public fighter: Fighter, public environmental: SimpleFighter[]) {
    super(fighter);
  }

  //   battleEnds(): boolean {
  //     if (this.fighter.lifePoints === -1
  //       || this.environmental
  //         .every((char) => char.lifePoints === -1)) return true;
  //     return false;
  //   }

  fight(): number {
    // const ends = this.battleEnds();
    // while (!ends) {
    this.environmental.forEach((char) => {
      this.fighter.attack(char);
      char.attack(this.fighter);
    });
    return super.fight();
  }
}