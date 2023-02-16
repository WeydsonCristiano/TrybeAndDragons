import Race from './Race';

class Orc extends Race {
  private static _dwarf = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc._dwarf += 1;
    this._maxLifePoints = 74;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._dwarf;
  }
}

export default Orc;
