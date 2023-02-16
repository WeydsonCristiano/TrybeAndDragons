import Energy from '../Energy';

interface Fighter {
  lifePoints: number;
  strength: number;
  defense: number;
  energy: Energy;
  levelUp(): void;
  attack(enemy: Fighter): void;
  special(enemy: Fighter): void;
  receiveDamage(attackPoints: number): number;
}
export default Fighter;
