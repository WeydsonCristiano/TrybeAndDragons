import { EnergyType } from '../Energy';

abstract class Archetype {
  private static _Archetype = 0;
  private _name: string;
  private _special: number;
  private _cost: number;
  abstract energyType: EnergyType;

  constructor(name: string) {
    Archetype._Archetype += 1;
    this._name = name;
    this._special = 0;
    this._cost = 0;
  }

  get name(): string {
    return this._name;
  }

  get special(): number {
    return this._special;
  }

  get cost(): number {
    return this._cost;
  }

  static energyType(): EnergyType {
    throw new Error('Not implemented');
  }

  static createdArchetypeInstances(): number {
    return this._Archetype;
  }
}
export default Archetype;
