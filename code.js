function MoveManager() {
 this.board = [
      ['x','x','x'],
      ['x','x','x'],
      ['x','x','x']
      ];

  MoveManager.prototype.insert = function(row,col) {
    this.board[row][col] = 'o';
    return this.board;
  };
  MoveManager.prototype.movePlayer = function(row,col,dir) {
    if (this.board[row][col]=='o') {
      this.board[row][col] = 'x';
      if (dir==='right') { col++ };
      if (dir==='left') { col-- };
      if (dir==='up') { row-- };
      if (dir==='down') { row++ };
      this.board[row][col] = 'o';
      if (row>2||row<0||col>2||col<0) throw Error("Invalid Move");
      return this.board;
    } else throw Error("Piece does not exist");
  };
}
module.exports = MoveManager;

