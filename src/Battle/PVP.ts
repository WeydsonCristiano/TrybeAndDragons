import Battle from './Battle';
import Fighter from '../Fighter';

class PVP extends Battle {
  private _player2: Fighter;
  constructor(player1: Fighter, player2: Fighter) {
    super(player1);
    this._player2 = player2;
  }

  fight(): number {
    while (this.player.lifePoints !== -1 && this._player2.lifePoints !== -1) {
      this.player.attack(this._player2);
      this._player2.attack(this.player);
    }
    return super.fight();
  }
}
export default PVP;
