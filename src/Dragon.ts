import Monster from './Monster';

export default class Dragon extends Monster {
  constructor(protected _lifePoints = 999) {
    super();
  }
}