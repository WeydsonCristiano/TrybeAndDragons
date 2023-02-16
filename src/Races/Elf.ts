import Race from './Race';

class Elf extends Race {
  private static _dwarf = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf._dwarf += 1;
    this._maxLifePoints = 99;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._dwarf;
  }
}

export default Elf;
