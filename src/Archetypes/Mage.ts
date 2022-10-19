import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private static mageCount = 0;
  energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this.energyType = 'mana';
    Mage.addMage();
  }
  
  private static addMage() {
    this.mageCount += 1;
  }
  
  static createdArchetypeInstances(): number {
    return this.mageCount;
  }
}