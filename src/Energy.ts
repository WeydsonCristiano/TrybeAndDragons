export type EnergyType = 'stamina' | 'mana';

export default interface Energy {
  readonly type_ : EnergyType;
  amount: number;
}
