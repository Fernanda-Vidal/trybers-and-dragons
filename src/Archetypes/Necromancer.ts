import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private static necromancerCount = 0;
  energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this.energyType = 'mana';
    Necromancer.addNecromancer();
  }

  private static addNecromancer() {
    this.necromancerCount += 1;
  }

  static createdArchetypeInstances(): number {
    return this.necromancerCount;
  }
}