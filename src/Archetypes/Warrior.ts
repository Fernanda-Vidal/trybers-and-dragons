import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private static warriorCount = 0;
  energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this.energyType = 'stamina';
    Warrior.addWarrior();
  }

  private static addWarrior() {
    this.warriorCount += 1;
  }

  static createdArchetypeInstances(): number {
    return this.warriorCount;
  }
}