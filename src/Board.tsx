const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26'];

interface BoardProps {
    row: number;
    col: number;
}

const Board = (boardInfo:BoardProps) => {
  let board:any = [];
  for (let j = boardInfo.row - 1; j >= 0; j--) {
    for (let i = 0; i < boardInfo.col; i++) {
        const number = j + i + 2;
        let key = alphabet[j] + nums[i];
        if (number % 2 === 0) {
            board.push(<div className='bg-green-600 hover:bg-opacity-50 cursor-grab' key={key}>{alphabet[i]}{nums[j]}</div>);
        } else {
            board.push(<div className='bg-gray-400 hover:bg-opacity-50 cursor-grab' key={key}>{alphabet[i]}{nums[j]}</div>);
        }
    }
  }
  let styles = `grid grid-cols-${boardInfo.col} grid-rows-${boardInfo.row}`;
  return <div className={styles}>{board}</div>;
};

export default Board;
