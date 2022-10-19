import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private static rangerCount = 0;
  energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this.energyType = 'stamina';
    Ranger.addRanger();
  }

  private static addRanger() {
    this.rangerCount += 1;
  }

  static createdArchetypeInstances(): number {
    return this.rangerCount;
  }
}