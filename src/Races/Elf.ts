import Race from './Race';

export default class Elf extends Race {
  private static elfCount = 0;
  constructor(name: string, dexterity: number, public maxLifePoints = 99) {
    super(name, dexterity);
    Elf.addElf();
  }

  private static addElf() {
    this.elfCount += 1;
  }

  static createdRacesInstances(): number {
    return this.elfCount;
  }
}