import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strenght: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(private _name: string) {
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(this._name, this._dexterity);
    this._archetype = new Mage(this._name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strenght = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strenght;
  }

  get defense(): number {
    return this._defense;
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): Energy {
    return { ...this._energy };
  }

  damage(attackPoints: number): number {
    return attackPoints - this._defense;
  }

  receiveDamage(attackPoints: number): number {
    const damage = this.damage(attackPoints);
    if (damage > 0) this._lifePoints -= damage;
    if (this._lifePoints <= 0) this._lifePoints = -1;
    return this._lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strenght);
  }

  maxLifePoints(): number {
    const update = this._maxLifePoints + getRandomInt(1, 10);
    if (update >= this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
      return this._maxLifePoints;
    }
    this._maxLifePoints = update;
    return this._maxLifePoints;
  }
    
  levelUp(): void {
    const changeMaxLifePoints = this.maxLifePoints();
    this._strenght += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
    this._lifePoints = changeMaxLifePoints;
  }
}