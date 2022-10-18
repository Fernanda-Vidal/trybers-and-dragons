import Race from './Race';

export default class Orc extends Race {
  private static orcCount = 0;
  constructor(name: string, dexterity: number, public maxLifePoints = 74) {
    super(name, dexterity);
    Orc.addOrc();
  }

  private static addOrc() {
    this.orcCount += 1;
  }

  static createdRacesInstances(): number {
    return this.orcCount;
  }
}