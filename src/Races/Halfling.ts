import Race from './Race';

class Halfling extends Race {
  private static _dwarf = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling._dwarf += 1;
    this._maxLifePoints = 60;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._dwarf;
  }
}

export default Halfling;
