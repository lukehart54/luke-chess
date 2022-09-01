import Tile from "./Tile";

export const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
export const nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26'];

interface BoardProps {
    row: number;
    col: number;
    mode?: string;
}

const Board = (boardInfo:BoardProps) => {
  let board = [];
  let letterCords = [];
  let letterCords2 = [];
  letterCords.push(<br/>);
  for (let x = 0; x < boardInfo.col; x++) {
    letterCords.push(<div className="grid justify-center">{alphabet[x]}</div>);
  }
  letterCords.push(<br />);
  for (let j = boardInfo.row - 1; j >= 0; j--) {
    board.push(<div className="grid justify-center">{j + 1}</div>);
    for (let i = 0; i < boardInfo.col; i++) {
        const number = j + i + 2;
        let key = alphabet[i] + nums[j];
        board.push(<Tile key={key} cord={key} num={number} />);
    }
    board.push(<div className="grid justify-center">{j + 1}</div>);
  }
  let styles = `grid grid-rows-${boardInfo.row} grid-cols-${boardInfo.col + 2}`;


  return (
    <div className={styles}>
      {letterCords}
      {board}
      {letterCords}
    </div>
  );
}

export default Board;
