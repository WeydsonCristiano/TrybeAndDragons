import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';

class PVE extends Battle {
  private _monsterList: (Fighter | SimpleFighter)[];
  constructor(player1: Fighter, monsterList: (Fighter | SimpleFighter)[]) {
    super(player1);
    this._monsterList = monsterList;
  }

  fight(): number {
    while (
      this.player.lifePoints !== -1 
      && this._monsterList.some((e) => e.lifePoints !== -1)
    ) {
      this._monsterList.forEach((enemy) => {
        this.player.attack(enemy);
        if (enemy.lifePoints !== -1) enemy.attack(this.player);
      });
    }
    return super.fight();
  }
}

export default PVE;
