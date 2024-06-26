import fs from 'fs';

const data = fs.readFileSync('data.txt', { encoding: 'utf8' });
const sections = data.split('---\n').map(section => section.trim());
const winningNumbers = sections[0].split(',').map(Number);
const boards = sections.slice(1).map(section => 
        section.split('\n'))

// PART 1

const checkBingo = (numbers, board) => {
    const rows = board.map(row => row.split(' ').map(Number));
    const columns = [];

    rows.forEach(() => {
      columns.push([])
    });

    rows.forEach(row => {
      row.forEach((num, index) => {
        columns[index].push(num)
      })
    });

    for (let i = 0; i < rows.length; i++) {
        if (rows[i].every(num => numbers.includes(num))) {
            return true; // Row bingo
        };
    };

    for (let i = 0; i < columns.length; i++) {    
        if (columns[i].every(num => numbers.includes(num))) {
            return true; // Column bingo
        };
    };

    return false;
};


// PART 2

const guaranteedWinBoard = (numbers, boards) => {
    let winningBoards = [];

    boards.forEach((board, index) => {
      if (checkBingo(numbers, board)) {
        winningBoards.push(index + 1);
      }
    });
  
    if (winningBoards.length > 0) {
      return `To continue my journey past the squid, I could pick boards at indices: ${winningBoards.join(", ")}.`;
    } else {
      return 'No luck, the squid was stronger this time.';
    };
};
console.log(guaranteedWinBoard(winningNumbers, boards))

export { checkBingo, guaranteedWinBoard };
