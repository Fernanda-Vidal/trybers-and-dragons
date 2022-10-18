import Race from './Race';

export default class Dwarf extends Race {
  private static dwarfCount = 0;
  constructor(name: string, dexterity: number, public maxLifePoints = 80) {
    super(name, dexterity);
    Dwarf.addDwarf();
  }

  private static addDwarf() {
    this.dwarfCount += 1;
  }

  static createdRacesInstances(): number {
    return this.dwarfCount;
  }
}