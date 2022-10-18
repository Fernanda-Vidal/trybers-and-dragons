import Race from './Race';

export default class Halfling extends Race {
  private static halflingCount = 0;
  constructor(name: string, dexterity: number, public maxLifePoints = 60) {
    super(name, dexterity);
    Halfling.addHalfling();
  }

  private static addHalfling() {
    this.halflingCount += 1;
  }

  static createdRacesInstances(): number {
    return this.halflingCount;
  }
}