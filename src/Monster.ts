import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  constructor(private _lifePoints = 85, private _strength = 63) {}

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  damage(attackPoints: number): number {
    return this._lifePoints - attackPoints;
  }

  receiveDamage(attackPoints: number): number {
    const damage = this.damage(attackPoints);
    if (damage > 0) this._lifePoints -= damage;
    if (this._lifePoints <= 0) this._lifePoints = -1;
    return this._lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }
}